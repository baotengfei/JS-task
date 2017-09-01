var aliveMan = 0;
var aliveKiller = 0;
var all = JSON.parse(sessionStorage.all);
var y = JSON.parse(sessionStorage.getItem("y"));
var days = JSON.parse(sessionStorage.getItem("days"));

var player = JSON.parse(sessionStorage.getItem("player"));
var deadMen = [];
var killArray = JSON.parse(sessionStorage.getItem("killArray"));
var voteArray = JSON.parse(sessionStorage.getItem("voteArray"));
console.log(player);
console.log(y);

$(document).ready(function () {
    for (var i = 0; i < all.length; i++) {        /*将数组信息循环放入class样式里*/
        var j = i + 1;
        var voteAndKill = '<div class="col-xs-4">\n' +
            '    <div class="pad">\n' +
            '        <div class="box">\n' +
            '            <div class="box-top">\n' +
            '                <div class="player">' + all[i] + '</div>\n' +
            '            </div>\n' +
            '            <div class="box-bottom">\n' +
            '                <div class="num">' + j + "号" + '</div>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '        <div class="shape">\n' +
            '            <span class="shape-one"></span>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</div>';
        $("#vote-row").append(voteAndKill);
    }


    for (i = 0; i < player.length; i++) {
        if (player[i].state == "beKilled" || player[i].state == "beVoted") {
            $(".box").eq(i).css("background-color", "red");
        }
    }


    $(".box").click(function () {
        for (i = 0; i < player.length; i++) {
            if (player[i].state == "alive") {
                $(".box").eq(i).css("background-color", "");
            }
        }

        if ($($(this).find(".player")).html() == "平民") {
            // if (player[$(this).index()].state == "alive") {
            if ($(this).css("background-color") != "rgb(255, 0, 0)") {
                $(this).css("background-color", "red");
                deadMen = $(".box").index(this);

            } else /*if(player[$(this).index()].state == "beKilled" || player[$(this).index()].state == "beVoted")*/{
                if (y == 0) {
                    alert("侮辱尸体在我们这里是禁止的，请尊重死者");
                    deadMen = null;
                } else if (y == 1) {
                    alert("不要把宝贵的一票投给死者啊大胸弟");
                    deadMen = null;
                }
            }
            console.log(player[$(this).index()].state);
            console.log(deadMen);
        } else if ($(this).find(".player").html() == "杀手") {
            if (y == 0) {
                alert("队友别开枪，自己人！");
                deadMen = null;
            } else if (y == 1) {
                // if (player[$(this).index()].state == "alive"){
                if ($(this).css("background-color") != "rgb(255,0,0)") {
                    $(this).css("background-color", "red");
                    deadMen = $(".box").index(this);
                } else /*if(player[$(this).index()].state == "beKilled" || player[$(this).index()].state == "beVoted")*/{
                    deadMen = null;
                    alert("不要把宝贵的一票投给死者啊大胸弟");
                }
            }
            console.log(deadMen);
        }
    });

    if (y == 0) {
        $(".title").html("杀人");
        $(".confirm").html("确定");
    } else if (y == 1) {
        $(".title").html("投票");
        $(".confirm").html("投死");
    }
});

$(".confirm").click(function () {
    if (deadMen != null) {

        if (y == 0) {
            var decision = confirm("确定把这个可怜虫干掉吗？");
            if (decision == true) {
                n = 1;
                // 将被杀死的角色添加被杀死状态
                player[deadMen].state = "beKilled";
                x = player[deadMen];
                // 往被杀死玩家数组push被杀死的角色
                killArray.push(x);
                sessionStorage.setItem("killArray", JSON.stringify(killArray));
                sessionStorage.setItem("x", JSON.stringify(x));
                sessionStorage.setItem("player", JSON.stringify(player));
                sessionStorage.n = JSON.stringify(n);

                for (var i = 0; i < player.length; i++) {
                    if (player[i].role == "杀手" && player[i].state == "alive") {
                        // 存活的杀手人数
                        aliveKiller+=1;
                    }
                    if (player[i].role == "平民" && player[i].state == "alive") {
                        // 存活的平民人数
                        aliveMan+=1;
                    }

                }
                if (aliveKiller == 0 || aliveKiller >= aliveMan) {
                    alert("游戏结束");
                    sessionStorage.setItem("aliveKiller", JSON.stringify(aliveKiller));
                    sessionStorage.setItem("aliveMan", JSON.stringify(aliveMan));
                    window.location.href = "task2-7.html";
                } else {
                    window.location.href = "task2-5.html";
                }

            } else {
                deadMen = null;
            }
            console.log(killArray);
            console.log(player);
            console.log(deadMen);
        } else if (y == 1) {
            var decision = confirm("锁定嫌疑人？");
            if (decision == true) {
                n = 0;
                days += 1;
                player[deadMen].state = "beVoted";
                z = player[deadMen];
                voteArray.push(z);
                sessionStorage.voteArray = JSON.stringify(voteArray);
                sessionStorage.days = JSON.stringify(days);
                sessionStorage.setItem("player", JSON.stringify(player));
                sessionStorage.n = JSON.stringify(n);

                for (var i = 0; i < player.length; i++) {
                    if (player[i].role == "杀手" && player[i].state == "alive") {
                        // 存活的杀手人数
                        aliveKiller+=1;
                    }
                    if (player[i].role == "平民" && player[i].state == "alive") {
                        // 存活的平民人数
                        aliveMan+=1;
                    }
                }
                console.log(aliveKiller);
                console.log(aliveMan);

                if (aliveKiller == 0 || aliveKiller >= aliveMan) {
                    alert("游戏结束");
                    sessionStorage.setItem("aliveKiller", JSON.stringify(aliveKiller));
                    sessionStorage.setItem("aliveMan", JSON.stringify(aliveMan));
                    window.location.href = "task2-7.html";
                } else {
                    window.location.href = "task2-5.html";
                }

            } else {
                deadMen = null;
            }
            console.log(player);
            console.log(deadMen);
        }
    } else {
        alert("请先选择玩家");
    }

})
