/* eslint-disable no-underscore-dangle */
/**
 * @author songchengen
 * @date 2018/7/21
 * @description verify
 */

const R = require('ramda');

/**
 * hasOthers ？ Object.keys(obj) ⊇ props : Object.keys(obj) = props
 * @param obj 目标对象
 * @param props 属性列表
 * @param hasOthers 允许其他属性
 * @returns {boolean}
 */
const hasProps = (obj, props, hasOthers = true, callback = function () {}) => {
  let index = props.length - 1;
  while (index !== 0) {
    // 没有指定属性时返回false
    if (!obj[props[index]]) {
      callback(props[index]);
      return false;
    }
    index -= 1;
  }

  // 允许其他属性存在
  if (hasOthers) return true;
  return Object.keys(obj).length === props.length;
};

/**
 * Object.keys(obj) = props
 * @param obj
 * @param props
 * @param callback
 * @returns {boolean}
 */
exports.hasPropsAndOnly = R.curry((obj, props, callback) => hasProps(obj, props, false, callback));

/**
 * Object.keys(obj) ⊇ props
 * @param obj
 * @param props
 * @param callback
 * @returns {boolean}
 */
exports.hasPropsOrOther = R.curry((obj, props, callback) => hasProps(obj, props, true, callback));

/**
 * Object.keys(obj) ⊆ props
 * @param obj
 * @param props
 * @param callback
 * @returns {boolean}
 */
const beIncludedProps = (obj, props, callback) => {
  const keys = Object.keys(obj);
  const index = keys.length - 1;
  if (index > props.length - 1) {
    callback();
    return false;
  }

  const has = R.contains(R.__, props);
  while (index !== 0) {
    if (!has(keys[index])) {
      callback(keys[index]);
      return false;
    }
  }
  return true;
};
exports.beIncludedProps = R.curry(beIncludedProps);
