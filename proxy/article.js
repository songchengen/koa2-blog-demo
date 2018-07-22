/* eslint-disable camelcase */
/**
 * @author songchengen
 * @date 2018/7/21
 * @description article proxy
 */

const { Article } = require('./../models');

/**
 * 根据ID查询文章
 * @param id
 * @returns {Query}
 */
exports.getArticleById = id => Article.findById(id);

/**
 * 新建文章
 * @param title 标题
 * @param content 内容
 * @param user_id 用户ID
 * @param tab 标签
 * @returns {Promise}
 */
exports.createArticle = article => Article.create(article);
