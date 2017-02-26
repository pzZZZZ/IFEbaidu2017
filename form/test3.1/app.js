var radios = document.getElementsByTagName('input');
var data = {
    in:true,
    list1:['北京','上海','浙江','福建'],
    list2:['北京大学','清华大学','北京航空航天大学','北京工业大学']
    };
var labelbox = document.getElementById('labelbox');
var renderbox = document.getElementsByClassName('box')[0];
render1();
var selectCity = document.getElementById('city');
render3();
var uni = document.getElementById('uni');
var bj = ['北京大学','清华大学','北京航空航天大学','北京工业大学'],sh = ['上海交通大学','复旦大学'],zj = ['浙江大学'],fj = ['福州大学','厦门大学'];
for(var i = 0;i<radios.length;i++){
    var index = i;
    radios[i].index = index;
    radios[i].onclick = function(){
        if(this.value == 'in'){
            render1();
            data.list2 = bj;
            render3();
        }else{
            render2();
        }
        // console.log(this.value)
    }
}
selectCity.onchange = function(){
    var uni = document.getElementById('uni');
    // console.log(uni)
   selectCitys(this.value)

 
}



function render1(){
    var html = template('in', data);
    renderbox.innerHTML = html;
}
function render2(){
    var html = template('out', data);
    renderbox.innerHTML = html;
}
function render3(){
    var html = template('teuni', data);
    // console.log(html)
    dd=document.createElement("div");
    dd.innerHTML=html;
   renderbox.appendChild(dd);
}
function render4(newuni){
    newuni.parentNode.removeChild(newuni);
    var html = template('teuni', data);
    dd=document.createElement("div");
    dd.innerHTML=html;
    // console.log(html)
   renderbox.appendChild(dd);

}

function selectCitys(val){
    var newuni = document.getElementById('uni');
    switch (val){
        case '上海':
        data.list2 = sh;
       
        break;
        case '北京':
        data.list2 = bj;
     
        break;
        case '浙江':
        data.list2 = zj;
      
        break;
        case '福建':
        data.list2 = fj;
        
        break;

    }

    render4(newuni)

}