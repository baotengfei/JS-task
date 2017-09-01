var all=JSON.parse(sessionStorage.all);      /*获取上个页面传入的数组信息*/
console.log(all);
var days =1;
var n=0;
var killArray = [];
var voteArray = [];
sessionStorage.setItem("killArray",JSON.stringify(killArray));
sessionStorage.setItem("voteArray",JSON.stringify(voteArray));
$(document).ready(function () {
    for (var i=0;i<all.length;i++) {        /*将数组信息循环放入class样式里*/
        var j=i+1;
        var boxPlayer='<div class="col-xs-4">\n' +
            '<div class="box-player">\n' +
            '    <div class="box-top"></div>\n' +
            '    <div class="box-cover">'+all[i]+'</div>\n' +
            '    <div class="box-bottom">'+j+'</div>\n' +
            '</div>\n' +
            '</div>';
        $("#judge-row").append(boxPlayer);
        console.log(all[i]);
    }

    $(".check-out").click(function(){
        sessionStorage.n=JSON.stringify(n);
        sessionStorage.days=JSON.stringify(days);
        window.location.href="task2-5.html";

    });

    var player = new Array();
    for (i = 0; i < all.length; i++) {              /*为所有角色添加属性*/
        player[i] =
            {
                role: all[i],
                state: "alive",
                num: i + 1
            };
    }
    console.log(player);
    sessionStorage.setItem("player",JSON.stringify(player));

});



