var killer=[];
var man=[];
var total=[];
var thePlayers;
var theDates=1;
console.log(total);

$(".set").click(function () {
    // $("#player-top").html("");
    $("#player-top").empty();
    // total.length = parseInt($("#player").val());
    total.length=$("#player").val();
    console.log(total);
    if (total.length == 8) {
        killer.length = 1;
    }
    else {
        killer.length = parseInt(total.length / 4);
    }
    for (var i = 0; i < killer.length; i++) {
        killer[i] = "杀手";
    }
    for (var j = 0; j < (total.length - killer.length); j++) {
        man[j] = "平民";
    }
    total = killer.concat(man);
    // total.sort(function () {
    //     return .5 - Math.random();
    // });

    Array.prototype.shuffle=function () {
        var input=this;
        for(var i=input.length-1;i>=0;i--){
            var randomIndex=Math.floor(Math.random()*(i+1));
            var itemAtIndex=input[randomIndex];
            input[randomIndex]=input[i];
            input[i]=itemAtIndex;
        }
        return input;
    };
    total.shuffle();

    total.length = parseInt($("#player").val());
    // $("#player-top").html = "";
    $("#player-top").empty();
    for (var k = 0; k < total.length; k++) {
        if (total[k] == "杀手") {
            $("#player-top").append('<li class="player-all man"><div class="point-killer"></div>' + (k + 1) + '号' +total[k]+ '</li>');
        }
        if (total[k] == "平民") {
            $("#player-top").append('<li class="player-all man"><div class="point-killer"></div>' + (k + 1) + '号'+total[k] + '</li>');
        }
    }
    // thePlayers = JSON.stringify(total);
    // sessionStorage.total = thePlayers;
    // dates = JSON.stringify(theDates);
    // sessionStorage.dates = dates;

});