$(document).ready(function(){
  
  
  var forms = [$('.entry1'), $('.entry2'), $('.entry3'), $('.entry4')];
  var formNumber = 0;
  var names = ['1st Hep B', '2nd Hep B', '3rd Hep B'];
  var selections = [];
  var formattedname =[];
  var hello = [];
  var hepBdates = [];
  var hepBcount=0;
  var dates = ['date1', 'date2', 'date3', 'date4'];
  var trial;
  var missingvacs=[];


  $('#addName').click(function(){
      
      
    $(forms[formNumber]).show();
    formNumber++;
      
  });

  $('#add').click(function(){

    var birthdayvalue = document.getElementById("birthday1").value;
    var birthday = new Date(birthdayvalue);

    var selection1=$('#choice1 option:selected');
    var selection2=$('#choice2 option:selected');
    var selection3=$('#choice3 option:selected');
    var selection4=$('#choice4 option:selected');
    selected=[selection1, selection2, selection3, selection4];
      
    
    for (i=0; i<formNumber; i++){
      selections.push(selected[i]);
    }

    for (i=0; i<selections.length; i++){
      if(selections[i].text()=='Hep B'){
        hepBdates.push(document.getElementById(dates[i]).value);
      }
    }

    if (hepBdates.length>0){
      var firstdose = new Date(hepBdates[0]);
      if(firstdose.getTime()-birthday.getTime()<24*60*60*1000+1){
        var firsthepbindex=names.indexOf('1st Hep B');
        names.splice(firsthepbindex,1);
      }
    }

    if (hepBdates.length>1){
      var seconddose = new Date(hepBdates[1]);
      if(seconddose.getTime()-birthday.getTime()<2*30*24*60*60*1000+1 && seconddose.getTime()-birthday.getTime()>30*24*60*60*1000-1){
        var secondhepbindex=names.indexOf('2nd Hep B');
        names.splice(secondhepbindex,1);
      }
    }

    if (hepBdates.length>2){
      var thirddose = new Date(hepBdates[2]);
      if(thirddose.getTime()-birthday.getTime()>6*30*24*60*60*1000+1){
        var thirdhepbindex=names.indexOf('3rd Hep B');
        names.splice(thirdhepbindex,1);
      }
    }

    var firstdose = new Date(hepBdates[0]);
  
    for (i=0; i<names.length; i++){
      if (names[i]=='1st Hep B'){
        missingvacs.push('1st dose Hep B: within 24 hours of birth');
      }
      else if (names[i]=='2nd Hep B'){
        missingvacs.push('2nd dose Hep B: 1-2 months after birth');
      }
      else if (names[i]=='3rd Hep B'){
        missingvacs.push('3rd dose Hep B: 6 months after birth');
      }
    }

    for (i=0; i<missingvacs.length; i++){
      $('.jqValue').append(missingvacs[i] + '<br/>');
    }


  })
  
  
});
