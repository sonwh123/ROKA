 var Body = {
   setBackgroundColor : function(color) {
     document.querySelector('body').style.backgroundColor = color;
   },
   setColor : function(color) {
     document.querySelector('body').style.color = color;
   }
 }
 var Links = {
   setColor : function(color) {
     var lis = document.getElementsByTagName('a');
     for(var i=0; i < lis.length; i++){
       lis[i].style.color = color;
     }
   }
 }
 function changeDayNight(c1, c2, self) {
   Body.setBackgroundColor(c1);
   Body.setColor(c2);
   Links.setColor(c2);
   document.querySelector('h1').style.borderBottomColor = c2;
   document.getElementById('grid').querySelector('ol').style.borderRightColor = c2;
   if(c1 === 'black'){
     self.value = 'day';
   } else {
     self.value = 'night';
   }
 }

 function nightDayHandler(self) {
   if(self.value === 'night'){
     changeDayNight('black', 'white', self);
   } else {
     changeDayNight('white', 'black', self);
   }
 }