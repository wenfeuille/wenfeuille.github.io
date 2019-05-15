$(document).ready(function(){
  
  var $jqValue = $('.jqValue');
  var stupids = ['klaus ', 'david ', 'huy ', 'george '];
  var list = [];
  var formNumber = 0;
  
    var form1 = "<form id = 'choice1'>Enter your name: <select><option>klaus</option><option>david</option><option>huy</option><option>george</option></select></form>";
    var form2 = "<form id = 'choice2'>Enter your name: <select><option>klaus</option><option>david</option><option>huy</option><option>george</option></select></form>";
    var form3 = "<form id = 'choice3'>Enter your name: <select><option>klaus</option><option>david</option><option>huy</option><option>george</option></select></form>";
    var form4 = "<form id = 'choice4'>Enter your name: <select><option>klaus</option><option>david</option><option>huy</option><option>george</option></select></form>";
    var form5 = "<form id = 'choice5'>Enter your name: <select><option>klaus</option><option>david</option><option>huy</option><option>george</option></select></form>";
  
 var forms = [form1, form2, form3, form4, form5];

      
  $('#addName').click(function(){
      
      
    $jqValue.append(forms[formNumber]);
    var element = document.getElementById("choice");
    formNumber++;
      
  });
  
  $('#add').click(function(){
      var $form1 = $('#choice1 option:selected');
      var $form2 = $('#choice2 option:selected');
      var $form3 = $('#choice3 option:selected');
      var $form4 = $('#choice4 option:selected');
      var $form5 = $('#choice5 option:selected');
      
      var array = [$form1, $form2, $form3, $form4, $form5];
      
      for (i = 0; i < formNumber; i++){
          
          var currentChoice = array[i].text();
          list.push(currentChoice + ' ');
          
      }
    
      for (j=0; j<list.length; j++){
      
        for (i=0; i<stupids.length; i++){
      
            if (stupids[i]==list[j]){
                 delete stupids[i];
            }
        }
      }
      
      $('.jqValue').append(stupids);
  });
  
  

});
