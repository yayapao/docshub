export const sentryTaskIngestProcessor = {
  columns: [
    {
      name: 'filePath',
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
      filePath: 'batching_kafka_consumer.py',
      description: '处理原始message总耗时',
      keyword: 'self.worker.process_message(msg)',
      logs: `process_message 22.907733917236328 None {'ingest_consumer_types': 'attachments,events,transactions', 'topics': 'ingest-attachments,ingest-events,ingest-transactions', 'group_id': 'ingest-consumer'} 1.0`,
    },
    {
      filePath: 'batching_kafka_consumer.py',
      description: '本批次信息的平均处理耗时',
      keyword:
        'self.__batch_processing_time_ms / self.__batch_messages_processed_count',
      logs: `process_message.normalized 22.907733917236328 None {'ingest_consumer_types': 'attachments,events,transactions', 'topics': 'ingest-attachments,ingest-events,ingest-transactions', 'group_id': 'ingest-consumer'} 1.0`,
    },
    {
      filePath: 'src/sentry/ingest/ingest_consumer.py',
      description:
        '本批次消息的预处理耗时，主要提取关键字段、将消息写入不同分类数组',
      keyword: '',
      logs: `ingest_consumer.prepare_messages 0.0018982829933520406 None {'ingest_consumer_types': 'attachments,events,transactions', 'result': 'success'} 1.0`,
    },
    {
      filePath: 'src/sentry/ingest/ingest_consumer.py',
      description: '从内存中获取项目信息耗时',
      keyword: '',
      logs: `ingest_consumer.fetch_projects 0.09640412498265505 None {'ingest_consumer_types': 'attachments,events,transactions', 'result': 'success'} 1.0`,
    },
    {
      logs: `tasks.store.preprocess_event.organization.get_from_cache 0.006683279003482312 None {'ingest_consumer_types': 'attachments,events,transactions', 'result': 'success'} 1.0`,
    },
    {
      logs: `jobs.delay 0.18399880902143195 sentry.tasks.store.symbolicate_event {'ingest_consumer_types': 'attachments,events,transactions', 'result': 'success'} 1.0`,
    },
    {
      logs: `jobs.memory_change 0 sentry.tasks.store.preprocess_event {'ingest_consumer_types': 'attachments,events,transactions'} 1.0`,
    },
    {
      logs: `jobs.duration 0.265293536009267 sentry.tasks.store.preprocess_event {'ingest_consumer_types': 'attachments,events,transactions', 'result': 'success'} 1.0`,
    },
    {
      logs: `ingest_consumer.process_event 0.31716633701580577 None {'ingest_consumer_types': 'attachments,events,transactions', 'result': 'success'} 1.0`,
    },
    {
      logs: `ingest_consumer.process_other_messages_batch.normalized 0.31879560399102047 None {'ingest_consumer_types': 'attachments,events,transactions'} 1.0`,
    },
    {
      logs: `ingest_consumer.process_other_messages_batch 0.31883916299557313 None {'ingest_consumer_types': 'attachments,events,transactions', 'result': 'success'} 1.0`,
    },
    {
      logs: `ingest_consumer.flush_batch 0.4187920889817178 None {'ingest_consumer_types': 'attachments,events,transactions', 'result': 'success'} 1.0`,
    },
    {
      logs: `batching_consumer.batch.flush 424.53718185424805 None {'ingest_consumer_types': 'attachments,events,transactions', 'topics': 'ingest-attachments,ingest-events,ingest-transactions', 'group_id': 'ingest-consumer'} 1.0`,
    },
    {
      logs: `batching_consumer.batch.flush.normalized 424.53718185424805 None {'ingest_consumer_types': 'attachments,events,transactions', 'topics': 'ingest-attachments,ingest-events,ingest-transactions', 'group_id': 'ingest-consumer'} 1.0`,
    },
  ],
}
