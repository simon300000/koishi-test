import { App } from 'koishi'

// 创建一个 Koishi 应用
const app = new App()

// 安装 onebot 适配器插件，并配置机器人
app.plugin('adapter-onebot', {
  protocol: 'ws',
  selfId: '123456789',
  endpoint: 'ws://127.0.0.1:6700',
})

// 安装 echo 插件
app.plugin('echo')

// 启动应用
app.start()
