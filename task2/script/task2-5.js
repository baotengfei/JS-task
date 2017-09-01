var kill = 0;
var words = 0;
var speak = 0;
var vote = 0;
var days = JSON.parse(sessionStorage.days);
var all = JSON.parse(sessionStorage.all);
var player = JSON.parse(sessionStorage.getItem("player"));
var killArray = JSON.parse(sessionStorage.getItem("killArray"));
var voteArray = JSON.parse(sessionStorage.getItem("voteArray"));
console.log(killArray);
console.log(voteArray);
console.log(player);

$(document).ready(function () {
    $("#days").text("第" + days + "天");
    if (days > 1) {
        for (var i = 0; i < days - 1; i++) {
            var date = i + 1;
            var $dayBox = $("<div>").addClass("day-box");
            var $dayLine = $("<div>").addClass("day-line");
            var $killP = $("<div>").addClass("kill-p");
            var $voteP = $("<div>").addClass("vote-p");
            $(".the-day").before(
                $dayBox.append($dayLine).append($killP).append($voteP)
            );
            $dayLine.text("第" + date + "天");
            $killP.text("晚上" + killArray[i].num + "号被杀手杀死，真实身份是" + killArray[i].role);
            $voteP.text("白天" + voteArray[i].num + "号被全民投死，真实身份是" + voteArray[i].role);
        }
        $(".day-line").click(function () {
            $(this).nextAll().fadeToggle();
        })
    }
    console.log(i);
});


$(".kill").click(function () {
    switch (true) {
        case(kill == 0):
            sessionStorage.setItem("y", JSON.stringify(vote));
            window.location.href = "task2-6.html";
            break;
        case(kill == 1):
            alert("请不要重复操作");
            break;
    }
});

var n = JSON.parse(sessionStorage.n);

kill = kill + n;
console.log(kill);
$(".check-out").click(function () {
    var restart=confirm("本次游戏将退出，确定？");
    if (restart==true){
        location.href = "task2-1.html";
    }

});

// 以kill作为判断，即当kill为1时，当前为从杀手页面跳转过来，当kill为0时，当前为从投票页面或从开始游戏页面跳转过来
if (kill == 1) {
    var x = JSON.parse(sessionStorage.x);
    $(".kill").css("background-color", "rgb(131, 176, 154)");
    $(".kill").children(".triangle").css("border-right", ".16rem solid rgb(131, 176, 154)");
    var info = '<p>晚上：' + x.num + '号被杀手杀死，真实身份是' + x.role + '</p>';
    $(".message").html(info);
}


$(".last-words").click(function () {
    switch (true) {
        case (words == 0 && kill == 1):
            alert("请死者亮明身份并发表遗言");
            $(".last-words").css("background-color", "rgb(131, 176, 154)");
            $(".last-words").children(".triangle").css("border-right", ".16rem solid rgb(131, 176, 154)");
            words = 1;
            break;
        case (kill == 0):
            alert("请先进行杀手杀人");
            break;
        case (words == 1):
            alert("请不要重复操作");
            break;
        default:
            break;
    }
});

$(".speak").click(function () {
    switch (true) {
        case(kill == 1 && words == 1 && speak == 0):
            alert("请玩家依次发言");
            $(".speak").css("background-color", "rgb(131, 176, 154)");
            $(".speak").children(".triangle").css("border-right", ".16rem solid rgb(131, 176, 154)");
            speak = 1;
            break;
        case(kill == 0):
            alert("请先进行杀手杀人");
            break;
        case(kill == 1 && words == 0):
            alert("请先进行亡灵发表遗言");
            break;
        case(speak == 1):
            alert("请不要重复操作");
            break;
        default:
            break;
    }
});
$(".vote").click(function () {
    switch (true) {
        case(kill == 1 && words == 1 && speak == 1 && vote == 0):
            vote += 1;
            sessionStorage.y = JSON.stringify(vote);
            window.location.href = "task2-6.html";
            $(".vote").css("background-color", "rgb(131, 176, 154)");
            $(".vote").children(".triangle").css("border-right", ".16rem solid rgb(131, 176, 154)");

            break;
        case(kill == 0):
            alert("请先进行杀手杀人");
            break;
        case(kill == 1 && words == 0):
            alert("请先进行亡灵发表遗言");
            break;
        case(kill == 1 && words == 1 && speak == 0):
            alert("请先进行玩家依次发言");
            break;
        case(vote == 1):
            alert("请不要重复操作");
            break;
        default:
            break;
    }
});

