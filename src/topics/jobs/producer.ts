import 'source-map-support/register';
import 'tsconfig-paths/register';
import create from 'create';

(async () => {
  const stream = create();
  await stream.to('jobs');
  await stream.start();

  const id = 'banana'; // Or your favorite uuid.

  stream.writeToStream({
    key: id,
    value: JSON.stringify({
      id,
      type: 'job',
      attributes: {
        id,
        title: 'Banana Job',
        shortcode: 'BANANA',
        remote: false,
        type: 'full',
        description: '<b>Banana</b> job description',
        benefits: '<b>Banana</b> job benefits',
        requirements: '<b>Banana</b> job requirements',
        location: {
          country: 'Banana Country',
          city: 'Banana City',
          region: 'BA'
        },
        department: 'Agriculture',
        published: Date.now()
      }
    })
  });
})();
