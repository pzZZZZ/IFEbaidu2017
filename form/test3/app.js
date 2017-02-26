var radios = document.getElementsByTagName('input');
var data = {
    in:true,
    list1:['北京','上海','浙江','福建'],
    list2:['北京大学','清华大学','北京航空航天大学','北京工业大学']
    };
var renderbox = document.getElementsByClassName('box')[0];
render1();
var selectCity = document.getElementById('city');
var uni = document.getElementById('uni');
var bj = ['北京大学','清华大学','北京航空航天大学','北京工业大学'],sh = ['上海交通大学','复旦大学'],zj = ['浙江大学'],fj = ['福州大学','厦门大学'];
for(var i = 0;i<radios.length;i++){
    var index = i;
    radios[i].index = index;
    radios[i].onclick = function(){
        if(this.value == 'in'){
            render1();
        }else{
            render2();
        }
        console.log(this.value)
    }
}
selectCity.onchange = function(){
    console.log(this.value)
    console.log(selectCity)
    selectCitys(this.value)

    var selectCity = document.getElementById('city');
    console.log(selectCity)

}
console.log(uni)
uni.onchange = function(){
    console.log(1111)
}


function render1(){
    var html = template('in', data);
    renderbox.innerHTML = html;
}
function render2(){
    var html = template('out', data);
    renderbox.innerHTML = html;
}
function arrChange(cityname,arr){
    for(var i =0;i<arr.length;i++){
        if(arr[i] == cityname){
            var l = arr[i];
            arr[i] = arr[0];
            arr[0] =l;
        }
    }
}
function selectCitys(val){
    switch (val){
        case '上海':
        data.list2 = sh;
        arrChange('上海',data.list1);
        break;
        case '北京':
        data.list2 = bj;
        arrChange('北京',data.list1);
        break;
        case '浙江':
        data.list2 = zj;
        arrChange('浙江',data.list1);
        break;
        case '福建':
        data.list2 = fj;
        arrChange('福建',data.list1);
        break;

    }
    render1();

}