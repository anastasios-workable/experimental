import {KafkaStreams} from 'kafka-streams';
import config from 'config';

export default (topic?: string) => new KafkaStreams(config).getKStream(topic);
