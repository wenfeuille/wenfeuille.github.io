$(document).ready(function(){
  
  var $jqValue = $('.jqValue');
  var stupids = ['michael', 'david', 'huy', 'george'];
  var list = [];
  
  $('#addName').click(function(){
    $('#winnie').append("<div></div>" + form); 
    numForms++;
    console.log(numForms);
  });

  $('#submit').click(function(){
  
  var $jqName = $('#name option:selected').text();
  
  for (var i = 0; i < stupids.length; i++){
    if(stupids[i] !== $jqName){
      list.push(stupids[i] + ' ');
    }
  }
  
  for (i = 0; i < list.length; i++){
    $('.jqValue').append('<div>' + list[i] + '</div>');
  }
  
  });

  
  var form = "<form>Enter your names: <select><option>michael</option><option>david</option><option>huy</option><option>george</option></select></form>";
  var numForms = 1;
  

});
