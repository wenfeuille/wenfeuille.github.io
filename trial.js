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
      var nextdose1 = new Date(birthday.setDate(birthday.getDate()+2));
      birthday = new Date(birthdayvalue);
      var nextdose2a;
      var nextdose2b;

      if (hepBdates.length>0){
        var date = new Date(hepBdates[0]);
        nextdose2a = new Date(date.setDate(date.getDate()+29));
        var date2 = new Date(nextdose2a);
        nextdose2b = new Date(date2.setMonth(date2.getMonth()+1));
      }
      else {
        nextdose2a = new Date(birthday.setDate(birthday.getDate()+30));
        nextdose2b = new Date(birthday.setMonth(birthday.getMonth()+1));
        birthday = new Date(birthdayvalue);
      }

      var nextdose3;
      if (hepBdates.length>1){
        var date = new Date(hepBdates[1]);
        nextdose3 = new Date(date.setDate(date.getDate()+57));
      }
      else {
        nextdose3 = new Date(birthday.setMonth(birthday.getMonth()+1));
        nextdose3 = new Date(birthday.setDate(birthday.getDate()+86));
      }
      
      var today = new Date();
      
      if (names[i]=='1st Hep B'){
        missingvacs.push('1st dose Hep B by ' + nextdose1.toLocaleDateString());
        birthday = new Date(birthdayvalue);
      }
      else if (names[i]=='2nd Hep B'){
        if (nextdose2a.getTime()-today.getTime()<0){
          missingvacs.push('2nd dose Hep B by ' + today.toLocaleDateString());
        }
        else {
          missingvacs.push('2nd dose Hep B between ' + nextdose2a.toLocaleDateString() + ' and ' + nextdose2b.toLocaleDateString());
        }
      }
      else if (names[i]=='3rd Hep B'){
        missingvacs.push('3rd dose Hep B after ' + nextdose3.toLocaleDateString());
        birthday = new Date(birthdayvalue);
      }
    }

    for (i=0; i<missingvacs.length; i++){
      $('.jqValue').append(missingvacs[i] + '<br/>');
    }


  })
  
  
});
