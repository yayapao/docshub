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

export const sentryWorkerProcessor = {
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
      metric: 'tasks.store.process_event.stacktraces',
      description: '处理 event 内的 stacktrace 耗时',
      keyword: 'store.py -> process_stacktraces(data) ',
      logs: `tasks.store.process_event.stacktraces 0.004715446004411206 None {'from_symbolicate': True, 'result': 'success'}`,
    },
    {
      metric: 'tasks.store.process_event.preprocessors',
      description:
        '各个 event 处理器处理耗时，比如 browsers，device 等内置处理器，主要用于提取 tags',
      keyword: 'store.py -> processor(data)',
      logs: `tasks.store.process_event.preprocessors 7.031019777059555e-06 None {'plugin': 'browsers', 'from_symbolicate': True, 'result': 'success'}`,
    },
    {
      metric: 'sentry.tasks.store.save_event',
      description: '从提交 save_event 任务到实际执行的延迟',
      keyword: 'store.py -> celery.py -> class SentryTask',
      logs: ` jobs.delay 0.008466314990073442 sentry.tasks.store.save_event {'result': 'success'}`,
    },
    {
      metric: 'eventstore.create_event',
      description:
        '将event写入 postgres 的耗时并返回event实例耗时，通过 @metrics.wraps 上报',
      keyword: 'event_manager.py -> _get_event_instance()',
      logs: `eventstore 4.8995978431776166e-05 create_event {'event_type': 'default', 'backend': 'sentry.eventstore.snuba.SnubaEventStorage', 'result': 'success'}`,
    },
    {
      metric: 'event_manager.load_grouping_config',
      description: '拉取项目所有分组配置信息耗时',
      keyword: 'event_manager.py -> get_grouping_config_dict_for_event_data',
      logs: `event_manager.load_grouping_config 1.3292999938130379e-05 None {'event_type': 'default', 'result': 'success'}`,
    },
    {
      metric: 'event_manager.filter_attachments_for_group',
      description: '根据项目/组织配置，对事件的附件进行过滤，并记录 outcomes',
      keyword: 'event_manager.py -> filter_attachments_for_group()',
      logs: `event_manager.filter_attachments_for_group 4.99398447573185e-06 None {'event_type': 'default', 'result': 'success'}`,
    },
    {
      metric: 'event_manager.save_attachments',
      description: '将缓存事件附件写入文件系统的耗时',
      keyword: 'event_manager.py -> save() -> save_attachments()',
      logs: `event_manager.save_attachments 3.0170194804668427e-06 None {'event_type': 'default', 'result': 'success'}`,
    },
    {
      metric: 'event_manager.save',
      description:
        '将信息（environment、release）写入 postgres、将事件写入 kafka（供 snuba消费） 的耗时，这个过程会有异步任务',
      keyword: 'ingest_consumer.py -> save()',
      logs: `event_manager.save 0.2249258590163663 None {'event_type': 'default', 'result': 'success'}`,
    },
    {
      metric: 'tasks.store.do_save_event.event_manager.save',
      description: '执行 save 任务并重新获取数据后，写入缓存耗时',
      keyword: 'store.py ->  manager.save()',
      logs: `tasks.store.do_save_event.event_manager.save 0.2285031029896345 None {'event_type': 'default', 'result': 'success'}`,
    },
    {
      metric: 'events.time-to-process',
      description: '从事件被 ingest 消费到处理完毕耗时',
      keyword:
        'start_time=float(message["start_time"]) -> _do_save_event() -> time() - start_time',
      logs: `events.time-to-process 1.947455883026123 native None`,
    },
    {
      metric: 'jobs.duration.sentry.tasks.store.save_event',
      description: '保存事件任务执行耗时',
      keyword: 'store.py -> save_event()',
      logs: `jobs.duration 0.26822201898903586 sentry.tasks.store.save_event {'result': 'success'}`,
    },
  ],
}
