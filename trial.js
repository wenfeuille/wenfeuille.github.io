$(document).ready(function(){
  
  
  var forms = [$('.entry1'), $('.entry2'), $('.entry3'), $('.entry4'), $('.entry5'), $('.entry6'), $('.entry7'), $('.entry8')];
  var formNumber = 0;
  var names = ['1st Hep B', '2nd Hep B', '3rd Hep B'];
  var rotarixnames = ['1st Rotarix', '2nd Rotarix'];
  var dtapnames = ['1st DTaP', '2nd DTaP', '3rd DTaP', '4th DTaP', '5th DTaP'];
  var selections = [];
  var formattedname =[];
  var hello = [];
  var dtapdates = [];
  var hepBdates = [];
  var rotarixdates = [];
  var hepBcount=0;
  var dates = ['date1', 'date2', 'date3', 'date4', 'date5', 'date6', 'date7', 'date8'];
  var trial;
  var missingvacs=[];
  var today = new Date();


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
    var selection5=$('#choice5 option:selected');
    var selection6=$('#choice6 option:selected');
    var selection7=$('#choice7 option:selected');
    var selection8=$('#choice8 option:selected');
    selected=[selection1, selection2, selection3, selection4, selection5, selection6, selection7, selection8];
      
    
    for (i=0; i<formNumber; i++){
      selections.push(selected[i]);
    }

    for (i=0; i<selections.length; i++){
      if(selections[i].text()=='Hep B'){
        hepBdates.push(document.getElementById(dates[i]).value);
      }
      else if(selections[i].text()=="Rotavirus (Rotarix/RV1)"){
        rotarixdates.push(document.getElementById(dates[i]).value);
      }
      else if(selections[i].text()=="DTaP"){
        dtapdates.push(document.getElementById(dates[i]).value);
      }
    }


    birthday = new Date(birthdayvalue);
    var dtapdose1a = new Date(birthday.setMonth(birthday.getMonth()+2));
    var dtapdose1b = new Date(dtapdose1a.setMonth(dtapdose1a.getMonth()+2));
    birthday = new Date(birthdayvalue);
    var dtapdose1a = new Date(birthday.setMonth(birthday.getMonth()+2));
    var dtapentry1 = new Date(dtapdates[0]);
    var dtapentry2 = new Date(dtapdates[1]);
    var dtapdose2a4wks = new Date(dtapentry1.setDate(dtapentry1.getDate()+28));
    birthday = new Date(birthdayvalue);
    var dtapdose2a4mos = new Date(birthday.setMonth(birthday.getMonth()+4));
    var dtapdose2a;
    if(dtapdose2a4wks-dtapdose2a4mos>0){
      dtapdose2a=dtapdose2a4wks;
    }
    else{
      dtapdose2a=dtapdose2a4mos;
    }
    dtapentry1 = new Date(dtapdates[0]);
    birthday = new Date(birthdayvalue);
    var dtapdose2b = new Date(birthday.setMonth(birthday.getMonth()+6));
    var dtapentry3 = new Date(dtapdates[2]);
    var dtapdose3a28wks = new Date(dtapentry2.setDate(dtapentry2.getDate()+28));
    dtapentry2 = new Date(dtapdates[1]);
    birthday = new Date(birthdayvalue);
    var dtapdose3a6mos = new Date(birthday.setMonth(birthday.getMonth()+6));
    var dtapdose3a;
    if (dtapdose3a28wks-dtapdose3a6mos>0){
      dtapdose3a = dtapdose3a28wks;
    }
    else {
      dtapdose3a = dtapdose3a6mos;
    }
    birthday = new Date(birthdayvalue);
    var dtapdose3b = new Date(birthday.setMonth(birthday.getMonth()+9));
    birthday = new Date(birthdayvalue);
    var dtapdose4a = new Date(birthday.setMonth(birthday.getMonth()+15));
    birthday = new Date(birthdayvalue);
    var dtapdose4b = new Date(birthday.setMonth(birthday.getMonth()+19));
    birthday = new Date(birthdayvalue);
    var dtapentry4 = new Date(dtapdates[3]);
    dtapdose5a = new Date(birthday.setFullYear(birthday.getFullYear()+5));
    birthday = new Date(birthdayvalue);
    dtapdose5b = new Date(birthday.setFullYear(birthday.getFullYear()+7));
    dtapentry5 = new Date(dtapdates[4]);

  for (i=0; i<dtapnames.length; i++){

    if(dtapentry1-dtapdose1a<0){
      missingvacs.push('1st DTaP dose administered too early. See physician.');
      break;
    }
    else if(dtapentry1-dtapdose1a>0){
      if(dtapentry1-dtapdose1b>0){
        missingvacs.push('1st DTaP dose administered too late. See physician.');
        break;
      }
      else{
        if(dtapdates.length==1){
          if(today-dtapdose2b>0){
              missingvacs.push('Missed 2nd DTaP dose. See physician.');
              break;  
          }
          else{
            if(today-dtapdose1a>0){
              missingvacs.push('2nd DTaP dose between 4 and 6 months old. (By ' + dtapdose2b.toLocaleDateString() + ').');
            }
            else{
              missingvacs.push('2nd DTaP dose between 4 and 6 months old. (Between ' + dtapdose2a.toLocaleDateString() + ' and ' + dtapdose2b.toLocaleDateString() + ').');
            }
            missingvacs.push('3rd DTaP dose between 6 and 9 months old AND at least 4 weeks after 2nd DTaP dose.');
            missingvacs.push('4th DTaP dose between 15 and 19 months old.');
            missingvacs.push('5th DTaP dose between 5 and 7 years old.');
            break;
          }
        }
      }
    }
    else{
      if(today-dtapdose1b>0){
        missingvacs.push('Missed 1st DTaP dose. See physician.');
        break;
      }
      else{
        if(dtapdates.length==0){
          if(today-dtapdose1a>0){
            missingvacs.push('1st DTaP dose between 2 and 4 months old. (By ' + dtapdose1b.toLocaleDateString() + ').');
          }
          else{
            missingvacs.push('1st DTaP dose between between 2 and 4 months old. (Between ' + dtapdose1a.toLocaleDateString() + ' and ' + dtapdose1b.toLocaleDateString() + ')');
          }
          missingvacs.push('2nd DTaP dose between 4 and 6 months old AND at least 4 weeks after 1st DTaP dose.');
          missingvacs.push('3rd DTaP dose between 6 and 9 months old AND at least 4 weeks after 2nd DTaP dose.');
          missingvacs.push('4th DTaP dose between 15 and 19 months old.');
          missingvacs.push('5th DTaP dose between 5 and 7 years old.');
          break;
        }
      }
    }

    if(dtapentry2-dtapdose2a<0){
      missingvacs.push('2nd DTaP dose administered too early. See physician.');
      break;
    }
    else{
      if(dtapentry2-dtapdose2b>0){
        missingvacs.push('2nd DTaP dose administered too late. See physician');
        break;
      }
      else{
        if(dtapdates.length==2){
          if(today-dtapdose3b>0){
            missingvacs.push('Missed 3rd DTaP dose. See physician.');
            break;
          }
          else{
            if(today-dtapdose3a>0){
              missingvacs.push('3rd DTaP dose between 6 and 9 months old. (By ' + dtapdose3b.toLocaleDateString() + ').');
            }
            else{
              missingvacs.push('3rd DTaP dose between 6 and 9 month old. (Between ' + dtapdose3a.toLocaleDateString() + ' and ' + dtapdose3b.toLocaleDateString() + ').');
            }
            missingvacs.push('4th DTaP dose between 15 and 19 months old.');
            missingvacs.push('5th DTaP dose between 5 and 7 years old.');
            break;
          } 
        }
      }
    }

    if(dtapentry3-dtapdose3a<0){
      missingvacs.push('3rd DTaP dose administered too early. See physician.');
      break;
    }
    else{
      if(dtapentry3-dtapdose3b>0){
        missingvacs.push('3rd DTaP dose administered too late. See physician.');
        break;
      }
      else{
        if(dtapdates.length==3){
          if(today-dtapdose4b>0){
            missingvacs.push('Missed 4th DTaP dose. See physician.');
            break;
          }
          else{
            if(today-dtapdose4a>0){
              missingvacs.push('4th DTaP dose between 15 and 19 months old. (By ' + dtapdose4b.toLocaleDateString() + ').');
            }
            else{
              missingvacs.push('4th DTaP dose between 15 and 19 months old. (Between ' + dtapdose4a.toLocaleDateString() + ' and ' + dtapdose4b.toLocaleDateString() + ').');
            }
            missingvacs.push('5th DTaP dose between 5 and 7 years old.');
            break;
          }
        }
      }
    }

    if(dtapentry4-dtapdose4a<0){
      missingvacs.push('4th DTaP dose administered too early. See physician.');
      break;
    }
    else{
      if(dtapentry4-dtapdose4b>0){
        missingvacs.push('4th DTaP dose administered too late. See physician.');
        break;
      }
      else{
        if(dtapdates.length==4){
          if(today-dtapdose5b>0){
            missingvacs.push('Missed 5th DTaP dose. See physician.');
            break;
          }
          else{
            if(today-dtapdose5a>0){
              missingvacs.push('5th DTaP dose between 5 and 7 years old. (By ' + dtapdose5b.toLocaleDateString() + ').');
            }
            else{
              missingvacs.push('5th DTaP dose between 5 and 7 years old. (Between ' + dtapdose5a.toLocaleDateString() + ' and ' + dtapdose5b.toLocaleDateString() + ').');
            }
            break;
          }
        }
      }
    }

    if(dtapentry5-dtapdose5a<0){
      missingvacs.push('5th DTaP dose administered too early. See physician.');
      break;
    }
    else{
      if(dtapentry5-dtapdose5b>0){
        missingvacs.push('5th DTaP dose administered too late. See physician.');
        break;
      }
      else{
      }
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

    if (rotarixdates.length>0){
      var firstdose = new Date(rotarixdates[0]);
      if(firstdose.getTime()-birthday.getTime()>6*7*24*60*60*1000 && firstdose.getTime()-birthday.getTime()<20*7*24*60*60*1000){
        var firstrotarixindex=rotarixnames.indexOf('1st Rotarix');
        rotarixnames.splice(firstrotarixindex,1);
      }
      else if(firstdose.getTime()-birthday.getTime()<6*7*24*60*60*1000){
        var firstrotarixindex=rotarixnames.indexOf('1st Rotarix');
        rotarixnames.splice(firstrotarixindex,1);
        var secondrotarixindex=rotarixnames.indexOf('2nd Rotarix');
        rotarixnames.splice(secondrotarixindex,1);
        missingvacs.push('1st dose Rotarix administered too early. Speak to physician.');
      }
    }

    if (rotarixdates.length>1){
      var firstdose = new Date(rotarixdates[0]);
      var seconddose = new Date(rotarixdates[1]);
      if(seconddose.getTime()-firstdose.getTime()>4*7*24*60*60*1000 && seconddose.getTime()-birthday.getTime()<24*7*24*60*60*1000){
        var secondrotarixindex=rotarixnames.indexOf('2nd Rotarix');
        rotarixnames.splice(secondrotarixindex,1);
      }
    }

    
  
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
      var nextdose3b;
      if (hepBdates.length>1){
        var date = new Date(hepBdates[1]);
        nextdose3 = new Date(date.setDate(date.getDate()+57));
      }
      else {
        nextdose3 = new Date(birthday.setMonth(birthday.getMonth()+1));
        nextdose3 = new Date(birthday.setDate(birthday.getDate()+86));
      }

      birthday = new Date(birthdayvalue);
      var nextdose3b = new Date(birthday.setMonth(birthday.getMonth()+18));
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
        missingvacs.push('3rd dose Hep B between ' + nextdose3.toLocaleDateString() + ' and ' + nextdose3b.toLocaleDateString());
      }
    }



    var rotarixdose1a = new Date(birthday.setDate(birthday.getDate()+43));
    birthday = new Date(birthdayvalue);
    var rotarixdose1b = new Date(birthday.setDate(birthday.getDate()+141))
    birthday = new Date(birthdayvalue);
    var seconddosea = new Date(rotarixdates[0]);
    var rotarixdose2a = new Date(seconddosea.setDate(seconddosea.getDate()+29));
    var rotarixdose2b = new Date(birthday.setDate(birthday.getDate()+24*7+1));
    birthday = new Date(birthdayvalue);

    if (rotarixnames[0]=='1st Rotarix' && today.getTime()-birthday.getTime()<20*7*24*60*60*1000){
      if (today.getTime()-rotarixdose1a.getTime()>0){
        missingvacs.push('1st dose Rotarix by ' + rotarixdose1b.toLocaleDateString());
        missingvacs.push('2nd dose Rotarix 4 weeks after 1st dose Rotarix');
      }
      else {
        missingvacs.push('1st dose Rotarix between ' + rotarixdose1a.toLocaleDateString() + ' and ' + rotarixdose1b.toLocaleDateString());
        missingvacs.push('2nd dose Rotarix 4 weeks after 1st dose Rotarix')
      }
    }
    else if (rotarixnames[0]=='2nd Rotarix' && today.getTime()-birthday.getTime()<24*7*24*60*60*1000){
    var rotarixdate2 = new Date(rotarixdates[1]);
      if (rotarixdate2.getTime()-birthday.getTime()<24*7*24*60*60*1000){
        if (today.getTime()-rotarixdose2a.getTime()>0){
          missingvacs.push('2nd dose Rotarix by ' + rotarixdose2b.toLocaleDateString());
          birthday = new Date(birthdayvalue);
        }
        else {
          missingvacs.push('2nd dose Rotarix between ' + rotarixdose2a.toLocaleDateString() + ' and ' + rotarixdose2b.toLocaleDateString());
        }
      }
      else {
        missingvacs.push('2nd dose Rotarix given too late. See physician.');
      }
    }
  

    for (i=0; i<missingvacs.length; i++){
      $('.jqValue').append('<br/>' + missingvacs[i] + '<br/>');
    }

    $('.jqValue').append(dtapdose5b);




  })
  
  
});
