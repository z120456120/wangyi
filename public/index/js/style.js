//header
header();
function header(){
    $hed = $('header #hed ul .heds');
$hed.on('mouseenter',function(){
    $(this).children("div.hedsp").show();
}).on('mouseleave',function(){
    $(this).children("div.hedsp").hide();
})
}
//banner
bannerli();
function bannerli(){
    let now = 0;
    let time;
    $btnz = $('#banner #bttn .btz');
    $btny = $('#banner #bttn .bty');
    $banlis = $('#banner #bttn ul li');
    //轮播图底下Li按钮
    $banlis.on('mouseover',function(){
    $this = $(this);
    $this.addClass('btactive').siblings().removeClass('btactive');
    $('#imgg').get(0).style.left=-1920*$this.index()+'px';
    now = $this.index();
})
//轮播图左右按钮
    $btnz.on('click',function(){
        now--;
        if(now == 0){
           now ==  $banlis.length-1;
        }
        $banlis.eq(now).addClass('btactive').siblings().removeClass('btactive');
        $('#imgg').get(0).style.left=-1920*now+'px';
    })
    $btny.on('click',function(){
        now++;
        if(now ==$banlis.length){
            now = 0;
        }
        $banlis.eq(now).addClass('btactive').siblings().removeClass('btactive');
        $('#imgg').get(0).style.left=-1920*now+'px';
    })


//轮播图自动定时器
    time = setInterval(foo,2000);
    $('#banner').mouseover(function(){
    clearInterval(time);
}).mouseout(function(){
    time = setInterval(foo,2000);
})
function foo(){
    if(now==$banlis.length-1){
        now = 0;
    }
    else{
        now++;
    }
    $banlis.eq(now).addClass('btactive').siblings().removeClass('btactive');
    $('#imgg').get(0).style.left=-1920*now+'px';
}
}


