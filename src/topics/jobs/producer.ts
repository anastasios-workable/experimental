import 'source-map-support/register';
import 'tsconfig-paths/register';
import create from 'create';
import {Job} from 'schemas';

const stream = create();

stream.to('jobs.table');

stream.start().then(() =>
  setInterval(() => {
    const message = Job.random();
    console.log('[PRODUCER]', message);
    stream.writeToStream(JSON.stringify(message));
  }, 500)
);
