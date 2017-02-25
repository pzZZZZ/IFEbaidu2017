var bt = document.getElementsByTagName('button');
var text =document.getElementsByTagName('input');
var  title = document.getElementsByClassName('title')[0];
title.style.display = 'none';
bt[0].onclick = function(){
    
    var reg = /[^\x00-\xff]/g;
    var strLenght =text[0].value.replace(reg,"aa").length;
    if(strLenght>=4&strLenght<=16){
        title.style.display = 'block';
        title.innerHTML = '匹配成功';
        console.log('匹配')
    }else{
          title.style.display = 'block';
         title.innerHTML = '匹配失败';
          console.log('不匹配')
    }

}
