import 'source-map-support/register';
import 'tsconfig-paths/register';
import create from 'create';

const stream = create('jobs');

stream
  .tap(message => console.log(message))
  .map(({value}: any) => JSON.parse(value.toString('utf8')))
  .forEach((job: any) => console.log('[CONSUMER]', 'received', job));

stream.start();
