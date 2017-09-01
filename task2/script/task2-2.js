var all = [];
var killer = [];
var man = [];
var i;

var inputPlayer = document.getElementById("player");
var inputSlider = document.getElementById("slider");

function moveChange() {
    if (inputSlider.value >= 6 && inputSlider.value <= 18) {
        inputPlayer.value = inputSlider.value;
    } else {
        alert("请输入正确的人数6~18");
        inputPlayer.value = 6;
        inputSlider.value = 6;
    }
}

function onChange() {
    if (inputPlayer.value >= 6 && inputPlayer.value <= 18) {
        inputSlider.value = inputPlayer.value;
    } else {
        alert("请输入正确的人数6~18");
        inputPlayer.value = 6;
        inputSlider.value = 6;
    }
}

function less() {
    inputPlayer.value--;
    inputSlider.value = inputPlayer.value;
    if (inputPlayer.value < 6) {
        alert("人数太少了，再找一些小伙伴吧");
        inputPlayer.value = 6;
        inputSlider.value = 6;
    }
}

function plus() {
    inputPlayer.value++;
    inputSlider.value = inputPlayer.value;
    if (inputPlayer.value > 18) {
        alert("人数太多了，分两批玩吧");
        inputPlayer.value = 18;
        inputSlider.value = 18;
    }
};

$(".set").click(function () {
    all.length = $("#player").val();
    /*获取用户输入的值*/
    killer.length = parseInt(all.length / 4);
    /*幽灵人数*/
    man.length = all.length - killer.length;
    /*水民人数*/
    for (i = 0; i < killer.length; i++) {
        killer[i] = "杀手";
    }
    for (i = 0; i < man.length; i++) {
        man[i] = "平民";
    }
    all = killer.concat(man);
    /*将两个数组进行连接*/

    Array.prototype.shuffle = function () {       /*洗牌算法*/
        var input = this;
        for (var i = input.length - 1; i >= 0; i--) {
            var n = Math.floor(Math.random() * (i + 1));
            var itemAtIndex = input[n];
            /*第n个数与最后一个数交换*/
            input[n] = input[i];
            input[i] = itemAtIndex;
        }
        return input;
    };
    all.shuffle();
    /*洗牌算法*/

    sessionStorage.all = JSON.stringify(all);
    /*将all的数组转换为JSON字符串并传入sessionStorage进行存储*/


    all.length = $("#player").val();
    /*再次获取用户输入的值*/
    $("#player-top").empty();
    /*清空内容*/

    for (var j = 0; j < all.length; j++) {
        var manPlayer = '<li class="player-all"><div class="point-killer"></div>' + all[j] + '</li>';
        var killerPlayer = '<li class="player-all"><div class="point-killer blue"></div>' + all[j] + '</li>';
        if (all[j] == "杀手") {
            $("#player-top").append(killerPlayer);
            /*加入杀手*/
        }
        if (all[j] == "平民") {
            $("#player-top").append(manPlayer);
            /*加入水民*/
        }
        console.log(all[j]);
    }


});


$("#btnDeal").click(function () {
    if ($("#player-top>li").length == 0)/*if(all.length==0)*/{
        alert("发牌之前请先进行玩家配比");
    } else {
        window.location.href = 'task2-3.html';
    }
})