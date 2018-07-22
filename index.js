/**
 * @author songchengen
 * @date 2018/7/20
 * @description main
 */
const Koa = require('koa');
const R = require('ramda');
const EventRouter = require('koa2-event-router');

const middleware = require('./middlewares');


require('./models');

const app = new Koa();

const use = app.use.bind(app);

/**
 * 绑定中间件
 */
R.forEachObjIndexed(use, middleware);

const useEventRouter = R.compose(use, EventRouter);

useEventRouter({
  path: `${__dirname}/controller`,
});


app.listen(3000);
