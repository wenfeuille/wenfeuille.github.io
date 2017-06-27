$(document).ready(function(){
  var $jqName = $('.name');
  var $jqValue = $('.jqValue');
  var stupids = ['michael', 'david', 'huy', 'george'];
  var list = [];
  
  $('div').click(function(){

  for (var i = 0; i < stupids.length; i++){
    if(stupids[i] !== $jqName.val()){
      list.push(stupids[i] + ' ');
    }
  }
  
  for (var i = 0; i < list.length; i++){
    $('.jqValue').append('<div>' + list[i] + '</div>');
  }
 
  
  });
});
