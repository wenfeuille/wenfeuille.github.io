$(document).ready(function(){
  var $jqName = $('.name');
  var $jqValue = $('.jqValue');
  
  $('div').click(function(){
        $jqValue.html('stupid' + ' ' + $jqName.val());
  });
});
