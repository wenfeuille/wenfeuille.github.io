$(document).ready(function(){

  
  
  var forms = [$('.entry1'), $('.entry2'), $('.entry3'), $('.entry4'), $('.entry5'), $('.entry6'), $('.entry7'), $('.entry8')];
  var lines = [$('.line1'), $('.line2'), $('.line3'), $('.line4'), $('.line5'), $('.line6'), $('.line7'), $('.line8'), $('.line9'), $('.line10'), 
  $('.line11'), $('.line12'), $('.line13'), $('.line14'), $('.line15'), $('.line16'), $('.line17'), $('.line18'), $('.line19'), $('.line20')];
  var formNumber = 0;
  var dosenumber1 = 0;
  var dosenumber2 = 0;
  var dosenumber3 = 0;
  var dosenumber4 = 0;
  var dosenumber5 = 0;
  var dosenumber6 = 0;
  var dosenumber7 = 0;
  var dosenumber8 = 0;
  var dosenumber9 = 0;
  var dosenumber10 = 0;
  var dosenumber11 = 0;
  var dosenumber12 = 0;
  var dosenumber13 = 0;
  var dosenumber14 = 0;
  var dosenumber15 = 0;
  var dosenumber16 = 0;
  var dosenumber17 = 0;
  var dosenumber18 = 0;
  var dosenumber19 = 0;
  var dosenumber20 = 0;
  var selections = [];
  var dtapdates = [];
  var hepbdates = [];
  var hibdates = [];
  var pedvaxdates = [];
  var rotarixdates = [];
  var rotateqdates = [];
  var pcvdates = [];
  var poliodates = [];
  var mmrdates = [];
  var varicelladates = [];
  var dates = ['date1', 'date2', 'date3', 'date4', 'date5', 'date6', 'date7', 'date8'];
  var missingvacs=[];
  var nextvacs=[];
  var today = new Date();
  var dosedates1=[$('#vaccine1date1'), $('#vaccine1date2'), $('#vaccine1date3'), $('#vaccine1date4'), $('#vaccine1date5'), $('#vaccine1date6')];
  var dosedates2=[$('#vaccine2date1'), $('#vaccine2date2'), $('#vaccine2date3'), $('#vaccine2date4'), $('#vaccine2date5'), $('#vaccine2date6')];
  var dosedates3=[$('#vaccine3date1'), $('#vaccine3date2'), $('#vaccine3date3'), $('#vaccine3date4'), $('#vaccine3date5'), $('#vaccine3date6')];
  var dosedates4=[$('#vaccine4date1'), $('#vaccine4date2'), $('#vaccine4date3'), $('#vaccine4date4'), $('#vaccine4date5'), $('#vaccine4date6')];
  var dosedates5=[$('#vaccine5date1'), $('#vaccine5date2'), $('#vaccine5date3'), $('#vaccine5date4'), $('#vaccine5date5'), $('#vaccine5date6')];
  var dosedates6=[$('#vaccine6date1'), $('#vaccine6date2'), $('#vaccine6date3'), $('#vaccine6date4'), $('#vaccine6date5'), $('#vaccine6date6')];
  var dosedates7=[$('#vaccine7date1'), $('#vaccine7date2'), $('#vaccine7date3'), $('#vaccine7date4'), $('#vaccine7date5'), $('#vaccine7date6')];
  var dosedates8=[$('#vaccine8date1'), $('#vaccine8date2'), $('#vaccine8date3'), $('#vaccine8date4'), $('#vaccine8date5'), $('#vaccine8date6')];
  var dosedates9=[$('#vaccine9date1'), $('#vaccine9date2'), $('#vaccine9date3'), $('#vaccine9date4'), $('#vaccine9date5'), $('#vaccine9date6')];
  var dosedates10=[$('#vaccine10date1'), $('#vaccine10date2'), $('#vaccine10date3'), $('#vaccine10date4'), $('#vaccine10date5'), $('#vaccine10date6')];
  var dosedates11=[$('#vaccine11date1'), $('#vaccine11date2'), $('#vaccine11date3'), $('#vaccine11date4'), $('#vaccine11date5'), $('#vaccine11date6')];
  var dosedates12=[$('#vaccine12date1'), $('#vaccine12date2'), $('#vaccine12date3'), $('#vaccine12date4'), $('#vaccine12date5'), $('#vaccine12date6')];
  var dosedates13=[$('#vaccine13date1'), $('#vaccine13date2'), $('#vaccine13date3'), $('#vaccine13date4'), $('#vaccine13date5'), $('#vaccine13date6')];
  var dosedates14=[$('#vaccine14date1'), $('#vaccine14date2'), $('#vaccine14date3'), $('#vaccine14date4'), $('#vaccine14date5'), $('#vaccine14date6')];
  var dosedates15=[$('#vaccine15date1'), $('#vaccine15date2'), $('#vaccine15date3'), $('#vaccine15date4'), $('#vaccine15date5'), $('#vaccine15date6')];
  var dosedates16=[$('#vaccine16date1'), $('#vaccine16date2'), $('#vaccine16date3'), $('#vaccine16date4'), $('#vaccine16date5'), $('#vaccine16date6')];
  var dosedates17=[$('#vaccine17date1'), $('#vaccine17date2'), $('#vaccine17date3'), $('#vaccine17date4'), $('#vaccine17date5'), $('#vaccine17date6')];
  var dosedates18=[$('#vaccine18date1'), $('#vaccine18date2'), $('#vaccine18date3'), $('#vaccine18date4'), $('#vaccine18date5'), $('#vaccine18date6')];
  var dosedates19=[$('#vaccine19date1'), $('#vaccine19date2'), $('#vaccine19date3'), $('#vaccine19date4'), $('#vaccine19date5'), $('#vaccine19date6')];
  var dosedates20=[$('#vaccine20date1'), $('#vaccine20date2'), $('#vaccine20date3'), $('#vaccine20date4'), $('#vaccine20date5'), $('#vaccine20date6')];
  var vaccine1 = ['vaccine1a', 'vaccine1b', 'vaccine1c', 'vaccine1d', 'vaccine1e', 'vaccine1f'];
  var vaccine2 = ['vaccine2a', 'vaccine2b', 'vaccine2c', 'vaccine2d', 'vaccine2e', 'vaccine2f'];
  var vaccine3 = ['vaccine3a', 'vaccine3b', 'vaccine3c', 'vaccine3d', 'vaccine3e', 'vaccine3f'];
  var vaccine4 = ['vaccine4a', 'vaccine4b', 'vaccine4c', 'vaccine4d', 'vaccine4e', 'vaccine4f'];
  var vaccine5 = ['vaccine5a', 'vaccine5b', 'vaccine5c', 'vaccine5d', 'vaccine5e', 'vaccine5f'];
  var vaccine6 = ['vaccine6a', 'vaccine6b', 'vaccine6c', 'vaccine6d', 'vaccine6e', 'vaccine6f'];
  var vaccine7 = ['vaccine7a', 'vaccine7b', 'vaccine7c', 'vaccine7d', 'vaccine7e', 'vaccine7f'];
  var vaccine8 = ['vaccine8a', 'vaccine8b', 'vaccine8c', 'vaccine8d', 'vaccine8e', 'vaccine8f'];
  var vaccine9 = ['vaccine9a', 'vaccine9b', 'vaccine9c', 'vaccine9d', 'vaccine9e', 'vaccine9f'];
  var vaccine10 = ['vaccine10a', 'vaccine10b', 'vaccine10c', 'vaccine10d', 'vaccine10e', 'vaccine10f'];
  var vaccine11 = ['vaccine11a', 'vaccine11b', 'vaccine11c', 'vaccine11d', 'vaccine11e', 'vaccine11f'];
  var vaccine12 = ['vaccine12a', 'vaccine12b', 'vaccine12c', 'vaccine12d', 'vaccine12e', 'vaccine12f'];
  var vaccine13 = ['vaccine13a', 'vaccine13b', 'vaccine13c', 'vaccine13d', 'vaccine13e', 'vaccine13f'];
  var vaccine14 = ['vaccine14a', 'vaccine14b', 'vaccine14c', 'vaccine14d', 'vaccine14e', 'vaccine14f'];
  var vaccine15 = ['vaccine15a', 'vaccine15b', 'vaccine15c', 'vaccine15d', 'vaccine15e', 'vaccine15f'];
  var vaccine16 = ['vaccine16a', 'vaccine16b', 'vaccine16c', 'vaccine16d', 'vaccine16e', 'vaccine16f'];
  var vaccine17 = ['vaccine17a', 'vaccine17b', 'vaccine17c', 'vaccine17d', 'vaccine17e', 'vaccine17f'];
  var vaccine18 = ['vaccine18a', 'vaccine18b', 'vaccine18c', 'vaccine18d', 'vaccine18e', 'vaccine18f'];
  var vaccine19 = ['vaccine19a', 'vaccine19b', 'vaccine19c', 'vaccine19d', 'vaccine19e', 'vaccine19f'];
  var vaccine20 = ['vaccine20a', 'vaccine20b', 'vaccine20c', 'vaccine20d', 'vaccine20e', 'vaccine20f'];

  var vaccines = [vaccine1, vaccine2];

  $('#addName').click(function(){

    $(forms[formNumber]).show();
    lines[formNumber].css('display', 'inline-block');
    formNumber++;
      
  });

  $('#adddose1').click(function(){
    $(dosedates1[dosenumber1]).show();
    dosenumber1++;
  });
  $('#adddose2').click(function(){
    $(dosedates2[dosenumber2]).show();
    dosenumber2++;
  });
  $('#adddose3').click(function(){
    $(dosedates3[dosenumber3]).show();
    dosenumber3++;
  });
  $('#adddose4').click(function(){
    $(dosedates4[dosenumber4]).show();
    dosenumber4++;
  });
  $('#adddose5').click(function(){
    $(dosedates5[dosenumber5]).show();
    dosenumber5++;
  });
  $('#adddose6').click(function(){
    $(dosedates6[dosenumber6]).show();
    dosenumber6++;
  });
  $('#adddose7').click(function(){
    $(dosedates7[dosenumber7]).show();
    dosenumber7++;
  });
  $('#adddose8').click(function(){
    $(dosedates8[dosenumber8]).show();
    dosenumber8++;
  });
  $('#adddose9').click(function(){
    $(dosedates9[dosenumber9]).show();
    dosenumber9++;
  });
  $('#adddose10').click(function(){
    $(dosedates10[dosenumber10]).show();
    dosenumber10++;
  });
  $('#adddose11').click(function(){
    $(dosedates11[dosenumber11]).show();
    dosenumber11++;
  });
  $('#adddose12').click(function(){
    $(dosedates12[dosenumber12]).show();
    dosenumber12++;
  });
  $('#adddose13').click(function(){
    $(dosedates13[dosenumber13]).show();
    dosenumber13++;
  });
  $('#adddose14').click(function(){
    $(dosedates14[dosenumber14]).show();
    dosenumber14++;
  });
  $('#adddose15').click(function(){
    $(dosedates15[dosenumber15]).show();
    dosenumber15++;
  });
  $('#adddose16').click(function(){
    $(dosedates16[dosenumber16]).show();
    dosenumber16++;
  });
  $('#adddose17').click(function(){
    $(dosedates17[dosenumber17]).show();
    dosenumber17++;
  });
  $('#adddose18').click(function(){
    $(dosedates18[dosenumber18]).show();
    dosenumber18++;
  });
  $('#adddose19').click(function(){
    $(dosedates19[dosenumber19]).show();
    dosenumber19++;
  });
  $('#adddose20').click(function(){
    $(dosedates20[dosenumber20]).show();
    dosenumber20++;
  });


  $('#add').click(function(){

    var birthdayvalue = document.getElementById("birthday1").value;
    var birthday = new Date(birthdayvalue);
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
    var year11 = new Date(birthday.setFullYear(birthday.getFullYear()+11));
    birthday = new Date(birthdayvalue);
    var year16 = new Date(birthday.setFullYear(birthday.getFullYear()+16));
    birthday = new Date(birthdayvalue);
    var months24 = new Date(birthday.setMonth(birthday.getMonth()+24));
    birthday = new Date(birthdayvalue);
    var months60 = new Date(birthday.setMonth(birthday.getMonth()+60));
    birthday = new Date(birthdayvalue);
    var year2 = new Date(birthday.setFullYear(birthday.getFullYear()+2));
    birthday = new Date(birthdayvalue);
    var year7 = new Date(birthday.setFullYear(birthday.getFullYear()+7));
    birthday = new Date(birthdayvalue);
    var months7 = new Date(birthday.setMonth(birthday.getMonth()+7));
    birthday = new Date(birthdayvalue);
    var years4 = new Date(birthday.setFullYear(birthday.getFullYear()+4));
    birthday = new Date(birthdayvalue);
    var months19 = new Date(birthday.setDate(birthday.getDate()+19));
    birthday = new Date(birthdayvalue);


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
        for(j=0; j<vaccines[0].length; j++){
          if (document.getElementById(vaccines[i][j]).value!==''){
            hepbdates.push(document.getElementById(vaccines[i][j]).value);
          }
        }
      }
      else if(selections[i].text()=='Rotavirus (Rotarix/RV1)'){
        rotarixdates.push(document.getElementById(dates[i]).value);
        for(j=0; j<vaccines[0].length; j++){
          if (document.getElementById(vaccines[i][j]).value!==''){
            rotarixdates.push(document.getElementById(vaccines[i][j]).value);
          }
        }
      }
      else if(selections[i].text()=='DTaP'){
        dtapdates.push(document.getElementById(dates[i]).value);
        for(j=0; j<vaccines[0].length; j++){
          if (document.getElementById(vaccines[i][j]).value!==''){
            dtapdates.push(document.getElementById(vaccines[i][j]).value);
          }
        }
      }
      else if(selections[i].text()=='HiB (ActHIB, Pentacel, or Hiberix)'){
        hibdates.push(document.getElementById(dates[i]).value);
        for(j=0; j<vaccines[0].length; j++){
          if (document.getElementById(vaccines[i][j]).value!==''){
            hibdates.push(document.getElementById(vaccines[i][j]).value);
          }
        }
      }
      else if(selections[i].text()=='HiB (PedvaxHIB)'){
        pedvaxdates.push(document.getElementById(dates[i]).value);
        for(j=0; j<vaccines[0].length; j++){
          if (document.getElementById(vaccines[i][j]).value!==''){
            pedvaxdates.push(document.getElementById(vaccines[i][j]).value);
          }
        }
      }
      else if(selections[i].text()=='Rotavirus (RotaTeq)'){
        rotateqdates.push(document.getElementById(dates[i]).value);
        for(j=0; j<vaccines[0].length; j++){
          if (document.getElementById(vaccines[i][j]).value!==''){
            rotateqdates.push(document.getElementById(vaccines[i][j]).value);
          }
        }
      }
      else if(selections[i].text()=='Pneumococcal (PCV13)'){
        pcvdates.push(document.getElementById(dates[i]).value);
        for(j=0; j<vaccines[0].length; j++){
          if (document.getElementById(vaccines[i][j]).value!==''){
            pcvdates.push(document.getElementById(vaccines[i][j]).value);
          }
        }
      }
      else if(selections[i].text()=='Poliovirus'){
        poliodates.push(document.getElementById(dates[i]).value);
        for(j=0; j<vaccines[0].length; j++){
          if (document.getElementById(vaccines[i][j]).value!==''){
            poliodates.push(document.getElementById(vaccines[i][j]).value);
          }
        }
      }
      else if(selections[i].text()=='MMR (measles, mumps, rubella)'){
        mmrdates.push(document.getElementById(dates[i]).value);
        for(j=0; j<vaccines[0].length; j++){
          if (document.getElementById(vaccines[i][j]).value!==''){
            mmrdates.push(document.getElementById(vaccines[i][j]).value);
          }
        }
      }
      else if(selections[i].text()=='Varicella'){
        varicelladates.push(document.getElementById(dates[i]).value);
        for(j=0; j<vaccines[0].length; j++){
          if (document.getElementById(vaccines[i][j]).value!==''){
            varicelladates.push(document.getElementById(vaccines[i][j]).value);
          }
        }
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
    var dtapdose5a = new Date(birthday.setFullYear(birthday.getFullYear()+4));
    birthday = new Date(birthdayvalue);
    var dtapdose5b = new Date(birthday.setFullYear(birthday.getFullYear()+7));
    dtapentry5 = new Date(dtapdates[4]);
    birthday = new Date(birthdayvalue);
    var dtapentry36mos = new Date(dtapentry3.setMonth(dtapentry3.getMonth()+6));
    dtapentry3 = new Date(dtapdates[2]);
    var dtapentry46mos = new Date(dtapentry4.setMonth(dtapentry4.getMonth()+6));
    dtapentry4 = new Date(dtapdates[3]);
    var dtapentry14wks = new Date(dtapentry1.setDate(dtapentry1.getDate()+28));
    dtapentry1 = new Date(dtapdates[0]);
    var dtapentry18wks = new Date(dtapentry1.setDate(dtapentry1.getDate()+56));
    dtapentry1 = new Date(dtapdates[0]);
    var dtapentry24wks = new Date(dtapentry2.setDate(dtapentry2.getDate()+28));
    dtapentry2 = new Date(dtapdates[1]);
    var dtapentry28wks = new Date(dtapentry2.setDate(dtapentry2.getDate()+56));
    dtapentry2 = new Date(dtapdates[1]);
    var loop = 0;

    do{
      var firstdose = [];
      var nextdose = [];
      if(dtapdates.length==0){
        if(today>dtapdose1b){
          if(today>months4 && today<year4){
            firstdose.push('1st DTaP dose overdue. Catch up schedule:');
            nextdose.push('1st DTaP dose today.');
            nextdose.push('2nd DTaP dose 4 to 8 weeks after 1st DTaP dose.');
            nextdose.push('3rd DTaP dose 4 to 8 weeks after 2nd DTaP dose.');
            nextdose.push('4th DTaP dose 6 months after 3rd DTaP dose.');
            nextdose.push('5th DTaP dose (final dose) between 4 and 6 years old.');
            $('.dtap').append('</br>' + firstdose + ' ');
            $('.dtapbutton').append('+ </br>');
            for(i=0; i<nextdose.length; i++){
              $('.dtap2').append('</br>' + nextdose[i] + '</br>');
            }
            break;
          }
          else if(today>year4 && today<year7){
            firstdose.push('1st DTaP dose overdue. Catch up schedule:');
            nextdose.push('1st DTaP dose today.');
            nextdose.push('2nd DTaP dose 4 to 8 weeks after dose 1.');
            nextdose.push('3rd DTaP dose 4 to 8 weeks after dose 2.');
            nextdose.push('4th DTaP (final dose) dose 6 months after dose 3.');
            $('.dtap').append('</br>' + firstdose + ' ');
            $('.dtapbutton').append('+ </br>');
            for(i=0; i<nextdose.length; i++){
              $('.dtap2').append('</br>' + nextdose[i] + '</br>');
            }
            break;
          }
          else{
            firstdose.push('1st DTaP dose overdue. See physician.');
            $('.dtap').append('</br>' + firstdose + '</br>');
            break;
          }
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
          nextdose.push('5th DTaP dose (final dose) between 4 and 6 years old.');
          $('.dtap').append('</br>' + firstdose + ' ');
          $('.dtapbutton').append('+ <br/>');
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
          if(dtapdates.length==1){
            if(today>months4 && today<year1){
              firstdose.push('1st DTaP dose administered too late. Catch up schedule:');
              if(today>dtapentry14wks){
                nextdose.push('2nd DTaP dose today.');
              }
              else{
                nextdose.push('2nd DTaP dose 4 to 8 weeks after dose 1. (Between ' + dtapentry14wks.toLocaleDateString() + ' and ' + dtapentry18wks.toLocaleDateString() + ').');
              }
              nextdose.push('3rd DTaP dose 4 to 8 weeks after dose 2.');
              nextdose.push('4th DTAP dose 6 months after dose 3 AND after 15 months old.');
              nextdose.push('5th DTaP dose (final dose) between 4 and 6 years old.');
              $('.dtap').append('</br>' + firstdose + ' ');
              $('.dtapbutton').append('+ <br/>');
              for(i=0; i<4; i++){
                $('.dtap2').append('<br/>' + nextdose[i] + '<br/>');            
              }
              break;
            }
            else if(today>year1 && today<year4){
              firstdose.push('1st DTaP dose administered too late. Catch up schedule:');
              if(today>dtapentry14wks){
                nextdose.push('2nd DTaP dose today.');
              }
              else{
                nextdose.push('2nd DTaP dose 4 to 8 weeks after dose 1. (Between ' + dtapentry14wks.toLocaleDateString() + ' and ' + dtapentry18wks.toLocaleDateString() + ').');
              }
              nextdose.push('3rd DTaP dose 4 to 8 weeks after dose 2.');
              nextdose.push('4th DTaP dose 6 months after dose 3.');
              nextdose.push('5th DTaP dose (final dose) 6 months after dose 4 AND between 4 and 6 years old.');
              $('.dtap').append('</br>' + firstdose + ' ');
              $('.dtapbutton').append('+ <br/>');
              for(i=0; i<4; i++){
                $('.dtap2').append('<br/>' + nextdose[i] + '<br/>');            
              }
              break;
            }
            else if(today>year4 && today<year7){
              firstdose.push('1st DTaP dose administered too late. Catch up schedule:');
              if(today>dtapentry14wks){
                nextdose.push('2nd DTaP dose today.');
              }
              else{
                nextdose.push('2nd DTaP dose 4 to 8 weeks after dose 1. (Bewteen ' + dtapentry14wks.toLocaleDateString() + ' and ' + dtapentry18wks.toLocaleDateString() + ').'); 
              }
              nextdose.push('3rd DTaP dose 4 to 8 weeks after dose 2.');
              nextdose.push('4th DTaP dose (final dose) 6 months after dose 3.');
              $('.dtap').append('</br>' + firstdose + ' ');
              $('.dtapbutton').append('+ <br/>');
              for(i=0; i<4; i++){
                $('.dtap2').append('<br/>' + nextdose[i] + '<br/>');            
              }
              break;
            }
            else{
              firstdose.push('1st DTaP dose administered too late. See physician.');
              $('.dtap').append('</br>' + firstdose + '</br>');
              break;              
            }
          }
          else{
            firstdose.push('1st DTaP dose administered too late. See physician.');
            $('.dtap').append('</br>' + firstdose + '</br>');
            break;
          }
        }
        else{
          if(dtapdates.length==1){
            if(today>dtapdose2b){
              var dtapentry14wks = new Date(dtapentry1.setDate(dtapentry1.getDate()+28));
              dtapentry1 = new Date(dtapdates[0]);
              var dtapentry18wks = new Date(dtapentry1.setDate(dtapentry1.getDate()+56));
              dtapentry1 = new Date(dtapdates[0]); 
              if(today>months4 && today<year4){
                firstdose.push('2nd DTaP dose overdue. Catch up schedule: '); 
                if(today>dtapentry14wks){
                  nextdose.push('2nd DTaP dose today.');
                }
                else{
                  nextdose.push('2nd DTaP dose 4 to 8 weeks after dose 1. (Between ' + dtapentry14wks.toLocaleDateString() + ' and ' + dtapentry18wks.toLocaleDateString() + ').');
                }
                nextdose.push('3rd DTaP dose 4 to 8 weeks after dose 2.');
                nextdose.push('4th DTaP dose 6 months after dose 3.');
                nextdose.push('5th DTaP dose (final dose) between 4 and 6 years old.');
                $('.dtap').append('</br>' + firstdose + ' ');
                $('.dtapbutton').append('+ </br>');
                for(i=0; i<nextdose.length; i++){
                  $('.dtap2').append('</br>' + nextdose[i] + '</br>');
                }
                break;
              }
              else if (today>year4 && today<year7){
                firstdose.push('2nd DTaP dose overdue. Catch up schedule:');
                if(today>dtapentry1){
                  nextdose.push('2nd DTaP dose today.');
                }
                else{
                  nextdose.push('2nd DTaP dose 4 to 8 weeks after dose 1.');
                }
                nextdose.push('3rd DTaP dose 4 to 8 weeks after dose 2.');
                nextdose.push('4th DTaP dose (final dose) 6 months after dose 3.');
                $('.dtap').append('</br>' + firstdose + ' ');
                $('.dtapbutton').append('+ </br>');
                for(i=0; i<nextdose.length; i++){
                  $('.dtap2').append('</br>' + nextdose[i] + '</br>');
                }
                break;
              }
              else{
                firstdose.push('2nd DTaP dose overdue. See physician.');
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
              nextdose.push('5th DTaP dose (final dose) between 5 and 7 years old.');
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
          if(dtapdates.length==2){
            if(today>months4 && today<year1){
              firstdose.push('2nd DTaP dose administered too late. Catch up schedule:');
              if(today>dtapentry24wks){
                nextdose.push('3rd DTaP dose today.');
              }
              else{
                nextdose.push('3rd DTaP dose 4 to 8 weeks after dose 2. (Between ' + dtapentry24wks.toLocaleDateString() + ' and ' + dtapentry28wks.toLocaleDateString() + ').');
              }
              nextdose.push('4th DTaP dose 6 months after dose 3 AND after 15 months old.');
              nextdose.push('5th DTaP (final dose) between 4 and 6 years old.');
              $('.dtap').append('</br>' + firstdose + ' ');
              $('.dtapbutton').append('+ </br>');
              for(i=0; i<nextdose.length; i++){
                $('.dtap2').append('</br>' + nextdose[i] + '</br>');
              }
              break;
            }
            else if(today>year1 && today<year4){
              firstdose.push('2nd DTaP dose administered too late. Catch up schedule:');
              if(today>dtapentry24wks){
                nextdose.push('3rd DTaP dose today.');
              }
              else{
                nextdose.push('3rd DTaP dose 4 to 8 weeks after dose 2. (Between ' + dtapentry24wks.toLocaleDateString() + ' and ' + dtapentry28wks.toLocaleDateString() + ').');
              }
              nextdose.push('4th DTaP dose 6 months after dose 3 AND after 15 months old.');
              nextdose.push('5th DTaP (final dose) between 4 and 6 years old.');
              $('.dtap').append('</br>' + firstdose + ' ');
              $('.dtapbutton').append('+ </br>');
              for(i=0; i<nextdose.length; i++){
                $('.dtap2').append('</br>' + nextdose[i] + '</br>');
              }
              break;
            }
            else if(today>year4 && today<year7){
              firstdose.push('2nd DTaP dose administered too late. Catch up schedule:');
              if(today>dtapentry24wks){
                nextdose.push('3rd DTaP dose today.');
              }
              else{
                nextdose.push('3rd DTaP dose 4 to 8 weeks after dose 2. (Bewteen ' + dtapentry24wks.toLocaleDateString() + ' and ' + dtapentry28wks.toLocaleDateString() + ').');
              }
              nextdose.push('4th DTaP dose (final dose) 6 months after dose 3.');
              $('.dtap').append('</br>' + firstdose + ' ');
              $('.dtapbutton').append('+ </br>');
              for(i=0; i<nextdose.length; i++){
                $('.dtap2').append('</br>' + nextdose[i] + '</br>');
              }
              break;
            }
            else{
              firstdose.push('2nd DTaP dose administered too late. See physician');
              $('.dtap').append('</br>' + firstdose + '</br>');
              break;              
            }
          }
          else{
            firstdose.push('2nd DTaP dose administered too late. See physician');
            $('.dtap').append('</br>' + firstdose + '</br>');
            break;
          }
        }
        else{
          if(dtapdates.length==2){
            if(today-dtapdose3b>0){
              var dtapentry24wks = new Date(dtapentry2.setDate(dtapentry2.getDate()+28));
              dtapentry2 = new Date(dtapdates[1]);
              var dtapentry28wks = new Date(dtapentry2.setDate(dtapentry2.getDate()+56));
              dtapentry2 = new Date(dtapdates[1]);
              if(today>months4 && today<months12){
                firstdose.push('3rd DTaP dose overdue. Catch up schedule:');
                if(today>dtapentry24wks){
                  nextdose.push('3rd DTaP dose today.');
                }
                else{
                  nextdose.push('3rd DTaP dose 4 to 8 weeks after 2nd DTaP dose. (Between ' + dtapentry24wks.toLocaleDateString() + ' and ' + dtapentry28wks.toLocaleDateString() + ').');
                }
                nextdose.push('4th DTaP dose at least 6 months after 3rd DTaP dose AND at least 15 months old.');
                nextdose.push('5th DTaP dose (final dose) between 5 and 7 years old.');
                $('.dtap').append('</br>' + firstdose + ' ');
                $('.dtapbutton').append('+ </br>');
                for(i=0; i<nextdose.length; i++){
                  $('.dtap2').append('</br>' + nextdose[i] + '</br>');
                }
                break;
              }
              else if(today>year1 && today<year4){
                firstdose.push('3rd DTaP dose overdue. Catch up schedule:');
                if(today>dtapentry24wks){
                  nextdose.push('3rd DTaP dose today.');
                }
                else{
                  nextdose.push('3rd DTaP dose 4 to 8 weeks after 2nd DTaP dose. (Bewteen ' + dtapentry24wks.toLocaleDateString() + ' and ' + dtapentry28wks.toLocaleDateString() + ').');
                }
                nextdose.push('4th DTaP dose at least 6 months after 3rd DTaP dose.');
                nextdose.push('5th DTaP dose (final dose) between 5 and 7 years old.');
                $('.dtap').append('</br>' + firstdose + ' ');
                $('.dtapbutton').append('+ </br>');
                for(i=0; i<nextdose.length; i++){
                  $('.dtap2').append('</br>' + nextdose[i] + '</br>');
                }
                break;
              }
              else if(today>year4 && today<year7){
                firstdose.push('3rd DTaP dose overdue. Catch up schedule:');
                if(today>dtapentry24wks){
                  nextdose.push('3rd DTaP dose today.');
                }
                else{
                  nextdose.push('3rd DTaP dose 4 to 8 weeks after dose 2. (Between ' + dtapentry24wks.toLocaleDateString() + ' and ' + dtapentry28wks.toLocaleDateString() + ').');
                }
                nextdose.push('4th DTaP dose (final dose) 6 months after dose 3.');
                $('.dtap').append('</br>' + firstdose + ' ');
                $('.dtapbutton').append('+ </br>');
                for(i=0; i<nextdose.length; i++){
                  $('.dtap2').append('</br>' + nextdose[i] + '</br>');
                }
                break;
              }
              else{
                firstdose.push('3rd DTaP dose overdue. See physician.');
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
              nextdose.push('5th DTaP dose (final dose) between 5 and 7 years old.');
              $('.dtap').append('</br>' + firstdose + ' ');
              $('.dtapbutton').append('+ </br>');
              for(i=0; i<nextdose.length; i++){
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
          if(dtapdates.length==3){
            if(today>year1 && today<year4){
              firstdose.push('3rd DTaP dose administered too late. Catch up schedule:');
              if(today>dtapentry36mos){
                if(today>months12 && today<months15){
                  nextdose.push('4th DTaP dose between 15 and 18 months old. (Between ' + months15.toLocaleDateString() + ' and ' + months19.toLocaleDateString() + ').');
                }
                else{
                  nextdose.push('4th DTaP dose today.');
                }
                nextdose.push('5th DTaP dose (final dose) 6 months after dose 4 AND between 4 and 6 years old.');
              }
              else{
                nextdose.push('4th DTaP dose 6 months after dose 3. (After ' + dtapentry36mos.toLocaleDateString() + ').');
                nextdose.push('5th DTaP dose (final dose) 6 months after dose 4 AND between 4 and 6 years old.');
              }
              $('.dtap').append('</br>' + firstdose + ' ');
              $('.dtapbutton').append('+ </br>');
              for(i=0; i<nextdose.length; i++){
                $('.dtap2').append('</br>' + nextdose[i] + '</br>');
              }
              break;
            }
            else if(today>year4 && today<year7){
              firstdose.push('3rd DTaP dose administered too late. Catch up schedule:.....');
              if(today>dtapentry36mos){
                nextdose.push('4th DTaP dose (final dose) today.');
              }
              else{
                nextdose.push('4th DTaP dose (final dose) 6 months after dose 3. (After ' + dtapentry36mos.toLocaleDateString() + ').');
              }
              $('.dtap').append('</br>' + firstdose + ' ');
              $('.dtapbutton').append('+ </br>');
              for(i=0; i<nextdose.length; i++){
                $('.dtap2').append('</br>' + nextdose[i] + '</br>');
              }
              break;
            }
            else{
              firstdose.push('3rd DTaP dose administered too late. See physician.');
              $('.dtap').append('</br>' + firstdose + '</br>');
              break;              
            }
          }
          else{
            firstdose.push('3rd DTaP dose administered too late. See physician.');
            $('.dtap').append('</br>' + firstdose + '</br>');
            break;
          }
        }
        else{
          if(dtapdates.length==3){
            if(today-dtapdose4b>0){
              if(today>year1 && today<year4){
                firstdose.push('4th DTaP dose overdue. Catch up schedule:');
                if(today>dtapentry36mos){
                  if(today>months12 && today<months15){
                    nextdose.push('4th DTaP dose between 15 and 18 months old. (Between ' + dtapdose4a.toLocaleDateString() + ' and ' + dtapdose4b.toLocaleDateString() + ').');
                    nextdose.push('5th DTaP dose (final dose) at least 6 months after 4th DTaP dose AND between 4 and 6 years old.');   
                  }
                  else{
                    nextdose.push('4th DTaP dose today.');
                    nextdose.push('5th DTaP dose (final dose) at least 6 months after 4th DTaP dose AND between 4 and 6 years old.');
                    $('.dtap').append('</br>' + firstdose + ' ');
                    $('.dtapbutton').append('+ </br>');
                    for(i=0; i<nextdose.length; i++){
                      $('.dtap2').append('</br>' + nextdose[i] + '</br>');
                    }
                    break;   
                  }
                }
                else{
                  firstdose.push('4th DTaP dose at least 6 months after dose 3.');
                  nextdose.push('5th DTaP dose at least 6 months after 4th DTaP dose AND between 4 and 6 years old.');
                  $('.dtap').append('</br>' + firstdose + ' ');
                  $('.dtapbutton').append('+ </br>');
                  for(i=0; i<nextdose.length; i++){
                    $('.dtap2').append('</br>' + nextdose[i] + '</br>');
                  }
                  break;  
                }
              }
              else if(today>year4 && today<year7){
                firstdose.push('4th DTaP dose overdue. Catch up schedule:');
                if(today>dtapentry36mos){
                  nextdose.push('4th DTaP dose (final dose) today.');
                }
                else{
                  nextdose.push('4th DTaP dose (final dose) 6 months after dose 3. (After' + dtapentry36mos.toLocaleDateString() + ').');
                }
                $('.dtap').append('</br>' + firstdose + ' ');
                $('.dtapbutton').append('+ </br>');
                for(i=0; i<nextdose.length; i++){
                  $('.dtap2').append('</br>' + nextdose[i] + '</br>');
                }
                break;  
              }
              else{
                firstdose.push('4th DTaP dose overdue. See physician.');
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
              nextdose.push('5th DTaP dose (final dose) between 5 and 7 years old.');
              $('.dtap').append('</br>' + firstdose + ' ');
              $('.dtapbutton').append('+ </br>');
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
          if(dtapdates.length==4){
            if(today>year4 && today<year7){
              if(dtapentry4<year4){
                firstdose.push('4th DTaP dose administered too late. Catch up schedule:');
                if(today<dtapentry46mos){
                  nextdose.push('5th DTaP dose (final dose) 6 months after dose 4 (After ' + dtapentry46mos.toLocaleDateString() + ').');
                }
                else{
                  nextdose.push('5th DTaP dose (final dose) today.');
                }
                $('.dtap').append('</br>' + firstdose + ' ');
                $('.dtapbutton').append('+ </br>');
                for(i=0; i<nextdose.length; i++){
                  $('.dtap2').append('</br>' + nextdose[i] + '</br>')
                } 
                break; 
              }
            }
            else{
              firstdose.push('4th DTaP dose administered too late. See physician.');
              $('.dtap').append('</br>' + firstdose + '</br>');
              break;              
            }
          }
          else{
            firstdose.push('4th DTaP dose administered too late. See physician.');
            $('.dtap').append('</br>' + firstdose + '</br>');
            break;
          }
        }
        else{
          if(dtapdates.length==4){
            if(today>dtapdose5b){
              firstdose.push('5th DTaP dose overdue. See physician.');
              $('.dtap').append('</br>' + firstdose + '</br>');
              break;
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
          firstdose.push('5th DTaP dose administered too late. See physician.');
          $('.dtap').append('</br>' + firstdose + '</br>');
          break;
        }
        else{
        }
      }


      loop=1;
    }
    while(loop=0);
    


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
    loop = 0;
    
    do{
      var firstdose=[];
      var nextdose=[];
      
      if(hepbdates.length==0){
        if(today>hepbdose1b){
          if(today>year11 && today<year16){
            firstdose.push('1st Hep B dose overdue. Catch up schedule: ');
            nextdose.push('1st dose Recombivax HB today.');
            nextdose.push('2nd dose (final dose) Recombivax HB 4 to 6 months after 1st Recombivax HB dose.');
            $('.hepb').append('</br>' + firstdose + ' ');
            $('.hepbbutton').append('+ </br>');
            for(i=0; i<nextdose.length; i++){
              $('.hepb2').append('</br>' + nextdose[i] + '</br>')
            }
            break;  
          }
          else{
            firstdose.push('1st HepB dose overdue. See physician.');
            $('.hepb').append('</br>' + firstdose + '</br>');
            break;
          }
        }
        else{
          firstdose.push('1st HepB dose within 12 hours of birth (' + hepbdose1a.toLocaleDateString() + ').');
          nextdose.push('2nd HepB dose between 1 and 4 months old. (Between ' + hepbdose2a.toLocaleDateString() + ' and ' + hepbdose2b.toLocaleDateString() + ').');
          nextdose.push('3rd HepB dose (final dose) between 6 and 19 months old. (Between ' + hepbdose3a.toLocaleDateString() + ' and ' + hepbdose3b.toLocaleDateString() + ').');
          $('.hepb').append('</br>' + firstdose + ' ');
          $('.hepbbutton').append('+ </br>');
          for(i=0; i<nextdose.length; i++){
            $('.hepb2').append('</br>' + nextdose[i] + '</br>')
          }
          break;  
        }
      }

      if(hepbentry1>hepbdose1b){
        firstdose.push('1st HepB dose administered too late. See physician.');
        $('.hepb').append('</br>' + firstdose + '</br>');
        break;
      }
      else{
        if(hepbdates.length==1){
          if(today>hepbdose2b){
            firstdose.push('2nd HepB dose overdue. See physician.');
            $('.hepb').append('</br>' + firstdose + '</br>');
            break;
          }
          else{
            if(today>hepbdose2a){
              firstdose.push('2nd HepB dose between 1 and  4 months old. (By ' + hepbdose2b.toLocaleDateString() + ').');
            }
            else{
              firstdose.push('2nd HepB dose between 1 and 4 months old. (Between ' + hepbdose2a.toLocaleDateString() + ' and ' + hepbdose2b.toLocaleDateString() + ').');
            }
            nextdose.push('3rd HepB dose (final dose) between 6 and 19 months old. (Between ' + hepbdose3a.toLocaleDateString() + ' and ' + hepbdose3b.toLocaleDateString() + ').');
            $('.hepb').append('</br>' + firstdose + ' ');
            $('.hepbbutton').append('+ </br>');
            for(i=0; i<nextdose.length; i++){
              $('.hepb2').append('</br>' + nextdose[i] + '</br>')
            }
            break;  
          }
        }
      }

      if(hepbentry2<hepbdose2a){
        firstdose.push('2nd HepB dose administered too early. See physician.');
        $('.hepb').append('</br>' + firstdose + '</br>');
        break;
      }
      else{
        if(hepbentry2>hepbdose2b){
          firstdose.push('2nd HepB dose administered too late. See physician.');
          $('.hepb').append('</br>' + firstdose + '</br>');
          break;
        }
        else{
          if(hepbdates.length==2){
            if(today>hepbdose3b){
              firstdose.push('3rd HepB dose overdue. See physician.');
              $('.hepb').append('</br>' + firstdose + '</br>');
              break;
            }
            else{
              if(today>hepbdose3a){
                firstdose.push('3rd HepB dose (final dose) between 6 and 19 months. (By ' + hepbdose3b.toLocaleDateString() + ').');
              }
              else{
                firstdose.push('3rd HepB dose (final dose) between 6 and 19 months. (Bewteen ' + hepbdose3a.toLocaleDateString() + ' and ' + hepbdose3b.toLocaleDateString() + ').');
              }
              $('.hepb').append('</br>' + firstdose + '</br>');
              break;
            }
          }
        }
      }

      if(hepbentry3<hepbdose3a){
        firstdose.push('3rd HepB dose administered too early. See physician.');
        $('.hepb').append('</br>' + firstdose + '</br>');
        break;
      }
      else{
        if(hepbentry3>hepbdose3b){
          firstdose.push('3rd HepB dose administered too late. See physician.');
          $('.hepb').append('</br>' + firstdose + ' ');
          $('.hepbbutton').append('+ </br>');
          for(i=0; i<nextdose.length; i++){
            $('.hepb2').append('</br>' + nextdose[i] + '</br>')
          }
          break;  
        }
        else{
        }
      }


      loop=1;
    }
    while(loop=0);


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
      var hibentry14wks = new Date(hibentry1.setDate(hibentry1.getDate()+28));
      hibentry1 = new Date(hibdates[0]);
      var hibentry18wks = new Date(hibentry1.setDate(hibentry1.getDate()+56));
      hibentry1 = new Date(hibdates[0]);
      var hibentry24wks = new Date(hibentry2.setDate(hibentry2.getDate()+28));
      hibentry2 = new Date(hibdates[1]);
      var hibentry28wks = new Date(hibentry2.setDate(hibentry2.getDate()+56));
      hibentry2 = new Date(hibdates[1]);
      var hibentry38wks = new Date(hibentry3.setDate(hibentry3.getDate()+56));
      hibentry3 = new Date(hibdates[2]);
      var hibentry312wks = new Date(hibentry3.setDate(hibentry3.getDate()+84));
      hibentry3 = new Date(hibdates[2]);
      var hibentry112wks = new Date(hibentry1.setDate(hibentry1.getDate()+84));
      hibentry1 = new Date(hibdates[0]);
      var hibentry212wks = new Date(hibentry2.setDate(hibentry2.getDate()+84));
      hibentry2 = new Date(hibdates[1]);
      loop = 0;

      do{
        var firstdose = [];
        var nextdose = [];

        if(hibdates.length==0){
          if(today>hibdose1b){
            if(today>months4 && today<months7){
              firstdose.push('1st HiB dose overdue. Catch up schedule:');
              nextdose.push('1st HiB dose today.');
              nextdose.push('2nd HiB dose 4 to 8 weeks after dose 1.');
              nextdose.push('3rd HiB dose 4 to 8 weeks after dose 2.');
              nextdose.push('4th Hib dose (final dose) bewteen 12 and 18 months old. (Between ' + hibdose4a.toLocaleDateString() + ' and ' + hibdose4b.toLocaleDateString() + ').');
              $('.hib').append('</br>' + firstdose + ' ');
              $('.hibbutton').append('+ </br>');
              for(i=0; i<nextdose.length; i++){
                $('.hib2').append('</br>' + nextdose[i] + '</br>');
              }
              break; 
            }
            else if(today>months7 && today<months12){
              firstdose.push('1st HiB dose overdue. Catch up schedule:');
              nextdose.push('1st HiB dose today.');
              nextdose.push('2nd HiB dose 4 to 8 weeks after dose 1.');
              nextdose.push('3rd HiB dose (final dose) 8 to 12 weeks after dose 2.');
              $('.hib').append('</br>' + firstdose + ' ');
              $('.hibbutton').append('+ </br>');
              for(i=0; i<nextdose.length; i++){
                $('.hib2').append('</br>' + nextdose[i] + '</br>');
              }
              break;  
            }
            else if(today>months12 && today<months15){
              firstdose.push('1st HiB dose overdue. Catch up schedule:');
              nextdose.push('1st HiB dose today.');
              nextdose.push('2nd HiB dose (final dose) 4 to 8 weeks after dose 1.');
              $('.hib').append('</br>' + firstdose + ' ');
              $('.hibbutton').append('+ </br>');
              for(i=0; i<nextdose.length; i++){
                $('.hib2').append('</br>' + nextdose[i] + '</br>');
              }
              break;  
            }
            else if(today>months15 && today<months60){
              firstdose.push('1st HiB dose overdue. Catch up schedule:');
              nextdose.push('1st HiB dose (final dose) today.');
              $('.hib').append('</br>' + firstdose + ' ');
              $('.hibbutton').append('+ </br>');
              for(i=0; i<nextdose.length; i++){
                $('.hib2').append('</br>' + nextdose[i] + '</br>');
              }
              break; 
            }
            else{
              firstdose.push('1st HiB dose overdue. See physician.');
              $('.hib').append('</br>' + firstdose + '</br>');
              break;
            }
          }
          else{
            var hib=[];
            if(today>hibdose1a){
              firstdose.push('1st HiB dose between 2 and 4 months old. (By ' + hibdose1b.toLocaleDateString() + ').');
            }
            else{
              firstdose.push('1st HiB dose between 2 and 4 months old. (Between ' + hibdose1a.toLocaleDateString() + ' and ' + hibdose1b.toLocaleDateString() + ').');
            }
            nextdose.push('2nd HiB dose between 4 and 6 months old AND 4 weeks after 1st HiB dose.');
            nextdose.push('3rd HiB dose between 6 and 9 months old AND 4 weeks after 2nd HiB dose.');
            nextdose.push('4th HiB dose (final dose) between 12 and 18 months old. (Between ' + hibdose4a.toLocaleDateString() + ' and ' + hibdose4b.toLocaleDateString() + ').');
            $('.hib').append('</br>' + firstdose + ' ');
            $('.hibbutton').append('+ </br>');
            for(i=0; i<nextdose.length; i++){
              $('.hib2').append('</br>' + nextdose[i] + '</br>');
            }
            break; 
          }
        }

        if(hibentry1<hibdose1a){
          firstdose.push('1st HiB dose administered too early. See physician.');
          $('.hib').append('</br>' + firstdose + '</br>');
          break;
        }
        else{
          if(hibentry1>hibdose1b){
            if(today>months4 && today<months7 && hibdates.length==1){
              firstdose.push('1st HiB dose administered too late. Catch up schedule:');
              if(today>hibentry14wks){
                nextdose.push('2nd HiB dose today.');
              }
              else{
                nextdose.push('2nd HiB dose 4 to 8 weeks after dose 1. (Between ' + hibentry14wks.toLocaleDateString() + ' and ' + hibentry18wks.toLocaleDateString() + ').');
              }
              nextdose.push('3rd HiB dose 4 to 8 weeks after dose 2.');
              nextdose.push('4th HiB dose (final dose) between 12 and 18 months old. (Between ' + hibdose4a.toLocaleDateString() + ' and ' + hibdose4b.toLocaleDateString() + ').');
              $('.hib').append('</br>' + firstdose + ' ');
              $('.hibbutton').append('+ </br>');
              for(i=0; i<nextdose.length; i++){
                $('.hib2').append('</br>' + nextdose[i] + '</br>');
              }
              break; 
            }
            else if(today>months7 && today<months12){
              if(hibdates.length==1){
                firstdose.push('1st HiB dose administered too late. Catch up schedule:');
                if(today>hibentry14wks){
                  nextdose.push('2nd HiB dose today.');
                  if(hibentry1>months7){
                    nextdose.push('3rd HiB dose (final dose) 3 weeks after dose 2.');
                  }
                  else{
                    nextdose.push('3rd HiB dose (final dose) 8 to 12 weeks after dose 2 AND after 12 months old.');
                  }
                }
                else{
                  nextdose.push('2nd HiB dose 4 to 8 weeks after dose 1. (Between ' + hibentry14wks.toLocaleDateString() + ' and ' + hibentry18wks.toLocaleDateString() + ').');
                  nextdose.push('3rd HiB dose (final dose) 8 to 12 weeks after dose 2 AND after 12 months old.');
                }
                $('.hib').append('</br>' + firstdose + ' ');
                $('.hibbutton').append('+ </br>');
                for(i=0; i<nextdose.length; i++){
                  $('.hib2').append('</br>' + nextdose[i] + '</br>');
                }
                break; 
              }
              else if(hibdates.length==2){
                firstdose.push('1st HiB dose administered too late. Catch up schedule:');
                if(hibentry1<months7){
                  if(today>hibentry24wks){
                    nextdose.push('3rd HiB dose today.');
                    nextdose.push('4th HiB dose (final dose) 8 to 12 weeks after dose 3 AND after 12 months old.');
                  }
                  else{
                    nextdose.push('3rd HiB dose 4 to 8 weeks after dose 2.');
                    nextdose.push('4th HiB dose (final dose) 8 to 12 weeks after dose 3 AND after 12 months old.');
                  }
                }
                else{
                  nextdose.push('3rd HiB dose (final dose) 8 to 12 weeks after dose 2 AND after 12 months old.');
                }
                $('.hib').append('</br>' + firstdose + ' ');
                $('.hibbutton').append('+ </br>');
                for(i=0; i<nextdose.length; i++){
                  $('.hib2').append('</br>' + nextdose[i] + '</br>');
                }
                break; 
              }
            }
            else if(today>months12 && today<months15){
              if(hibdates.length==1){
              firstdose.push('1st HiB dose administered too late. Catch up schedule:');
                if(hibentry1<months12){
                  if(today>hibentry14wks){
                    nextdose.push('2nd HiB dose today.');
                    nextdose.push('3rd HiB dose 8 to 12 weeks after dose 2.');
                  }
                  else{
                    nextdose.push('2nd HiB dose 4 to 8 weeks after dose 1. (Between ' + hibentry14wks.toLocaleDateString() + ' and ' + hibentry18wks.toLocaleDateString() + ').');
                    nextdose.push('3rd HiB dose (final dose) 8 to 12 weeks after dose 2.');
                  }
                }
                else{
                  if(today>hibentry18wks){
                    nextdose.push('2nd HiB dose (final dose) today.');
                  }
                  else{
                    nextdose.push('2nd HiB dose (final dose) 8 to 12 weeks after dose 1. (Between ' + hibentry18wks.toLocaleDateString() + ' and ' + hibentry112wks.toLocaleDateString() + ').');
                  }
                }
              }
              else if(hibdates.length==2){
                if(hibentry1<months12){
                  if(today>hibentry28wks){
                  firstdose.push('1st HiB dose administered too late. Catch up schedule:');
                    nextdose.push('3rd HiB dose (final dose) today.');
                  }
                  else{
                    nextdose.push('3rd HiB dose (final dose) 8 to 12 weeks after dose 2. (Between ' + hibentry28wks.toLocaleDateString() + ' and ' + hibentry212wks.toLocaleDateString() + ').');
                  }
                }
                else{
                }
              }
              $('.hib').append('</br>' + firstdose + ' ');
              $('.hibbutton').append('+ </br>');
              for(i=0; i<nextdose.length; i++){
                $('.hib2').append('</br>' + nextdose[i] + '</br>');
              }
              break; 
            }
            else if(today>months15 && today<months60){
              if(hibdates.length==1){
                if(hibentry1<months12){
                  firstdose.push('1st HiB dose administered too late. Catch up schedule:');
                  nextdose.push('2nd HiB dose (final dose) today.');
                }
                else if(hibentry1>months12 && hibentry1<months15){
                  firstdose.push('1st HiB dose administered too late. Catch up schedule:');
                  if(today>hibentry18wks){
                    nextdose.push('2nd HiB dose (final dose) today.');
                  }
                  else{
                    nextdose.push('2nd HiB dose (final dose) 8 to 12 weeks after dose 1. (Between ' + hibentry18wks.toLocaleDateString() + ' and ' + hibentry112wks.toLocaleDateString() + ').');
                  }
                }
                $('.hib').append('</br>' + firstdose + ' ');
                $('.hibbutton').append('+ </br>');
                for(i=0; i<nextdose.length; i++){
                  $('.hib2').append('</br>' + nextdose[i] + '</br>');
                }
                break; 
              }
            }
            else{
              firstdose.push('1st HiB dose administered too late. See physician.');
              $('.hib').append('</br>' + firstdose + '</br>');
            }
          }
          else{
            if(hibdates.length==1){
              if(today>hibdose2b){
                if(today>months4 && today<months7){
                  firstdose.push('2nd HiB dose overdue. Catch up schedule:');
                  if(today>hibentry14wks){
                    nextdose.push('2nd HiB dose today.');
                  }
                  else{
                    nextdose.push('2nd HiB dose 4 to 8 weeks after dose 1. (Between ' + hibentry14wks.toLocaleDateString() + ' and ' + hibentry18wks.toLocaleDateString() + ').');
                  }
                  nextdose.push('3rd HiB dose 4 to 8 weeks after dose 2.');
                  nextdose.push('4th HiB dose (final dose) between 12 and 18 months old. (Between ' + hibdose4a.toLocaleDateString() + ' and ' + hibdose4b.toLocaleDateString() + ').');
                  $('.hib').append('</br>' + firstdose + ' ');
                  $('.hibbutton').append('+ </br>');
                  for(i=0; i<nextdose.length; i++){
                    $('.hib2').append('</br>' + nextdose[i] + '</br>');
                  }
                  break; 
                }
                else if(today>months7 && today<months12){
                  firstdose.push('2nd HiB dose overdue. Catch up schedule:');
                  if(today>hibentry14wks){
                    nextdose.push('2nd HiB dose today.');
                    if(hibentry1<months7){
                      nextdose.push('3rd HiB dose 4 to 8 weeks after dose 2.');
                      nextdose.push('4th HiB dose (final dose) 8 to 12 weeks after dose 3 AND after 12 months old.');
                    }
                    else{
                      nextdose.push('3rd HiB dose (final dose) 8 to 12 weeks after dose 2 AND after 12 months old.');
                    }
                  }
                  else{
                    nextdose.push('2nd HiB dose 4 to 8 weeks after dose 1. (Between ' + hibentry14wks.toLocaleDateString() + ' and ' + hibentry18wks.toLocaleDateString() + ').');
                    nextdose.push('3rd HiB dose (final dose) 8 to 12 weeks after dose 2 AND after 12 months old.');
                  }
                  $('.hib').append('</br>' + firstdose + ' ');
                  $('.hibbutton').append('+ </br>');
                  for(i=0; i<nextdose.length; i++){
                    $('.hib2').append('</br>' + nextdose[i] + '</br>');
                  }
                  break; 
                }
                else if (today>months12 && today<months15){
                  firstdose.push('2nd HiB dose overdue. Catch up schedule:');
                  if(hibentry1<months12){
                    if(today>hibentry14wks){
                      nextdose.push('2nd HiB dose today.');
                      nextdose.push('3rd HiB dose (final dose) 8 to 12 weeks after dose 2.');
                    }
                    else{
                      nextdose.push('2nd HiB dose 4 to 8 weeks after dose 1. (Between ' + hibentry14wks.toLocaleDateString() + ' and ' + hibentry18wks.toLocaleDateString() + ').');
                      nextdose.push('3rd HiB dose (final dose) 8 to 12 weeks after 2.');
                    }
                  }
                  else{
                    if(today>hibentry18wks){
                      nextdose.push('2nd HiB dose (final dose) today.');
                    }
                    else{
                      nextdose.push('2nd HiB dose (final dose) 8 to 12 weeks after dose 1. (Between ' + hibentry28wks.toLocaleDateString() + ' and ' + hibentry212wks.toLocaleDateString() + ').');
                    }
                  }
                  $('.hib').append('</br>' + firstdose + ' ');
                  $('.hibbutton').append('+ </br>');
                  for(i=0; i<nextdose.length; i++){
                    $('.hib2').append('</br>' + nextdose[i] + '</br>');
                  }
                  break; 
                }
                else if(today>months15 && today<months60){
                  if(hibentry1<months12){
                  firstdose.push('2nd HiB dose overdue. Catch up schedule:');
                    nextdose.push('2nd HiB dose (final dose) today.');
                  }
                  else if(hibentry1>months12 && hibentry1<months15){
                  firstdose.push('2nd HiB dose overdue. Catch up schedule:');
                    if(today>hibentry18wks){
                      nextdose.push('2nd HiB dose (final dose) today.');
                    }
                    else{
                      nextdose.push('2nd HiB dose (final dose) 8 to 12 weeks after dose 1. (Between ' + hibentry18wks.toLocaleDateString() + ' and ' + hibentry112wks.toLocaleDateString() + ').');
                    }
                  }
                  $('.hib').append('</br>' + firstdose + ' ');
                  $('.hibbutton').append('+ </br>');
                  for(i=0; i<nextdose.length; i++){
                    $('.hib2').append('</br>' + nextdose[i] + '</br>');
                  }
                  break; 
                }
                else{
                  firstdose.push('2nd HiB dose overdue. See physician.');
                  $('.hib').append('</br>' + firstdose + '</br>');
                  break;
                }
              }
              else{
                if(today>hibdose2a){
                  firstdose.push('2nd HiB dose between 4 and 6 months old. (By ' + hibdose2b.toLocaleDateString() + ').');
                }
                else{
                  firstdose.push('2nd HiB dose between 4 and 6 months old. (Between ' + hibdose2a.toLocaleDateString() + ' and ' + hibdose2b.toLocaleDateString() + ').');  
                }
                nextdose.push('3rd HiB dose between 6 and 9 months old AND 4 weeks after 2nd HiB dose.');
                nextdose.push('4th HiB dose (final dose) between 12 and 18 months old. (Between ' + hibdose4a.toLocaleDateString() + ' and ' + hibdose4b.toLocaleDateString() + ').');
                $('.hib').append('</br>' + firstdose + ' ');
                $('.hibbutton').append('+ </br>');
                for(i=0; i<nextdose.length; i++){
                  $('.hib2').append('</br>' + nextdose[i] + '</br>');
                }
                break; 
              }
            }
          }
        }

        if(hibentry2<hibdose2a){
          firstdose.push('2nd HiB dose administered too early. See physician.');
          $('.hib').append('</br>' + firstdose + '</br>');
          break;
        }
        else{
          if(hibentry2>hibdose2b){
            if(today>months4 && today<months7 && hibdates.length==2){
              firstdose.push('2nd HiB dose administered too late. Catch up schedule:');
              if(today>hibentry24wks){
                nextdose.push('3rd HiB dose today.');
              }
              else{
                nextdose.push('3rd HiB dose between 4 and 8 weeks after dose 2. (Between ' + hibentry24wks.toLocaleDateString() + ' and ' + hibentry28wks.toLocaleDateString() + ').');
              }
              nextdose.push('4th HiB dose (final dose) between 12 and 18 months old. (Between ' + hibdose4a.toLocaleDateString() + ' and ' + hibdose4b.toLocaleDateString() + ').');
              $('.hib').append('</br>' + firstdose + ' ');
              $('.hibbutton').append('+ </br>');
              for(i=0; i<nextdose.length; i++){
                $('.hib2').append('</br>' + nextdose[i] + '</br>');
              }
              break; 
            }
            else if(today>months7 && today<months12 && hibdates.length==2){
              firstdose.push('2nd HiB dose administered too late. Catch up schedule:');
              if(hibentry1<months7){
                if(today>hibentry24wks){
                  nextdose.push('3rd HiB dose today.');
                  nextdose.push('4th HiB dose (final dose) 8 to 12 weeks after dose 3 AND after 12 months old.');
                }
                else{
                  if(hibentry24wks>months12){
                    nextdose.push('3rd HiB dose (final dose) 4 to 8 weeks after dose 2. (Between ' + hibentry24wks.toLocaleDateString() + ' and ' + hibentry28wks.toLocaleDateString() + ').');                  
                  }
                  else{
                    nextdose.push('3rd HiB dose 4 to 8 weeks after dose 2. (Between ' + hibentry24wks.toLocaleDateString() + ' and ' + hibentry28wks.toLocaleDateString() + ').');
                    nextdose.push('4th HiB dose (final dose) 8 to 12 weeks after dose 3 AND after 12 months old.');
                  }
                }
              }
              else{
                var hibdose3final;
                if(hibentry38wks>months12){
                  nextdose.push('3rd HiB dose (final dose) 8 to 12 weeks after dose 2 AND after 12 months old. (Between ' + hibentry38wks.toLocaleDateString() + ' and ' + hibentry312wks.toLocaleDateString() + ').');
                }
                else{
                  nextdose.push('3rd HiB dose (final dose) 8 to 12 weeks after dose 2 AND after 12 months old. (After ' + months12.toLocaleDateString() + ').');
                }
              }
              $('.hib').append('</br>' + firstdose + ' ');
              $('.hibbutton').append('+ </br>');
              for(i=0; i<nextdose.length; i++){
                $('.hib2').append('</br>' + nextdose[i] + '</br>');
              }
              break;    
            }
            else if(today>months12 && today<months15 && hibdates.length==2){
              if(hibentry1<months12){
              firstdose.push('2nd HiB dose administered too late. Catch up schedule:');
                if(today>hibentry28wks){
                  nextdose.push('3rd HiB dose (final dose) today.');
                }
                else{
                  nextdose.push('3rd HiB dose (final dose) 8 to 12 weeks after dose 2. (Between ' + hibentry28wks.toLocaleDateString() + ' and ' + hibentry212wks.toLocaleDateString() + ').');
                }
              }
              else{
              }
              $('.hib').append('</br>' + firstdose + ' ');
              $('.hibbutton').append('+ </br>');
              for(i=0; i<nextdose.length; i++){
                $('.hib2').append('</br>' + nextdose[i] + '</br>');
              }
              break; 
            }
            else if(today>months15 && today<months60 && hibdates.length==2){
              if(hibentry1<months12){
                firstdose.push('2nd HiB dose administered too late. Catch up schedule:');
                if(hibentry2<months15){
                  if(today>hibentry28wks){
                    nextdose.push('3rd HiB dose (final dose) today.');
                  }
                  else{
                    nextdose.push('3rd HiB dose (final dose) 8 to 12 weeks after dose 2. (Between ' + hibentry28wks.toLocaleDateString() + ' and ' + hibentry212wks.toLocaleDateString() + ').');
                  }
                }
                else{
                }
              }
              $('.hib').append('</br>' + firstdose + ' ');
              $('.hibbutton').append('+ </br>');
              for(i=0; i<nextdose.length; i++){
                $('.hib2').append('</br>' + nextdose[i] + '</br>');
              }
              break;      
            }
            else{
              firstdose.push('2nd HiB dose administered too late. See physician.');
              $('.hib').append('</br>' + firstdose + '</br>');
              break;
            }
          }
          else{
            if(hibdates.length==2){
              if(today>hibdose3b){
                if(today>months4 && today<months7){
                  firstdose.push('3rd HiB dose overdue. Catch up schedule:');
                  if(today>hibentry24wks){
                    nextdose.push('3rd HiB dose today.');
                  }
                  else{
                    nextdose.push('3rd HiB dose between 4 and 8 weeks after dose 2. (Between ' + hibentry24wks.toLocaleDateString() + ' and ' + hibentry28wks.toLocaleDateString() + ').');
                  }
                  nextdose.push('4th HiB dose (final dose) between 12 and 18 months old. (Between ' + hibdose4a.toLocaleDateString() + ' and ' + hibdose4b.toLocaleDateString() + ').');
                  $('.hib').append('</br>' + firstdose + ' ');
                  $('.hibbutton').append('+ </br>');
                  for(i=0; i<nextdose.length; i++){
                    $('.hib2').append('</br>' + nextdose[i] + '</br>');
                  }
                  break; 
                }
                else if(today>months7 && today<months12){
                  firstdose.push('3rd HiB dose overdue. Catch up schedule:');
                  if(hibentry1<months7){
                    if(today>hibentry24wks){
                      nextdose.push('3rd HiB dose today.');
                      nextdose.push('4th HiB dose (final dose) 8 to 12 weeks after dose 3 AND after 12 months old.');
                    }
                    else{
                      if(hibentry34wks>months12){
                        nextdose.push('3rd HiB dose (final dose) 4 to 8 weeks after dose 2. (Between ' + hibentry34wks.toLocaleDateString() + ' and ' + hibnetry38wks.toLocaleDateString() + ').');
                      }
                      else{
                        nextdose.push('3rd HiB dose 4 to 8 weeks after dose 2.');
                        nextdose.push('4th HiB dose (final dose) 8 to 12 weeks after dose 3 AND after 12 months old.');
                      }
                    }
                  }
                  $('.hib').append('</br>' + firstdose + ' ');
                  $('.hibbutton').append('+ </br>');
                  for(i=0; i<nextdose.length; i++){
                    $('.hib2').append('</br>' + nextdose[i] + '</br>');
                  }
                  break;  
                }
                else if(today>months12 && today<months15){
                  if(hibentry1<months12){
                  firstdose.push('3rd HiB dose overdue. Catch up schedule:');
                    if(today>hibentry28wks){
                      nextdose.push('3rd HiB dose (final dose) today.');
                    }
                    else{
                      nextdose.push('3rd HiB dose (final dose) 8 to 12 weeks after dose 2. (Between ' + hibentry28wks.toLocaleDateString() + ' and ' + hibentry212wks.toLocaleDateString() + ').');
                    }
                  }
                  else{
                  }
                  $('.hib').append('</br>' + firstdose + ' ');
                  $('.hibbutton').append('+ </br>');
                  for(i=0; i<nextdose.length; i++){
                    $('.hib2').append('</br>' + nextdose[i] + '</br>');
                  }
                  break; 
                }
                else if(today>months15 && today<months60){
                  if(hibentry1<months12){
                    firstdose.push('3rd HiB dose overdue. Catch up schedule:');
                    if(hibentry2<months15){
                      if(today>hibentry28wks){
                        nextdose.push('3rd HiB dose (final dose) today.');
                      }
                      else{
                        nextdose.push('3rd HiB dose (final dose) 8 to 12 weeks after dose 2. (Between ' + hibentry28wks.toLocaleDateString() + ' and ' + hibentry212wks.toLocaleDateString() + ').');
                      }
                    }
                  }
                  $('.hib').append('</br>' + firstdose + ' ');
                  $('.hibbutton').append('+ </br>');
                  for(i=0; i<nextdose.length; i++){
                    $('.hib2').append('</br>' + nextdose[i] + '</br>');
                  }
                  break; 
                }
                else{
                  firstdose.push('3rd HiB dose overdue. See physician.');
                  $('.hib').append('</br>' + firstdose + '</br>');
                  break;
                }
              }
              else{
                if(today>hibdose3a){
                  firstdose.push('3rd HiB dose between 6 and 9 months old. (By ' + hibdose3b.toLocaleDateString() + ').');
                }
                else{
                  firstdose.push('3rd HiB dose between 6 and 9 months old. (Between ' + hibdose3a.toLocaleDateString() + ' and ' + hibdose3b.toLocaleDateString() + ').');
                }
                nextdose.push('4th HiB dose (final dose) between 12 and 18 months old. (Between ' + hibdose4a.toLocaleDateString() + ' and ' + hibdose4b.toLocaleDateString() + ').');
                $('.hib').append('</br>' + firstdose + ' ');
                $('.hibbutton').append('+ </br>');
                for(i=0; i<nextdose.length; i++){
                  $('.hib2').append('</br>' + nextdose[i] + '</br>');
                }
                break;  
              }
            }
          }
        }

        if(hibentry3<hibdose3a){
          firstdose.push('3rd HiB dose administered too early. See physician');
          $('.hib').append('</br>' + firstdose + '</br>');
          break;
        }
        else{
          if(hibentry3>hibdose3b){
            if(today>months12 && today<months15){
              if(hibdates.length==3){
                if(hibentry3<months12){
                  firstdose.push('3rd HiB dose administered too late. Catch up schedule:');
                  if(today>hibentry38wks){
                    nextdose.push('4th HiB dose (final dose) today.');
                  }
                  else{
                    nextdose.push('4th HiB dose (final dose) 8 to 12 weeks after dose 2. (Between ' + hibentry38wks.toLocaleDateString() + ' and ' + hibentry312wks.toLocaleDateString() + ').');
                  }
                }
                else{
                }
              }
              $('.hib').append('</br>' + firstdose + ' ');
              $('.hibbutton').append('+ </br>');
              for(i=0; i<nextdose.length; i++){
                $('.hib2').append('</br>' + nextdose[i] + '</br>');
              }
              break; 
            }
            else if(today>months15 && today<months60){
              if(hibdates.length==3){
                if(hibentry3<months15){
                  if(hibentry3<months12){
                    firstdose.push('3rd HiB dose administered too late. Catch up schedule:......');
                    nextdose.push('4th HiB dose (final dose) today.');
                  }
                }
                $('.hib').append('</br>' + firstdose + ' ');
                $('.hibbutton').append('+ </br>');
                for(i=0; i<nextdose.length; i++){
                  $('.hib2').append('</br>' + nextdose[i] + '</br>');
                }
                break; 
              }
            }
            else{
              firstdose.push('3rd HiB dose administered too late. See physician.');
              $('.hib').append('</br>' + firstdose + '</br>');
              break;
            }
          }
          else{
            if(hibdates.length==3){
              if(today>hibdose4b){
                if(today>months15 && today<months60){
                  firstdose.push('4th HiB dose overdue. Catch up schedule:'); 
                  if(hibentry3<months15){
                    if(hibentry3<months12){
                      nextdose.push('4t HiB dose (final dose) today.');
                    }
                  }
                  $('.hib').append('</br>' + firstdose + ' ');
                  $('.hibbutton').append('+ </br>');
                  for(i=0; i<nextdose.length; i++){
                    $('.hib2').append('</br>' + nextdose[i] + '</br>');
                  }
                  break; 
                }
                firstdose.push('4th HiB dose overdue. See physician.');
                $('.hib').append('</br>' + firstdose + '</br>');
                break;
              }
              else{
                if(today>hibdose4a){
                  firstdose.push('4th HiB dose (final dose) bewteen 12 and 18 months old. (By' + hibdose4b.toLocaleDateString() + ').');
                }
                else{
                  firstdose.push('4th HiB dose (final dose) between 12 and 18 months old. (Between ' + hibdose4a.toLocaleDateString() + ' and ' + hibdose4b.toLocaleDateString() + ').')
                }
                $('.hib').append('</br>' + firstdose + '</br>');
                break;
              }
            }
          }
        }

        if(hibentry4<hibdose4a){
          firstdose.push('4th HiB dose administered too early. See physician.');
          $('.hib').append('</br>' + firstdose + '</br>');
          break;         
        }
        else{
          if(hibentry4>hibdose4b){
            firstdose.push('4th HiB dose administered too late. See physician.');
            $('.hib').append('</br>' + firstdose + '</br>');
            break;
          }
        }

        loop = 1;
      }
      while(loop = 0);

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
      var pedvaxentry14wks = new Date(pedvaxentry1.setDate(pedvaxentry1.getDate()+28));
      pedvaxentry1 = new Date(pedvaxdates[0]);
      var pedvaxentry18wks = new Date(pedvaxentry1.setDate(pedvaxentry1.getDate()+56));
      pedvaxentry1 = new Date(pedvaxdates[0]);
      var pedvaxentry28wks = new Date(pedvaxentry2.setDate(pedvaxentry2.getDate()+56));
      pedvaxentry2 = new Date(pedvaxdates[1]);
      var pedvaxentry212wks = new Date(pedvaxentry2.setDate(pedvaxentry2.getDate()+84));
      pedvaxentry2 = new Date(pedvaxdates[1]);
      var pedvaxentry112wks = new Date(pedvaxentry1.setDate(pedvaxentry1.getDate()+84));
      pedvaxentry1 = new Date(pedvaxdates[0]);
      loop=0;

      do{    
        var firstdose = [];
        var nextdose = [];

        if(pedvaxentry1<pedvaxdose1a){
          firstdose.push('1st HiB dose administered too early. See physician.');
          $('.pedvax').append('</br>' + firstdose + '</br>');
          break;
        }
        else{
          if(pedvaxentry1>pedvaxdose1b){
            if(today>months4 && today<months7){
              if(pedvaxdates.length==1){
                firstdose.push('1st HiB dose administered too late. Catch up schedule:');
                if(today>pedvaxentry14wks){
                  nextdose.push('2nd HiB dose today.');
                  nextdose.push('3rd HiB dose (final dose) after 12 months old. (After ' + months12.toLocaleDateString() + ').');
                }
                else{
                  nextdose.push('2nd HiB dose 4 to 8 weeks after dose 1. (Between ' + pedvaxentry14wks.toLocaleDateString() + ' and ' + pedvaxentry18wks.toLocaleDateString() + ').');
                  nextdose.push('3rd HiB dose (final dose) after 12 months old. (After ' + months12.toLocaleDateString() + ').');
                }
                $('.pedvax').append('</br>' + firstdose + ' ');
                $('.pedvaxbutton').append('+ </br>');
                for(i=0; i<nextdose.length; i++){
                  $('.pedvax2').append('</br>' + nextdose[i] + '</br>');
                } 
                break;
              }
              else{
                firstdose.push('1st HiB dose administered too late. See physician.');
                $('.pedvax').append('</br>' + firstdose + '</br>');
                break;                
              }
            }
            else if(today>months7 && today<months12){
              if(pedvaxdates.length==1){
                firstdose.push('1st HiB dose administered too late. Catch up schedule:');
                if(today>pedvaxentry14wks){
                  nextdose.push('2nd HiB dose today.');
                  nextdose.push('3rd HiB dose (final dose) 8 to 12 weeks after dose 1 AND after 12 months old.');
                }
                else{
                  nextdose.push('2nd HiB dose 4 to 8 weeks after dose 1. (Between ' + pedvaxentry14wks.toLocaleDateString() + ' and ' + pedvaxentry18wks.toLocaleDateString() + ').');
                  nextdose.push('3rd HiB dose (final dose) 8 to 12 weeks after dose 1 AND after 12 months old.');
                }
                $('.pedvax').append('</br>' + firstdose + ' ');
                $('.pedvaxbutton').append('+ </br>');
                for(i=0; i<nextdose.length; i++){
                  $('.pedvax2').append('</br>' + nextdose[i] + '</br>');
                } 
                break;
              }
            }
            else if(today>months12 && today<months15){
              if(pedvaxdates.length==1){
                firstdose.push('1st HiB dose administered late. Catch up schedule:');
                if(pedvaxentry1<months12){
                  if(today>pedvaxentry14wks){
                    nextdose.push('2nd HiB dose today.');
                    nextdose.push('3rd HiB dose 8 to 12 weeks after dose 2 AND after 12 months old.');
                  }
                  else{
                    nextdose.push('2nd HiB dose 4 to 8 weeks after dose 1. (Between ' + pedvaxentry14wks.toLocaleDateString() + ' and ' + pedvaxentry18wks.toLocaleDateString() + ').');
                    nextdose.push('3rd HiB dose (final dose) 8 to 12 weeks after dose 2 AND after 12 months old.');
                  }
                }
                else{
                  if(today>pedvaxentry18wks){
                    nextdose.push('2nd HiB dose (final dose) today.');
                  }
                  else{
                    nextdose.push('2nd HiB dose (final dose) 8 to 12 weeks after dose 1. (Between ' + pedvaxentry18wks.toLocaleDateString() + ' and ' + pedvaxentry112wks.toLocaleDateString() + ').');
                  }
                }
                $('.pedvax').append('</br>' + firstdose + ' ');
                $('.pedvaxbutton').append('+ </br>');
                for(i=0; i<nextdose.length; i++){
                  $('.pedvax2').append('</br>' + nextdose[i] + '</br>');
                } 
                break;
              }
              else if(pedvaxdates.length==2){
                if(pedvaxentry1<months12){
                  firstdose.push('1st HiB dose administered late. Catch up schedule:');
                  if(today>pedvaxentry28wks){
                    nextdose.push('3rd HiB dose (final dose) today.');
                  }
                  else{
                    nextdose.push('3rd HiB dose (final dose) 8 to 12 weeks after dose 2. (Between ' + pedvaxentry28wks.toLocaleDateString() + ' and ' + pedvaxentry212wks.toLocaleDateString() + ').');
                  }
                }
                $('.pedvax').append('</br>' + firstdose + ' ');
                $('.pedvaxbutton').append('+ </br>');
                for(i=0; i<nextdose.length; i++){
                  $('.pedvax2').append('</br>' + nextdose[i] + '</br>');
                } 
                break; 
              }
            }
            else if(today>months15 && today<months60){
              if(pedvaxdates.length==1){
                if(pedvaxentry1<months12){
                  firstdose.push('1st HiB dose administered late. Catch up schedule:');
                  nextdose.push('2nd HiB dose (final dose) today.');
                }
                else if(pedvaxentry1>months12 && pedvaxentry1<months15){
                  firstdose.push('1st HiB dose administered late. Catch up schedule:');
                  if(today>pedvaxentry18wks){
                    nextdose.push('2nd HiB dose (final dose) today.');
                  }
                  else{
                    nextdose.push('2nd HiB dose (final dose) 8 to 12 weeks after dose 1. (Between ' + pedvaxentry18wks.toLocaleDateString() + ' and ' + pedvaxentry112wks.toLocaleDateString() + ').');
                  }
                }
                $('.pedvax').append('</br>' + firstdose + ' ');
                $('.pedvaxbutton').append('+ </br>');
                for(i=0; i<nextdose.length; i++){
                  $('.pedvax2').append('</br>' + nextdose[i] + '</br>');
                } 
                break; 
              }
              else if(pedvaxdates.length==2){
                if(pedvaxentry1<months12){
                  if(pedvaxentry2<months15){
                    firstdose.push('1st HiB dose administered late. Catch up schedule:');
                    if(today>pedvaxentry28wks){
                      nextdose.push('3rd HiB dose (final dose) today.');
                    }
                    else{
                      nextdose.push('3rd HiB dose (final dose) 8 to 12 weeks after dose 2. (Between ' + pedvaxentry28wks.toLocaleDateString() + ' and ' + pedvaxentry212wks.toLocaleDateString() + ').');
                    }
                  }
                }
                $('.pedvax').append('</br>' + firstdose + ' ');
                $('.pedvaxbutton').append('+ </br>');
                for(i=0; i<nextdose.length; i++){
                  $('.pedvax2').append('</br>' + nextdose[i] + '</br>');
                } 
                break;
              }
            }
            else{
              firstdose.push('1st HiB dose administered too late. See physician.');
              $('.pedvax').append('</br>' + firstdose + '</br>');
              break;
            }
          }
          else{
            if(pedvaxdates.length==1){
              if(today>pedvaxdose2b){
                if(today>months4 && today<months7){
                  firstdose.push('2nd HiB dose overdue. Catch up schedule:');
                  if(today>pedvaxentry14wks){
                    nextdose.push('2nd HiB dose today.');
                    nextdose.push('3rd HiB dose (final dose) after 12 months old. (After ' + months12.toLocaleDateString() + ').');
                  }
                  else{
                    nextdose.push('2nd HiB dose 4 to 8 weeks after dose 1. (Between ' + hibentry14wks.toLocaleDateString() + ' and ' + hibentry18wks.toLocaleDateString() + ')');
                    nextdose.push('3rd HiB dose (final dose) after 12 months old. (After ' + months12.toLocaleDateString() + ').');
                  }
                  $('.pedvax').append('</br>' + firstdose + ' ');
                  $('.pedvaxbutton').append('+ </br>');
                  for(i=0; i<nextdose.length; i++){
                    $('.pedvax2').append('</br>' + nextdose[i] + '</br>');
                  } 
                  break;
                }
                else if(today>months7 && today<months12){
                  firstdose.push('2nd HiB dose overdue. Catch up schedule:');
                  if(today>pedvaxentry14wks){
                    nextdose.push('2nd HiB dose today.');
                    nextdose.push('3rd HiB dose (final dose) 8 to 12 weeks after dose 2 AND after 12 months old.');
                  }
                  else{
                    nextdose.push('2nd HiB dose 4 to 8 weeks after dose 1. (Between ' + pedvaxentry14wks.toLocaleDateString() + ' and ' + pedvaxentry18wks.toLocaleDateString() + ').');
                    nextdose.push('3rd HiB dose (final dose) 8 to 12 weeks after dose 2 AND after 12 months old.');
                  }
                  $('.pedvax').append('</br>' + firstdose + ' ');
                  $('.pedvaxbutton').append('+ </br>');
                  for(i=0; i<nextdose.length; i++){
                    $('.pedvax2').append('</br>' + nextdose[i] + '</br>');
                  } 
                  break;
                }
                else if(today>months12 && today<months15){
                  firstdose.push('2nd HiB dose overdue. Catch up schedule:');
                  if(pedvaxentry1<months12){
                    if(today>pedvaxentry14wks){
                      nextdose.push('2nd HiB dose today.');
                      nextdose.push('3rd HiB dose (final dose) 8 weeks after dose 2.');
                    }
                    else{
                      nextdose.push('2nd HiB dose (final dose) 4 to 8 weeks after dose 1. (Between ' + pedvaxentry14wks.toLocaleDateString() + ' and ' + pedvaxentry18wks.toLocaleDateString() + ').');
                    }
                  }
                  else{
                    if(today>pedvaxentry18wks){
                      nextdose.push('2nd HiB dose (final dose) today.');
                    }
                    else{
                      nextdose.push('2nd HiB dose (final dose) 8 to 12 weeks after dose 1. (Between ' + pedvaxentry18wks.toLocaleDateString() + ' and ' + pedvaxentry112wks.toLocaleDateString() + ').');
                    }
                  }
                  $('.pedvax').append('</br>' + firstdose + ' ');
                  $('.pedvaxbutton').append('+ </br>');
                  for(i=0; i<nextdose.length; i++){
                    $('.pedvax2').append('</br>' + nextdose[i] + '</br>');
                  } 
                  break;
                }
                else if(today>months15 && today<months60){
                  if(pedvaxentry1<months12){
                    firstdose.push('2nd HiB dose overdue. Catch up schedule:');
                    nextdose.push('2nd HiB dose (final dose) today.');
                  }
                  else if(pedvaxentry1>months12 && pedvaxentry1<months15){
                    firstdose.push('2nd HiB dose overdue. Catch up schedule:');
                    if(today>pedvaxentry18wks){
                      nextdose.push('2nd HiB dose (final dose) today.');
                    }
                    else{
                      nextdose.push('2nd HiB dose (final dose) 8 to 12 weeks after dose 1. (Bewteen ' + hibentry18wks.toLocaleDateString() + ' and ' + hibentry112wks.toLocaleDateString() + ').');
                    }
                  }
                  $('.pedvax').append('</br>' + firstdose + ' ');
                  $('.pedvaxbutton').append('+ </br>');
                  for(i=0; i<nextdose.length; i++){
                    $('.pedvax2').append('</br>' + nextdose[i] + '</br>');
                  } 
                  break;
                }
                else{
                  firstdose.push('2nd HiB dose overdue. See physician.');
                  $('.pedvax').append('</br>' + firstdose + '</br>');
                  break;
                }
              }
              else{
                if(pedvaxentry2>pedvaxdose2a){
                  firstdose.push('2nd HiB dose between 4 and 6 months old. (By ' + pedvaxdose2b.toLocaleDateString() + ').');
                }
                else{
                  firstdose.push('2nd HiB dose between 4 and 6 months old. (Between ' + pedvaxdose2a.toLocaleDateString() + ' and ' + pedvaxdose2b.toLocaleDateString() + ').');
                }
                nextdose.push('3rd HiB dose (final dose) between 12 and 15 months old. (Bewteen ' + pedvaxdose3a.toLocaleDateString() + ' and ' + pedvaxdose3b.toLocaleDateString() + ').');
                $('.pedvax').append('</br>' + firstdose + ' ');
                $('.pedvaxbutton').append('+ </br>');
                for(i=0; i<nextdose.length; i++){
                  $('.pedvax2').append('</br>' + nextdose[i] + '</br>');
                } 
                break;
              }
            }
          }
        }

        if(pedvaxentry2<pedvaxdose2a){
          firstdose.push('2nd HiB dose administered too early. See physician.');
          $('.pedvax').append('</br>' + firstdose + '</br>');
          break;
        }
        else{
          if(pedvaxentry2>pedvaxdose2b){
            if(today>months12 && today<months15){
              if(pedvaxdates.length==2){
                if(pedvaxentry1<months12){
                  firstdose.push('2nd HiB dose administered too late. Catch up schedule:');
                  if(today>pedvaxentry28wks){
                    nextdose.push('3rd HiB dose (final dose) today.');
                  }
                  else{
                    nextdose.push('3rd HiB dose (final dose) 8 to 12 weeks after dose 2. (Between ' + pedvaxentry28wks.toLocaleDateString() + ' and ' + pedvaxentry212wks.toLocaleDateString() + ').');
                  }
                }
                $('.pedvax').append('</br>' + firstdose + ' ');
                $('.pedvaxbutton').append('+ </br>');
                for(i=0; i<nextdose.length; i++){
                  $('.pedvax2').append('</br>' + nextdose[i] + '</br>');
                } 
                break;
              }
              else{
                firstdose.push('2nd HiB dose administered too late. See physician.');
                $('.pedvax').append('</br>' + firstdose + '</br>');  
                break;             
              }
            }
            else if(today>months15 && today<months60){
              if(pedvaxdates.length==2){
                if(pedvaxentry1<months12){
                  firstdose.push('2nd HiB dose administered too late. Catch up schedule:');
                  if(pedvaxentry2<months15){
                    if(today>pedvaxentry28wks){
                      nextdose.push('3rd HiB dose (final dose) today.');
                    }
                    else{
                      nextdose.push('3rd HiB dose (final dose) 8 to 12 weeks after dose 2 (Between ' + pedvaxentry28wks.toLocaleDateString() + ' and ' + pedvaxentry212wks.toLocaleDateString() + ').');
                    }
                  }
                }
                $('.pedvax').append('</br>' + firstdose + ' ');
                $('.pedvaxbutton').append('+ </br>');
                for(i=0; i<nextdose.length; i++){
                  $('.pedvax2').append('</br>' + nextdose[i] + '</br>');
                } 
                break;
              }
            }
            else{
              firstdose.push('2nd HiB dose administered too late. See physician.');
              $('.pedvax').append('</br>' + firstdose + '</br>');
              break;
            }
          }
          else{
            if(pedvaxdates.length==2){
              if(today>pedvaxdose3b){
                firstdose.push('3rd HiB dose overdue. See physician.');
                $('.pedvax').append('</br>' + firstdose + '</br>');
                break; 
              }
              else{
                if(today>pedvaxdose3a){
                  firstdose.push('3rd HiB dose (final dose) between 12 and 15 months old. (By ' + pedvaxdose3b.toLocaleDateString() + ').');
                }
                else{
                  firstdose.push('3rd HiB dose (final dose) between 12 and 15 months old. (Between ' + pedvaxdose3a.toLocaleDateString() + ' and ' + pedvaxdose3b.toLocaleDateString() + ').');
                }
                $('.pedvax').append('</br>' + firstdose + '</br>');
                break;
              }
            }
          }
        }

        if(pedvaxentry3<pedvaxdose3a){
          firstdose.push('3rd HiB dose administered too early. See physician.');
          $('.pedvax').append('</br>' + firstdose + '</br>');
          break;
        }
        else{
          if(pedvaxentry3>pedvaxdose3b){
            firstdose.push('3rd HiB dose administered too late. See physician.');
            $('.pedvax').append('</br>' + firstdose + '</br>');
            break;
          }
        }

        loop=1;
      }
      while(loop=0);

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
    var pcvdose4a = new Date(birthday.setMonth(birthday.getMonth()+12));
    birthday = new Date(birthdayvalue);
    var pcvdose4b = new Date(birthday.setMonth(birthday.getMonth()+18));
    birthday = new Date(birthdayvalue);
    var pcventry14wks = new Date(pcventry1.setDate(pcventry1.getDate()+28));
    pcventry1 = new Date(pcvdates[0]);
    var pcventry18wks = new Date(pcventry1.setDate(pcventry1.getDate()+56));
    pcventry1 = new Date(pcvdates[0]);
    var pcventry24wks = new Date(pcventry2.setDate(pcventry2.getDate()+28));
    pcventry2 = new Date(pcvdates[1]);
    var pcventry28wks = new Date(pcventry2.setDate(pcventry2.getDate()+56));
    pcventry2 = new Date(pcvdates[1]);
    var pcventry18wks = new Date(pcventry1.setDate(pcventry1.getDate()+56));
    pcventry1 = new Date(pcvdates[0]);
    var pcventry112wks = new Date(pcventry1.setDate(pcventry1.getDate()+84));
    pcventry1 = new Date(pcvdates[0]);
    var pcventry28wks = new Date(pcventry2.setDate(pcventry2.getDate()+56));
    pcventry2 = new Date(pcvdates[1]);
    var pcventry29wks = new Date(pcventry2.setDate(pcventry2.getDate()+63));
    pcventry2 = new Date(pcvdates[1]);
    var pcventry212wks = new Date(pcventry2.setDate(pcventry2.getDate()+84));
    pcventry2 = new Date(pcvdates[1]);
    var pcvdose3final;
    if(pcventry29wks>months12){
      pcvdose3final=pcventry29wks;
    }
    else{
      pcvdose3final=months12;
    }
    var pcventry38wks = new Date(pcventry3.setDate(pcventry3.getDate()+56));
    pcventry3 = new Date(pcvdates[2]);
    var pcventry312wks = new Date(pcventry3.setDate(pcventry3.getDate()+84));
    pcventry3 = new Date(pcvdates[2]); 
    loop=0;

    do{
      var firstdose = [];
      var nextdose = [];

      if(pcvdates.length==0){
        if(today>pcvdose1b){
          if(today>months4 && today<months12){
            firstdose.push('1st PCV13 dose overdue. Catch up schedule:');
            nextdose.push('1st PCV13 dose today.');
            nextdose.push('2nd PCV13 dose 4 to 8 weeks after dose 1.');
            nextdose.push('3rd PCV13 dose 4 to 8 weeks after dose 2.');
            nextdose.push('4th PCV13 dose (final dose) 12 to 15 months old.');
            $('.pcv').append('</br>' + firstdose + ' ');
            $('.pcvbutton').append('+ </br>');
            for(i=0; i<nextdose.length; i++){
              $('.pcv2').append('</br>' + nextdose[i] + '</br>');
            }
            break; 
          }
          else if(today>months12 && today<months24){
            firstdose.push('1st PCV13 dose overdue. Catch up schedule:');
            nextdose.push('1st PCV13 dose today.');
            nextdose.push('2nd PCV13 dose (final dose) at least 8 weeks after dose 2.');
            $('.pcv').append('</br>' + firstdose + ' ');
            $('.pcvbutton').append('+ </br>');
            for(i=0; i<nextdose.length; i++){
              $('.pcv2').append('</br>' + nextdose[i] + '</br>');
            }
            break;   
          }
          else if (today>months24 && today<months60){
            firstdose.push('1st PCV13 dose overdue. Catch up schedule: ');
            nextdose.push('1st PCV13 dose (final dose) today.');
            $('.pcv').append('</br>' + firstdose + ' ');
            $('.pcvbutton').append('+ </br>');
            for(i=0; i<nextdose.length; i++){
              $('.pcv2').append('</br>' + nextdose[i] + '</br>');
            }
            break; 
          }
          else{
            firstdose.push('1st PCV13 dose overdue. See physician.');
            $('.pcv').append('</br>' + firstdose + '</br>');
            break;
          }
        }
        else{
          if(today>pcvdose1a){
            firstdose.push('1st PCV13 dose between 2 and 4 months old. (By ' + pcvdose1b.toLocaleDateString() + ').');
          }
          else{
            firstdose.push('1st PCV13 dose between 2 and 4 months old. (Between ' + pcvdose1a.toLocaleDateString() + ' and ' + pcvdose1b.toLocaleDateString() + ').');
          }
          nextdose.push('2nd PCV13 dose between 4 and 6 months old AND at least 4 weeks after 1st PCV13 dose.');
          nextdose.push('3rd PCV13 dose between 6 and 9 months old AND at least 4 weeks after 2nd PCV13 dose.');
          nextdose.push('4th PCV13 dose (final dose) between 12 and 18 months old.');
          $('.pcv').append('</br>' + firstdose + ' ');
          $('.pcvbutton').append('+ </br>');
          for(i=0; i<nextdose.length; i++){
            $('.pcv2').append('</br>' + nextdose[i] + '</br>');
          }
          break; 
        }
      }

      if(pcventry1<pcvdose1a){
        firstdose.push('1st PCV13 dose administered too early. See physician.');
        $('.pcv').append('</br>' + firstdose + '</br>');
        break;
      }
      else{
        if(pcventry1>pcvdose1b){
          if(pcvdates.length==1){
            if(today>months7 && today<months12){
            firstdose.push('1st PCV13 dose administered too late. Catch up schedule:');
              if(today>pcventry14wks){
                nextdose.push('2nd PCV13 dose today.');
                nextdose.push('3rd PCV13 (final dose) at least 8 weeks after dose 2 AND after 12 months old.');
              }
              else{
                nextdose.push('2nd PCV13 dose 4 to 8 weeks after dose 1. (Between ' + pcventry14wks.toLocaleDateString() + ' and ' + pcventry18wks.toLocaleDateString() + ').');
                nextdose.push('3rd PCV13 dose (final dose) at least 8 weeks after dose 2 AND after 12 months old.');
              }
            }
            else if(today>months12 && today<months24){
              firstdose.push('1st PCV13 dose administered too late. Catch up schedule:');
              if(pcventry1<months12){
                if(today>pcventry14wks){
                  nextdose.push('2nd PCV13 dose today.');
                  nextdose.push('3rd PCV13 dose (final dose) 8 weeks after dose 2.');
                }
                else{
                  nextdose.push('2nd PCV13 dose 4 to 8 weeks after dose 1. (Between ' + pcventry14wks.toLocaleDateString() + ' and ' + pcventry18wks.toLocaleDateString() + ').');
                  nextdose.push('3rd PCV13 dose (final dose) 8 weeks after dose 2.');
                }
              }
              else{
                if(today>pcventry18wks){
                  nextdose.push('2nd PCV13 dose today.');
                }
                else{
                  nextdose.push('2nd PCV13 dose (final dose) 8 to 12 weeks after dose 1. (Between ' + pcventry18wks.toLocaleDateString() + ' and ' + pcventry112wks.toLocaleDateString() + ').');
                }
              }
              $('.pcv').append('</br>' + firstdose + ' ');
              $('.pcvbutton').append('+ </br>');
              for(i=0; i<nextdose.length; i++){
                $('.pcv2').append('</br>' + nextdose[i] + '</br>');
              }
              break; 
            }
            else if(today>months24 && today<months60){
              if(pcventry1<months12){
                firstdose.push('1st PCV13 dose administered too late. Catch up schedule:');
                nextdose.push('2nd PCV13 dose (final dose) today. No additional doses needed.');
                $('.pcv').append('</br>' + firstdose + ' ');
                $('.pcvbutton').append('+ </br>');
                for(i=0; i<nextdose.length; i++){
                  $('.pcv2').append('</br>' + nextdose[i] + '</br>');
                }
                break; 
              }
              else{
                if(pcventry1<year2){
                  firstdose.push('1st PCV13 dose administered too late. Catch up schedule:');
                  if(today>pcventry18wks){
                    nextdose.push('2nd PCV13 dose (final dose) today. No additional doses needed.');
                  }
                  else{
                    nextdose.push('2nd PCV13 dose (final dose) between 8 and 12 weeks after dose 1. (Between ' + pcventry18wks.toLocaleDateString() + ' and ' + pcventry112wks.toLocaleDateString() + ').');
                  }
                $('.pcv').append('</br>' + firstdose + ' ');
                $('.pcvbutton').append('+ </br>');
                for(i=0; i<nextdose.length; i++){
                  $('.pcv2').append('</br>' + nextdose[i] + '</br>');
                }
                break; 
                }
              }
            }
            else{
              firstdose.push('1st PCV13 dose administered too late. See physician.');
              $('.pcv').append('</br>' + firstdose + '</br>'); 
              break;             
            }
          }
          else{
            firstdose.push('1st PCV13 dose administered too late. See physician.');
            $('.pcv').append('</br>' + firstdose + '</br>');
            break;
          }
        } 
        else{
          if(pcvdates.length==1){
            if(today>pcvdose2b){
              if(today>months4 && today<months7){
                firstdose.push('2nd PCV13 dose overdue. Catch up schedule: ');
                if(today>pcventry14wks){
                  nextdose.push('2nd PCV13 dose today.');
                }
                else{
                  nextdose.push('2nd PCV13 dose 4 to 8 weeks after dose 1. (Between ' + pcventry14wks.toLocaleDateString() + ' and ' + pcventry18wks.toLocaleDateString() + ').');
                }
                nextdose.push('3rd PCV13 dose 4 to 8 weeks after dose 2.');
                nextdose.push('4th PCV13 dose (final dose) between 12 and 18 months old. (Between ' + pcvdose4a.toLocaleDateString() + ' and ' + pcvdose4b.toLocaleDateString() + ').');
                $('.pcv').append('</br>' + firstdose + ' ');
                $('.pcvbutton').append('+ </br>');
                for(i=0; i<nextdose.length; i++){
                  $('.pcv2').append('</br>' + nextdose[i] + '</br>');
                }
                break; 
              }
              else if(today>months7 && today<months12){
                firstdose.push('2nd PCV13 dose overdue. Catch up schedule: ');
                if(today>pcventry14wks){
                  nextdose.push('2nd PCV13 dose today.');
                }
                else{
                  nextdose.push('2nd PCV13 dose 4 to 8 weeks after 1st dose. (Between ' + pcventry14wks.toLocaleDateString() + ' and ' + pcventry18wks.toLocaleDateString() + ').');
                }
                nextdose.push('3rd PCV13 dose (final dose) at least 8 weeks after dose 2 and after 12 months old.');
                $('.pcv').append('</br>' + firstdose + ' ');
                $('.pcvbutton').append('+ </br>');
                for(i=0; i<nextdose.length; i++){
                  $('.pcv2').append('</br>' + nextdose[i] + '</br>');
                }
                break; 
              }
              else if(today>months12 && today<months24){
                firstdose.push('2nd PCV13 dose overdue. Catch up schedule:');
                if(pcventry1<months12){
                  if(today>pcventry14wks){
                    nextdose.push('2nd PCV13 dose today.');
                    nextdose.push('3rd PCV13 dose (final dose) at least 8 weeks after dose 2.');
                  }
                  else{
                    nextdose.push('2nd PCV13 dose 4 to 8 weeks after dose 1. (Between ' + pcventry14wks.toLocaleDateString() + ' and ' + pcventry18wks.toLocaleDateString() + ').');
                    nextdose.push('3rd PCV13 dose (final dose) at least 8 weeks after dose 2.');
                  }
                }
                else{
                  if(today>pcventry18wks){
                    nextdose.push('2nd PCV13 dose (final dose) today.');
                  }
                  else{
                    nextdose.push('2nd PCV13 dose (final dose) 8 to 12 weeks after dose 1. (Between ' + pcventry18wks.toLocaleDateString() + ' and ' + pcventry112wks.toLocaleDateString() + ').');
                  }
                }
                $('.pcv').append('</br>' + firstdose + ' ');
                $('.pcvbutton').append('+ </br>');
                for(i=0; i<nextdose.length; i++){
                  $('.pcv2').append('</br>' + nextdose[i] + '</br>');
                }
                break;  
              }
              else if(today>months24 && today<months60){
                firstdose.push('2nd PCV13 dose overdue. Catch up schedule:');
                if(pcventry1<year1){
                  nextdose.push('2nd PCV13 dose (final dose) today.');
                }
                else{
                  if(pcventry1<year2){
                    if(today>pcventry18wks){
                      nextdose.push('2nd PCV13 dose (final dose) today.');
                    }
                    else{
                      nextdose.push('2nd PCV13 dose (final dose) between 8 and 12 weeks after dose 1. (Between ' + pcventry18wks.toLocaleDateString() + ' and ' + pcventry112wks.toLocaleDateString() + ').');
                    }
                  }
                }
                $('.pcv').append('</br>' + firstdose + ' ');
                $('.pcvbutton').append('+ </br>');
                for(i=0; i<nextdose.length; i++){
                  $('.pcv2').append('</br>' + nextdose[i] + '</br>');
                }
                break; 
              }
              else{
                firstdose.push('2nd PCV13 dose overdue. See physician.');
                $('.pcv').append('</br>' + firstdose + '</br>');
                break;
              }
            }
            else{
              if(today>pcvdose2a){
                firstdose.push('2nd PCV13 dose between 4 and 6 months old. (By ' + pcvdose2b.toLocaleDateString() + ').');
              }
              else{
                firstdose.push('2nd PCV13 dose between 4 and 6 months old. (Between ' + pcvdose2a.toLocaleDateString() + ' and ' + pcvdose2b.toLocaleDateString() + ').');
              }
              nextdose.push('3rd PCV13 dose between 6 and 9 months old AND at least 4 weeks after 2nd PCV13 dose.');
              nextdose.push('4th PCV13 dose (final dose) between 12 and 18 months old.');
              $('.pcv').append('</br>' + firstdose + ' ');
              $('.pcvbutton').append('+ </br>');
              for(i=0; i<nextdose.length; i++){
                $('.pcv2').append('</br>' + nextdose[i] + '</br>');
              }
              break; 
            }
          }
        }
      }

      if(pcventry2<pcvdose2a){
        firstdose.push('2nd PCV13 dose administered too early. See physician.');
        $('.pcv').append('</br>' + firstdose + '</br>');
        break;
      }
      else{
        if(pcventry2>pcvdose2b){
          if(pcvdates.length==2){
            if(today>months7 && today<months12){
              firstdose.push('2nd PCV13 dose administered too late. Catch up schedule:');
              if(pcventry2<months7){
                if(today>pcventry24wks){
                  nextdose.push('3rd PCV13 dose today.');
                  nextdose.push('4th PCV13 dose at least 8 weeks after dose 3 AND after 12 months old.');
                }
                else{
                  nextdose.push('3rd PCV13 dose 8 to 12 weeks after dose 2. (Between ' + pcventry28wks.toLocaleDateString() + ' and ' + pcventry212wks.toLocaleDateString() + ').');
                  nextdose.push('4th PCV13 dose (final dose) at least 8 weeks after dose 3 AND after 12 months old.');
                }
              }
              else{
                nextdose.push('3rd PCV13 dose at least 8 weeks after dose 2 AND after 12 months old. (After ' + pcvdose3final.toLocaleDateString() + ').');
              }
              $('.pcv').append('</br>' + firstdose + ' ');
              $('.pcvbutton').append('+ </br>');
              for(i=0; i<nextdose.length; i++){
                $('.pcv2').append('</br>' + nextdose[i] + '</br>');
              }
              break; 
            }
            else if (today>months12 && today<months24){
              if(pcventry1<months12){
                firstdose.push('2nd PCV13 dose administered too late. Catch up schedule:');
                if(today>pcventry28wks){
                  nextdose.push('3rd PCV13 dose (final dose) today.');
                }
                else{
                  nextdose.push('3rd PCV13 dose (final dose) 8 to 12 weeks after dose 2. (Between ' + pcventry28wks.toLocaleDateString() + ' and ' + pcventry212wks.toLocaleDateString() + ').');
                }
              }  
              $('.pcv').append('</br>' + firstdose + ' ');
              $('.pcvbutton').append('+ </br>');
              for(i=0; i<nextdose.length; i++){
                $('.pcv2').append('</br>' + nextdose[i] + '</br>');
              }
              break; 
            }
            else if(today>months24 && today<months60){
              firstdose.push('2nd PCV13 dose administered too late. See physician.');
              if(pcventry1<months12){
                if(pcventry2<months12){
                  nextdose.push('3rd PCV13 dose (final dose) today.');
                }
              }
              $('.pcv').append('</br>' + firstdose + ' ');
              $('.pcvbutton').append('+ </br>');
              for(i=0; i<nextdose.length; i++){
                $('.pcv2').append('</br>' + nextdose[i] + '</br>');
              }
              break; 
            }
            else{
              firstdose.push('2nd PCV13 dose administered too late. See physician.');
              $('.pcv').append('</br>' + firstdose + '</br>');
              break;          
            }
          }
          else{
            firstdose.push('2nd PCV13 dose administered too late. See physician.');
            $('.pcv').append('</br>' + firstdose + '</br>');
            break;
          }
        }
        else{
          if(pcvdates.length==2){
            if(today>pcvdose3b){
              if(today>months7 && today<months12){
                firstdose.push('3rd PCV13 dose overdue. Catch up schedule:');
                if(pcventry2<months7){
                  if(today>pcventry24wks){
                    nextdose.push('3rd PCV13 dose today.');
                    nextdose.push('4th PCV13 dose (final dose) at least 8 weeks after dose 3 AND after 12 months old.');
                  }
                  else{
                    nextdose.push('3rd PCV13 dose (final dose) at least 8 weeks after dose 3 AND after 12 months old.');
                  }
                  $('.pcv').append('</br>' + firstdose + ' ');
                  $('.pcvbutton').append('+ </br>');
                  for(i=0; i<nextdose.length; i++){
                    $('.pcv2').append('</br>' + nextdose[i] + '</br>');
                  }
                  break; 
                }
              }
              else if (today>months12 && today<months24){
                if(pcventry1<months12){
                  firstdose.push('3rd PCV13 dose overdue. Catch up schedule:');
                  if(today>pcventry28wks){
                    nextdose.push('3rd PCV13 dose (final dose) today.');
                  }
                  else{
                    nextdose.push('3rd PCV13 dose (final dose) 8 to 12 weeks after dose 2. (Between ' + pcventry28wks.toLocaleDateString() + ' and ' + pcventry212wks.toLocaleDateString() + ').');
                  }
                  $('.pcv').append('</br>' + firstdose + ' ');
                  $('.pcvbutton').append('+ </br>');
                  for(i=0; i<nextdose.length; i++){
                    $('.pcv2').append('</br>' + nextdose[i] + '</br>');
                  }
                  break; 
                }
              }
              else if(today>months24 && today<months60){
                firstdose.push('3rd PCV13 dose overdue. Catch up schedule:');
                if(pcventry1<months12){
                  if(pcventry2<months12){
                    nextdose.push('3rd PCV13 dose (final dose) today.');
                  }
                  else{
                    if(pcventry2<year2){
                      nextdose.push('3rd PCV13 dose (final dose) today.');
                      break;
                    }
                  }
                }
                $('.pcv').append('</br>' + firstdose + ' ');
                $('.pcvbutton').append('+ </br>');
                for(i=0; i<nextdose.length; i++){
                  $('.pcv2').append('</br>' + nextdose[i] + '</br>');
                }
                break; 
              }
              else{
                firstdose.push('3rd PCV13 dose overdue. See physician.');
                $('.pcv').append('</br>' + firstdose + '</br>');
                break;
              }
            }
            else{
              if(today>pcvdose3a){
                firstdose.push('3rd PCV13 dose between 6 and 9 months old. (By ' + pcvdose3b.toLocaleDateString() + ').');
              }
              else{
                firstdose.push('3rd PCV13 dose between 6 and 9 months old. (Between ' + pcvdose3a.toLocaleDateString() + ' and ' + pcvdose3b.toLocaleDateString() + ').');
              }
              nextdose.push('4th PCV13 dose (final dose) between 12 and 18 months old.');
              $('.pcv').append('</br>' + firstdose + ' ');
              $('.pcvbutton').append('+ </br>');
              for(i=0; i<nextdose.length; i++){
                $('.pcv2').append('</br>' + nextdose[i] + '</br>');
              }
              break; 
            }
          }
        }
      }

      if(pcventry3<pcvdose3a){
        firstdose.push('3rd PCV13 dose administered too early. See physician.');
        $('.pcv').append('</br>' + firstdose + '</br>');
        break;
      }
      else{
        if(pcventry3>pcvdose3b){
          if(pcvdates.length==3){
            if(today>months12 && today<months24){
              firstdose.push('3rd PCV13 dose administered too late. Catch up schedule:');
              if(pcventry3<months12){
                if(today>pcventry38wks){
                  nextdose.push('4th PCV13 dose (final dose) today.');
                }
                else{
                  nextdose.push('4th PCV13 dose (final dose) 8 to 12 weeks after dose 3. (Between ' + pcventry38wks.toLocaleDateString() + ' and ' + pcventry312wks.toLocaleDateString() + ').');
                }
                $('.pcv').append('</br>' + firstdose + ' ');
                $('.pcvbutton').append('+ </br>');
                for(i=0; i<nextdose.length; i++){
                  $('.pcv2').append('</br>' + nextdose[i] + '</br>');
                }
                break; 
              }
            }
            else if (today>months24 && today<months60){
              firstdose.push('3rd PCV13 dose administered too late. Catch up schedule:');
              if(pcventry3<months12){
                nextdose.push('4th PCV13 dose (final dose) today.');
              }
              else{
              }
              $('.pcv').append('</br>' + firstdose + ' ');
              $('.pcvbutton').append('+ </br>');
              for(i=0; i<nextdose.length; i++){
                $('.pcv2').append('</br>' + nextdose[i] + '</br>');
              }
              break; 
            }
            else{
              firstdose.push('3rd PCV13 dose administered too late. See physician.');
              $('.pcv').append('</br>' + firstdose + '</br>');
              break;
            }
          }
          else{
            firstdose.push('3rd PCV13 dose administered too late. See physician.');
            $('.pcv').append('</br>' + firstdose + '</br>');
            break;
          }
        }
        else{
          if(pcvdates.length==3){
            if(today>pcvdose4b){
              if(today>months12 && today<months24){
                firstdose.push('4th PCV13 dose overdue. Catch up schedule:');
                if(pcventry3<months12){
                  if(today>pcventry38wks){
                    nextdose.push('4th PCV13 dose (final dose) today.');
                  }
                  else{
                    nextdose.push('4th PCV13 dose (final dose) between 8 and 12 weeks after dose 3. (Between ' + pcventry38wks.toLocaleDateString() + ' and ' + pcventry318wks.toLocaleDateString() + ').');
                  }
                  $('.pcv').append('</br>' + firstdose + ' ');
                  $('.pcvbutton').append('+ </br>');
                  for(i=0; i<nextdose.length; i++){
                    $('.pcv2').append('</br>' + nextdose[i] + '</br>');
                  }
                  break; 
                }
              }
              else{
                firstdose.push('4th PCV13 dose overdue. See physician.');
                $('.pcv').append('</br>' + firstdose + '</br>');
                break;
              }
            }
            else{
              if(today>pcvdose4a){
                firstdose.push('4th PCV13 dose (final dose) between 12 and 18 months old. (By ' + pcvdose4b.toLocaleDateString() + ').');
              }
              else{
                firstdose.push('4th PCV13 dose (final dose) between 12 and 18 months old. (Between ' + pcvdose4a.toLocaleDateString() + ' and ' + pcvdose4b.toLocaleDateString() + ').');
              }
              $('.pcv').append('</br>' + firstdose + '</br>');
              break;
            }
          }
        }
      }

      if(pcventry4<pcvdose4a){
        firstdose.push('4th PCV13 dose administered too early. See physician.');
        $('.pcv').append('</br>' + firstdose + '</br>');
        break;
      }
      else{
        if(pcventry4>pcvdose4b){
          firstdose.push('4th PCV13 dose administered too late. See physician.');
          $('.pcv').append('</br>' + firstdose + '</br>');
          break;
        }
      }

      loop=1;
    }
    while(loop=0);

  

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
      loop=0;

      do{
        var firstdose = [];
        var nextdose = [];

        if(rotarixdates.length==0){
          if(today>rotarixdose1b){
            firstdose.push('1st Rotarix dose overdue. See physician.');
            $('.rotarix').append('</br>' + firstdose + '</br>');
            break;
          }
          else{
            if(today>rotarixdose1a){
              firstdose.push('1st Rotarix dose between 6 and 20 weeks old. (By ' + rotarixdose1b.toLocaleDateString() + ').');  
            }
            else{
              firstdose.push('1st Rotarix dose between 6 and 20 weeks old. (Between ' + rotarixdose1a.toLocaleDateString() + ' and ' + rotarixdose1b.toLocaleDateString() + ').');
            }
            nextdose.push('2nd Rotarix dose (final dose) 4 weeks after dose 1.');
            $('.rotarix').append('</br>' + firstdose + ' ');
            $('.rotarixbutton').append('+ </br>');
            for(i=0; i<nextdose.length; i++){
              $('.rotarix2').append('</br>' + nextdose[i] + '</br>');
            }
            break;
          }
        }

        if(rotarixentry1<rotarixdose1a){
          firstdose.push('1st Rotarix dose administered too early. See physician.');
          $('.rotarix').append('</br>' + firstdose + '</br>');
          break;
        }
        else{
          if(rotarixentry1>rotarixdose1b){
            firstdose.push('1st Rotarix dose administered too late. See physician.');
            $('.rotarix').append('</br>' + firstdose + '</br>');
            break;
          }
          else{
            if(rotarixdates.length==1){
              if(today>rotarixdose2b){
                firstdose.push('2nd Rotarix dose overdue. See physician.');
                $('.rotarix').append('</br>' + firstdose + '</br>');
                break;
              }
              else{
                if(today>rotarixdose2a){
                  firstdose.push('2nd Rotarix dose (final dose) 4 weeks after dose 1 AND by 24 weeks old. (By ' + rotarixdose2b.toLocaleDateString() + ').');
                }
                else{
                  firstdose.push('2nd Rotarix dose (final dose) 4 weeks after dose 1 AND by 24 weeks old. (Between ' + rotarixdose2a.toLocaleDateString() + ' and ' + rotarixdose2b.toLocaleDateString() + ').');
                }
                $('.rotarix').append('</br>' + firstdose + '</br>');
                break;
              }
            }
          }
        }

        if(rotarixentry2<rotarixdose2a){
          firstdose.push('2nd Rotarix dose administered too early. See physician.');
          $('.rotarix').append('</br>' + firstdose + '</br>');
          break;
        }
        else{
          if(rotarixentry2>rotarixdose2b){
            firstdose.push('2nd Rotarix dose administered too late. See physician.');
            $('.rotarix').append('</br>' + firstdose + '</br>');
            break;
          }
        }

        loop=1;
      }
      while(loop=0);
    
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
      loop=0;

      do{
        var firstdose = [];
        var nextdose = [];

        if(rotateqentry1<rotateqdose1a){
          firstdose.push('1st Rotateq dose administered too early. See physician.');
          $('.rotateq').append('</br>' + firstdose + '</br>');
          break;
        }
        else{
          if(rotateqentry1>rotateqdose1b){
            firstdose.push('1st Rotateq dose administered too late. See physician.');
            $('.rotateq').append('</br>' + firstdose + '</br>');
            break;
          }
          else{
            if(rotateqdates.length==1){
              if(today>rotateqdose2b){
                firstdose.push('2nd Rotateq dose overdue. See physician.');
                $('.rotateq').append('</br>' + firstdose + '</br>');
                break;
              }
              else{
                if(today>rotateqdose2a){
                  firstdose.push('2nd Rotateq dose 4 to 10 weeks after dose 1. (By ' + rotateqdose2b.toLocaleDateString() + ').');
                }
                else{
                  firstdose.push('2nd Rotateq dose 4 to 10 weeks after dose 1. (Between ' + rotateqdose2a.toLocaleDateString() + ' and ' + rotateqdose2b.toLocaleDateString() + ').');
                }
                nextdose.push('3rd Rotateq dose (final dose) 4 to 10 weeks after dose 2.');
                $('.rotateq').append('</br>' + firstdose + ' ');
                $('.rotateqbutton').append('+ </br>');
                for(i=0; i<nextdose.length; i++){
                  $('.rotateq2').append('</br>' + nextdose[i] + '</br>');
                }
                break; 
              }
            }
          }
        }

        if(rotateqentry2<rotateqdose2a){
          firstdose.push('2nd Rotateq dose administered too early. See physician.');
          $('.rotateq').append('</br>' + firstdose + '</br>');
          break;
        }
        else{
          if(rotateqentry2>rotateqdose2b){
            firstdose.push('2nd Rotateq dose administered too late. See physician.');
            $('.rotateq').append('</br>' + firstdose + '</br>');
            break;
          }
          else{
            if(rotateqdates.length==2){
              if(today>rotateqdose3b){
                firstdose.push('3rd Rotateq dose overdue. See physician.');
                $('.rotateq').append('</br>' + firstdose + '</br>');
                break;
              }
              else{
                if(today>rotateqdose3a){
                  firstdose.push('3rd Rotateq dose (final dose) 4 to 10 weeks after dose 2. (By ' + rotateqdose3b.toLocaleDateString() + ').');
                }
                else{
                  firstdose.push('3rd Rotateq dose (final dose) 4 to 10 weeks after dose 2. (Between ' + rotateqdose3a.toLocaleDateString() + ' and ' + rotateqdose3b.toLocaleDateString() + ').');
                }
                $('.rotateq').append('</br>' + firstdose + '</br>');
                break;
              }
            }
          }
        }

        if(rotateqentry3<rotateqdose3a){
          firstdose.push('3rd Rotateq dose administered too early. See physiican.');
          $('.rotateq').append('</br>' + firstdose + '</br>');
          break;
        }
        else{
          if(rotateqentry3>rotateqdose3b){
            firstdose.push('3rd Rotateq dose administered too late. See physician.');
            $('.rotateq').append('</br>' + firstdose + '</br>');
            break;
          }
        }

        loop=1;
      }
      while(loop=1);    

    }

    var polioentry1 = new Date(poliodates[0]);
    var polioentry2 = new Date(poliodates[1]);
    var polioentry3 = new Date(poliodates[2]);
    var polioentry4 = new Date(poliodates[3]);
    var polioentry24wks = new Date(polioentry2.setDate(polioentry2.getDate()+28));
    polioentry2 = new Date(poliodates[1]);
    var polioentry26mos = new Date(polioentry2.setMonth(polioentry2.getMonth()+6));
    polioentry2 = new Date(poliodates[1]);
    birthday = new Date(birthdayvalue);
    var poliodose1a = new Date(birthday.setMonth(birthday.getMonth()+2));
    birthday = new Date(birthdayvalue);
    var poliodose1b = new Date(birthday.setMonth(birthday.getMonth()+4));
    birthday = new Date(birthdayvalue);
    var poliodose2a;
    var poliodose2a4wks = new Date(polioentry1.setDate(polioentry1.getDate()+28));
    polioentry1 = new Date(poliodates[0]);
    var poliodose2a4mos = new Date(birthday.setMonth(birthday.getMonth()+4));
    birthday = new Date(birthdayvalue);
    if(poliodose2a4mos>poliodose2a4wks){
      poliodose2a = poliodose2a4mos;
    }
    else{
      poliodose2a = poliodose2a4wks;
    }
    var poliodose2b = new Date(birthday.setMonth(birthday.getMonth()+6));
    birthday = new Date(birthdayvalue);
    var poliodose3a;
    var poliodose3a6mos = new Date(birthday.setMonth(birthday.getMonth()+6));
    birthday = new Date(birthdayvalue);
    var poliodose3a4wks = new Date(polioentry2.setDate(polioentry2.getDate()+28));
    polioentry2 = new Date(poliodates[1]);
    if(poliodose3a6mos>poliodose3a4wks){
      poliodose3a = poliodose3a6mos;
    }
    else{
      poliodose3a = poliodose3a4wks;
    }
    var poliodose3ainterval;
    if(today<years4){
      poliodose3ainteraval=polioentry24wks;
    }
    else{
      poliodose3ainterval=polioentry26mos;
    }
    var poliodose3b = new Date(birthday.setMonth(birthday.getMonth()+19));
    birthday = new Date(birthdayvalue);
    var poliodose4a = new Date(birthday.setFullYear(birthday.getFullYear()+4));
    birthday = new Date(birthdayvalue);
    var poliodose4b = new Date(birthday.setFullYear(birthday.getFullYear()+7));
    birthday = new Date(birthdayvalue);
    var firstdose = [];
    var nextdose = [];
    var loop = 0;
    var poliominage = new Date(birthday.setDate(birthday.getDate()+42));
    birthday = new Date(birthdayvalue);
    var polioentry26mos = new Date(polioentry2.setMonth(polioentry2.getMonth()+6));
    polioentry2 = new Date(poliodates[1]);
    
    do{
      var firstdose=[];
      var nextdose=[];
      if(poliodates.length==0){
        if(today>poliodose1b){
          if(today>months4 && today<year7){
            firstdose.push('1st Polio dose overdue. Catch up schedule:');
            nextdose.push('1st Polio dose today.');
            nextdose.push('2nd Polio dose 4 to 8 weeks after dose 1.');
            if(today<years4){
              nextdose.push('3rd Polio dose 4 to 8 weeks after dose 2.');
              nextdose.push('4th Polio dose (final dose) 6 mosnths after dose 3 AND after 4 years old.');
            }
            else{
              nextdose.push('3rd Polio dose (final dose) 6 months after dose 3.');
            }
            $('.polio').append('</br>' + firstdose + ' ');
            $('.poliobutton').append('+ </br>');
            for(i=0; i<nextdose.length; i++){
              $('.polio2').append('</br>' + nextdose[i] + '</br>');
            }
            break;
          }
          else{
            firstdose.push('1st Polio dose overdue. See physician.');
            $('.polio').append('</br>' + firstdose + '</br>');
            break;
          }
        }
        else{
          if(today>poliodose1a){
            firstdose.push('1st Polio dose between 2 and 4 months old. (By ' + poliodose1b.toLocaleDateString() + ').');
          }
          else{
            firstdose.push('1st Polio dose between 2 and 4 months old. (Between ' + poliodose1a.toLocaleDateString() + ' and ' + poliodose1b.toLocaleDateString() + ').');
          }
          nextdose.push('2nd Polio dose between 4 and 6 months old AND 4 to 8 weeks after dose 1.');
          nextdose.push('3rd Polio dose between 6 and 19 months old AND 4 to 8 weeks after dose 2.');
          nextdose.push('4th Polio dose (final dose) after 4 years old.');
          $('.polio').append('</br>' + firstdose + ' ');
          $('.poliobutton').append('+ </br>');
          for(i=0; i<nextdose.length; i++){
            $('.polio2').append('</br>' + nextdose[i] + '</br>');
          }
          break;
        }
      }

      if(polioentry1<poliominage){
        firstdose.push('1st Polio dose administered too early. See physician.');
        $('.polio').append('</br>' + firstdose + '</br>');
        break;
      }
    else{
      if(polioentry1>poliodose1b){
        firstdose.push('1st Polio dose administered too late. See physician.');
        $('.polio').append('</br>' + firstdose + '</br>');
        break;
      }
      else{
        if(poliodates.length==1){
          if(today>poliodose2b){
            if(today>months4 && today<year7){
              firstdose.push('2nd Polio dose overdue. Catch up schedule:');
              nextdose.push('2nd Polio dose today.');
              nextdose.push('3rd Polio dose 4 to 8 weeks after dose 2.');
              nextdose.push('4th Polio dose (final dose) after 4 years old AND 6 months after dose 3.');
              $('.polio').append('</br>' + firstdose + ' ');
              $('.poliobutton').append('+ </br>');
              for(i=0; i<nextdose.length; i++){
                $('.polio2').append('</br>' + nextdose[i] + '</br>');
              }
              break;
            }
            else{
              firstdose.push('2nd Polio dose overdue. See physician.');
              $('.polio').append('</br>' + firstdose + '</br>');
              break;
            }
          }
          else{
            if(today>poliodose2a){
              firstdose.push('2nd Polio dose between 4 and 6 months old AND 4 to 8 weeks after dose 1. (By ' + poliodose2b.toLocaleDateString() + ').');
            }
            else{
              firstdose.push('2nd Polio dose between 4 and 6 months old AND 4 to 8 weeks after dose 1. (Between ' + poliodose2a.toLocaleDateString() + ' and ' + poliodose2b.toLocaleDateString() + ').');
            }
            nextdose.push('3rd Polio dose 4 to 9 weeks after dose 2.');
            nextdose.push('4th Polio dose (final dose) after 4 years old.');
            $('.polio').append('</br>' + firstdose + ' ');
            $('.poliobutton').append('+ </br>');
            for(i=0; i<nextdose.length; i++){
              $('.polio2').append('</br>' + nextdose[i] + '</br>');
            }
            break;
          }
        }
      }
    } 

      if(polioentry2<poliodose2a){
        firstdose.push('2nd Polio dose administered too early. See physician.');
        $('.polio').append('</br>' + firstdose + '</br>');
        break;
      }
      else{
        if(polioentry2>poliodose2b){
          firstdose.push('2nd Polio dose administered too late. See physician.');
          $('.polio').append('</br>' + firstdose + '</br>');
          break;
        }
        else{
          if(poliodates.length==2){
            if(today>poliodose3b){
              if(today<year4){
                firstdose.push('3rd Polio dose overdue. Catch up schedule:');
                nextdose.push('3rd Polio dose today.');
                nextdose.push('4th Polio dose (final dose) after 4 years old AND 6 months after dose 3.');
                $('.polio').append('</br>' + firstdose + ' ');
                $('.poliobutton').append('+ </br>');
                for(i=0; i<nextdose.length; i++){
                  $('.polio2').append('</br>' + nextdose[i] + '</br>');
                }
                break;
              }                
              else if(today>year4){
                firstdose.push('3rd Polio dose overdue. Catch up schedule: ');
                if(today>polioentry26mos){
                  nextdose.push('3rd Polio dose (final dose) today.');
                }
                else{
                  nextdose.push('3rd Polio dose (final dose) 6 months after dose 2. (After ' + polioentry26mos.toLocaleDateString() + ').');
                }
                $('.polio').append('</br>' + firstdose + ' ');
                $('.poliobutton').append('+ </br>');
                for(i=0; i<nextdose.length; i++){
                  $('.polio2').append('</br>' + nextdose[i] + '</br>');
                }
                break;
              }
              else{
                firstdose.push('3rd Polio dose overdue. See physician.');
                $('.polio').append('</br>' + firstdose + '</br>');
                break;
              }
            }
            else{
              if(today>poliodose3a){
                firstdose.push('3rd Polio dose between 6 and 19 months old AND 4 to 8 weeks after dose 2. (By ' + poliodose3b.toLocaleDateString() + ').');
              }
              else{
                firstdose.push('3rd Polio dose between 6 and 19 months old AND 4 to 8 weeks after dose 2. (Between ' + poliodose3a.toLocaleDateString() + ' and ' + poliodose3b.toLocaleDateString() + ').');
              }
              nextdose.push('4th Polio dose (final dose) after 4 years old.');
              $('.polio').append('</br>' + firstdose + ' ');
              $('.poliobutton').append('+ </br>');
              for(i=0; i<nextdose.length; i++){
                $('.polio2').append('</br>' + nextdose[i] + '</br>');
              }
              break;
            }
          }
        }
      }

      if(polioentry3<poliodose3a){
        firstdose.push('3rd Polio dose administered too early. See physician.');
        $('.polio').append('</br>' + firstdose + '</br>');
        break;
      }
      else{
        if(polioentry3>poliodose3b){
          firstdose.push('3rd Polio dose administered too late. See physician.');
          break;
        }
        else{
          if(poliodates.length==3){
            if(today>poliodose4b){
              firstdose.push('4th Polio dose overdue. See physician.');
              $('.polio').append('</br>' + firstdose + '</br>');
              break;
            }
            else{
              firstdose.push('4th Polio dose (final dose) after 4 years old.');
              $('.polio').append('</br>' + firstdose + '</br>');
              break;
            }
          }
        }
      }

      if(polioentry4<poliodose4a){
        firstdose.push('4th Polio dose administered too early. See physician.');
        $('.polio').append('</br>' + firstdose + '</br>');
        break;
      }
      else{
        if(polioentry4>poliodose4b){
          firstdose.push('4th Polio dose administered too late. See physician.');
          $('.polio').append('</br>' + firstdose + '</br>');
          break;
        }
      }

      loop=1;
    }
    while(loop==0);

    var mmrentry1 = new Date(mmrdates[0]);
    var mmrentry2 = new Date(mmrdates[1]);
    var mmrdose1a = new Date(birthday.setMonth(birthday.getMonth()+12));
    birthday = new Date(birthdayvalue);
    var mmrdose1b = new Date(birthday.setMonth(birthday.getMonth()+16));
    birthday = new Date(birthdayvalue);
    var mmrdose2a = new Date(birthday.setFullYear(birthday.getFullYear()+4));
    birthday = new Date(birthdayvalue);
    var mmrdose2b = new Date(birthday.setFullYear(birthday.getFullYear()+6));
    birthday = new Date(birthdayvalue);
    var lastmmr2 = new Date(birthday.setFullYear(birthday.getFullYear()+12));
    birthday = new Date(birthdayvalue);
    var lastmmr = new Date(lastmmr2.setDate(lastmmr2.getDate()-28));
    var loop = 0;

    do{
      var firstdose=[];
      var nextdose=[];
      if(mmrdates.length==0){
        if(today>mmrdose1b){
          if(today<lastmmr){
            firstdose.push('1st MMR dose overdue. Catch up schedule:');
            nextdose.push('1st MMR dose today.');
            nextdose.push('2nd MMR dose (final dose) 4 weeks after dose 1.');
            $('.mmr').append('</br>' + firstdose + ' ');
            $('.mmrbutton').append('+ </br>');
            for(i=0; i<nextdose.length; i++){
              $('.mmr2').append('</br>' + nextdose[i] + '</br>');
            }
            break;            
          }
          else{
            firstdose.push('1st MMR dose overdue. See physician.');
            $('.mmr').append('</br>' + firstdose + '</br>');
            break;
          }
        }
        else{
          if(today>mmrdose1a){
            firstdose.push('1st MMR dose between 12 and 15 months old. (By ' + mmrdose1b.toLocaleDateString() + ').');
          }
          else{
            firstdose.push('1st MMR dose between 12 and 15 months old. (Between ' + mmrdose1a.toLocaleDateString() + ' and ' + mmrdose1b.toLocaleDateString() + ').');
          }
          nextdose.push('2nd MMR dose (final dose) between 4 and 6 years old. (Between ' + mmrdose2a.toLocaleDateString() + ' and ' + mmrdose2b.toLocaleDateString() + ').');
          $('.mmr').append('</br>' + firstdose + ' ');
          $('.mmrbutton').append('+ </br>');
          for(i=0; i<nextdose.length; i++){
            $('.mmr2').append('</br>' + nextdose[i] + '</br>');
          }
          break;  
        }
      }

      if(mmrentry1<mmrdose1a){
        firstdose.push('1st MMR dose administered too early. See physician.');
        $('.mmr').append('</br>' + firstdose + '</br>');
        break;
      }
      else if(mmrentry1>mmrdose1b){
        firstdose.push('1st MMR dose administered too late. See physician.');
        $('.mmr').append('</br>' + firstdose + '</br>');
        break;
      }
      else{
        if(mmrdates.length==1){
          if(today>mmrdose2b){
            firstdose.push('2nd MMR dose overdue. See physician.');
            $('.mmr').append('</br>' + firstdose + '</br>');
            break;
          }
          else{
            if(today>mmrdose2a){
              firstdose.push('2nd MMR dose (final dose) between 4 and 6 years old. (By ' + mmrdose2b.toLocaleDateString() + ').');
            }
            else{
              firstdose.push('2nd MMR dose (final dose) between 4 and 6 years old. (Between ' + mmrdose2a.toLocaleDateString() + ' and ' + mmrdose2b.toLocaleDateString() + ').');
            }
            $('.mmr').append('</br>' + firstdose + '</br>');
            break;
          }
        }
      }

      if(mmrentry2<mmrdose2a){
        firstdose.push('2nd MMR dose administered too early. See physician.');
        $('.mmr').append('</br>' + firstdose + '</br>');
        break;
      }
      else if(mmrentry2>mmrdose2b){
        firstdose.push('2nd MMR dose administered too late. See physician.');
        $('.mmr').append('</br>' + firstdose + '</br>');
        break;
      }

      loop =1;
    }
    while(loop=0);

    var varicellaentry1 = new Date(varicelladates[0]);
    var varicellaentry2 = new Date(varicelladates[1]);
    birthday = new Date(birthdayvalue);
    var varicelladose1a = new Date(birthday.setDate(birthday.getDate()+12));
    birthday = new Date(birthdayvalue);
    var varicelladose1b = new Date(birthday.setDate(birthday.getDate()+16));
    birthday = new Date(birthdayvalue);
    var varicelladose2a = new Date(birthday.setFullYear(birthday.getFullYear()+4));
    birthday = new Date(birthdayvalue);
    var varicelladose2b = new Date(birthday.setFullYear(birthday.getFullYear()+7));
    birthday = new Date(birthdayvalue);



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

  var nihao=0;
  $('.hibbutton').click(function(){
    if(nihao==0){
      $('.hib2').slideDown();
      nihao=1;
    }
    else{
      $('.hib2').slideUp();
      nihao=0;
    }
  });

  var ciao=0;
  $('.pedvaxbutton').click(function(){
    if(ciao==0){
      $('.pedvax2').slideDown();
      ciao=1;
    }
    else{
      $('.pedvax2').slideUp();
      ciao=0;
    }
  });

  var howdy=0;
  $('.pcvbutton').click(function(){
    if(howdy==0){
      $('.pcv2').slideDown();
      howdy=1;
    }
    else{
      $('.pcv2').slideUp();
      howdy=0;
    }
  });

  var hey=0;
  $('.rotarixbutton').click(function(){
    if(hey==0){
      $('.rotarix2').slideDown();
      hey=1;
    }
    else{
      $('.rotarix2').slideUp();
      hey=0;
    }
  });

  var bonjour=0;
  $('.rotateqbutton').click(function(){
    if(bonjour==0){
      $('.rotateq2').slideDown();
      bonjour=1;
    }
    else{
      $('.rotateq2').slideUp();
      bonjour=0;
    }
  });

  var bueno=0;
  $('.poliobutton').click(function(){
    if(bueno==0){
      $('.polio2').slideDown();
      bueno=1;
    }
    else{
      $('.polio2').slideUp();
      bueno=0;
    }
  });

  var hi=0;
  $('.mmrbutton').click(function(){
    if(hi==0){
      $('.mmr2').slideDown();
      hi=1;
    }
    else{
      $('.mmr2').slideUp();
      hi=0;
    }
  });

  var pizza=0;
  $('.varicellabutton').click(function(){
    if(pizza==0){
      $('.varicella2').slideDown();
      pizza=1;
    }
    else{
      $('.varicella2').slideUp();
      pizza=0;
    }
  });

  $('#add').click(function(){
    $('#add').hide();
    $('#addName').hide();
  });
  
  
});
