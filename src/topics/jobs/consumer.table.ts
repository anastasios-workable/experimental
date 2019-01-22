// import 'source-map-support/register';
// import 'tsconfig-paths/register';
// import {KafkaStreams} from 'kafka-streams';
// import config from 'config';

// const table = new KafkaStreams(config).getKTable('jobs', (message: any) => {
//   const job = JSON.parse(message.value.toString('utf8'));
//   return {
//     key: job.id,
//     value: job
//   };
// });

// table.to('jobs.table');

// table.atThroughput(10, () => {
//   console.log('fetched 10 messages.');

//   (table.getTable() as Promise<any>).then(_ => console.log(_));
//   table.replay();
// });

// table.drain();

// table.start().then(() => console.log('[TABLE]', 'initialized'));
