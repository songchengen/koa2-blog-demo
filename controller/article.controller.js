/* eslint-disable no-underscore-dangle */
/**
 * @author songchengen
 * @date 2018/7/21
 * @description article controller
 */

const R = require('ramda');
const { Article } = require('./../proxy');
const { verify } = require('./../util');

router.on('post /api/v1/article', async (ctx) => {
  const article = ctx.request.body;
  const verifyParams = verify.hasPropsOrOther(R.__, ['title', 'content', 'tab'], message => ctx.error(`${message} is required`, 400));
  if (!verifyParams(article)) {
    return;
  }
  const result = await Article.createArticle(article);
  if (result._id) ctx.success({ _id: result._id });
  else ctx.error();
});

router.on('get /api/v1/article', (ctx) => {
  ctx.body = 'hello world';
  const res = { _id: 123 };
  R.ifElse(R.has('_id'), ctx.success, () => ctx.error())(res);
});
