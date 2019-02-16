// JavaScript Document
function createRequestObject() {
    var ro;
    var browser = navigator.appName;
    if(browser == "Microsoft Internet Explorer"){
        ro = new ActiveXObject("Microsoft.XMLHTTP");
    }else{
        ro = new XMLHttpRequest();
    }
    return ro;
}

var http = createRequestObject();


function sndReq(action){
	http.open('POST', action);
	http.setRequestHeader("Content-Type","text/plain; charset=UTF-8");
    http.onreadystatechange = handleResponse;
    http.send(null);
}



function handleResponse() {
    if(http.readyState == 4){
        var response = http.responseText;
		
        var update = new Array();

        if(response.indexOf('|' != -1)) {
            update = response.split('|');
			var i_p = 0;
			var j;
			var i = 0;
			while (i<update.length){				
					j= i+1;
					
		            document.getElementById(update[i]).innerHTML = update[(j)];
//					alert(update[i]+" "+j+" "+update.length);
					i= i+2;
//					i_p = i_p + 2;
//					i++;
					
			}
        }
    }
}

function DP_AJAX(url, formname) {
var f = false;
  if (!f && http) {
      var fields = new Array();
    if(formname){
      var ajax = formname;
    }
    //loop through form elements and retrieve field NAMEs and Values
    for (var x = 0; x < eval("document."+ajax+".elements.length"); x++){
     // join them into a string.
 eval("fields.push(document."+ajax+
".elements[x].name+'='+document."
+ajax+".elements[x].value)");
    }
    elem = 'errors';
    //sendf looks like "username=myusername&password=mypass"
    var sendf = fields.join('&');
    http.open("POST", url, true);
    http.onreadystatechange = handleResponse;
    http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    http.send(sendf);
    f = true;
  }
}
