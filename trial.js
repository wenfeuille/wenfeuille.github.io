$(document).ready(function(){
  
  
  var forms = [$('.entry1'), $('.entry2'), $('.entry3'), $('.entry4'), $('.entry5'), $('.entry6'), $('.entry7'), $('.entry8')];
  var formNumber = 0;
  var selections = [];
  var dtapdates = [];
  var hepbdates = [];
  var hibdates = [];
  var pedvaxdates = [];
  var rotarixdates = [];
  var rotateqdates = [];
  var dates = ['date1', 'date2', 'date3', 'date4', 'date5', 'date6', 'date7', 'date8'];
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
      else if(selections[i].text()=="HiB (ActHIB, Pentacel, or Hiberix)"){
        hibdates.push(document.getElementById(dates[i]).value);
      }
      else if(selections[i].text()=="HiB (PedvaxHIB)"){
        pedvaxdates.push(document.getElementById(dates[i]).value);
      }
      else if(selections[i].text()=="Rotavirus (RotaTeq)"){
        rotateqdates.push(document.getElementById(dates[i]).value);
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
    var dtapdose5a = new Date(birthday.setFullYear(birthday.getFullYear()+5));
    birthday = new Date(birthdayvalue);
    var dtapdose5b = new Date(birthday.setFullYear(birthday.getFullYear()+8));
    dtapentry5 = new Date(dtapdates[4]);
    birthday = new Date(birthdayvalue);
    var months4 = new Date(birthday.setMonth(birthday.getMonth()+4));
    birthday = new Date(birthdayvalue);
    var months12 = new Date(birthday.setMonth(birthday.getMonth()+12));
    birthday = new Date(birthdayvalue);
    var months15 = new Date(birthday.setMonth(birthday.getMonth()+15));
    birthday = new Date(birthdayvalue);
    var year1 = new Date(birthday.setFullYear(birthday.getFullYear()+1));
    birthday = new Date(birthdayvalue);
    var year4 = new Date(birthday.setFullYear(birthday.getFullYear()+4));
    birthday = new Date(birthdayvalue);
    var dtapentry36mos = new Date(dtapentry3.setMonth(dtapentry3.getMonth()+6));
    dtapentry3 = new Date(dtapdates[2]);

  for (i=0; i<5; i++){

    if(dtapdates.length==0){
      if(today>dtapdose1b){
        if(today>months4 && today<year4){
          missingvacs.push('Missed 1st DTaP dose. Catch up schedule:');
          missingvacs.push('1st DTaP dose today.');
          missingvacs.push('2nd DTaP dose 4 to 8 weeks after 1st DTaP dose.');
          missingvacs.push('3rd DTaP dose 4 to 8 weeks after 2nd DTaP dose.');
          missingvacs.push('4th DTaP dose 6 to 10 months after 3rd DTaP dose.');
          missingvacs.push('5th DTaP dose between 4 and 6 years old.');
          break;
        }
        missingvacs.push('Missed 1st DTaP dose.');
        break;
      }
      else{
        if(today>dtapdose1a){
          missingvacs.push('1st DTaP dose by between 2 and 4 months old. (By ' + dtapdose1b.toLocaleDateString() + ').');
        }
        else{
          missingvacs.push('1st DTaP dose between between 2 and 4 months old. (Between ' + dtapdose1a.toLocaleDateString() + ' and ' + dtapdose1b.toLocaleDateString() + ').');
        }
        missingvacs.push('2nd DTaP dose between 4 and 6 months old AND at least 4 weeks after 1st DTaP dose.');
        missingvacs.push('3rd DTaP dose between 6 and 9 months old AND at least 4 weeks after 2nd DTaP dose.');
        missingvacs.push('4th DTaP dose between 15 and 19 months old.');
        missingvacs.push('5th DTaP dose between 5 and 7 years old.');
        break;
      }
    }

    if(dtapentry1<dtapdose1a){
      missingvacs.push('1st DTaP dose administered too early. See physician.');
      break;
    }
    else{
      if(dtapentry1>dtapdose1b){
        missingvacs.push('1st DTaP dose administered too late. See physician.');
        break;
      }
      else{
        if(dtapdates.length==1){
          if(today>dtapdose2b){
            var dtapentry14wks = new Date(dtapentry1.setDate(dtapentry1.getDate()+28));
            dtapentry1 = new Date(dtapdates[0]);
            var dtapentry18wks = new Date(dtapentry1.setDate(dtapentry1.getDate()+56));
            dtapentry1 = new Date(dtapdates[0]); 
            if(today>months4 && today<year4){
              missingvacs.push('Missed 2nd DTaP dose. Catch up schedule: '); 
              if(today>dtapentry14wks){
                missingvacs.push('2nd DTaP dose today.');
              }
              else{
                missingvacs.push('2nd DTaP dose 4 to 8 weeks after 1st DTaP dose. (Between ' + dtapentry14wks.toLocaleDateString() + ' and ' + dtapentry18wks.toLocaleDateString() + ').');
              }
              missingvacs.push('3rd DTaP dose 4 to 8 weeks after 2nd DTaP dose.');
              missingvacs.push('4th DTaP dose 6 to 10 monhts after 3rd DTaP dose.');
              missingvacs.push('5th DTaP dose between 4 and 6 years old.');
              break;
            }
            else{
              missingvacs.push('Missed 2nd DTaP dose. See physician.');
              break; 
            } 
          }
          else{
            if(today>dtapdose1a){
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

    if(dtapentry2<dtapdose2a){
      missingvacs.push('2nd DTaP dose administered too early. See physician.');
      break;
    }
    else{
      if(dtapentry2>dtapdose2b){
        missingvacs.push('2nd DTaP dose administered too late. See physician');
        break;
      }
      else{
        if(dtapdates.length==2){
          if(today-dtapdose3b>0){
            var dtapentry24wks = new Date(dtapentry2.setDate(dtapentry2.getDate()+28));
            dtapentry2 = new Date(dtapdates[1]);
            var dtapentry28wks = new Date(dtapentry2.setDate(dtapentry2.getDate()+56));
            dtapentry2 = new Date(dtapdates[1]);
            if(today>months4 && today<months12){
              missingvacs.push('Missed 3rd DTaP dose. Catch up schedule:');
              if(today>dtapentry24wks){
                missingvacs.push('3rd DTaP dose today.');
              }
              else{
                missingvacs.push('3rd DTaP dose 4 to 8 weeks after 2nd DTaP dose. (Between ' + dtapentry24wks.toLocaleDateString() + ' and ' + dtapentry28wks.toLocaleDateString() + ').');
              }
              missingvacs.push('4th DTaP dose at least 6 months after 3rd DTaP dose AND at least 15 months old.');
              missingvacs.push('5th DTaP dose between 5 and 7 years old.');
              break;
            }
            else if(today>year1 && today<year4){
              missingvacs.push('Missed 3rd DTaP dose. Catch up schedule:');
              if(today>dtapentry24wks){
                missingvacs.push('3rd DTaP dose today.');
              }
              else{
                missingvacs.push('3rd DTaP dose 4 to 8 weeks after 2nd DTaP dose. (Bewteen ' + dtapentry24wks.toLocaleDateString() + ' and ' + dtapentry28wks.toLocaleDateString() + ').');
              }
              missingvacs.push('4th DTaP dose at least 6 months after 3rd DTaP dose.');
              missingvacs.push('5th DTaP dose between 5 and 7 years old.');
              break;
            }
            else{
              missingvacs.push('Missed 3rd DTaP dose. See physician.');
              break;
            }
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
            if(today>year1 && today<year4){
              missingvacs.push('Missed 4th DTaP dose. Catch up schedule:');
              if(today>dtapentry36mos){
                if(today>months12 && today<months15){
                  missingvacs.push('4th DTaP dose between 15 and 18 months old. (Between ' + dtapdose4a.toLocaleDateString() + ' and ' + dtapdose4b.toLocaleDateString() + ').');
                  missingvacs.push('5th DTaP dose at least 6 months after 4th DTaP dose AND between 5 and 7 years old.');
                }
                else{
                  missingvacs.push('4th DTaP dose today.');
                  missingvacs.push('5th DTaP dose at least 6 months after 4th DTaP dose AND between 5 and 7 years old.');
                }
                break;
              }
              else{
                missingvacs.push('4th DTaP dose at least 6 months after 3rd DTaP dose.');
                missingvacs.push('5th DTaP dose at least 6 months after 4th DTaP dose AND between 5 and 7 years old.');
                break;
              }
            }
            else{
              missingvacs.push('Missed 4th DTaP dose. See physician.');
              break;
            }
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
  var years11 = ((11*365)+2)*24*60*60*1000;
  var years15 = ((15*365)+3)*24*60*60*1000;

  for(i=0; i<3; i++){
    if(hepbdates.length==0){
      if(today-hepbdose1b>0){
        if(today.getTime()-birthday.getTime()>years11 && today.getTime()-birthday.getTime()<years15){
          missingvacs.push('Catch up HepB: ');
          missingvacs.push('1st dose Recombivax HB today.');
          missingvacs.push('2nd dose Recombivax HB 4 to 6 months after 1st Recombivax HB dose.');
        }
        missingvacs.push('Missed 1st HepB dose. See physician.');
        break;
      }
      else{
        missingvacs.push('1st HepB dose within 12 hours of birth (' + hepbdose1a.toLocaleDateString() + ').');
        missingvacs.push('2nd HepB dose between 1 and 4 months old. (Between ' + hepbdose2a.toLocaleDateString() + ' and ' + hepbdose2b.toLocaleDateString() + ').');
        missingvacs.push('3rd HepB dose between 6 and 19 months old. (Between ' + hepbdose3a.toLocaleDateString() + ' and ' + hepbdose3b.toLocaleDateString() + ').');
        break;
      }
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

  if(pedvaxdates.length==0){
    var hibentry1 = new Date(hibdates[0]);
    var hibentry2 = new Date(hibdates[1]);
    var hibentry3 = new Date(hibdates[2]);
    var hibentry4 = new Date(hibdates[3]);
    birthday = new Date(birthdayvalue);
    var hibdose1a = new Date(birthday.setMonth(birthday.getMonth()+2));
    birthday = new Date(birthdayvalue);
    var hibdose1b = new Date(birthday.setMonth(birthday.getMonth()+4));
    birthday = new Date(birthdayvalue);
    var hibdose2a4mos = new Date(birthday.setMonth(birthday.getMonth()+4));
    birthday = new Date(birthdayvalue);
    var hibdose2a4wks = new Date(hibentry1.setDate(hibentry1.getDate()+28));
    hibentry1 = new Date(hibdates[0]);
    var hibdose2a;
    if(hibdose2a4mos-hibdose2a4wks>0){
      hibdose2a=hibdose2a4mos;
    }
    else{
      hibdose2a=hibdose2a4wks;
    }
    var hibdose2b = new Date(birthday.setMonth(birthday.getMonth()+6));
    birthday = new Date(birthdayvalue);
    var hibdose3a6mos = new Date(birthday.setMonth(birthday.getMonth()+6));
    birthday = new Date(birthdayvalue);
    var hibdose3a4wks = new Date(hibentry2.setDate(hibentry2.getDate()+28));
    hibentry2 = new Date(hibdates[1]);
    var hibdose3a;
    if(hibdose3a6mos>hibdose3a4wks){
      hibdose3a = hibdose3a6mos;
    }
    else{
      hibdose3a = hibdose3a4wks;
    }
    var hibdose3b = new Date(birthday.setMonth(birthday.getMonth()+9));
    birthday = new Date(birthdayvalue);
    var hibdose4a = new Date(birthday.setFullYear(birthday.getFullYear()+1));
    birthday = new Date(birthdayvalue);
    var hibdose4b = new Date(birthday.setMonth(birthday.getMonth()+18));
    birthday = new Date(birthdayvalue);

    for(i=0; i<4; i++){
      if(hibdates.length==0){
        if(today>hibdose1b){
          missingvacs.push('Missed 1st HiB dose. See physician.');
          break;
        }
        else{
          if(today>hibdose1a){
            missingvacs.push('1st HiB dose between 2 and 4 months old. (By ' + hibdose1b.toLocaleDateString() + ').');
          }
          else{
            missingvacs.push('1st HiB dose between 2 and 4 months old. (Between ' + hibdose1a.toLocaleDateString() + ' and ' + hibdose1b.toLocaleDateString() + ').');
          }
          missingvacs.push('2nd HiB dose between 4 and 6 months old AND 4 weeks after 1st HiB dose.');
          missingvacs.push('3rd HiB dose between 6 and 9 months old AND 4 weeks after 2nd HiB dose.');
          missingvacs.push('4th HiB dose between 12 and 18 months old. (Between ' + hibdose4a.toLocaleDateString() + ' and ' + hibdose4b.toLocaleDateString() + ').');
          break;
        }
      }

      if(hibentry1<hibdose1a){
        missingvacs.push('1st HiB dose administered too early. See physician.');
        break;
      }
      else{
        if(hibentry1>hibdose1b){
          missingvacs.push('1st HiB dose administered too late. See physician.');
          break;
        }
        else{
          if(hibdates.length==1){
            if(today>hibdose2b){
              missingvacs.push('Missed 2nd HiB dose. See physician.');
              break;
            }
            else{
              if(today>hibdose2a){
                missingvacs.push('2nd HiB dose between 4 and 6 months old. (By ' + hibdose2b.toLocaleDateString() + ').');
              }
              else{
                missingvacs.push('2nd HiB dose between 4 and 6 months old. (Between ' + hibdose2a.toLocaleDateString() + ' and ' + hibdose2b.toLocaleDateString() + ').');  
              }
              missingvacs.push('3rd HiB dose between 6 and 9 months old AND 4 weeks after 2nd HiB dose.');
              missingvacs.push('4th HiB dose between 12 and 18 months old. (Between ' + hibdose4a.toLocaleDateString() + ' and ' + hibdose4b.toLocaleDateString() + ').');
              break;
            }
          }
        }
      }

      if(hibentry2<hibdose2a){
        missingvacs.push('2nd HiB dose administered too early. See physician.');
        break;
      }
      else{
        if(hibentry2>hibdose2b){
          missingvacs.push('2nd HiB dose administered too late. See physician.');
          break;
        }
        else{
          if(hibdates.length==2){
            if(today>hibdose3b){
              missingvacs.push('Missed 3rd HiB dose. See physician.');
              break;
            }
            else{
              if(today>hibdose3a){
                missingvacs.push('3rd HiB dose between 6 and 9 months old. (By ' + hibdose3b.toLocaleDateString() + ').');
              }
              else{
                missingvacs.push('3rd HiB dose between 6 and 9 months old. (Between ' + hibdose3a.toLocaleDateString() + ' and ' + hibdose3b.toLocaleDateString() + ').');
              }
              missingvacs.push('4th HiB dose between 12 and 18 months old. (Between ' + hibdose4a.toLocaleDateString() + ' and ' + hibdose4b.toLocaleDateString() + ').');
              break;
            }
          }
        }
      }

      if(hibentry3<hibdose3a){
        missingvacs.push('3rd HiB dose administered too early. See physician');
        break;
      }
      else{
        if(hibentry3>hibdose3b){
          missingvacs.push('3rd HiB dose administered too late. See physician.');
          break;
        }
        else{
          if(hibdates.length==3){
            if(today>hibdose4b){
              missingvacs.push('Missed 4th HiB dose. See physician.');
              break;
            }
            else{
              if(today>hibdose4a){
                missingvacs.push('4th HiB dose bewteen 12 and 18 months old. (By' + hibdose4b.toLocaleDateString() + ').');
              }
              else{
                missingvacs.push('4th HiB dose between 12 and 18 months old. (Between ' + hibdose4a.toLocaleDateString() + ' and ' + hibdose4b.toLocaleDateString() + ').')
              }
              break;
            }
          }
        }
      }

      if(hibentry4<hibdose4a){
        missingvacs.push('4th HiB dose administered too early. See physician.');
        break;
      }
      else{
        if(hibentry4>hibdose4b){
          missingvacs.push('4th HiB dose administered too late. See physician.');
          break;
        }
        else{
          break;
        }
      }
    }
  }
  else{
    pedvaxentry1 = new Date(pedvaxdates[0]);
    pedvaxentry2 = new Date(pedvaxdates[1]);
    pedvaxentry3 = new Date(pedvaxdates[2]);
    birthday = new Date(birthdayvalue);
    pedvaxdose1a = new Date(birthday.setMonth(birthday.getMonth()+2));
    birthday = new Date(birthdayvalue);
    pedvaxdose1b = new Date(birthday.setMonth(birthday.getMonth()+4));
    birthday = new Date(birthdayvalue);
    pedvaxdose2a4mos = new Date(birthday.setMonth(birthday.getMonth()+4));
    birthday = new Date(birthdayvalue);
    pedvaxdose2a4wks = new Date(pedvaxentry1.setDate(pedvaxentry1.getDate()+28));
    var pedvaxdose2a;
    if(pedvaxdose2a4mos>pedvaxdose2a4wks){
      pedvaxdose2a = pedvaxdose2a4mos;
    }
    else{
      pedvaxdose2a = pedvaxdose2a4wks;
    }
    pedvaxdose2b = new Date(birthday.setMonth(birthday.getMonth()+6));
    birthday = new Date(birthdayvalue);
    pedvaxdose3a = new Date(birthday.setFullYear(birthday.getFullYear()+1));
    birthday = new Date(birthdayvalue);
    pedvaxdose3b = new Date(birthday.setMonth(birthday.getMonth()+15));
    birthday = new Date(birthdayvalue);

    for(i=0; i<3; i++){
      if(pedvaxentry1<pedvaxdose1a){
        missingvacs.push('1st HiB dose administered too early. See physician.');
        break;
      }
      else{
        if(pedvaxentry1>pedvaxdose1b){
          missingvacs.push('1st HiB dose administered too late. See physician.');
          break;
        }
        else{
          if(pedvaxdates.length==1){
            if(today>pedvaxdose2b){
              missingvacs.push('Missed 2nd HiB dose. See physician.');
              break;
            }
            else{
              if(pedvaxentry2>pedvaxdose2a){
                missingvacs.push('2nd HiB dose between 4 and 6 months old. (By ' + pedvaxdose2b.toLocaleDateString() + ').');
              }
              else{
                missingvacs.push('2nd HiB dose between 4 and 6 months old. (Between ' + pedvaxdose2a.toLocaleDateString() + ' and ' + pedvaxdose2b.toLocaleDateString() + ').');
              }
              missingvacs.push('3rd HiB dose between 12 and 15 months old. (Bewteen ' + pedvaxdose3a.toLocaleDateString() + ' and ' + pedvaxdose3b.toLocaleDateString() + ').');
              break;
            }
          }
        }
      }

      if(pedvaxentry2<pedvaxdose2a){
        missingvacs.push('2nd HiB dose administered too early. See physician.');
        break;
      }
      else{
        if(pedvaxentry2>pedvaxdose2b){
          missingvacs.push('2nd HiB dose administered too late. See physician.');
          break;
        }
        else{
          if(pedvaxdates.length==2){
            if(today>pedvaxdose3b){
              missingvacs.push('Missed 3rd HiB dose. See physician.');
              break;
            }
            else{
              if(today>pedvaxdose3a){
                missingvacs.push('3rd HiB dose between 12 and 15 months old. (By ' + pedvaxdose3b.toLocaleDateString() + ').');
              }
              else{
                missingvacs.push('3rd HiB dose between 12 and 15 months old. (Between ' + pedvaxdose3a.toLocaleDateString() + ' and ' + pedvaxdose3b.toLocaleDateString() + ').');
              }
              break;
            }
          }
        }
      }

      if(pedvaxentry3<pedvaxdose3a){
        missingvacs.push('3rd HiB dose administered too early. See physician.');
        break;
      }
      else{
        if(pedvaxentry3>pedvaxdose3b){
          missingvacs.push('3rd HiB dose administered too late. See physician.');
          break;
        }
        else{
          break;
        }
      }
    }
  }

  if(rotateqdates.length==0){
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

    for(i=0; i<2; i++){
      if(rotarixdates.length==0){
        if(today-rotarixdose1b>0){
          missingvacs.push('Missed 1st Rotarix dose. See physician.');
          break;
        }
        else{
          if(today-rotarixdose1a>0){
            missingvacs.push('1st Rotarix dose between 6 and 20 weeks old. (By ' + rotarixdose1b.toLocaleDateString() + ').');  
          }
          else{
            missingvacs.push('1st Rotarix dose between 6 and 20 weeks old. (Between ' + rotarixdose1a.toLocaleDateString() + ' and ' + rotarixdose1b.toLocaleDateString() + ').');
          }
          missingvacs.push('2nd Rotarix dose 4 weeks after 1st Rotarix dose.');
          break;
        }
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
            break;
        }
      }
    }
  }
  else{
    var rotateqentry1 = new Date(rotateqdates[0]);
    var rotateqentry2 = new Date(rotateqdates[1]);
    var rotateqentry3 = new Date(rotateqdates[2]);
    birthday = new Date(birthdayvalue);
    var rotateqdose1a = new Date(birthday.setDate(birthday.getDate()+42));
    birthday = new Date(birthdayvalue);
    var rotateqdose1b = new Date(birthday.setDate(birthday.getDate()+84));
    birthday = new Date(birthdayvalue);
    var rotateqdose2a = new Date(rotateqentry1.setDate(rotateqentry1.getDate()+28));
    rotateqentry1 = new Date(rotateqdates[0]);
    var rotateqdose2b = new Date(rotateqentry1.setDate(rotateqentry1.getDate()+70));
    rotateqentry1 = new Date(rotateqdates[0]);
    var rotateqdose3a = new Date(rotateqentry2.setDate(rotateqentry2.getDate()+28));
    rotateqentry2 = new Date(rotateqdates[1]);
    var rotateqdose3b = new Date(rotateqentry2.setDate(rotateqentry2.getDate()+70));
    rotateqentry2 = new Date(rotateqdates[1]);

    for(i=0; i<3; i++){
      if(rotateqentry1<rotateqdose1a){
        missingvacs.push('1st Rotateq dose administered too early. See physician.');
        break;
      }
      else{
        if(rotateqentry1>rotateqdose1b){
          missingvacs.push('1st Rotateq dose administered too late. See physician.');
          break;
        }
        else{
          if(rotateqdates.length==1){
            if(today>rotateqdose2b){
              missingvacs.push('Missed 2nd Rotateq dose. See physician.');
              break;
            }
            else{
              if(today>rotateqdose2a){
                missingvacs.push('2nd Rotateq dose 4 to 10 weeks after 1st Rotateq dose. (By ' + rotateqdose2b.toLocaleDateString() + ').');
              }
              else{
                missingvacs.push('2nd Rotateq dose 4 to 10 weeks after 1st Rotateq dose. (Between ' + rotateqdose2a.toLocaleDateString() + ' and ' + rotateqdose2b.toLocaleDateString() + ').');
              }
              missingvacs.push('3rd Rotateq dose 4 to 10 weeks after 2nd Rotateq dose.');
              break;
            }
          }
        }
      }

      if(rotateqentry2<rotateqdose2a){
        missingvacs.push('2nd Rotateq dose administered too early. See physician.');
        break;
      }
      else{
        if(rotateqentry2>rotateqdose2b){
          missingvacs.push('2nd Rotateq dose administered too late. See physician.');
          break;
        }
        else{
          if(rotateqdates.length==2){
            if(today>rotateqdose3b){
              missingvacs.push('Missed 3rd Rotateq dose. See physician.');
              break;
            }
            else{
              if(today>rotateqdose3a){
                missingvacs.push('3rd Rotateq dose 4 to 10 weeks after 2nd Rotateq dose. (By ' + rotateqdose3b.toLocaleDateString() + ').');
              }
              else{
                missingvacs.push('3rd Rotateq dose 4 to 10 weeks after 2nd Rotateq dose. (Between ' + rotateqdose3a.toLocaleDateString() + ' and ' + rotateqdose3b.toLocaleDateString() + ').');
              }
              break;
            }
          }
        }
      }

      if(rotateqentry3<rotateqdose3a){
        missingvacs.push('3rd Rotateq dose administered too early. See physiican.');
        break;
      }
      else{
        if(rotateqentry3>rotateqdose3b){
          missingvacs.push('3rd Rotateq dose administered too late. See physician.');
          break;
        }
        else{
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
