import Router from '@koa/router'

const router = new Router()

router.get('/', (ctx) => {
  ctx.body = `<html>
    <body>
      <h1>JobPilot</h1>
      <p>JobPilot 最好的招聘全链路服务AI平台</p>
      <a href="/hello">Hello</a>
    </body>
  </html>`
})

router.get('/hello', (ctx) => {
  ctx.body = {
    code: 0,
    message: 'success',
    data: 'Hello World'
  }
})

export default router