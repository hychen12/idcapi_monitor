const Rx = require('rxjs/Rx');
const _ = require('lodash');
const http = require('http');

const targets = ['http://api.xxx.com.tw/services','http://api.xxx.com.tw/services/ac/getAccount/0','http://api.xxx.com.tw/services/hrManagement?wsdl','http://api.xxx.com.tw/services/hrSalary?wsdl'];

exports.monitor = (event, context, callback) => {

  let result = Rx.Observable.create(()=>{

  });
};

let observable = Rx.Observable.from(targets);
let checker = (target) => {
  let output = Rx.Observable.create((observer)=>{
    target.subscribe
  });

  http.request({path:target},(res)=>{
    return res.statusCode;
  });
};
