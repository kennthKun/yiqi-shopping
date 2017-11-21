var cat_id = $.getQueryString('cat_id');
function showShop(page) {
  shop.api.fetchGoodsListByCatId(cat_id, page, 10, function(response){
    console.log(response);
    var txt = "";
    var strSrc = "";
    if (response.data.length === 0) {
      var oH1 = document.createElement('h1');
      oH1.innerText = "当前分类下面没有商品";
      document.body.appendChild(oH1);
      return;
    }
    for (var i = 0; i < response.data.length; i++) {
      var obj = response.data[i];
      if( i % 3 == 0){
      		txt = "<span '>自营</span>";
      }else if( i % 2 ==0){
      		txt = "<span style='color:gray;border-color:gray'>广告</span>";
      }else{
      	 	txt = "";
      }
      if(i % 3 == 0){
      		strSrc = "<img class='strSrc' src='images/list/qqq.png'/> ";
      }else if( i % 2 == 0){
      		strSrc = "<img class='strSrc' src='images/list/qq1.png'/> ";
      }else if( i == 1){
      		strSrc = "<img class='strSrc' src='images/list/qq1.png'/> ";
      }else if(i%4 == 0){
      		strSrc = "<img class='strSrc' src='images/list/qqqq.png'/> ";
      }else{
      		strSrc ="";
      }
      var str ='<div><a href="detail.html?goods_id=' 
		      +obj.goods_id+ '"><img class="main-pic" src="'
		      +obj.goods_thumb+'"/></a><p>'+txt+''
		      +obj.goods_name+'</p>'+strSrc+'<em>'
		      +"¥:" + obj.price+ '<b></b></em><div class="right"><span></span><span><i><img src="images/list/gwc1.png" class="ipic1"/>️</i></span></div></div>';
      $('#container').append(str);
    }
  });
}
var page = 1;
showShop(page);
$(window).scroll(function(){
    var winH = $(window).height(),
        domH = $(document).height(),
        scrollTop = $(document).scrollTop();
        console.log(winH , domH , screenTop , page)
    if(domH - winH - scrollTop < 1){
      page++;
       if(page >= 20){
      		page = 20;
      		let x = 1;
      		if(x = 1){
      			$("#foot").css("background","#eee").text('- - - - - - 到 底 了 - - - - - -')
      			$("#end").css("display","block");
      		}
      		return false;
      }
      showShop(page);
     
    }else{
        return false;
    }               
});


$(document).keydown(function(ev){
	var ev = event || window.event;
	let isFocus=$("#sosoSelf").is(":focus"); 
	if(true==isFocus && ev.keyCode === 13){  
    location.href = 'search.html?search_text=' + $("#sosoSelf").val(); 
	}else{  
	    return; 
	}
})
