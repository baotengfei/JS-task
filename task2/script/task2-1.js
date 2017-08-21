window.onload=function(){
    document.getElementById("simple").onclick=function(){
        window.location.href='task2-2.html';
    };

};






var inputPlayer=document.getElementById("player");
var inputSlider=document.getElementById("slider");
function moveChange() {
    if (inputSlider.value>=6&&inputSlider.value<=18){
        inputPlayer.value=inputSlider.value;
    }else{
        alert("请输入正确的人数6~18");
        inputPlayer.value=6;
        inputSlider.value=6;
    }
}
function onChange() {
    if (inputPlayer.value>=6&&inputPlayer.value<=18){
        inputSlider.value=inputPlayer.value;
    }else{
        alert("请输入正确的人数6~18");
        inputPlayer.value=6;
        inputSlider.value=6;
    }
}
function less() {
    inputPlayer.value--;
    inputSlider.value=inputPlayer.value;
    if (inputPlayer.value<6){
        alert("人数太少了，再找一些小伙伴吧");
        inputPlayer.value=6;
        inputSlider.value=6;
    }
}
function plus() {
    inputPlayer.value++;
    inputSlider.value=inputPlayer.value;
    if(inputPlayer.value>18){
        alert("人数太多了，分两批玩吧");
        inputPlayer.value=18;
        inputSlider.value=18;
    }
};







