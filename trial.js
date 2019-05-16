$(document).ready(function(){
  
  
  var forms = [$('.entry1'), $('.entry2'), $('.entry3'), $('.entry4')];
  var formNumber = 0;
  var names = ['klaus', 'george', 'huy', 'david'];
  var selections = [];
  var formattedname =[];
  var hello = [];

  $('#addName').click(function(){
      
      
    $(forms[formNumber]).show();
    formNumber++;
      
  });

  $('#add').click(function(){


    var selection1=$('#choice1 option:selected');
    var selection2=$('#choice2 option:selected');
    var selection3=$('#choice3 option:selected');
    var selection4=$('#choice4 option:selected');
    selected=[selection1, selection2, selection3, selection4];
      
    
    for (i=0; i<formNumber; i++){
      selections.push(selected[i]);
    }

    
    for (j=0; j<selections.length; j++){
      for (i=0; i<names.length; i++){  
        if(selections[j].text()==names[i]){
          names.splice(i,1);
        } 
      }
    }
  

    for (i=0; i<names.length; i++){
      hello[i]=names[i].concat(' ');
    }


    $('.jqValue').append(hello);
    var datevalue = document.getElementById("date1").value;
    $('.jqValue').append(datevalue);


  })
  
  
});
