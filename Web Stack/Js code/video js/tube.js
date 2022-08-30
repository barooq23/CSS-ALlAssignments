console.log("page loaded...");

// function playVideo(vid) {
//     vid.play();
// }

// function pauseVideo(vid) {
//     vid.pause();
//     vid.currentTime = 0;
// }
$('#audio-control').click(function(){
    if( $("#myVideo").prop('muted') ) {
          $("#myVideo").prop('muted', false);
      // or toggle class, style it with a volume icon sprite, change background-position
    } else {
      $("#myVideo").prop('muted', true);
    }
});