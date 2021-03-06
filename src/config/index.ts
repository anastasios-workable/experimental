import {KafkaStreamsConfig} from 'kafka-streams';

export default {
  noptions: {
    'metadata.broker.list': 'localhost:9092',
    'group.id': 'stress-test',
    'client.id': 'stress-test',
    event_cb: true,
    debug: 'all',
    log_level: 0,

    'dr_cb': true,

    'compression.codec': 'snappy',
    'api.version.request': true,

    'socket.keepalive.enable': true,
    'socket.blocking.max.ms': 100,

    'enable.auto.commit': false,
    'auto.commit.interval.ms': 100,

    'heartbeat.interval.ms': 250,
    'retry.backoff.ms': 250,

    'fetch.min.bytes': 100,
    'fetch.message.max.bytes': 2 * 1024 * 1024,
    'queued.min.messages': 100,

    'fetch.error.backoff.ms': 100,
    'queued.max.messages.kbytes': 50,

    'fetch.wait.max.ms': 1000,
    'queue.buffering.max.ms': 1000,

    'batch.num.messages': 1000
  },
  tconf: {
    'auto.offset.reset': 'earliest',
    'request.required.acks': 1
  },
  batchOptions: {
    batchSize: 50,
    commitEveryNBatch: 1,
    concurrency: 50,
    commitSync: false,
    noBatchCommits: false
  }
} as KafkaStreamsConfig;
