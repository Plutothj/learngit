// api/demo.js

var dataDemo={
    'code':'1',
    'message':'请求成功',
    'lists':[
        {
            imgSrc:'http://www.ttpcn.com/uploads/2019/0425/6ce2d2448be72ed4a237f9f3242ea4b7.png',
            imgId: '1',
        },
        {
            imgSrc:'http://www.ttpcn.com/uploads/2019/0516/359f0894fd5a18046cf6a8c810e39f1f.png',
            imgId: '2',
        },
        {
            imgSrc:'http://www.ttpcn.com/uploads/2019/0320/d617b4924254a815e1d28acdee7309f7.jpg',
            imgId: '3',
        },
        {
            imgSrc:'http://www.ttpcn.com/uploads/2019/0425/9e2246bf384c9772073ea602eadf7aef.png',
            imgId: '4',
        },
        {
            imgSrc:'http://www.ttpcn.com/uploads/2019/0425/3c662be549e4ff3bd7129db320608b64.png',
            imgId: '5',
        },
    ]
}
exports.getData = function(method,data){
    var backData={
        "code":'1',
        "msg":"请求成功",
        "data":dataDemo
    }
    if(method=='DELETE'){
        backData={
            "code":'999',
            "msg":"不支持DELETE方法"
        }
    }
    return JSON.stringify(backData);
};
