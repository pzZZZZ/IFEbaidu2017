function Observer(obj){
   var data = {};
   for(var i in obj){
    data[i] = obj[i];
     data.__defineGetter__(i,function(){
        console.log('你访问了'+i)
        return obj[i]
    });
     data.__defineSetter__(i,function(val){
        obj[i] = val;
        console.log('你设置了'+i+'值为'+val)
    })
   this.data =data;
}

}
let app1 = new Observer({
  name: 'youngwind',
  age: 25
});

let app2 = new Observer({
  university: 'bupt',
  major: 'computer'
});
app1.data.name // 你访问了 name
app1.data.age = 100;  // 你设置了 age，新的值为100
app2.data.university // 你访问了 university
app2.data.major = 'science'  // 你设置了 major，新的值为 science

