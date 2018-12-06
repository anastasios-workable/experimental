import * as avro from 'avro-js';
import job from './job';

export const Job = avro.parse(job);
