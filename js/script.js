/* AUTHOR : Sivanantham Gnanavel (13MX45) */
var scene=document.getElementById("scene"),parallax=new Parallax(scene),request=new XMLHttpRequest;request.open("GET","http://www.facebook.com",!0),request.onreadystatechange=function(){4===request.readyState&&(404===request.status?document.getElementById("social").style.display="none":!function(e,t,n){var s,a=e.getElementsByTagName(t)[0];e.getElementById(n)||(s=e.createElement(t),s.id=n,s.src="//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3&appId=937590722930961",a.parentNode.insertBefore(s,a))}(document,"script","facebook-jssdk"))},request.send();