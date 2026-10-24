// 这是一个用于快速开始的简化示例配置文件
// 一些不常用的功能在此处被省略/注释掉了
// 如需查看完整功能示例，请参考 `uptime.config.full.ts`

// 请勿修改此行
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // 状态页的标题
  title: "AWAurora233's 状态监控",
  // 显示在状态页头部的链接，可设置 `highlight` 为 `true` 以高亮显示
  links: [
    { link: 'https://github.com/1312333', label: 'GitHub' },
    { link: 'https://blog.xiaoyuer.us.ci', label: 'Blog' },
    { link: 'mailto:xiaoyuer2333@outlook.com', label: 'Email Me', highlight: true },
  ],
}

const workerConfig: WorkerConfig = {
  // 在此定义所有监控项
  monitors: [
    // HTTP 监控示例
    {
      // `id` 必须唯一，若 `id` 保持不变，历史记录会被保留
      id: 'blog_1',
      // `name` 用于状态页和通知消息中
      name: '博客(主站)',
      // `method` 应为合法的 HTTP 方法
      method: 'GET',
      // `target` 为合法的 URL
      target: 'https://blog.xiaoyuer.us.ci',
      // [可选] `tooltip` 仅在状态页中用于显示提示信息
      tooltip: 'This is a tooltip for this monitor',
      // [可选] `statusPageLink` 仅在状态页中用于生成可点击链接
      statusPageLink: 'https://blog.xiaoyuer.us.ci',
      // [可选] `expectedCodes` 是可接受的 HTTP 响应码数组，若未指定，默认为 2xx
      expectedCodes: [200],
      // [可选] `timeout` 超时时间（毫秒），若未指定，默认为 10000
      timeout: 10000,
      // [可选] 需要发送的请求头
      headers: {
        'User-Agent': 'Uptimeflare',
        Authorization: 'Bearer YOUR_TOKEN_HERE',
      },
      // [可选] 需要发送的请求体（需要 POST/PUT/PATCH 方法）
      // body: 'Hello, world!',
      // [可选] 若指定，响应中必须包含该关键词才视为正常
      // responseKeyword: 'success',
      // [可选] 若指定，响应中不得包含该关键词才视为正常
      // responseForbiddenKeyword: 'bad gateway',
      // [可选] 若指定，将调用检查代理来检查该监控项，主要用于特定地区的检查
      // 设置此值前请参考文档 https://github.com/lyc8503/UptimeFlare/wiki/Check-proxy-setup
      // 目前支持 `worker://`、`globalping://` 和 `http(s)://` 代理
      // checkProxy: 'worker://weur',
      // [可选] 若为 true，当指定的代理不可用时将回退到本地检查
      // checkProxyFallback: true,
    },
    {
      id: 'blog_2',
      name: '博客(备用)',
      method: 'GET',
      target: 'https://www.free-blog-xiaoyuer.ccwu.cc',
      tooltip: 'This is a tooltip for this monitor',
      statusPageLink: 'https://www.free-blog-xiaoyuer.ccwu.cc',
    },
    {
      id: 'home_monitor',
      name: '个人主页',
      method: 'GET',
      target: 'https://www.xiaoyuer.us.ci',
      tooltip: 'This is a tooltip for this monitor',
      statusPageLink: 'https://www.xiaoyuer.us.ci',
    },
    {
      id: 'meting_api',
      name: 'Meting API',
      method: 'GET',
      target: 'https://meting.xiaoyuer.us.ci',
      tooltip: 'This is a tooltip for this monitor',
      statusPageLink: 'https://meting.xiaoyuer.us.ci',
    },
    // TCP 监控示例
//    {
//      id: 'test_tcp_monitor',
//      name: 'Example TCP Monitor',
//      // TCP 监控的 `method` 应为 `TCP_PING`
//      method: 'TCP_PING',
//      // TCP 监控的 `target` 应为 `host:port` 格式
//      target: '1.2.3.4:22',
//      tooltip: 'My production server SSH',
//      statusPageLink: 'https://example.com',
//      timeout: 5000,
//    },
  ],
  // [可选] 通知设置
  notification: {
    // [可选] 通知 Webhook 设置，若未指定则不会发送任何通知
    // 更多信息请参考 Wiki：https://github.com/lyc8503/UptimeFlare/wiki/Setup-notification
    webhook: {
      // [必填] webhook URL（示例：Telegram Bot API）
      url: 'https://api.telegram.org/bot123456:ABCDEF/sendMessage',
      // [可选] HTTP 方法，对于 payloadType=param 默认为 'GET'，否则默认为 'POST'
      // method: 'POST',
      // [可选] 需要发送的请求头
      // headers: {
      //   foo: 'bar',
      // },
      // [必填] 指定如何编码负载
      // 应为 'param'、'json' 或 'x-www-form-urlencoded' 之一
      // 'param'：将 url 编码后的负载追加到 URL 查询参数中
      // 'json'：以 POST json 负载作为请求体，并将 content-type 请求头设置为 'application/json'
      // 'x-www-form-urlencoded'：以 POST url 编码负载作为请求体，并将 content-type 请求头设置为 'x-www-form-urlencoded'
      payloadType: 'x-www-form-urlencoded',
      // [必填] 需要发送的负载
      // $MSG 将被替换为人类可读的通知消息
      payload: {
        chat_id: 12345678,
        text: '$MSG',
      },
      // [可选] 调用此 webhook 的超时时间（毫秒），默认为 5000
      timeout: 10000,
    },
    // [可选] 通知消息中使用的时区，默认为 "Etc/GMT"
    timeZone: 'Asia/Shanghai',
    // [可选] 发送通知前的宽限期（分钟）
    // 仅当监控项在初次失败后连续 N 次检测均为 down 时才会发送通知
    // 若未指定，将立即发送通知
    gracePeriod: 5,
  },
}

// 你可以在此定义多个维护计划
// 维护期间，状态页上会显示一条告警
// 同时，相关的宕机通知会被跳过（如果有）
// 当然，如果你不需要此功能，可以留空

const maintenances: MaintenanceConfig[] = []

// 请勿修改此行
export { maintenances, pageConfig, workerConfig }
