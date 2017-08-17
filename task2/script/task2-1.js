var all=[];
var ghost=[];
var man=[];
$(".set").click(function () {
    all.length=$("#player").val();      /*获取用户输入的值*/
    ghost.length=parseInt(all.length / 4);      /*幽灵人数*/
    man.length=all.length - ghost.length;       /*水民人数*/
    for (i=0;i<ghost.length;i++){
        ghost[i]="幽灵";
    }
    for (i=0;i<man.length;i++){
        man[i]="水民";
    }
    all=ghost.concat(man);      /*将两个数组进行连接*/

    Array.prototype.shuffle=function () {       /*洗牌算法*/
        var input=this;
        for(var i=input.length-1;i>=0;i--){
            var n=Math.floor(Math.random()*(i+1));
            var itemAtIndex=input[n];       /*第n个数与最后一个数交换*/
            input[n]=input[i];
            input[i]=itemAtIndex;
        }
        return input;
    };
    all.shuffle();      /*洗牌算法*/

    all.length=$("#player").val();      /*再次获取用户输入的值*/
    $("#player-top").empty();       /*清空内容*/

    for(var j=0;j<all.length;j++){
        var manPlayer='<li class="player-all"><div class="point-killer"></div>' + (j + 1) + '号' +all[j]+ '</li>';
        var ghostPlayer='<li class="player-all"><div class="point-killer blue"></div>' + (j + 1) + '号' +all[j]+ '</li>';
        if (all[j]=="幽灵"){
            $("#player-top").append(ghostPlayer);       /*加入幽灵*/
        }
        if (all[j]=="水民"){
            $("#player-top").append(manPlayer);         /*加入水民*/
        }
    }
});