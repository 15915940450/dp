$('.nav').find('a').click(function(){
  $('.nav').find('a').attr('class','');
  $(this).attr('class','active'); 
  var target = $(this).attr("href");
  var targetScroll = $(target).offset().top-$('.header').height();
  $("html,body").animate({scrollTop:targetScroll},300);
  return false;
}); 
$(window).scroll(function(){
  if($(this).scrollTop() != 0){
    $('.goTop').fadeIn(300);  
  }else{
    $('.goTop').fadeOut(300);
  } 
  var targetTop = $(this).scrollTop();
  if(targetTop<500){
    $(".nav").find('.active').attr('class','');
    $(".nav").find('a:eq(0)').attr('class','active');
  }
  if(targetTop>=500&&targetTop<1100){
    $(".nav").find('.active').attr('class','');
    $(".nav").find('a:eq(1)').attr('class','active');
  }
  if(targetTop>=1100&&targetTop<1900){
    $(".nav").find('.active').attr('class','');
    $(".nav").find('a:eq(2)').attr('class','active');
  }
  if(targetTop>=1900&&targetTop<2200){
    $(".nav").find('.active').attr('class','');
    $(".nav").find('a:eq(3)').attr('class','active');
  }
  if(targetTop>=2200&&targetTop<2900){
    $(".nav").find('.active').attr('class','');
    $(".nav").find('a:eq(4)').attr('class','active');
  }
  if(targetTop>=2900){
    $(".nav").find('.active').attr('class','');
    $(".nav").find('a:eq(5)').attr('class','active');
  }
});
$('.goTop').click(function(){
  $('html,body').animate({'scrollTop':0},500) 
});



var swiper = new Swiper('.swiper-container-banner', {
    pagination: '.swiper-pagination',
    paginationClickable: true
});
$('.course-wrap ul li').hover(function(){
  $('.course-wrap ul li .txt').hide();
  $('.course-wrap ul li').stop(true).animate({'width':150});
  $(this).find('.txt').show();
  $(this).stop(true).animate({'width': 750});
});
// var swiper = new Swiper('.swiper-container-envelopment', {
//     pagination: '.swiper-pagination',
//     paginationClickable: true,
//     loop: true
// });
var swiper = new Swiper('.swiper-container-teacher', {
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 30,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
});
$('.tab').find('a').mouseenter(function(){
  $(this).addClass('active').siblings().removeClass('active');
  $('.answer').find('.answer-content').eq($(this).index()).show().siblings().hide();
});

function scroll(containId,step){
  var contain = document.getElementById(containId);
  var oElement_1 = contain.children[0],oElement_2 = contain.children[1],aEle = oElement_2.children;
  if(oElement_1.offsetHeight<=contain.offsetHeight){
    oElement_2.innerHTML = '';
  }else{
    oElement_2.innerHTML = oElement_1.innerHTML;
  }
  if(contain.scrollTop >= oElement_1.offsetHeight){
    contain.scrollTop = 0;
  }else{
    contain.scrollTop = contain.scrollTop + step;
  }

  contain.onmouseover = function(){
    over();
  } 
  contain.onmouseout = function(){
    out();
  }
}
var speed = 80;
var timer  = setInterval("scroll('answer-other',1)",speed);
function over(){
  clearInterval(timer);
}
function out(){
  timer = setInterval("scroll('answer-other',1)",speed);
}