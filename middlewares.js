/**
 * @author songchengen
 * @date 2018/7/21
 * @description middleware
 */

/**
 * 解析参数的中间件
 */
exports.bodyparser = require('koa-bodyparser')();

/**
 * 提供restful接口的中间件
 * @param ctx
 * @param next
 * @returns {Promise<void>}
 */
exports.response = async (ctx, next) => {
  ctx.success = (data, code) => {
    ctx.body = {
      success: true,
      code: code || 0,
      data: data || {},
    };
  };
  ctx.error = (message = 'Unknown exception', code = 1) => {
    ctx.body = {
      success: false,
      message,
      code,
    };
  };
  await next();
};
