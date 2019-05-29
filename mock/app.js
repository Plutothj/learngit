// app.js
var mongodb=require('mongodb').MongoClient;
var db_str="mongodb://localhost:27017/hello"
var express = require('express');
var path = require('path');

var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index =require('./routes/index')
var app = express();
/*引入api*/
var api = require('./config/api');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//配置请求
app.get('/', function(req, res){
    res.send('hello world');
});
app.get('/api/*', api.get);
app.post('/api/*', api.post);

// app.all('*', function(req, res, next){
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
//     res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//     res.sendStatus(200);/*让options请求快速返回*/
// });
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization,Origin,Accept,X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('X-Powered-By', ' 3.2.1');
    res.header('Content-Type', 'application/json;charset=utf-8');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});
app.get('/cart',(req,res)=>{
    // console.log(getData())
    // res.send(getData())
    const method=req.query.method
    const datas=req.query.datas

    res.header("Access-Control-Allow-Origin", "*");
    mongodb.connect(db_str,(err,database)=>{
        database.collection('hi',(err,coll)=>{
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
            console.log(data)
            res.json(backData)
            database.close()
            }
        )
        })
    })

})

app.post('/order',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    const data=req.body
    mongodb.connect(db_str,(err,database)=>{
            database.collection('infos',(err,coll)=>{
                coll.insert(data,()=>{
                     res.json({code:200,msg:'报名成功'})
                     database.close()
                  })       
            })
        })
    })

    app.get('/newlist',(req,res)=>{
        res.header("Access-Control-Allow-Origin", "*");
         mongodb.connect(db_str,(err,database)=>{
                database.collection('infos',(err,coll)=>{
                    coll.find({}).toArray((err,data)=>{
                        // callback(data)
                        var backData={
                            "code":'1',
                            "msg":"请求成功",
                            "data":data,
                        }
                       console.log(data)
                        res.json(backData)
                        database.close()
                        }
                    )     
                })
            })
        })
        app.get('/homelist',(req,res)=>{
            res.header("Access-Control-Allow-Origin", "*");
             mongodb.connect(db_str,(err,database)=>{
                    database.collection('homelist',(err,coll)=>{
                        coll.find({}).toArray((err,data)=>{
                            // callback(data)
                            var backData={
                                "code":'1',
                                "msg":"请求成功",
                                "data":data,
                            }
                            res.json(backData)
                            database.close()
                            }
                        )     
                    })
                })
            })

            app.post('/addlist',(req,res)=>{
                res.header("Access-Control-Allow-Origin", "*");
                const data=req.body
                
                mongodb.connect(db_str,(err,database)=>{
                        database.collection('homelist',(err,coll)=>{
                            coll.insert(data,()=>{
                                 res.json({code:200,msg:'添加成功'})
                                 database.close()
                              })       
                        })
                    })
                }) 

                app.get('/dellist',(req,res)=>{
                    const data=req.query
                    console.log(req.query)
                    res.header("Access-Control-Allow-Origin", "*");
                     mongodb.connect(db_str,(err,database)=>{
                            database.collection('homelist',(err,coll)=>{
                                coll.remove(data,()=>{
                                    res.json({code:1,msg:'删除成功'})
                                    database.close()
                                })
                            })
                        })
              })   
              app.get('/delnewlist',(req,res)=>{
                const data=req.query
                res.header("Access-Control-Allow-Origin", "*");
                 mongodb.connect(db_str,(err,database)=>{
                        database.collection('infos',(err,coll)=>{
                            coll.remove(data,()=>{
                                res.json({code:1,msg:'删除成功'})
                                database.close()
                            })
                        })
                    })
                }) 
                app.post('/changelist',(req,res)=>{
                    res.header("Access-Control-Allow-Origin", "*");
                    const data=req.body
                    console.log(data)
                    mongodb.connect(db_str,(err,database)=>{
                            database.collection('homelist',(err,coll)=>{
                                    coll.update({'title':data.title},{$set:{'price':data.price,'date':data.date}},()=>{
                                    res.json({code:1,msg:'更改成功'})
                                })
                            })
                        })
                    })   

module.exports = app;