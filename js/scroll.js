$(document).ready(function(){
$('a[href^="#"]').click(function(){ //берем все ссылки атрибут href которых начинается с #
if(document.getElementById($(this).attr('href').substr(1)) != null) { //на странице есть элемент с нужным нам id
$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 1000); // анимируем скролл к элементу
}     
return false;
});
});

for(var i=0; i<document.links.length; i++) {            /* рамка в Мозілі  */
   document.links[i].onfocus = function() {this.blur();};
}