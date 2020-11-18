import moment from 'moment';

export const PROVIDERS_TOKEN = {
  COLLECTION: 'COLLECTION',
  REDIS: 'REDIS',
  RABBIT_MQ: 'RABBIT_MQ',
  TASK_REPOSITORY: 'TASK_REPOSITORY',
  MONGOOSE: 'MONGOOSE',
  SEQUELIZE: 'SEQUELIZE',
  LOGGER: 'LOGGER',
  REDLOCK: 'REDLOCK',
};

export const QUEUE = {
  DEVICE_ONLINE: 'device_online',
  POSITION_DATA: 'position_data',
  DEVICE_DATA: 'device_data',
  REQUEST_LOG: 'lv1_request_log',
  RECEIVE_DEVICE: 'lv1_receive_device',
  RECEIVE_POSITION: 'lv1_receive_position',
  ALARM_MONITOR: 'lv1_alarm_monitor',
  ALARM_FIRE: 'lv1_alarm_fire',
  REAL_ALARM:'lv2_real_alarm',
  STATISTICS_BASIC_EVENT: 'statistics_basic_event',
  STATISTICS_ELECTRONIC: 'statistics_electronic',
  STATISTICS_ARTIFICIAL: 'statistics_artificial',
  STATISTICS_DETECT_REPORT: 'statistics_detect_report',
  OFFLINE: 'lv2_offline',
  NOTICE: 'notice',
  CACHECLEAN: 'cache_clean',
  MONITOR: 'monitor_rule_device'
};

export const EXCHANGE = {
  DEVICE_DATA_EXCHANGE: 'lv2_device_data',
  BASIC_EVENT: 'lv2_basic_event',
  Lv2_CACHE_CLEAN: 'lv2_cache_clean',
  lv2_HANDLE_EVENT: 'lv2_handle_event'
};

export type BasicEventRoutingKey = 'position' | 'device' | 'real_fire' | 'offline' | 'record';

export const ROUTING_KEY = {
  REQUEST_LOG: 'lv1.key.request.log.*',
  RECEIVE_DEVICE: 'receive.device',
  RECEIVE_POSITION: 'receive.position',
};
const CACHE_KEY_PREFIX = 'event:';
export const CACHE_KEY = {
  SUB_TABLE: `${CACHE_KEY_PREFIX}sub-table`,
  DeviceRule: (modelId, pid:any = '*', deviceId:any = '*') =>
    `${CACHE_KEY_PREFIX}device-rules:${modelId}:${pid}:${deviceId}`,
  ModelRule: (modelId: number) =>
    `${CACHE_KEY_PREFIX}model-rules:${modelId}`,
  ModelGroupRules: (pid:any = '*', groupId:any = '*', deviceId: any = '*') =>
    `${CACHE_KEY_PREFIX}model-group:${groupId}:${pid}:${deviceId}`,
  ProjectGroupRules: (groupId: number) =>
    `${CACHE_KEY_PREFIX}group-rules:${groupId}`,
  RealRule:`${CACHE_KEY_PREFIX}real-rule`,
  OfflineEvent: (id) => `${CACHE_KEY_PREFIX}offline:${id}`,
  SuperviseStrategy: `${CACHE_KEY_PREFIX}supervise-strategy`,   // 督察单策略
  ModelInfo: (mid: number) => `${CACHE_KEY_PREFIX}:model-info:${mid}`,
  TestPlan: (pid) => `${CACHE_KEY_PREFIX}test-plan:${pid}`,
};

export const MONGO_COLL = {
  BasicEventLog: (pid) => `sub_basic_event_log_${pid}`,
  NoticeLog: () => `sub_notice_log`,
  SendMessageLog: () => `sub_lv2_sendmessage_log`,
};

export const REAL_ALARM_TAG = {
  ThreeFire: 'three_fire', // 同一点位三次连续报警
  TwoInZone: 'two_in_zone', //
  WaterFire: 'water_fire',
  HumanFire: 'human_fire',
  HumanWater: 'human_water',
  TwoHuman: 'two_human',
  ActionHuman: 'action_human'
}

export const REAL_ALARM_RULE = {
  water_flow: {
    tag: 'water_flow',
    values: [13, 14, 19, 26, 42]
  },
  // 手报
  hand: {
    tag: 'hand',
    values: [23]
  },
  // 火警探测器
  fire_detector: {
    tag: 'fire_detector',
    values: [23]
  },
  // 消火栓
  fire_hydrant: {
    tag: 'fire_hydrant',
    values: [13, 14, 26, 42]
  }
}
// 延时队列名
export const DelayQueueTopic = {
    Electronic: 'electronic',
    Offline: 'offline',
}
