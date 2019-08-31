$(document).ready(function(){
  
  
  var forms = [$('.entry1'), $('.entry2'), $('.entry3'), $('.entry4'), $('.entry5'), $('.entry6'), $('.entry7'), $('.entry8')];
  var formNumber = 0;
  var hepbnames = ['1st Hep B', '2nd Hep B', '3rd Hep B'];
  var rotarixnames = ['1st Rotarix', '2nd Rotarix'];
  var dtapnames = ['1st DTaP', '2nd DTaP', '3rd DTaP', '4th DTaP', '5th DTaP'];
  var selections = [];
  var formattedname =[];
  var hello = [];
  var dtapdates = [];
  var hepbdates = [];
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
        hepbdates.push(document.getElementById(dates[i]).value);
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
            missingvacs.push('1st DTaP dose by between 2 and 4 months old. (By ' + dtapdose1b.toLocaleDateString() + ').');
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

  birthday = new Date(birthdayvalue);
  var hepbdose1a = new Date(birthday.setHours(birthday.getHours()+6));
  var hepbdose1b = new Date(birthday.setDate(birthday.getDate()+1));
  birthday = new Date(birthdayvalue);
  var hepbentry1 = new Date(hepbdates[0]);
  var hepbentry2 = new Date(hepbdates[1]);
  var hepbentry3 = new Date(hepbdates[2]);
  var hepbdose2a = new Date(birthday.setDate(birthday.getDate()+28));
  birthday = new Date(birthdayvalue);
  var hepbdose2b = new Date(birthday.setMonth(birthday.getMonth()+4));
  birthday = new Date(birthdayvalue);
  var hepbdose3a = new Date(birthday.setMonth(birthday.getMonth()+6));
  birthday = new Date(birthdayvalue);
  var hepbdose3b = new Date(birthday.setMonth(birthday.getMonth()+19));
  birthday = new Date(birthdayvalue);

  for(i=0; i<hepbnames.length; i++){
    if(hepbdates.length==0){
      missingvacs.push('1st HepB dose within 12 hours of birth (' + hepbdose1a.toLocaleDateString() + ').');
      missingvacs.push('2nd HepB dose between 1 and 4 months old. (Between ' + hepbdose2a.toLocaleDateString() + ' and ' + hepbdose2b.toLocaleDateString() + ').');
      missingvacs.push('3rd HepB dose between 6 and 19 months old. (Between ' + hepbdose3a.toLocaleDateString() + ' and ' + hepbdose3b.toLocaleDateString() + ').');
      break;
    }

    if(hepbentry1-hepbdose1b>0){
      missingvacs.push('1st HepB dose administered too late. See physician.');
      break;
    }
    else{
      if(hepbdates.length==1){
        if(today-hepbdose2b>0){
          missingvacs.push('Missed 2nd HepB dose. See physician.');
          break;
        }
        else{
          if(today-hepbdose2a>0){
            missingvacs.push('2nd HepB dose between 1 and  4 months old. (By ' + hepbdose2b.toLocaleDateString() + ').');
          }
          else{
            missingvacs.push('2nd HepB dose between 1 and 4 months old. (Between ' + hepbdose2a.toLocaleDateString() + ' and ' + hepbdose2b.toLocaleDateString() + ').');
          }
          missingvacs.push('3rd HepB dose between 6 and 19 months old. (Between ' + hepbdose3a.toLocaleDateString() + ' and ' + hepbdose3b.toLocaleDateString() + ').');
          break;
        }
      }
    }

    if(hepbentry2-hepbdose2a<0){
      missingvacs.push('2nd HepB dose administered too early. See physician.');
      break;
    }
    else{
      if(hepbentry2-hepbdose2b>0){
        missingvacs.push('2nd HepB dose administered too late. See physician.');
        break;
      }
      else{
        if(hepbdates.length==2){
          if(today-hepbdose3b>0){
            missingvacs.push('Missed 3rd HepB dose. See physician.');
            break;
          }
          else{
            if(today-hepbdose3a>0){
              missingvacs.push('3rd HepB dose between 6 and 19 months. (By ' + hepbdose3b.toLocaleDateString() + ').');
            }
            else{
              missingvacs.push('3rd HepB dose between 6 and 19 months. (Bewteen ' + hepbdose3a.toLocaleDateString() + ' and ' + hepbdose3b.toLocaleDateString() + ').');
            }
            break;
          }
        }
      }
    }

    if(hepbentry3-hepbdose3a<0){
      missingvacs.push('3rd HepB dose administered too early. See physician.');
      break;
    }
    else{
      if(hepbentry3-hepbdose3b>0){
        missingvacs.push('3rd HepB dose administered too late. See physician.');
        break;
      }
      else{
        break;
      }
    }

  }

  birthday = new Date(birthdayvalue);
  var rotarixentry1 = new Date(rotarixdates[0]);
  var rotarixentry2 = new Date(rotarixdates[1]);
  var rotarixdose1a = new Date(birthday.setDate(birthday.getDate()+42));
  birthday = new Date(birthdayvalue);
  var rotarixdose1b = new Date(birthday.setDate(birthday.getDate()+140));
  birthday = new Date(birthdayvalue);
  var rotarixdose2a = new Date(rotarixentry1.setDate(rotarixentry1.getDate()+28));
  rotarixentry1 = new Date(rotarixdates[0]);
  var rotarixdose2b = new Date(birthday.setDate(birthday.getDate()+(24*7)));
  birthday = new Date(birthdayvalue);

  for(i=0; i<rotarixnames.length; i++){
    if(rotarixdates.length==0){
      if(today-rotarixdose1a>0){
        missingvacs.push('1st Rotarix dose between 6 and 20 weeks. (By ' + rotarixdose1b.toLocaleDateString() + ').');  
      }
      else{
        missingvacs.push('1st Rotarix dose between 6 and 20 weeks. (Between ' + rotarixdose1a.toLocaleDateString() + ' and ' + rotarixdose1b.toLocaleDateString() + ').');
      }
      missingvacs.push('2nd Rotarix dose 4 weeks after 1st Rotarix dose.');
      break;
    }

    if(rotarixentry1-rotarixdose1a<0){
      missingvacs.push('1st Rotarix dose administered too early. See physician.');
      break;
    }
    else{
      if(rotarixentry1-rotarixdose1b>0){
        missingvacs.push('1st Rotarix dose administered too late. See physician.');
        break;
      }
      else{
        if(rotarixdates.length==1){
          if(today-rotarixdose2b>0){
            missingvacs.push('Missed 2nd Rotarix dose. See physician.');
            break;
          }
          else{
            if(today-rotarixdose2a>0){
              missingvacs.push('2nd Rotarix dose 4 weeks after 1st Rotarix dose AND by 24 weeks old. (By ' + rotarixdose2b.toLocaleDateString() + ').');
            }
            else{
              missingvacs.push('2nd Rotarix dose 4 weeks after 1st Rotarix dose AND by 24 weeks old. (Between ' + rotarixdose2a.toLocaleDateString() + ' and ' + rotarixdose2b.toLocaleDateString() + ').');
            }
            break;
          }
        }
      }
    }

    if(rotarixentry2-rotarixdose2a<0){
      missingvacs.push('2nd Rotarix dose administered too early. See physician.');
      break;
    }
    else{
      if(rotarixentry2-rotarixdose2b>0){
        missingvacs.push('2nd Rotarix dose administered too late. See physician.');
        break;
      }
      else{
        if(today-rotarixdose2b>0){
          missingvacs.push('Missed 2nd Rotarix dose. See physician.');
          break;
        }
        else{
          missingvacs.push('2nd Rotarix right.');
          break;
        }
      }
    }

  }
  

    for (i=0; i<missingvacs.length; i++){
      $('.jqValue').append('<br/>' + missingvacs[i] + '<br/>');
    }

    /*$('.jqValue').append(dtapdose5b);*/




  })
  
  
});
