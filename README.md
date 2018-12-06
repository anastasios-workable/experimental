docker run --rm --net=host -e SAMPLEDATA=0 -e RUNNING_SAMPLEDATA=0 -e RUNTESTS=0 landoop/fast-data-dev

docker run --rm -it --net=host landoop/fast-data-dev kafka-topics --zookeeper 127.0.0.1:2181 --topic jobs --replication-factor 1 --partitions 1 --create

curl -vs --stderr - -XPOST -i -H "Content-Type: application/vnd.schemaregistry.v1+json" --data '{"schema":"{\"type\":\"record\",\"name\":\"job\",\"doc\":\"job schema\",\"namespace\":\"com.workable\",\"fields\":[{\"name\":\"id\",\"type\":\"string\"},{\"name\":\"title\",\"type\":\"string\"},{\"name\":\"description\",\"type\":\"string\"}]}"}' http://localhost:8081/subjects/jobs/versions
