		//设置cookie
			function setCookie(name,value,expires,path,domain,secure){
			var cookieText = encodeURIComponent(name)+"="+encodeURIComponent(value);
			//失效日期
			if(expires instanceof Date){
				cookieText += "; expires="+expires;
			}
			
			if(path){
				cookieText += "; path="+path;
			}
			
			if(domain){
				cookieText += "; domain="+domain;
			}
			
			if(secure){
				cookieText += "; secure";
			}
			document.cookie = cookieText;//设置cookie；
			return document.cookie;
		}
	
	//获取cookie
		function getCookie(name){
			//name=george; pass=123456
			//获取到整个cookie
			var cookie  = document.cookie;
			var arr = cookie.split("; ");
			for(var i=0;i<arr.length;i++){
				//name=george
				var arr2 = arr[i].split("=");
				if(arr2.length>=2){
					if(arr2[0]==name){
						return arr2[1];
					}
				}
			}
			return "";
		}
		
		//删除cookie，根据失效日期来删除
		function removeCookie(name){
			// name= ; expires
			var d = new Date();
			document.cookie = decodeURIComponent(name) + "=; expires="+d;
			return document.cookie;
		}