
shop.api.fetchCart(function(response){
	console.log(response);
	for (var i = 0; i < response.data.length; i++) {
		var obj = response.data[i];
		var boxStr = "<div class='box'><div class='box-top'><span class='foot-check'><input type='checkbox' class='check' id='Check"+obj.goods_id+"' value='' /><label for='Check"+obj.goods_id+"'></label></span><div class='cart-right'><i>领券</i><i class='edit'>编辑</i></div></div><div class='box-bottom'><span class='pic'><img src='"+ obj.goods_thumb+"'/></span><div class='cart-txt'><div class='txt2'><span class='add'>+</span><input type='text' class='num' value='"+obj.goods_number+"' /><span class='sub'>-</span></div><p class='txt1-p'>"+ obj.goods_name +"</p><em class='dj txt1-e'>¥:"+ obj.goods_price +"</em><i class='txt1-i'>×"+obj.goods_number+"️</i></div><div class='dele'>删除</div></div></div>";
		$("#mian").append($(boxStr));
	}
	var edit = document.getElementsByClassName("edit");
	var boxBot = document.getElementsByClassName("box-bottom");
	var cartTxt = document.getElementsByClassName("cart-txt");
	var txtTow = document.getElementsByClassName("txt2");
	var txtP = document.getElementsByClassName("txt1-p");
	var txtE = document.getElementsByClassName("txt1-e");
	var txtI = document.getElementsByClassName("txt1-i");
	var add = document.getElementsByClassName("add");
	var sub = document.getElementsByClassName("sub");
	var num = document.getElementsByClassName("num");
	for(var i = 0;i < boxBot.length; i++){
    //添加监听
    (function(m){
       edit[m].addEventListener("touchstart",function(){
       	if(edit[m].innerText == "编辑" ){
       		console.log(1);
					cartTxt[m].style.width="calc(100% - 252px)";
					txtTow[m].style.display = "block";
					txtP[m].style.display = "none";
					txtE[m].style.display = "none";
					txtI[m].style.display = "none";
					edit[m].innerText = "完成";
       	}else if(edit[m].innerText == "完成"){
       		cartTxt[m].style.width="calc(100% - 192px)";
					edit[m].innerText = "编辑";
					txtTow[m].style.display = "none";
					txtP[m].style.display = "block";
					txtE[m].style.display = "block";
					txtI[m].style.display = "block";
       	}
				
       },false);
     })(i);
  }
});
