 function showAll(arr){
   for(var i = 0; i < arr.length; i++) {
     document.write('<li><a href = "' + (i+1) + '.html">' + arr[i] + '</a></li>');
   }
 }

 var menu = ["손영훈", "김준수", "유원준", "김재민"];
 showAll(menu);