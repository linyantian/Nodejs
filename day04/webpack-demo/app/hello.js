/**
 * Created by web-01 on 2017/11/15.
 */
var config = require('./config.json');
module.exports = function () {
    var hello= document.createElement('div');
    hello.textContent = config.helloText;
    return hello;
};
