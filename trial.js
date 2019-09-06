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
  var pcvdates = [];
  var dates = ['date1', 'date2', 'date3', 'date4', 'date5', 'date6', 'date7', 'date8'];
  var missingvacs=[];
  var nextvacs=[];
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
      else if(selections[i].text()=="Pneumococcal (PCV13)"){
        pcvdates.push(document.getElementById(dates[i]).value);
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
    var dtapentry46mos = new Date(dtapentry4.setMonth(dtapentry4.getMonth()+6));
    dtapentry4 = new Date(dtapdates[3]);

    for (i=0; i<5; i++){
      var firstdose = [];
      var nextdose = [];
      if(dtapdates.length==0){
        if(today>dtapdose1b){
          if(today>months4 && today<year4){
            firstdose.push('Missed 1st DTaP dose. Catch up schedule:');
            nextdose.push('1st DTaP dose today.');
            nextdose.push('2nd DTaP dose 4 to 8 weeks after 1st DTaP dose.');
            nextdose.push('3rd DTaP dose 4 to 8 weeks after 2nd DTaP dose.');
            nextdose.push('4th DTaP dose 6 to 10 months after 3rd DTaP dose.');
            nextdose.push('5th DTaP dose between 4 and 6 years old.');
            $('.dtap').append('</br>' + firstdose + '</br>');
            $('.dtapbutton').append('+');
            for(i=0; i<4; i++){
              $('.dtap2').append('</br>' + nextdose[i] + '</br>');
            }
            break;
          }
          firstdose.push('Missed 1st DTaP dose. See physician.');
          $('.dtap').append('</br>' + firstdose + '</br>');
          break;
        }
        else{
          if(today>dtapdose1a){
            firstdose.push('1st DTaP dose by between 2 and 4 months old. (By ' + dtapdose1b.toLocaleDateString() + ').');
          }
          else{
            firstdose.push('1st DTaP dose between between 2 and 4 months old. (Between ' + dtapdose1a.toLocaleDateString() + ' and ' + dtapdose1b.toLocaleDateString() + ').');
          }
          nextdose.push('2nd DTaP dose between 4 and 6 months old AND at least 4 weeks after 1st DTaP dose.');
          nextdose.push('3rd DTaP dose between 6 and 9 months old AND at least 4 weeks after 2nd DTaP dose.');
          nextdose.push('4th DTaP dose between 15 and 19 months old.');
          nextdose.push('5th DTaP dose between 5 and 7 years old.');
          $('.dtap').append('</br>' + firstdose + '</br>');
          $('.dtapbutton').append('+');
          for(i=0; i<4; i++){
            $('.dtap2').append('<br/>' + nextdose[i] + '<br/>');            
          }
          break;
        }
      }

      if(dtapentry1<dtapdose1a){
        firstdose.push('1st DTaP dose administered too early. See physician.');
        $('.dtap').append('</br>' + firstdose + '</br>');
        break;
      }
      else{
        if(dtapentry1>dtapdose1b){
          firstdose.push('1st DTaP dose administered too late. See physician.');
          $('.dtap').append('</br>' + firstdose + '</br>');
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
                firstdose.push('Missed 2nd DTaP dose. Catch up schedule: '); 
                if(today>dtapentry14wks){
                  nextdose.push('2nd DTaP dose today.');
                }
                else{
                  nextdose.push('2nd DTaP dose 4 to 8 weeks after 1st DTaP dose. (Between ' + dtapentry14wks.toLocaleDateString() + ' and ' + dtapentry18wks.toLocaleDateString() + ').');
                }
                nextdose.push('3rd DTaP dose 4 to 8 weeks after 2nd DTaP dose.');
                nextdose.push('4th DTaP dose 6 to 10 monhts after 3rd DTaP dose.');
                nextdose.push('5th DTaP dose between 4 and 6 years old.');
                $('.dtap').append('</br>' + firstdose + '</br>');
                $('.dtapbutton').append('+');
                for(i=0; i<3; i++){
                  $('.dtap2').append('</br>' + nextdose[i] + '</br>');
                }
                break;
              }
              else{
                firstdose.push('Missed 2nd DTaP dose. See physician.');
                $('.dtap').append('</br>' + firstdose + '</br>');            
                break; 
              } 
            }
            else{
              if(today>dtapdose1a){
                firstdose.push('2nd DTaP dose between 4 and 6 months old. (By ' + dtapdose2b.toLocaleDateString() + ').');
              }
              else{
                firstdose.push('2nd DTaP dose between 4 and 6 months old. (Between ' + dtapdose2a.toLocaleDateString() + ' and ' + dtapdose2b.toLocaleDateString() + ').');
              }
              nextdose.push('3rd DTaP dose between 6 and 9 months old AND at least 4 weeks after 2nd DTaP dose.');
              nextdose.push('4th DTaP dose between 15 and 19 months old.');
              nextdose.push('5th DTaP dose between 5 and 7 years old.');
              $('.dtap').append('</br>' + firstdose + '</br>');
              $('.dtapbutton').append('+');
              for(i=0; i<3; i++){
                $('.dtap2').append('</br>' + nextdose[i] + '</br>');
              }
              break;
            }
          }
        }
      }

      if(dtapentry2<dtapdose2a){
        firstdose.push('2nd DTaP dose administered too early. See physician.');
        $('.dtap').append('</br>' + firstdose + '</br>');
        break;
      }
      else{
        if(dtapentry2>dtapdose2b){
          firstdose.push('2nd DTaP dose administered too late. See physician');
          $('.dtap').append('</br>' + firstdose + '</br>');
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
                firstdose.push('Missed 3rd DTaP dose. Catch up schedule:');
                if(today>dtapentry24wks){
                  nextdose.push('3rd DTaP dose today.');
                }
                else{
                  nextdose.push('3rd DTaP dose 4 to 8 weeks after 2nd DTaP dose. (Between ' + dtapentry24wks.toLocaleDateString() + ' and ' + dtapentry28wks.toLocaleDateString() + ').');
                }
                nextdose.push('4th DTaP dose at least 6 months after 3rd DTaP dose AND at least 15 months old.');
                nextdose.push('5th DTaP dose between 5 and 7 years old.');
                $('.dtap').append('</br>' + firstdose + '</br>');
                $('.dtapbutton').append('+');
                for(i=0; i<3; i++){
                  $('.dtap2').append('</br>' + nextdose[i] + '</br>');
                }
                break;
              }
              else if(today>year1 && today<year4){
                firstdose.push('Missed 3rd DTaP dose. Catch up schedule:');
                if(today>dtapentry24wks){
                  nextdose.push('3rd DTaP dose today.');
                }
                else{
                  nextdose.push('3rd DTaP dose 4 to 8 weeks after 2nd DTaP dose. (Bewteen ' + dtapentry24wks.toLocaleDateString() + ' and ' + dtapentry28wks.toLocaleDateString() + ').');
                }
                nextdose.push('4th DTaP dose at least 6 months after 3rd DTaP dose.');
                nextdose.push('5th DTaP dose between 5 and 7 years old.');
                $('.dtap').append('</br>' + firstdose + '</br>');
                $('.dtapbutton').append('+');
                for(i=0; i<3; i++){
                  $('.dtap2').append('</br>' + nextdose[i] + '</br>');
                }
                break;
              }
              else{
                firstdose.push('Missed 3rd DTaP dose. See physician.');
                $('.dtap').append('</br>' + firstdose + '</br>');
                break;
              }
            }
            else{
              if(today-dtapdose3a>0){
                firstdose.push('3rd DTaP dose between 6 and 9 months old. (By ' + dtapdose3b.toLocaleDateString() + ').');
              }
              else{
                firstdose.push('3rd DTaP dose between 6 and 9 month old. (Between ' + dtapdose3a.toLocaleDateString() + ' and ' + dtapdose3b.toLocaleDateString() + ').');
              }
              nextdose.push('4th DTaP dose between 15 and 19 months old.');
              nextdose.push('5th DTaP dose between 5 and 7 years old.');
              $('.dtap').append('</br>' + firstdose + '</br>');
              $('.dtapbutton').append('+');
              for(i=0; i<2; i++){
                $('.dtap2').append('</br>' + nextdose[i] + '</br>');
              }
              break;
            } 
          }
        }
      }

      if(dtapentry3-dtapdose3a<0){
        firstdose.push('3rd DTaP dose administered too early. See physician.');
        $('.dtap').append('</br>' + firstdose + '</br>');
        break;
      }
      else{
        if(dtapentry3-dtapdose3b>0){
          firstdose.push('3rd DTaP dose administered too late. See physician.');
          $('.dtap').append('</br>' + firstdose + '</br>');
          break;
        }
        else{
          if(dtapdates.length==3){
            if(today-dtapdose4b>0){
              if(today>year1 && today<year4){
                firstdose.push('Missed 4th DTaP dose. Catch up schedule:');
                if(today>dtapentry36mos){
                  if(today>months12 && today<months15){
                    nextdose.push('4th DTaP dose between 15 and 18 months old. (Between ' + dtapdose4a.toLocaleDateString() + ' and ' + dtapdose4b.toLocaleDateString() + ').');
                    nextdose.push('5th DTaP dose at least 6 months after 4th DTaP dose AND between 5 and 7 years old.');   
                  }
                  else{
                    nextdose.push('4th DTaP dose today.');
                    nextdose.push('5th DTaP dose at least 6 months after 4th DTaP dose AND between 5 and 7 years old.');
                    $('.dtap').append('</br>' + firstdose + '</br>');
                    $('.dtapbutton').append('+');
                    for(i=0; i<2; i++){
                      $('.dtap2').append('</br>' + nextdose[i] + '</br>');
                    }   
                  }
                  break;
                }
                else{
                  firstdose.push('4th DTaP dose at least 6 months after dose 3.');
                  nextdose.push('5th DTaP dose at least 6 months after 4th DTaP dose AND between 5 and 7 years old.');
                  $('.dtap').append('</br>' + firstdose + '</br>');
                  $('.dtapbutton').append('+');
                  for(i=0; i<nextdose.length; i++){
                    $('.dtap2').append('</br>' + nextdose[i] + '</br>');
                  }  
                  break;
                }
              }
              else{
                firstdose.push('Missed 4th DTaP dose. See physician.');
                $('.dtap').append('</br>' + firstdose + '</br>');
                break;
              }
            }
            else{
              if(today-dtapdose4a>0){
                firstdose.push('4th DTaP dose between 15 and 19 months old. (By ' + dtapdose4b.toLocaleDateString() + ').');
              }
              else{
                firstdose.push('4th DTaP dose between 15 and 19 months old. (Between ' + dtapdose4a.toLocaleDateString() + ' and ' + dtapdose4b.toLocaleDateString() + ').');
              }
              nextdose.push('5th DTaP dose between 5 and 7 years old.');
              $('.dtap').append('</br>' + firstdose + '</br>');
              $('.dtapbutton').append('+');
              for(i=0; i<nextdose.length; i++){
                $('.dtap2').append('</br>' + nextdose[i] + '</br>')
              }  
              break;
            }
          }
        }
      }

      if(dtapentry4<dtapdose4a){
        firstdose.push('4th DTaP dose administered too early. See physician.');
        $('.dtap').append('</br>' + firstdose + '</br>');
        break;
      }
      else{
        if(dtapentry4>dtapdose4b){
          firstdose.push('4th DTaP dose administered too late. See physician.');
          $('.dtap').append('</br>' + firstdose + '</br>');
          break;
        }
        else{
          if(dtapdates.length==4){
            if(today>dtapdose5b){
                if(today>year1 && today<year4){
                firstdose.push('Missed 5th DTaP dose. Catch up schedule:');
                if(dtapentry4<year4){
                  if(today>dtapentry46mos){
                    nextdose.push('5th DTaP dose today.');
                  }
                  else{
                    nextdose.push('5th DTaP dose at least 6 months after 4th DTaP dose. (After ' + dtapentry46mos.toLocaleDateString() + ').');
                    $('.dtap').append('</br>' + firstdose + '</br>');
                    $('.dtapbutton').append('+');
                    for(i=0; i<nextdose.length; i++){
                      $('.dtap2').append('</br>' + nextdose[i] + '</br>');
                    }  
                    break;
                  }
                }
                nextdose.push('TDap between 11 and 12 years old.');
                $('.dtap').append('</br>' + firstdose + '</br>');
                $('.dtapbutton').append('+');
                for(i=0; i<nextdose.length; i++){
                  $('.dtap2').append('</br>' + nextdose[i] + '</br>');
                } 
                break;
              }
              else{
                firstdose.push('Missed 5th DTaP dose. See physician.');
                $('.dtap').append('</br>' + firstdose + '</br>');
                break;
              }
            }
            else{
              if(today>dtapdose5a){
                firstdose.push('5th DTaP dose between 5 and 7 years old. (By ' + dtapdose5b.toLocaleDateString() + ').');
              }
              else{
                firstdose.push('5th DTaP dose between 5 and 7 years old. (Between ' + dtapdose5a.toLocaleDateString() + ' and ' + dtapdose5b.toLocaleDateString() + ').');
              }
              $('.dtap').append('</br>' + firstdose + '</br>');
              break;
            }
          }
        }
      }

      if(dtapentry5<dtapdose5a){
        firstdose.push('5th DTaP dose administered too early. See physician.');
        $('.dtap').append('</br>' + firstdose + '</br>');
        break;
      }
      else{
        if(dtapentry5>dtapdose5b){
          missingvacs.push('5th DTaP dose administered too late. See physician.');
          $('.dtap').append('</br>' + firstdose + '</br>');
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
    var year11 = new Date(birthday.setFullYear(birthday.getFullYear()+11));
    birthday = new Date(birthdayvalue);
    var year16 = new Date(birthday.setFullYear(birthday.getFullYear()+16));
    birthday = new Date(birthdayvalue);

    for(i=0; i<3; i++){
      var firstdose=[];
      var nextdose=[];
      if(hepbdates.length==0){
        if(today>hepbdose1b){
          if(today>year11 && today<year16){
            firstdose.push('Missed 1st Hep B. Catch up schedule: ');
            nextdose.push('1st dose Recombivax HB today.');
            nextdose.push('2nd dose Recombivax HB 4 to 6 months after 1st Recombivax HB dose.');
            $('.hepb').append('</br>' + firstdose + '</br>');
            $('.hepbbutton').append('+');
            for(i=0; i<nextdose.length; i++){
              $('.hepb2').append('</br>' + nextdose[i] + '</br>')
            }  
          }
          else{
            firstdose.push('Missed 1st HepB dose. See physician.');
            $('.hepb').append('</br>' + firstdose + '</br>');
            break;
          }
        }
        else{
          firstdose.push('1st HepB dose within 12 hours of birth (' + hepbdose1a.toLocaleDateString() + ').');
          nextdose.push('2nd HepB dose between 1 and 4 months old. (Between ' + hepbdose2a.toLocaleDateString() + ' and ' + hepbdose2b.toLocaleDateString() + ').');
          nextdose.push('3rd HepB dose between 6 and 19 months old. (Between ' + hepbdose3a.toLocaleDateString() + ' and ' + hepbdose3b.toLocaleDateString() + ').');
          $('.hepb').append('</br>' + firstdose + '</br>');
          $('.hepbbutton').append('+');
          for(i=0; i<nextdose.length; i++){
            $('.hepb2').append('</br>' + nextdose[i] + '</br>');
          } 
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
            var hib=[];
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
      var pedvaxentry1 = new Date(pedvaxdates[0]);
      var pedvaxentry2 = new Date(pedvaxdates[1]);
      var pedvaxentry3 = new Date(pedvaxdates[2]);
      birthday = new Date(birthdayvalue);
      var pedvaxdose1a = new Date(birthday.setMonth(birthday.getMonth()+2));
      birthday = new Date(birthdayvalue);
      var pedvaxdose1b = new Date(birthday.setMonth(birthday.getMonth()+4));
      birthday = new Date(birthdayvalue);
      var pedvaxdose2a4mos = new Date(birthday.setMonth(birthday.getMonth()+4));
      birthday = new Date(birthdayvalue);
      var pedvaxdose2a4wks = new Date(pedvaxentry1.setDate(pedvaxentry1.getDate()+28));
      var pedvaxdose2a;
      if(pedvaxdose2a4mos>pedvaxdose2a4wks){
        pedvaxdose2a = pedvaxdose2a4mos;
      }
      else{
        pedvaxdose2a = pedvaxdose2a4wks;
      }
      var pedvaxdose2b = new Date(birthday.setMonth(birthday.getMonth()+6));
      birthday = new Date(birthdayvalue);
      var pedvaxdose3a = new Date(birthday.setFullYear(birthday.getFullYear()+1));
      birthday = new Date(birthdayvalue);
      var pedvaxdose3b = new Date(birthday.setMonth(birthday.getMonth()+15));
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

    birthday = new Date(birthdayvalue);
    var pcventry1 = new Date(pcvdates[0]);
    var pcventry2 = new Date(pcvdates[1]);
    var pcventry3 = new Date(pcvdates[2]);
    var pcventry4 = new Date(pcvdates[3]);
    var pcvdose1a = new Date(birthday.setMonth(birthday.getMonth()+2));
    birthday = new Date(birthdayvalue);
    var pcvdose1b = new Date(birthday.setMonth(birthday.getMonth()+4));
    birthday = new Date(birthdayvalue);
    var pcvdose2a4mos = new Date(birthday.setMonth(birthday.getMonth()+4));
    birthday = new Date(birthdayvalue);
    var pcvdose2a4wks = new Date(pcventry1.setDate(pcventry1.getDate()+28));
    pcventry1 = new Date(pcvdates[0]);
    var pcvdose2a;
    if(pcvdose2a4mos>pcvdose2a4wks){
      pcvdose2a=pcvdose2a4mos;
    }
    else{
      pcvdose2a=pcvdose2a4wks;
    }
    var pcvdose2b = new Date(birthday.setMonth(birthday.getMonth()+6));
    birthday = new Date(birthdayvalue);
    var pcvdose3a6mos = new Date(birthday.setMonth(birthday.getMonth()+6));
    birthday = new Date(birthdayvalue);
    var pcvdose3a4wks = new Date(pcventry2.setDate(pcventry2.getDate()+28));
    pcventry2 = new Date(pcvdates[1]);
    var pcvdose3a;
    if(pcvdose3a6mos>pcvdose3a4wks){
      pcvdose3a=pcvdose3a6mos;
    }
    else{
      pcvdose3a=pcvdose3a4wks;
    }
    var pcvdose3b = new Date(birthday.setMonth(birthday.getMonth()+9));
    birthday = new Date(birthdayvalue);
    var pcvdose4a = new Date(birthday.setMonth(birthday.getMonth()+15));
    birthday = new Date(birthdayvalue);
    var pcvdose4b = new Date(birthday.setMonth(birthday.getMonth()+18));
    birthday = new Date(birthdayvalue);
    var years5 = new Date(birthday.setFullYear(birthday.getFullYear()+5));
    birthday = new Date(birthdayvalue);
    var months7 = new Date(birthday.setMonth(birthday.getMonth()+7));
    birthday = new Date(birthdayvalue);

    for(i=0; i<4; i++){
      if(pcvdates.length==0){
        if(today>pcvdose1b){
          if(today>months4 && today<months7){
            missingvacs.push('Missed 1st PCV13 dose. Catch up schedule:');
            missingvacs.push('1st PCV13 dose today.');
            missingvacs.push('2nd PCV13 dose 4 to 8 weeks after dose 1.');
            missingvacs.push('3rd PCV13 dose 4 to 8 weeks after dose 2.');
            missingvacs.push('4th PCV13 dose 12 to 15 months old.');
            break;
          }
          else{
            missingvacs.push('Missed 1st PCV13 dose. See physician.');
            break;
          }
        }
        else{
          if(today>pcvdose1a){
            missingvacs.push('1st PCV13 dose between 2 and 4 months old. (By ' + pcvdose1b.toLocaleDateString() + ').');
          }
          else{
            missingvacs.push('1st PCV13 dose between 2 and 4 months old. (Between ' + pcvdose1a.toLocaleDateString() + ' and ' + pcvdose1b.toLocaleDateString() + ').');
          }
          missingvacs.push('2nd PCV13 dose between 4 and 6 months old AND at least 4 weeks after 1st PCV13 dose.');
          missingvacs.push('3rd PCV13 dose between 6 and 9 months old AND at least 4 weeks after 2nd PCV13 dose.');
          missingvacs.push('4th PCV13 dose between 12 and 18 months old.');
          break;
        }
      }

      if(pcventry1<pcvdose1a){
        missingvacs.push('1st PCV13 dose administered too early. See physician.');
        break;
      }
      else{
        if(pcventry1>pcvdose1b){
          missingvacs.push('1st PCV13 dose administered too late. See physician.');
          break;
        }
        else{
          if(pcvdates.length==1){
            if(today>pcvdose2b){
              missingvacs.push('Missed 2nd PCV13 dose. See physician.');
              break;
            }
            else{
              if(today>pcvdose2a){
                missingvacs.push('2nd PCV13 dose between 4 and 6 months old. (By ' + pcvdose2b.toLocaleDateString() + ').');
              }
              else{
                missingvacs.push('2nd PCV13 dose between 4 and 6 months old. (Between ' + pcvdose2a.toLocaleDateString() + ' and ' + pcvdose2b.toLocaleDateString() + ').');
              }
              missingvacs.push('3rd PCV13 dose between 6 and 9 months old AND at least 4 weeks after 2nd PCV13 dose.');
              missingvacs.push('4th PCV13 dose between 12 and 18 months old.');
              break;
            }
          }
        }
      }

      if(pcventry2<pcvdose2a){
        missingvacs.push('2nd PCV13 dose administered too early. See physician.');
        break;
      }
      else{
        if(pcventry2>pcvdose2b){
          missingvacs.push('2nd PCV13 dose administered too late. See physician.');
          break;
        }
        else{
          if(pcvdates.length==2){
            if(today>pcvdose3b){
              missingvacs.push('Missed 3rd PCV13 dose. See physician.');
              break;
            }
            else{
              if(today>pcvdose3a){
                missingvacs.push('3rd PCV13 dose between 6 and 9 months old. (By ' + pcvdose3b.toLocaleDateString() + ').');
              }
              else{
                missingvacs.push('3rd PCV13 dose between 6 and 9 months old. (Between ' + pcvdose3a.toLocaleDateString() + ' and ' + pcvdose3b.toLocaleDateString() + ').');
              }
              missingvacs.push('4th PCV13 dose between 12 and 18 months old.');
              break;
            }
          }
        }
      }

      if(pcventry3<pcvdose3a){
        missingvacs.push('3rd PCV13 dose administered too early. See physician.');
        break;
      }
      else{
        if(pcventry3>pcvdose3b){
          missingvacs.push('3rd PCV13 dose administered too late. See physician.');
          break;
        }
        else{
          if(pcvdates.length==3){
            if(today>pcvdose4b){
              missingvacs.push('Missed 4th PCV13 dose. See physician.');
              break;
            }
            else{
              if(today>pcvdose4a){
                missingvacs.push('4th PCV13 dose between 12 and 18 months old. (By ' + pcvdose4b.toLocaleDateString() + ').');
              }
              else{
                missingvacs.push('4th PCV13 dose between 12 and 18 months old. (Between ' + pcvdose4a.toLocaleDateString() + ' and ' + pcvdose4b.toLocaleDateString() + ').');
              }
              break;
            }
          }
        }
      }

      if(pcventry4<pcvdose4a){
        missingvacs.push('4th PCV13 dose administered too early. See physician.');
        break;
      }
      else{
        if(pcventry4>pcvdose4b){
          missingvacs.push('4th PCV13 dose administered too late. See physician.');
          break;
        }
        else{
          missingvacs.push('4th PCV13 dose correct.');
          break;
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
          }
          break;
        }
      }
    }


    for (i=0; i<missingvacs.length; i++){
      $('.jqValue').append('<br/>' + missingvacs[i] + '<br/>');
    }

    /*$('.jqValue').append('I LOVE KLAUS');*/




  })
  
  var hello=0;
  $('.dtapbutton').click(function(){
    if(hello==0){
      $('.dtap2').slideDown();
      hello=1;
    }
    else{
      $('.dtap2').slideUp();
      hello=0;
    }
  });

  var hola=0;
  $('.hepbbutton').click(function(){
    if(hola==0){
      $('.hepb2').slideDown();
      hola=1;
    }
    else{
      $('.hepb2').slideUp();
      hola=0;
    }
  });
  
  
});
