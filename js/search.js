//获取参数search_text, 然后将内容放到搜索框
var searchText = $.getQueryString('search_text');
console.log(searchText);
var page = 1;
//调用搜索商品接口
function showShop (page){
  shop.api.searchGoods({
    "search_text": searchText,
    "page": page,
    "pagesize": 20,
    "callback": function(response) {
      console.log(response);
      if (response.data.length === 0) {
		     var oH1 = document.createElement('h1');
		      oH1.innerText = "当前分类下面没有商品";
		      document.getElementById("container").appendChild(oH1);
		      document.getElementById("container").style.textAlign = 'center';
		      $("#foot").css("background","#eee").text('- - - - - - 到 底 了 - - - - - -')
		      oH1.style.fontSize = "30px";
		      return;
		    }
		    for (var i = 0; i < response.data.length; i++) {
		      var obj = response.data[i];
		      var str ='<div><a href="detail.html?goods_id=' 
				      +obj.goods_id+ '"><img class="main-pic" src="'
				      +obj.goods_thumb+'"/></a><p>'
				      +obj.goods_name+'</p><em>'
				      +"¥:" + obj.price+ '<b></b></em><div class="right"><span></span><span><i><img src="images/list/gwc1.png" class="ipic1"/>️</i></span></div></div>';
		      $('#container').append(str);
		    }
		  }
  })
}

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
