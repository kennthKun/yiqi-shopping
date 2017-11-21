var cat_id = $.getQueryString('cat_id');
var page = 1;
var pagesize = 50;
$.ajax({
  "url": 'http://h6.duchengjiu.top/shop/api_goods.php?=&page'+1+'&pagesize='+50,
  "type": "GET",
  "dataType": "json",
  "success": function(response){
  		console.log(response);
  		var cla = '';
    for (var i = 0; i < response.data.length; i++) {
      var obj = response.data[i];
      var str ='<div '+cla+'><a href="detail.html?goods_id=' 
		      +obj.goods_id+ '"><img src="'
		      +obj.goods_thumb+'"/></a><p>'
		      +obj.goods_name+'</p><em>'
		      +"¥:" + obj.price+ '<b></b></em></div>';
		 if( i <= 9 ){
		   	$('#rushShop').append(str);
		 }
		 if(i > 9 && i <16){
				$('#benefitShop').append(str);
		 }
		 if(i >= 16 && i <= 23){
		 		$('#qualityShop').append(str);
		 }
		 if(i > 23 && i <= 37){
		 		$('#shopCenter').append(str);
		 }
		 if(i > 37 && i <= 43){
		 		$('#likeShop').append(str);
		 		
		 }
    }
  }
});

shop.api.fetchGoodsCategory(function(response){
  for (var i = 0; i < response.data.length; i++) {
    var obj = response.data[i];
    $('#nav').append('<li><a href="list.html?cat_id=' + obj.cat_id + '">' + obj.cat_name + '</a></li>')
  }
});
window.addEventListener("scroll", function(){
	var rushBox = document.querySelector('#rushBox');
  var rushShop = document.querySelector('#rushShop');
	var rushShopDivs = rushShop.querySelectorAll('div').length;
	var windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
	var divWidth = windowWidth/4; 
  var alllength = rushShopDivs*divWidth;
	console.log(alllength)
	var min = alllength - windowWidth;
	var deltaX;
	var nowx = 0;
	var movearr = [0,0];
	rushBox.addEventListener('touchstart', function(event){
		event.preventDefault();
	  movearr = [0, 0];
    rushShop.style.transition = "none";
	  deltaX = event.touches[0].clientX - nowx;
	}, false);
  rushBox.addEventListener('touchmove', function(event){
		event.preventDefault();
		nowx = event.touches[0].clientX - deltaX;
		rushShop.style.transform = "translateX(" + nowx + "px)";
		rushShop.style.webkitTransform = "translateX(" + nowx + "px)";
		movearr.push(event.touches[0].clientX);
	},false);
	rushBox.addEventListener('touchend', function(event) {
		event.preventDefault();
		var s = movearr[movearr.length-1] - movearr[movearr.length-2];
		var targetx = nowx + s * 3;
		if (targetx < -min) {
		  targetx = -min;
		  rushShop.style.transition = "all 0.6s cubic-bezier(0.15, 0.85, 0.15, 2.08) 0s";
		} else if (targetx > 0) {
		  targetx = 0;
		  rushShop.style.transition = "all 0.6s cubic-bezier(0.15, 0.85, 0.15, 2.08) 0s";
		} else {
		  rushShop.style.transition = "all 0.4s cubic-bezier(0.18, 0.68, 0.65, 0.88) 0s";
		}
		rushShop.style.transform = "translateX(" + targetx + "px)";
		rushShop.style.webkitTransform = "translateX(" + targetx + "px)";
		nowx = targetx;
	},false);
}, false);
window.addEventListener("scroll", function(){
	var t = document.documentElement.scrollTop || document.body.scrollTop; 
	console.log(t);
	var SO = document.getElementsByTagName("header")[0];
	if(t > 5){
		SO.style.backgroundImage = "linear-gradient(0deg,rgba(0,0,0,0),rgba(255, 255, 255, 0.8))";
		$("#logo").fadeOut(500);
	  $("#site").css('visibility','hidden');
	 	$(".soso-self").css("border","1px solid #eee")
	}else{
		SO.style.backgroundImage = "linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0.7),rgba(255, 255, 255, 0.8))";
		$("#logo").fadeIn();
	 	$("#site").css('visibility','visible');
	 	$(".soso-self").css({"border":"none","background":"white"})
	 }
}, false);

var listS= document.getElementById("navList");
listS.addEventListener("touchstart",function(){
	$("#nav").slideToggle();
},false);


//var sosoSelf = $("#sosoSelf");

//$("#sosoSelf").focus(function(){
//	if(window.keydown(function(){
//		location.href = 'search.html?search_text=' + $("#search-text").val();
//	}))
//});
 
$(document).keydown(function(ev){
	var ev = event || window.event;
	let isFocus=$("#sosoSelf").is(":focus"); 
	if(true==isFocus && ev.keyCode === 13){  
    location.href = 'search.html?search_text=' + $("#sosoSelf").val(); 
	}else{  
	    return; 
	}
})


//console.log(sosoSelf)
//if (sosoSelf.length === 1) {
//sosoSelf.click(function(){
//  location.href = 'search.html?search_text=' + $("#search-text").val();
//});
//}
