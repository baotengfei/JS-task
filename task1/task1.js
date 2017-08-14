var square=document.getElementsByClassName("square");
var btnStart=document.getElementById("start");
var btnEnd=document.getElementById("end");
var num=[];
var color=[];
var timer;
function flash(){
        num[0]=Math.floor(Math.random()*9); /*从9个数中随机选取一个数*/
        num[1]=Math.floor(Math.random()*9);
        num[2]=Math.floor(Math.random()*9);
        // num[0]=selectFrom(0,8);
        // num[1]=selectFrom(0,8);
        // num[2]=selectFrom(0,8);
    if (num[0]==num[1]||num[0]==num[2]||num[1]==num[2]){    /*当三个数有两个相等时*/
        flash();
    };
    console.log(num);
    var i=0;
    do{
        color[i]="#"+("00000"+(Math.random()*0x1000000<<0).toString(16)).slice(-6);
        i++;
    }while
        (i<3);      /*随机产生三种颜色*/
    console.log(color);
}
function startFlash() {
    clearTimeout(timer);    /*重置定时器*/
    timer=setTimeout(startFlash,1200);    /*设置定时器的时间间隔*/
    var i=0;
    do{
        square[i].style.backgroundColor="orange";
        i++;
    }while
        (i<square.length);  /*遍历每个方格，使颜色为orange*/
    flash();    /*调用flash()函数*/
    square[num[0]].style.backgroundColor=color[0];  /*将随机的颜色参数传给随机的方格*/
    square[num[1]].style.backgroundColor=color[1];
    square[num[2]].style.backgroundColor=color[2];
}
btnStart.onclick=function () {  /*点击事件，调用函数*/
    startFlash() ;
};
function endFlash() {
    clearTimeout(timer);
    var i=0;
    do{
        square[i].style.backgroundColor="orange";
        i++;
    }while
        (i<square.length)
}


btnEnd.onclick=function () {
    endFlash();
};