import 'source-map-support/register';
import 'tsconfig-paths/register';
import create from 'create';
import schema from 'schemas/job';
import * as avro from 'avsc';

const type = avro.Type.forSchema(schema as any);

for (let i =  0; i < 10; i++) {
  const stream = create();

  stream.to('json.jobs', 32, 'buffer');

  stream.start().then(() =>
    setInterval(() => {
      const message: any = type.random();
      const id = Math.floor(Math.random() * 1000);
      message.job_id = id;
      // A console.log('[PRODUCER]:', 'with id', id);
      const event = {
          value: message,
          key: id
      };

      stream.writeToStream(event);
    }, 10)
  );
}


