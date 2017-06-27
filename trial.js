$(document).ready(function(){
  var $jqName = $('.name');
  var $jqValue = $('.jqValue');
  var stupids = ['michael', 'david', 'huy'];

  
  $('div').click(function(){
    for(var i = 0; i < stupids.length; i++){
      if(stupids[i] === $jqName.val()){
        $jqValue.html('stupid' + ' ' + stupids[i]);
        i = stupids.length;
      }
      else{
        $jqValue.html($jqName.val());
      }
      
  
    }
