//import {picList} from './piclist.js';
var secondComment = [
  '初めての麦茶に挑戦。','おっぱいだけの人生は終わりです。','ママを休ませてあげるんだ。','結構、おいしいかも。'
]

let picList= [
  {picture: './201903/201903-010.jpg',comment:'ママ行かないでよ。ひとりにしないで。'},   
  {picture: './201903/20190310-02.jpg',comment:'初めての飛行機。怖かったけど、我慢したよ。'},
  {picture: './201903/20190310-01.jpg',comment:'鳴門市到着。産まれた街に戻ってきたよ。'},  
  {picture: './201903/20190313-01.jpg',comment:'歯が生えました。たくさん食べて大きくなるよ。'},  
  {picture: './201903/20190311-05.jpg',comment:'初めてのおともだち。あんちゃんだよ。'},
  {picture: './201903/20190311-02.jpg',comment:'この椅子僕も欲しいな。'},
  {picture: './201903/20190313-02.jpg',comment:'げんちゃんは同じ歳のおともだちだよ。'},
  {picture: './201903/20190314-02.jpg',comment:'ゆきえちゃん抱っこでねむねむ。'},
  {picture: './201903/20190316-02.jpg',comment:'ママのお気に入りの顔です。'},
  {picture: './201903/20190314-01.jpg',comment:'夢でもおっぱい吸ってます。'},
  {picture: './201903/20190317-02.jpg',comment:'歯固め中だよ。強い歯を作るんだ。'},
  {picture: './201903/20190318-06.jpg',comment:'離乳食を開始したよ。ママのご飯大好き。'},
  {picture: './201903/20190318-02.jpg',comment:'じいちゃんとばあちゃんとお出かけです。'},
  {picture: './201903/20190318-03.jpg',comment:'ママと一緒なら、いつも笑顔だよ。'},
  {picture: './201903/20190319-01.jpg',comment:'ママの上ですやすや。幸せ。'},
  {picture: './201903/20190322-06.jpg',comment:'ゆずおねえちゃん、大好き。'},
  {picture: './201903/20190329-01.jpg',comment:'初めてお絵描きしたよ。すごいでしょ。'},
  {picture: './201903/20190330-01.jpg',comment:'ハーフバースデー！大きくなったよ。'},
  {picture: './201903/20190330-03.jpg',comment:'ママのご飯大好き。僕の名前が書いてあるんだ。'},
  {picture: './201903/20190330-02.jpg',comment:'パパとママとお祝いしたよ。早くケーキ食べたいな。'},
  {picture: './201903/20190331-01.jpg',comment:'みんなに愛されて、こんなに大きくなったよ。ありがとう。'},
]

$(function(){
  window.onload = function(){
    var vframe = document.getElementById('vframe');
    var htmlVideo = ""
//    htmlVideo += '<div id="frame"><video id="video" controls autoplay muted playsinline><source src="./201903/M20190315-01.mp4"><source src="./201903/M20190315-01.ogv"><source src="./201903/M20190315-01.webm"></video></div>';

    htmlVideo += '<div id="frame"><video id="video" src="./201903/M20190315-01.mp4" controls autoplay></video></div>';
    vframe.innerHTML = htmlVideo;
    var video = document.getElementById('video');
    video.className='love';
    myMessage();
  };

  function myMessage(){
    var frame = document.getElementById('frame');
    var video = document.getElementById('video');
    var firstP= document.createElement('p');
    var secondP = document.createElement('p');
    var thirdP = document.createElement('p');
    firstP.textContent = '旅立ちの201903'; 
    secondP.textContent = '彰一朗は、自分の力で進めるようになりました。';
    thirdP.textContent = '彰一朗の世界は大きく広がり始めたのです。';
    firstP.setAttribute('id','firstP');
    secondP.setAttribute('id','secondP');
    thirdP.setAttribute('id','thirdP');
    frame.appendChild(firstP);
    frame.appendChild(secondP);
    frame.appendChild(thirdP);

    setTimeout(function(){  
      $('#firstP').slideDown(5000);
    },3000);
    setTimeout(function(){
      $('#secondP').slideDown(5000);
    },9000);
    setTimeout(function(){
      $('#thirdP').slideDown(5000);
    },15000);
    var timer = setInterval(function() {
      if(video.readyState > 0) {
         var myTime = video.duration;
         //console.log(myTime);
         //console.log(typeof myTime);
         myTime = myTime * 1000;
         clearInterval(timer);
         startEat(myTime);
      }
    }, 300);
  }
})

function startEat(time){
  var vframe = document.getElementById('vframe');
  var frame = document.getElementById('frame');
  var video = document.getElementById('video');
       
  setTimeout(function(){
    vframe.innerHTML = '<div id="frame"><video id="video" src="./201903/M201903-05.mp4" controls autoplay></video></div>';
    var video = document.getElementById('video');
    
    var fragment = document.createDocumentFragment();
    secondComment.forEach(function(value){
      var p =document.createElement('p');
      p.textContent=value;
      p.className='starteat';
      fragment.appendChild(p);
    });
    vframe.appendChild(fragment);

    var eat = document.getElementsByClassName('starteat');
    
    var i = 0;
    var setTime = setInterval(function(){
      slideSwitch();
      //console.log(eat.length);
      i++;
      //console.log(i);
      if (i===eat.length){
        clearInterval(setTime);
      }
    },15000);
    var timer = setInterval(function() {
      if(video.readyState > 0) {
        var myTime = video.duration;
        myTime = myTime * 1000;
        console.log(myTime);
        clearInterval(timer);
        slidePic(myTime);          
      }
    }, 300);
  },time);
}
function slidePic(time){
  setTimeout(function(){
    var vframe = document.getElementById('vframe');
    var frame = document.getElementById('frame');
    vframe.innerHTML = '<div id="slideshow"></div>';
    var slideshow = document.getElementById('slideshow');
    var fragment = document.createDocumentFragment();
    for (var i=0;i<picList.length;i++) {
      var onePic = picList[i];
      var div = document.createElement('div');
      div.setAttribute('class','slide');
      var img = document.createElement('img');
      var p = document.createElement('p');
      img.src = onePic.picture;
      p.textContent = onePic.comment;
      div.appendChild(img);
      div.appendChild(p);
      fragment.appendChild(div);
    }
    slideshow.appendChild(fragment);
    var messageP = document.createElement('p');
    messageP.textContent = 'Now Loading・・・';
    messageP.style.color = 'white';
    messageP.style.marginTop='10px';
    messageP.style.fontSize='20px';
    messageP.style.backgroundColor='black';
    vframe.insertBefore(messageP,slideshow);
    var slide = document.getElementsByClassName('slide');
    var i=0;
    var setTime = setInterval(function(){
      messageP.textContent ="";
      slidPicture();
      //console.log(slide.length);
      i++;
      //console.log(i);
      if (i===slide.length){
        clearInterval(setTime);
        //masonry();
      }
    },7000);
  },time);
}

function slideSwitch(){
  var $active = $('.active');
  if ( $active.length == 0 ) $active = $('#vframe p:last');

  var $next = $active.next()
  var $next =  $active.next().length ? $active.next():$('#vframe p:first');

  $active.addClass('last-active');
  $next.css({opacity:0.0}).addClass('active')
  .animate({opacity:1.0},5000,function(){
      $active.removeClass('active last-active');
    })
}

function slidPicture(){
  var $active = $('.active');
  if ( $active.length == 0 ) $active = $('#slideshow .slide:last');

  var $next = $active.next()
  var $next =  $active.next().length ? $active.next():$('#slideshow .slide:first');

  $active.addClass('last-active');
  $next.css({opacity:0.0}).addClass('active')
  .animate({opacity:1.0},5000,function(){
      $active.removeClass('active last-active');
    })
}

/*<div class="gallary">
  <div class="container">
　  <div class="grid" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 145,"fitWidth": true }'>
      <div class="grid-item"><p class="image"><img src="./201902/Gallary/201902-75.jpg"></p><p class="caption">僕の目見て</p></div>                
      <div class="grid-item"><p class="image"><img src="./201902/Gallary/201902-48.jpg"></p><p class="caption">ほっぺ見て</p></div>
    </div>
  </div>
</div>*/

$(function(){
  var $grid = $('.grid').imagesLoaded( function() {
      // init Masonry after all images have loaded
      $grid.masonry({
          "itemSelector": ".grid-item", 
          "columnWidth": 145,
          "fitWidth": true
        // options...
      });
  });

  $('.grid-item').click(function(){
      if($(this).hasClass('active')){
          $(this).removeClass('active');
      }else{
          $(this).addClass('active');
      }
  })
});

//<div class="grid-item"><p class="image"><img src="./201902/Gallary/201902-75.jpg"></p><p class="caption">僕の目見て</p></div>                


function masonry(){
  var vframe = document.getElementById('vframe');
  var htmlmasonry = ""
  htmlmasonry += '<div class="gallary"><div class="container"><div class="grid"></div></div></div>';
  vframe.innerHTML = htmlmasonry;
  var grid = document.getElementsByClassName('grid');
  grid[0].setAttribute('data-masonry','{ "itemSelector": ".grid-item", "columnWidth": 145,"fitWidth": true }');
  var fragment = document.createDocumentFragment();
  console.log(picList.length);
  for (var i =0,len=picList.length;i<len;i++ ) {
    console.log(picList[i]);
    var gridItem = document.createElement('div');
    gridItem.className = 'grid-item';
    var img = document.createElement('img');
    img.src = picList[i].picture;
    gridItem.appendChild(img);
    fragment.appendChild(gridItem);
  }
  grid[0].appendChild(fragment);
}