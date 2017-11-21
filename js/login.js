var login = document.getElementById("login");
$(function(){
	$("#username").focus(function(){
		var username = $('input[name="username"]').val();
		if(username == "邮箱／手机／用户名"){
			this.value = "";
		}
	});
	$("#password").focus(function(){
		var password = $('input[name="password"]').val();
		this.type = "password";
		if(password == "请输入密码"){
			this.value = "";
		}
	});
  login.addEventListener("touchstart",function(){
    var username = $('input[name="username"]').val();
    var password = $('input[name="password"]').val();
    console.log([username, password]);
    $.ajax({
      "url": "http://h6.duchengjiu.top/shop/api_user.php",
      "type": "POST",
      "data": {
        "status": "login",
        "username": username,
        "password": password
      },
      "dataType": "json",
      "success": function(response) {
        console.log(response);
        if (response.code === 0) {
          var data = response.data;
          for (var prop in data) {
            if (data.hasOwnProperty(prop)) {
              localStorage.setItem(prop, data[prop]);
            }
        }
          var callbackurl = location.hash.substr(13);
          if(callbackurl){
          	location.assign(callbackurl);
          }else{
          	location.assign('index.html');
          }        
        }
      }
    });
  });
});