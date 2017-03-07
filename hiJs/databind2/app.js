function Observer(data){
  this.data = data;
  this.makeObserver(data); 
}
Observer.prototype.setgetData = function(key,val){
  //设置getter and setter
  Object.defineProperty(this.data,key,{
       enumerable: true,
    configurable: true,
    get:function(){
      console.log('你访问了'+key);
      return val;
    },
    set:function(newvalue){
      console.log('你设置了'+key);
       val = newvalue;
      if(typeof newvalue === 'object'){
        console.log('新的'+key+'=');
        console.log(newvalue)
          new Observer(val);
      }
    }
  })
}
Observer.prototype.makeObserver = function(obj){
  //深度遍历
  var val;
  for(var item in obj){
    if(obj.hasOwnProperty(item)){
      val = obj[item];
      if(typeof val ==='object'){
        new Observer(val);
      }
    }
    this.setgetData(item,val)
  }
}



 let app1 = new Observer({
         name: 'youngwind',
         age: 25
 });

 app1.data.name = {
         lastName: 'liang',
         firstName: 'shaofeng'
 };

 app1.data.name.lastName;
 // 这里还需要输出 '你访问了 lastName '
 app1.data.name.firstName = 'lalala';
 // 这里还需要输出 '你设置了firstName, 新的值为 lalala'


