$(document).ready(function(){
    var temp=$(".video-container");
    console.log(temp.width());
    temp.height(temp.width()*4/3);
    $(window).resize({obj:temp},resizeHandler);
    $(".header-userInfo-logout").button();
    $(".right-ctg-more").button();
});

function resizeHandler(event){
    var temp=event.data.obj;
    temp.height(temp.width()*4/3);
}

function hiddenHandler(event){
    $(event.target).removeClass("overflow-visible");
    $(event.target).addClass("overflow-hidden");
    $(event.target).next().fadeIn("normal");
}

function visibleHandler(event){
    $(event.target).removeClass("overflow-hidden");
    $(event.target).addClass("overflow-visible");
    $(event.target).next().fadeOut("normal");
}
