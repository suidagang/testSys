var  Mock = require('mockjs')

var appData = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
});
var infoData = Mock.mock({
    'list|5-10':[{
        'age|20-30':30,
        'name':'@cname',
        'type':''
    }]
})
module.exports.appData = appData;
module.exports.infoData = infoData;