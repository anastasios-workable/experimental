import 'source-map-support/register';
import 'tsconfig-paths/register';
import {Job} from 'schemas';
import {KafkaStreams} from 'kafka-streams';
import config from 'config';

const table = new KafkaStreams(config)
  .getKTable('jobs.table', (message: any) => {
    console.log(message);
    return JSON.stringify(message.value.toString('utf8'));
  });

table.start().then(() =>
  setInterval(() => {
    const value = Job.random();
    const key = Math.floor((Math.random() * 10) % 10);
    const msg = {key, value};
    console.log('[PRODUCER]', msg);
    table.writeToTableStream(JSON.stringify(msg));
  }, 5000)
);
