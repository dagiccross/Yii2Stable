// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_photo(t,e,i){function a(t,e){return parseFloat(Math.random()*(e-t)+t)}function o(e,i,o,s,n,r){if(e[0].wowParams||(e[0].wowParams={}),s&&i)var d=g,h=50-d/2,w=50-d/2,l=0,p=5;else var d=f,h=a(-10,90),w=a(-10,90),l=a(-30,30),p=s?i?5:o?3:2:i?3:o?4:2;var c={top:e[0].wowParams.y||0,left:e[0].wowParams.x||0,width:e[0].wowParams.size||0,height:e[0].wowParams.size||0},m={top:w,left:h,width:d,height:d};if(t.support.transform)c={translate:[50-c.width/2-c.left+"%",50-c.width/2-c.top+"%",0],rotate:e[0].wowParams.angle||0,scale:c.width/100},m={translate:[50-m.width/2-m.left,50-m.width/2-m.top,0],rotate:l||0,scale:m.width/100};else for(var u in c)c[u]=c[u]+"%";wowAnimate(e.css({position:"absolute",zIndex:p}),c,m,n,"swing",r||0),e[0].wowParams={size:d,x:h,y:w,angle:l,zIndex:p}}function s(){if(t.support.transform){var i=n(e[0]);i={width:i.width(),height:i.height(),marginTop:parseFloat(i.css("marginTop")),marginLeft:parseFloat(i.css("marginLeft"))},n(P).find("img").css(i)}else n(P).find("img").css({width:"100%"})}var n=jQuery,r=n(this),d=n(".ws_list",i),h=/iPhone|iPod|iPad|Android|BlackBerry/.test(navigator.userAgent),w=(e.length,t.imagesCount||30),f=30,g=80,l=[],p=n("<div>").addClass("ws_effect ws_photo").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",backgroundColor:"#DDDDDD"}).appendTo(i);if(!h)var c=n("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.6)",zIndex:4}).appendTo(p);for(var m=Math.max(w,e.length),u=0,v=0;m>u;u++)v>=e.length&&(v-=e.length),n("<div>").addClass("ws_photoItem").css({width:"100%",height:"100%",overflow:"hidden"}).append(n("<div>").css({overflow:"hidden",position:"absolute"}).append(n(e[v]).clone())).appendTo(p),t.images&&u<e.length&&l.push(!t.images[v].noimage),v++;var P=p.children(".ws_photoItem");P.each(function(e){o(n(this),t.startSlide==e,!1,!0,0)}),s(),n(window).on("load resize",s),this.go=function(i,a){if(s(),t.images&&!l[i]){l[i]=!0;for(var w=i;n(P[w]).find("img").attr("src",t.images[w%e.length].src),!(w>m);)w+=e.length}if(window.XMLHttpRequest){var f=.5*t.duration;P.each(function(t){o(n(this),i==t,a==t,!1,f)}),h||wowAnimate(c,{opacity:1},{opacity:0},.7*f,"swing"),setTimeout(function(){P.each(function(t){o(n(this),i==t,a==t,!0,f,a==t?function(){r.trigger("effectEnd")}:0)}),h||wowAnimate(c,{opacity:0},{opacity:1},.7*f,"swing")},f)}else d.stop(!0).animate({left:i?-i+"00%":/Safari/.test(navigator.userAgent)?"0%":0},t.duration,"easeInOutExpo",function(){r.trigger("effectEnd")})}}