$(document).ready(function () {
   $(".detail-right-container").height($(".detail-video-container").height());
   $(window).resize(resizeHandler);
    var dplayer=new DPlayer({
        element: document.getElementById('dplayer'),
        video:{
            url:"file:///E:/IDEA/VSS/a.mp4"
        },
        danmaku: {
            id: "our-danmaku-1",
            api: 'https://api.prprpr.me/dplayer/'
        }
    })
});

function resizeHandler(){
    $(".detail-right-container").height($(".detail-video-container").height())
}