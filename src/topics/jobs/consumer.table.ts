import 'source-map-support/register';
import 'tsconfig-paths/register';
import {KafkaStreams} from 'kafka-streams';
import config from 'config';

const table = new KafkaStreams(config).getKTable('jobs.table', (message: any) => ({
  key: message.key,
  value: JSON.parse(message.value.toString('utf8'))
}));

table.consumeUntilCount(10, () => {
  table.getTable();

  table.forEach(row => {
    console.log(row);
  });

  table.replay();
});

table.atThroughput(50, () => console.log('consumed 50 messages.'));

table.start().then(() => console.log('[TABLE]', 'initialized'));
