export const sentryTaskIngestProcessor = {
  columns: [
    {
      name: 'metric',
    },
    {
      name: 'description',
    },
    {
      name: 'keyword',
    },
    {
      name: 'logs',
    },
  ],
  rows: [
    {
      metric: 'process_message',
      description: '从 kafka 消费一条原始message后预处理耗时',
      keyword:
        'batching_kafka_consumer.py -> self.worker.process_message(msg) ',
      logs: `process_message 22.907733917236328 None {'ingest_consumer_types': 'attachments,events,transactions', 'topics': 'ingest-attachments,ingest-events,ingest-transactions', 'group_id': 'ingest-consumer'} 1.0`,
    },
    {
      metric: 'process_message.normalized',
      description: '本批次信息的平均处理耗时',
      keyword:
        'batching_kafka_consumer.py -> self.__batch_processing_time_ms / self.__batch_messages_processed_count',
      logs: `process_message.normalized 22.907733917236328 None {'ingest_consumer_types': 'attachments,events,transactions', 'topics': 'ingest-attachments,ingest-events,ingest-transactions', 'group_id': 'ingest-consumer'} 1.0`,
    },
    {
      metric: 'ingest_consumer.prepare_messages',
      description:
        '本批次消息的预处理耗时，主要提取关键字段、将消息写入不同分类数组',
      keyword: 'ingest_consumer.py',
      logs: ` 0.0018982829933520406 None {'ingest_consumer_types': 'attachments,events,transactions', 'result': 'success'} 1.0`,
    },
    {
      metric: 'ingest_consumer.fetch_projects',
      description: '批量获取项目信息耗时',
      keyword:
        'ingest_consumer.py -> Project.objects.get_many_from_cache(projects_to_fetch)',
      logs: `ingest_consumer.fetch_projects 0.09640412498265505 None {'ingest_consumer_types': 'attachments,events,transactions', 'result': 'success'} 1.0`,
    },
    {
      metric: 'src/sentry/tasks/store.py',
      description: '预处理 event 耗时',
      keyword: '_do_preprocess_event',
      logs: `jobs.duration 0.265293536009267 sentry.tasks.store.preprocess_event {'ingest_consumer_types': 'attachments,events,transactions', 'result': 'success'} 1.0`,
    },
    {
      metric: 'ingest_consumer.process_event',
      description: '处理 event 耗时，执行一些过滤和反序列化操作',
      keyword:
        'ingest_consumer.py -> _load_event + _store_event + dispatch_task',
      logs: `ingest_consumer.process_event 0.31716633701580577 None {'ingest_consumer_types': 'attachments,events,transactions', 'result': 'success'} 1.0`,
    },
    {
      metric: 'ingest_consumer.process_other_messages_batch.normalized',
      description: '处理本批次 message 的平均耗时',
      keyword:
        'ingest_consumer.py -> (time.monotonic() - other_messages_flush_start) / len(other_messages)',
      logs: `ingest_consumer.process_other_messages_batch.normalized 0.31879560399102047 None {'ingest_consumer_types': 'attachments,events,transactions'} 1.0`,
    },
    {
      metric: 'ingest_consumer.process_other_messages_batch',
      description: '处理本批次 message 的总耗时',
      keyword:
        'ingest_consumer.py -> (time.monotonic() - other_messages_flush_start) / len(other_messages)',
      logs: `ingest_consumer.process_other_messages_batch 0.31883916299557313 None {'ingest_consumer_types': 'attachments,events,transactions', 'result': 'success'} 1.0`,
    },
    {
      metric: 'ingest_consumer.flush_batch',
      description: 'worker 处理本批次 message 的总耗时',
      keyword: 'ingest_consumer.py -> _flush_batch',
      logs: `ingest_consumer.flush_batch 0.4187920889817178 None {'ingest_consumer_types': 'attachments,events,transactions', 'result': 'success'} 1.0`,
    },
    {
      metric: 'batching_consumer.batch.flush',
      description:
        'consumer 处理本批次信息总耗时，理论上包含 ingest_consumer.flush_batch',
      keyword:
        'batching_kafka_consumer.py -> self.worker.flush_batch(self.__batch_results)',
      logs: `batching_consumer.batch.flush 424.53718185424805 None {'ingest_consumer_types': 'attachments,events,transactions', 'topics': 'ingest-attachments,ingest-events,ingest-transactions', 'group_id': 'ingest-consumer'} 1.0`,
    },
    {
      metric: 'batching_consumer.batch.flush.normalized',
      description: 'consumer 处理本批次信息平均耗时',
      keyword:
        'batching_kafka_consumer.py -> flush_duration / batch_results_length',
      logs: `batching_consumer.batch.flush.normalized 424.53718185424805 None {'ingest_consumer_types': 'attachments,events,transactions', 'topics': 'ingest-attachments,ingest-events,ingest-transactions', 'group_id': 'ingest-consumer'} 1.0`,
    },
  ],
}
