$(document).ready(function()
{"use strict";var hamb=$('.hamburger');var header=$('.header');var hambActive=false;var menuActive=false;var ctrl=new ScrollMagic.Controller();setHeader();$(window).on('resize',function()
{setHeader();});$(document).on('scroll',function()
{setHeader();});initHamburger();initParallax();function setHeader()
{if(window.innerWidth<992)
{if($(window).scrollTop()>100)
{header.addClass('scrolled');}
else
{header.removeClass('scrolled');}}
else
{if($(window).scrollTop()>100)
{header.addClass('scrolled');}
else
{header.removeClass('scrolled');}}
if(window.innerWidth>991&&menuActive)
{closeMenu();}}
function initHamburger()
{if($('.hamburger_container').length)
{var hamb=$('.hamburger_container');hamb.on('click',function(event)
{event.stopPropagation();if(!menuActive)
{openMenu();$(document).one('click',function cls(e)
{if($(e.target).hasClass('menu_mm'))
{$(document).one('click',cls);}
else
{closeMenu();}});}
else
{$('.menu_container').removeClass('active');menuActive=false;}});}}
function openMenu()
{var fs=$('.menu_container');fs.addClass('active');hambActive=true;menuActive=true;}
function closeMenu()
{var fs=$('.menu_container');fs.removeClass('active');hambActive=false;menuActive=false;}
function initParallax()
{if($('.slider_prlx').length)
{var homeBcg=$('.slider_prlx');var homeBcgScene=new ScrollMagic.Scene({triggerElement:homeBcg,triggerHook:1,duration:"100%"}).setTween(TweenMax.to(homeBcg,1,{y:'15%',ease:Power0.easeNone})).addTo(ctrl);}
if($('.prlx_parent').length&&$('.prlx').length)
{var elements=$('.prlx_parent');elements.each(function()
{var ele=this;var bcg=$(ele).find('.prlx');var slideParallaxScene=new ScrollMagic.Scene({triggerElement:ele,triggerHook:1,duration:"200%"}).setTween(TweenMax.from(bcg,1,{y:'-30%',ease:Power0.easeNone})).addTo(ctrl);});}}});