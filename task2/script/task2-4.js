var all=JSON.parse(sessionStorage.all);      /*获取上个页面传入的数组信息*/
console.log(all);


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
        $(".row").append(boxPlayer);
        console.log(all[i]);
        console.log(i);
    }
});



