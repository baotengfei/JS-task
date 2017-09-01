var aliveKiller=JSON.parse(sessionStorage.getItem("aliveKiller"));
var aliveMan=JSON.parse(sessionStorage.getItem("aliveMan"));
var player=JSON.parse(sessionStorage.getItem("player"));
var theDays=JSON.parse(sessionStorage.getItem("days"));
var killArray = JSON.parse(sessionStorage.getItem("killArray"));
var voteArray = JSON.parse(sessionStorage.getItem("voteArray"));
var theDay = JSON.parse(sessionStorage.n);
var n=0;
var m=0;
console.log(aliveMan);
console.log(aliveKiller);
console.log(player);
console.log(theDay);
if(aliveKiller==0){
    $(".victory").text("平民胜利");
}else if(aliveKiller>=aliveMan){
    $(".victory").text("杀手胜利");
}
var a=$("<div>").addClass("col-xs-4");
var b=$("<div>").addClass("people");
var c=$("<div>").addClass("people");
$(".row").append(
    a.append(b).append(c)
);
for(var i=0;i<player.length;i++){
    if(player[i].role=="杀手"){
        n+=1
    }else if(player[i].role=="平民"){
        m+=1
    }
}
$(".people").eq(0).text("平民"+m+"人");
$(".people").eq(1).text("杀手"+n+"人");
if (theDay==1){
    x=theDays;
}else if(theDay==0){
    x=theDays-1;
}
console.log(x);
for (var i=0;i<x;i++){
    var days=$("<div>").addClass("days clear-fix");
    var firstDay=$("<span>").addClass("first-day");
    var time=$("<span>").addClass("time");
    var affair1=$("<span>").addClass("affair");
    var affair2=$("<span>").addClass("affair");
    $(".days-box").append(
        days.append(firstDay).append(time).append(affair1).append(affair2)
    );
    date=i+1;
    firstDay.text("第"+date+"天");
    time.text("0小时07分");
    affair1.text("晚上："+killArray[i].num+"号被杀手杀死，真实身份是" + killArray[i].role);
    affair2.text("白天：" + voteArray[i].num + "号被全民投死，真实身份是" + voteArray[i].role);
}

