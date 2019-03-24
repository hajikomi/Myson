$(function(){
  window.onload = function(){
    var vframe = document.getElementById('vframe');
    var htmlVideo = ""
    htmlVideo += '<div id="frame"><video id="video" src="./M20190314-01.mp4" controls  muted autoplay></video></div>';
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
  '初めての麦茶に挑戦。','おっぱいだけの人生は終わりです。','ママを休ませてあげるんだ。','結構、おいしいかも。'
]

function startEat(time){
  var vframe = document.getElementById('vframe');
  var frame = document.getElementById('frame');
  var video = document.getElementById('video');
       
  setTimeout(function(){
    vframe.innerHTML = '<div id="frame"><video id="video" src="./M201903-05.mp4" controls  muted autoplay></video></div>';
    var video = document.getElementById('video');
    
    //var thirdP = document.getElementById('starteat');
    var fragment = document.createDocumentFragment();
    secondComment.forEach(function(value){
      var p =document.createElement('p');
      p.textContent=value;
      p.className='starteat';
      fragment.appendChild(p);
    });
    vframe.appendChild(fragment);
    var eat = document.getElementsByClassName('starteat');
    //eat[0].addclass('active');
    var i = 0;
    var setTime = setInterval(function(){
      slideSwitch();
      
      console.log(i);
      console.log(eat.length);
      i++;
      if (i===eat.length){
        clearInterval(setTime);
      }
    },10000);
  },time);

  function newFunction(i) {
    i++;
    return i;
  }
}

function slideSwitch(){
  var $active = $('.active');
  if ( $active.length == 0 ) $active = $('#vframe p:last');

  var $next = $active.next()
  var $next =  $active.next().length ? $active.next()
  :$('#vframe p:first');

  $active.addClass('last-active');
  $next.css({opacity:0.0}).addClass('active')
    .animate({opacity:1.0},5000,function(){
      $active.removeClass('active last-active');
    })
}


