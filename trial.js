$(document).ready(function(){
  
  var $jqValue = $('.jqValue');
  var stupids = ['michael', 'david', 'huy', 'george'];
  var list = [];
  
  $('div').click(function(){
  
  var $jqName = $('#name option:selected').text();
  
  for (var i = 0; i < stupids.length; i++){
    if(stupids[i] !== $jqName){
      list.push(stupids[i] + ' ');
    }
  }
  
  console.log(list);
  
  for (var i = 0; i < list.length; i++){
    $('.jqValue').append('<div>' + list[i] + '</div>');
  }
 
  
  });
});
