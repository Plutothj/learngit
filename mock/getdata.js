var mongodb=require('mongodb').MongoClient;
var db_str="mongodb://localhost:27017/zz1901"
var express = require('express');
var app = express();

app.get('/cart',(req,res)=>{
    //     console.log(getData())
    //     res.send(getData())
        const method=req.query.method
        const datas=req.query.datas
    
      
        mongodb.connect(db_str,(err,database)=>{
            database.collection('info',(err,coll)=>{
            coll.find({}).toArray((err,data)=>{
                // callback(data)
                var backData={
                    "code":'1',
                    "msg":"请求成功",
                    "data":data,
                    "datas":datas
                }
                if(method=='DELETE'){
                    backData={
                        "code":'999',
                        "msg":"不支持DELETE方法"
                    }
                }
                res.json(backData)
                database.close()
                }
            )
            })
        })
    
    })
    module.exports = app;