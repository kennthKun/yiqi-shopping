var goods_id = $.getQueryString('goods_id');
shop.api.fetchGoodsDetail(goods_id, function(response){
	console.log(response);
	for (var i = 0; i < 1; i++) {
      var obj = response.data[i];
      var outer = document.createElement("div");
      var buyNum = 1;
      var cat_id = obj.cat_id;
      $('#detail').append('<img src="' +obj.goods_thumb+ '"/>');
      $('.txt').append('<div class="txt-left"><p>' +obj.goods_desc+ '</p><a class="title">' +obj.goods_name+ '</a><span class="price">¥<span class="priceNam">' +obj.price+ '</span></span></div><div class="txt-right"><span></span><i>关注</i>9999+</div>');	
	}
	var cat_id = obj.cat_id;
	var page =  1;
	var num = 6;
	shop.api.fetchGoodsListByCatId(cat_id, page, num, function(response){
	    console.log(response);
	    for (var i = 0; i < response.data.length; i++) {
		    var obj = response.data[i];
		    if(obj.goods_id == goods_id){
		    		num = 10;
		    		continue;
		    }
		    var str ='<div><a href="detail.html?goods_id=' 
				      +obj.goods_id+ '"><img class="main-pic" src="'
				      +obj.goods_thumb+'"/></a><p>'
				      +obj.goods_name+'</p><em>'
				      +"¥:" + obj.price+ '<b></b></em>';
		    $('#shopList').append(str);
	    }
	});
});
var topRight= document.getElementById("topRight");
topRight.addEventListener("touchstart",function(){
	$("#topList").slideToggle();
},false);
var buyNum = 1;
document.getElementById("add").addEventListener("touchstart",function(){
  buyNum++;
  if(buyNum > 10){
   buyNum=10;
  }
  $(".num").val(buyNum);
});
document.getElementById("sub").addEventListener("touchstart",function(){
  buyNum--;
  if(buyNum < 1){
   buyNum=1;
  }
	$(".num").val(buyNum);
});
var addCart = document.getElementsByClassName("add-cart")[0];
addCart.addEventListener("touchstart",function(){
	var number = $(".num").val();
	shop.api.updateCart(goods_id, number, function(){
		if(!localStorage.token){
      location.href='login.html#callbackurl='+location.href;
      return;
    }
		$("#boxTxt").show();
      $('#stopdown').click(function(){
      $('#boxTxt').hide();
    });
    $.ajax({
      "url": "http://h6.duchengjiu.top/shop/api_cart.php?token="+localStorage.token,
       "type": "POST",
       "data": {
       "goods_id": goods_id,
           "number": function(){
                return buyNum;
            }
        },
       "dataType":"json",
        "success": function(response){
            console.log(response);
        }
     });
	})
},false);

