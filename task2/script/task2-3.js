var all=JSON.parse(sessionStorage.all);         /*获取上个页面传入的数组信息*/
console.log(all);
var i=2;
var n=0;
var j=1;

$("#num").html(j);
$(".card-back").show();
$(".card-above,.words,.tips").hide();
$(".check-out").html("查看1号身份");     /*显示刚进入页面时的样式*/

$(".check-out").click(function () {
    var a=i % 2;                /*奇偶数判断*/
    $(".card-back").hide();
    $(".card-above,.role,.words,.tips").show();
    $("#num").html(j);          /*点击之后的样式*/
    if (n<all.length) {         /*判断当n小于数组长度时*/
        if (a == 0) {           /*当i为偶数时*/
            var j = i / 2;
            var k = i / 2 + 1;
            if (all[n] == "平民") {
                $(".role").html("角色：平民");
                $(".words").html("词组：西伯利亚");
                $(".tips").html("想办法找到杀手，同时还要注意区分队友和对手哦！");
            } else if (all[n] == "杀手") {
                $(".role").html("角色：杀手");
                $(".words").html("词组：维多利亚");
                $(".tips").html("想办法猜到别人的词，同时还要注意不要暴露自己哦！");
            };
            console.log(all[n]);
            n++;
            console.log(n);
        } else if (a == 1) {        /*当i为奇数时*/
            var j = (i + 1) / 2;
            var k = (i + 1) / 2;
            $("#num").html(j);
            $(".card-back").show();
            $(".card-above,.role,.words,.tips").hide();
            $(".check-out").html("查看" + k + "号身份");
        };
        if(i<all.length*2){         /*通过计算，当i小于两倍数组长度时显示文本*/
            $(".check-out").html("隐藏并传递给" + k + "号");
        }
        else{
            $(".check-out").html("查看法官日志");
            $(".check-out").click(function () {
                window.location.href='task2-4.html';
            })
        };
        i++;
        console.log(i);
    }

});


