// 引入mockjs
const Mock = require('mockjs');
Mock.mock('/msg', {
    'name': '@name',
    'age|1-100': 100,
    'color': '@color'
});

