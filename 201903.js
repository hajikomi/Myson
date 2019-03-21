$(function(){
  window.onload = function(){
    var vframe = document.getElementById('vframe');
    var htmlVideo = ""
    htmlVideo += '<div id="frame"><video id="video" src="./M20190314-01.mp4" controls muted autoplay></video></div>';
    vframe.innerHTML = htmlVideo;
    var video = document.getElementById('video');
    video.className='love';
    //video.muted=false;
    myMessage();
    //console.log(timer);
  };

  function myMessage(){
    var frame = document.getElementById('frame');
    var video = document.getElementById('video');
    var firstP= document.createElement('p');
    var secondP = document.createElement('p');
    firstP.textContent = '旅立ちの201903'; 
    secondP.textContent = '彰一朗は、自分の力で前に進めるようになりました。';
    firstP.setAttribute('id','absolute');
    secondP.setAttribute('id','comment');
    frame.appendChild(firstP);
    frame.appendChild(secondP);
    setTimeout(function(){  
      //video.volume =1;
      $('#absolute').slideDown(3000);
    },3000);
    setTimeout(function(){
      $('#comment').slideDown(3000);
    },6000);
    var timer = setInterval(function() {
      if(video.readyState > 0) {
         var myTime = video.duration;
        //video.muted=false;
         console.log(myTime);
         console.log(typeof myTime);
         myTime = myTime * 1000;
         clearInterval(timer);
         startEat(myTime);
      }
    }, 300);
  }
})

var secondComment = [
  '初めての麦茶に挑戦。','おっぱいだけの人生は終わりです。','ママがいなくても生きていけるようになるんだ。'
]

function startEat(time){
  var vframe = document.getElementById('vframe');
  var frame = document.getElementById('frame');
  var video = document.getElementById('video');
  
  var thirdP = document.createElement('p');
  thirdP.setAttribute('id','starteat');
   
  //console.log(timer);
  setTimeout(function(){
    vframe.innerHTML = '<div id="frame"><video id="video" src="./M201903-05.mp4" controls muted autoplay></video></div>';
    vframe.appendChild(thirdP);
    //var thirdP = document.getElementById('starteat');
    setTimeout(function(){
        for (var j=0;j<secondComment.length;j++) {
          //setTimeout(function(){
            thirdP.textContent = secondComment[j];
            //thirdP.style.display='block';
            console.log(thirdP.textContent);
            $('#starteat').slideDown(5000);
          //},6000);
        }
    },10000);
  },time);
}


