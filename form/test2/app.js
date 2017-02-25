var bt = document.getElementsByTagName('button');
var text =document.getElementsByTagName('input');
var  title = document.getElementsByClassName('title')[0];
text[0].onfocus = function(){
  title.style.display = 'block';
  title.style.color = 'gray';
  title.innerHTML = '必填长度为4-16个字符';
  console.log('focus')
}
text[0].onblur = function(){
   var reg = /[^\x00-\xff]/g;
    var strLenght =text[0].value.replace(reg,"aa").length;
    if(strLenght>=4&strLenght<=16){
        title.style.display = 'block';
        title.style.color = 'lightgreen';
        title.innerHTML = '匹配成功';
        console.log('匹配')
    }else{
          title.style.display = 'block';
          title.style.color = 'red';
         title.innerHTML = '匹配失败';
          console.log('不匹配')
    }
}

