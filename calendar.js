function setup()
  {
          var Calendar = {
          customDate: function(date){
            return new Date(date);
          },
          currentDay: function(){
            return new Date().getDay();
          },
          currentMonth: function(){
            return new Date().getMonth() +1 ;
          },
          currentYear: function(){
            return new Date().getFullYear();
          },
          getMonthDays: function(year, month){
            return new Date(year, month, 0).getDate();
          },
          currentMonthDays: function(){
            return this.getMonthDays(this.currentYear(), this.currentMonth());
          }
        };

          var date = new Date(),
          currentDay = date.getDate(),
          currentMonth = date.getMonth(),
          currentYear = date.getFullYear(),
          currentMonth2 = currentMonth,
          currentYear2 = currentYear;


          Calendar.Months = {
          "12": "December",
          "1": "January",
          "2": "February",
          "3": "March",
          "4": "April",
          "5": "May",
          "6": "June",
          "7": "July",
          "8": "August",
          "9": "September",
          "10":"October",
          "11":"November"
        };


         /* WORKPLACE ; TABLE (calendar) */

           Calendar.createCustomCalendar = function (year, month) {

          /* ------------------------- CREATE MAIN PAGE CONTENT / CALENDAR AND PAGE SECTION ------------------------------*/

              var tables = '<article class="note-Page"><section id="note-Panel"><section id="day-Extension"></section><section class="notes-Workplace"><span class="noteJson"></span><span class="notesPHP"></span></section></section></article><article class="calendar-Panel"><section class="calendar"><form action="index.php" method="post"><table>';
              tables += '<tr id="calendar-Header"><th>MON</th><th>TUE</th><th>WED</th><th>THU</th><th>FRI</th><th>SAT</th><th>SUN</th></tr>';
              tables +='</table></form></section></article>';




                 document.getElementById('main-calendar').innerHTML = tables;
                 var currentDays = Calendar.getMonthDays(year, month+1),
                 day = 1,
                 monthDay = Calendar.currentDay(year, month),
                 calendar = jQuery('.calendar'),
                 table = calendar.find('table');
                 mainCalendarPanel = jQuery('.calendar-Panel');


                 var clicked='',
                  tdclicked='';

                  var addAnimation = function(){
                    $(".big").css({"animation": "none"});
                    $(".big").css({"animation": ".5s ease 0s 1 showContent"});
                    $(".thin").css({"animation": "none"});
                    $(".thin").css({"animation": ".5s ease 0s 1 showContent"});
                    $("#addNote").css({"animation": "none"});
                    $("#addNote").css({"animation": ".5s ease 0s 1 showContent"});
                    $(".noteJson").css({"animation": "none"});
                    $(".noteJson").css({"animation": ".5s ease 0s 1 showContent"});
                  }

                 /* ------------------------- SELECT DAY FUNCTION ------------------------------*/

                 $( "body" ).click(function(event){
                         var target = $(event.target);

                         /* ------------------------- IF CLICKED ON BLANK SPACE ------------------------------*/

                         if( (!target.is(".calendar") || !target.is(".notes-Workplace") ) && (!target.is('span'))||((clicked)&&(!tdclicked))){
                           clicked.removeAttr("class");
                           clicked.attr('class','col-Selected');
                           clicked ='';
                           $(".col-NormalWithNotes").css({'height': '100%', 'width': '100%'});
                           $(".col-NormalWithNotes2").css({'height': '50%', 'width': '50%'});
                         }
                         else if( (!target.is(".calendar") || !target.is(".notes-Workplace") ) && (!target.is('span'))||((!clicked)&&(tdclicked))){
                           tdclicked.removeAttr('class');
                           tdclicked.attr('class', 'col-Today');
                           tdclicked ='';
                         }

                     /* ------------------------- IF CLICKED ON NORMAL DAY CIRCLE ------------------------------*/

                         if((target.is(".col-Normal")) && (target.is('span'))){

                           /* ------------------------- IF CLICKED ON DAY CIRCLE EXTENSION ------------------------------*/

                               if(target.parent().is(".col-Selected")){
                                 target.parent().removeAttr('class');
                                 target.parent().attr('class','col-Active');
                                 $("#day-Extension").html('<span class="big">'+target.html()+'</span><span class="thin">'+Calendar.Months[(currentMonth+1)]+'</span>');
                                 $(".notes-Workplace").html('<span class="add-Note"><input name="addNoteDate" id="addNoteDate" type="hidden" value="'+currentYear+'-'+(currentMonth+1)+'-'+target.html()+'"><span id="addNote"><i class="material-icons">add</i></span></span><span class="noteJson"></span>');
                                 clicked = target.parent();
                                 addAnimation();
                                 $("#addNoteForm").css({"visibility": "hidden", "animation": "none"});
                               }

                             /* ------------------------- IF CLICKED ON TODAY CIRCLE ------------------------------*/

                               else if(target.parent().is('.col-Today')){
                                 target.parent().removeAttr('class');
                                 target.parent().attr('class','col-Active');
                                 $("#day-Extension").html('<span class="big">'+target.html()+'</span><span class="thin">'+Calendar.Months[(currentMonth+1)]+'</span>');
                                 $(".notes-Workplace").html('<span class="add-Note"><input name="addNoteDate" id="addNoteDate" type="hidden" value="'+currentYear+'-'+(currentMonth+1)+'-'+target.html()+'"><span id="addNote"><i class="material-icons">add</i></span></span><span class="noteJson"></span>');
                                 tdclicked = target.parent();
                                 addAnimation();
                                 $("#addNoteForm").css({"visibility": "hidden", "animation": "none"});
                               }

                             /* ------------------------- IF CLICKED ON BLANK SPACE ------------------------------*/

                               else{
                                 if(tdclicked){
                                   target.parent().removeAttr('class');
                                   target.parent().attr('class','col-Today');
                                   tdclicked ='';
                                   $("#addNoteForm").css({"visibility": "hidden", "animation": "none"});
                                 }
                                 else{
                                   target.parent().removeAttr('class');
                                   target.parent().attr('class','col-Selected');
                                   $("#addNoteForm").css({"visibility": "hidden", "animation": "none"});
                                 }

                               }
                         }
                         else if((target.is(".col-NormalWithNotes")) && (target.is('span'))){

                             /* ------------------------- IF CLICKED ON DAY CIRCLE EXTENSION ------------------------------*/

                               if(target.parent().is(".col-Selected")){
                                 target.parent().removeAttr('class');
                                 target.parent().attr('class','col-Active');
                                 $("#day-Extension").html('<span class="big">'+target.html()+'</span><span class="thin">'+Calendar.Months[(currentMonth+1)]+'</span>');
                                 $(".notes-Workplace").html('<span class="add-Note"><input name="addNoteDate" id="addNoteDate" type="hidden" value="'+currentYear+'-'+(currentMonth+1)+'-'+target.html()+'"><span id="addNote"><i class="material-icons">add</i></span></span><span class="noteJson"></span>');
                                 clicked = target.parent();
                                 target.css({'height': '50%', 'width': '50%'});
                                 addAnimation();
                                 $("#addNoteForm").css({"visibility": "hidden", "animation": "none"});
                               }

                             /* ------------------------- IF CLICKED ON TODAY CIRCLE ------------------------------*/

                               else if(target.parent().is('.col-Today')){
                                 target.parent().removeAttr('class');
                                 target.parent().attr('class','col-Active');
                                 $("#day-Extension").html('<span class="big">'+target.html()+'</span><span class="thin">'+Calendar.Months[(currentMonth+1)]+'</span>');
                                 $(".notes-Workplace").html('<span class="add-Note"><input name="addNoteDate" id="addNoteDate" type="hidden" value="'+currentYear+'-'+(currentMonth+1)+'-'+target.html()+'"><span id="addNote"><i class="material-icons">add</i></span></span><span class="noteJson"></span>');
                                 tdclicked = target.parent();
                                 target.css({'height': '50%', 'width': '50%'});
                                 addAnimation();
                                 $("#addNoteForm").css({"visibility": "hidden", "animation": "none"});
                               }

                             /* ------------------------- IF CLICKED ON BLANK SPACE ------------------------------*/

                               else{
                                 if(tdclicked){
                                   target.parent().removeAttr('class');
                                   target.parent().attr('class','col-Today');
                                   target.css({'height': '100%', 'width': '100%'});
                                   tdclicked ='';
                                   $("#addNoteForm").css({"visibility": "hidden", "animation": "none"});
                                 }
                                 else{
                                   target.parent().removeAttr('class');
                                   target.parent().attr('class','col-Selected ');
                                   target.css({'height': '100%', 'width': '100%'});
                                   $("#addNoteForm").css({"visibility": "hidden", "animation": "none"});
                                 }

                               }
                         }
                         else if((target.is(".col-NormalWithNotes2")) && (target.is('span'))){

                             /* ------------------------- IF CLICKED ON DAY CIRCLE EXTENSION ------------------------------*/

                               if(target.parent().is(".col-Selected")){
                                 target.parent().removeAttr('class');
                                 target.parent().attr('class','col-Active');
                                 $("#day-Extension").html('<span class="big">'+target.html()+'</span><span class="thin">'+Calendar.Months[(currentMonth+1)]+'</span>');
                                 $(".notes-Workplace").html('<span class="add-Note"><input name="addNoteDate" id="addNoteDate" type="hidden" value="'+currentYear+'-'+(currentMonth+1)+'-'+target.html()+'"><span id="addNote"><i class="material-icons">add</i></span></span><span class="noteJson"></span>');
                                 clicked = target.parent();
                                 target.css({'height': '50%', 'width': '50%'});
                                 addAnimation();
                                 $("#addNoteForm").css({"visibility": "hidden", "animation": "none"});
                               }

                             /* ------------------------- IF CLICKED ON TODAY CIRCLE ------------------------------*/

                               else if(target.parent().is('.col-Today')){
                                 target.parent().removeAttr('class');
                                 target.parent().attr('class','col-Active');
                                 $("#day-Extension").html('<span class="big">'+target.html()+'</span><span class="thin">'+Calendar.Months[(currentMonth+1)]+'</span>');
                                 $(".notes-Workplace").html('<span class="add-Note"><input name="addNoteDate" id="addNoteDate" type="hidden" value="'+currentYear+'-'+(currentMonth+1)+'-'+target.html()+'"><span id="addNote"><i class="material-icons">add</i></span></span><span class="noteJson"></span>');
                                 tdclicked = target.parent();
                                 target.css({'height': '50%', 'width': '50%'});
                                 addAnimation();
                                 $("#addNoteForm").css({"visibility": "hidden", "animation": "none"});
                               }

                             /* ------------------------- IF CLICKED ON BLANK SPACE ------------------------------*/

                               else{
                                 if(tdclicked){
                                   target.parent().removeAttr('class');
                                   target.parent().attr('class','col-Today');
                                   tdclicked ='';
                                   target.css({'height': '100%', 'width': '100%'});
                                   $("#addNoteForm").css({"visibility": "hidden", "animation": "none"});
                                 }
                                 else{
                                   target.parent().removeAttr('class');
                                   target.parent().attr('class','col-Selected');
                                   target.css({'height': '100%', 'width': '100%'});
                                   $("#addNoteForm").css({"visibility": "hidden", "animation": "none"});
                                 }
                               }
                         }

                         /* ------------------------- IF CLICKED ON ACTIVE DAY ------------------------------*/

                         else if((target.is(".col-Active")) && (target.is('span'))){

                             if(tdclicked){
                               target.removeAttr('class');
                               target.attr('class','col-Today');
                               tdclicked ='';
                               $("#addNoteForm").css({"visibility": "hidden", "animation": "none"});
                             }
                             else{
                               target.removeAttr('class');
                               target.attr('class','col-Selected');
                               $("#addNoteForm").css({"visibility": "hidden", "animation": "none"});
                             }
                         }

                         /* ------------------------- IF CLICKED ON TODAY CIRCLE ------------------------------*/

                         else if((target.is(".col-Today")) && (target.is('span'))){
                            target.removeAttr('class');
                            target.attr('class','col-Active');
                            tdclicked = target;
                            $("#day-Extension").html('<span class="big">'+target.children().html()+'</span><span class="thin">'+Calendar.Months[(currentMonth+1)]+'</span>');
                            $(".notes-Workplace").html('<span class="add-Note"><input id="addNoteDate" type="hidden" value="'+currentYear+'-'+(currentMonth+1)+'-'+target.childern().html()+'"><span id="addNote"><i class="material-icons">add</i></span></span><span class="noteJson"></span>');
                            addAnimation();
                            $("#addNoteForm").css({"visibility": "hidden", "animation": "none"});
                         }
                   });


             var firstDayOfWeek = Calendar.weekdays.MON;
             var startDate = new Date(year, month, day).gotoWeekday(firstDayOfWeek);
             if(month == 8){
               var lastDate = new Date(year, month, currentDays);
             }
             else{
               var lastDate = new Date(year, month, currentDays);
             }

             var dayStr = "";



            mainCalendarPanel.prepend('<section id="calendar-Highlight"><span id="date-Highlight"><span id="mat-Left"><i class="material-icons">chevron_left</i></span><span class="big">      ' + year + '</span><span class="thin">'  + Calendar.Months[(month+1)] + '       </span><span id="mat-Right"><i class="material-icons">chevron_right</i></span></span><span id="date-Highlight-Subtitle"><span class="thin">TODAY:</span> <span class="big">'+currentDay+'</span><span class="thin">'+Calendar.Months[(currentMonth2+1)] +'</span></section> ');

             number = 1;
             dayNumber = 1;
       /* ------------------------- TAKE NOTES ------------------------------*/
             var mydata = ['hellostring'];
             var request = $.ajax({
                   type: "json",
                   url: "takenotes.php?",
                   data: mydata,
                   async: false,

                   success: function(response2)
                   {
                           var responseText2 = "onbekend";
                           var text = "";
                           var index = 0;
                           var json = $.parseJSON(response2);
                             $(json).each(function(i,val){
                                 $.each(val,function(k,v){
                                     if(k == "date"){
                                       text += "<span>" + v + "</span></br>";
                                       index++;
                                     }
                             });
                             });
                         $(".notesPHP").html(text);
                   }
             });

       /* ------------------------- DRAW TABLE ------------------------------*/

             while((startDate <=  lastDate)||(number <=6)) {
               var tableRow = jQuery('<tr class="calendarRow"></tr>')
               for (col = 1; col <= 7; col++) {
                 dayStr = startDate.getMonth() == month ? startDate.getDate() : "";
                 var sprawdz = function(currentYear, currentMonth, dayStr, respond, currentDay, dayNumber, currentMonth2, currentYear2){
                 var x = $(".notesPHP").html();

                 /* ------------------------- IF DAY IS < 10 THEN ADD 0 BEFORE ------------------------------*/

                   if(dayStr<10){

                     /* ------------------------- AND IF MONTH IS < 10 THEN ADD 0 BEFORE ------------------------------*/
                     if(currentMonth<10){
                           if((x.indexOf(currentYear+"-0"+(currentMonth+1)+"-0"+dayStr)>-1)&&(dayStr != "")){
                                 if((dayStr==currentDay)&&(currentMonth==currentMonth2)&&(currentYear2==currentYear)){
                                     respond = 5;
                                     return respond;
                                 }
                                 else{
                                       if(dayStr == ""){
                                         respond=2;
                                         return respond;
                                       }
                                       else{
                                         respond=4;
                                         return respond;
                                       }
                                 }
                           }
                           else{
                                 if((dayStr==currentDay)&&(currentMonth==currentMonth2)&&(currentYear2==currentYear)){
                                   respond = 1;
                                   return respond;
                                 }
                                 else{
                                       if(dayStr == ""){
                                         respond=2;
                                         return respond;
                                       }
                                       else{
                                         respond=3;
                                         return respond;
                                       }
                                 }
                           }
                     }
                     else{
                           if((x.indexOf(currentYear+"-"+(currentMonth+1)+"-0"+dayStr)>-1)&&(dayStr != "")){
                                 if((dayStr==currentDay)&&(currentMonth==currentMonth2)&&(currentYear2==currentYear)){
                                     respond = 1;
                                     return respond;
                                 }
                                 else{
                                       if(dayStr == ""){
                                         respond=2;
                                         return respond;
                                       }
                                       else{
                                         respond=4;
                                         return respond;
                                       }
                                 }
                           }
                           else{
                                 if((dayStr==currentDay)&&(currentMonth==currentMonth2)&&(currentYear2==currentYear)){
                                   respond = 1;
                                   return respond;
                                 }
                                 else{
                                       if(dayStr == ""){
                                         respond=2;
                                         return respond;
                                       }
                                       else{
                                         respond=3;
                                         return respond;
                                       }
                                 }
                           }
                     }
                   }
                   /* ------------------------- IF DAY IS >= 10 ------------------------------*/
                   else{
                     /* ------------------------- AND IF MONTH <10 ADD 0 BEFORE ------------------------------*/
                     if(currentMonth<10){
                       if((x.indexOf(currentYear+"-0"+(currentMonth+1)+"-"+dayStr)>-1)&&(dayStr != "")){
                         if((dayStr==currentDay)&&(currentMonth==currentMonth2)&&(currentYear2==currentYear)){
                             respond = 5;
                             return respond;
                         }
                         else{
                           if(dayStr == ""){
                             respond=2;
                             return respond;
                           }
                           else{
                             respond=4;
                             return respond;
                           }
                         }
                       }
                       else{
                         if((dayStr==currentDay)&&(currentMonth==currentMonth2)&&(currentYear2==currentYear)){
                           respond = 1;
                           return respond;
                         }
                         else{
                           if(dayStr == ""){
                             respond=2;
                             return respond;
                           }
                           else{
                             respond=3;
                             return respond;
                           }
                         }
                       }
                     }
                     else{
                       if((x.indexOf(currentYear+"-"+(currentMonth+1)+"-"+dayStr)>-1)&&(dayStr != "")){
                         if((dayStr==currentDay)&&(currentMonth==currentMonth2)&&(currentYear2==currentYear)){
                             respond = 1;
                             return respond;
                         }
                         else{
                           if(dayStr == ""){
                             respond=2;
                             return respond;
                           }
                           else{
                             respond=4;
                             return respond;
                           }
                         }
                       }
                       else{
                         if((dayStr==currentDay)&&(currentMonth==currentMonth2)&&(currentYear2==currentYear)){
                           respond = 1;
                           return respond;
                         }
                         else{
                           if(dayStr == ""){
                             respond=2;
                             return respond;
                           }
                           else{
                             respond=3;
                             return respond;
                           }
                         }
                       }
                     }
                   }
                 };

                 var respond = sprawdz(currentYear, currentMonth, dayStr, respond, currentDay, dayNumber, currentMonth2, currentYear2);
                 /* ------------------------- TODAY ASSIGMENT ------------------------------*/
                 if(respond==1){
                   jQuery(tableRow).append('<td id='+number+' class="showContent"><input type="hidden" class="buttonvalue" value="' +currentYear+ '-' +(currentMonth+1)+ '-' +dayStr+'"><span class="col-Today"><span class="col-Normal">' + dayStr + '</span></span></td>');
                   startDate = startDate.addDays(1);
                   dayNumber++;
                 }
                 /* ------------------------- BLANK TD ------------------------------*/
                 else if(respond==2){
                   jQuery(tableRow).append('<td  class="no-Effects"  class="showContent">' + dayStr + '</td>');
                   startDate = startDate.addDays(1);
                 }
                 /* ------------------------- NORMAL DAY ------------------------------*/
                 else if(respond==3){
                   jQuery(tableRow).append('<td id="'+number+'"  class="showContent"><input type="hidden" class="buttonvalue" value="' +currentYear+ '-' +(currentMonth+1)+ '-' +dayStr+'"><span class="col-Selected"><span class="col-Normal">' + dayStr + '</span></span></td>');
                   startDate = startDate.addDays(1);
                   dayNumber++;
                 }
                 /* ------------------------- DAY WITH NOTES ------------------------------*/
                 else if(respond==4){
                   jQuery(tableRow).append('<td id="'+number+'"  class="showContent"><input type="hidden" class="buttonvalue" value="' +currentYear+ '-' +(currentMonth+1)+ '-' +dayStr+'"><span class="col-Selected"><span class="col-NormalWithNotes">' + dayStr + '</span></span></td>');
                   startDate = startDate.addDays(1);
                   dayNumber++;
                 }
                 /* ------------------------- TODAY WITH NOTES ------------------------------*/
                 else if(respond==5){
                   jQuery(tableRow).append('<td id="'+number+'"  class="showContent"><input type="hidden" class="buttonvalue" value="' +currentYear+ '-' +(currentMonth+1)+ '-' +dayStr+'"><span class="col-Today"><span class="col-NormalWithNotes2">' + dayStr + '</span></span></td>');
                   startDate = startDate.addDays(1);
                   dayNumber++;
                 }
                 /* ------------------------- ERROR ------------------------------*/
                 else{
                   alert("Dont Work");
                 }

               }


               number++;
               table.append(tableRow);

             }

       /* ------------------------- FUNCTION TO MOVE DAY VALUE TO DAY-EXTENSION ------------------------------*/

             $("body").on("click","td", function(){
                   let temp = $(this).find("input").val(),
                   mydata = { q: ""+temp+""},
                   request = $.ajax({
                     type: "POST",
                     url: "searchnotes.php?q="+temp,
                     data: mydata,

                     success: function(response2)
                     {
                         let content = '',
                         header = '',
                         noteId = "",
                         text2 = ""


                         var json2 = $.parseJSON(response2);
                           $(json2).each(function(i,val){
                               $.each(val,function(k,v){
                                   if(k == "header"){
                                     header = v;
                                   }
                                   else if(k == "content"){
                                     content = v;
                                   }
                                   else if(k == "note_id"){
                                     noteId = v;
                                   }



                                 });

                                   text2 += "<span class='note-Event'><span class='noteEventHeader'><span class='noteHeader'>" + header + "</span><span class='noteOptions'><span class='noteId'>" + noteId + "</span><span class='noteDelete'><i class='material-icons' style='font-size:1.25rem;'>delete</i></span><span class='noteEdit'><i class='tiny material-icons'  style='font-size:1.25rem;'>edit</i></span><span class='noteExpand'><i class='material-icons' style='font-size:2rem;'>expand_more</i></span></span></span><span class='noteContent'>" + content + "</span></span>";

                           });
                       $(".noteJson").html(text2);

                     }
               });
             });
           };

           Calendar.weekdays = {
          "SUN": 0,
          "MON": 1,
          "TUE": 2,
          "WED": 3,
          "THU": 4,
          "FRI": 5,
          "SAT": 6
        };

        /* ------------------------- ADDING NOTE QUERY ------------------------------*/

           $("body").on("click","#sendQuery", function(){
              let date = $('#addNoteDate').val();
              let header = $('.headerField').val();
              let content = $('.contentField').val();
              let mydata = { date: ""+date+"", header: ""+header+"", content: ""+content+""};
              let request = $.ajax({
                       type: "POST",
                       url: "addNote.php?",
                       data: mydata,
                       dataType: "JSON",
                       cache: false,


                       success: function(data){
                         $(".messageBox").html('<span class="successMessageBoxHeader"><i class="material-icons">done</i></span><span class="successMessageBoxContent"><p> Success! </br> Notatka dodana pomyślnie! </p></span>');
                         setTimeout(function () {
                           $('.notification').css({"opacity": "1", "visibility": "visible", "transition": "opacity .2s ease-in"});
                           $('.notification:before').css({"visibility": "visible"});
                         }, 200);
                         setTimeout(function () {
                           $('.notification').css({"opacity": "0", "transition": "opacity .2s ease-in"});
                         }, 1200);
                         setTimeout(function () {
                           $('.notification').css({"visibility": "hidden"});
                           $('.notification:before').css({"visibility": "hidden"});
                         }, 1450);
                         setTimeout(function () {
                           $('.headerField').val(null);
                           $('.contentField').val(null);
                           location.reload();
                         }, 1451);

                       }

                });
            });

            /* ------------------------- DELETE NOTE QUERY ------------------------------*/

               $("body").on("click",".noteDelete", function(){
                  let target = $(this).parent();
                  let noteId = target.find(".noteId").html();
                  let mydata = { noteId: ""+noteId+""};
                  let request = $.ajax({
                           type: "POST",
                           url: "deleteNotes.php?",
                           data: mydata,
                           dataType: "JSON",
                           cache: false,


                            success: function(data){
                            $(".messageBox").html('<span class="successMessageBoxHeader"><i class="material-icons">done</i></span><span class="successMessageBoxContent"><p> Success! </br> Notatka usunięta pomyślnie! </p></span>');
                            $('.notification:before').css({"height": "100%"});
                            $('.notification').css({"height": "100%"});
                             setTimeout(function () {
                               $('.notification').css({"opacity": "1", "visibility": "visible", "transition": "opacity .2s ease-in"});
                             }, 200);
                             setTimeout(function () {
                               $('.notification').css({"opacity": "0", "transition": "opacity .2s ease-in"});
                             }, 1200);
                             setTimeout(function () {
                               $('.notification').css({"visibility": "hidden"});
                             }, 1450);
                             setTimeout(function () {
                               $('.headerField').val(null);
                               $('.contentField').val(null);
                               location.reload();
                             }, 1451);

                           }
                    });

                });


             Date.prototype.addDays = function (days) {
                var dat = new Date(this.valueOf());
                dat.setDate(dat.getDate() + days);
                return dat;
               }

             Date.prototype.gotoWeekday = function (dayOfWeek) {
                var dat = new Date(this.valueOf());
                while (dat.getDay() != dayOfWeek)
                  dat = dat.addDays(-1);
                return dat;
              }

           /* ------------------------- SHOW AND HIDE ADD NOTE FORM------------------------------*/

           $("body").on("click","#addNote", function(){
                $("#addNoteForm").show(0, function(){
                    $("#addNoteForm").css({"visibility": "visible", "animation": "0.5s ease 0s 1 showContent", "top": "50%", "left": "50%", "height": "100%"});
                    $("html").css({"overflow-y": "hidden"});
                 });
             });
           $("body").on("click",".formExit", function(){
                 $("#addNoteForm").fadeOut(200, function(){
                     $("#addNoteForm").css({"visibility": "hidden", "animation": "0.5s ease 0s 1 showContent", "top": "0", "left": "0", "height": "0px"});
                     $("html").css({"overflow-y": ""});
                 });
             });

             $(".contentField").keyup(function(event){
               let q = 1;
               let target = $(this);
               if(target.val().length <= 300){
                 $(".content_count").html(target.val().length+"/300");
               }
               else{
                 $(".content_count").html("<span style='color: red;'>"+target.val().length+"</span>/300");
               }

               if((target.val().length)>=(76*q)){

                 q = Math.floor(target.val().length/76);
                 q+=1;
                 target.attr('rows', q);

               }

             });
             $(".headerField").keyup(function(event){
               let q = 1;
               let target = $(this);
               if(target.val().length <= 65){
                 $(".header_count").html(target.val().length+"/65")
               }
               else{
                 $(".header_count").html("<span style='color: red;'>"+target.val().length+"</span>/65");
               }

               if((target.val().length)>=(76*q)){

                 q = Math.floor(target.val().length/76);
                 q+=1;
                 target.attr('rows', q);

               }

             });


             /* ------------------------- SHOW NOTES CONTENT------------------------------*/

           $("body").on("click",".noteExpand", function(target){
               let parent = $(this).parent().parent().parent();
               let eventHeader = parent.find('.noteEventHeader');
               let eventArchont = parent.find('.noteExpand');
               let content = parent.find('.noteContent');
               eventArchont.removeAttr('class');
               eventArchont.attr('class', 'noteLess');
               eventArchont.html("<i class='material-icons'>expand_less</i>")
               eventHeader.css({"background-color": "white", "transition": "all .25s ease-in-out"})
               content.css({"visibility": "visible", "width": "100%", "min-height": "50px", "height": "auto", "padding": "15px 5px 15px 5px", "transform": "scaleY(1)"});
           });
           /* ------------------------- HIDE NOTES CONTENT------------------------------*/
           $("body").on("click",".noteLess", function(target){
               let parent = $(this).parent().parent().parent();
               let eventHeader = parent.find('.noteEventHeader');
               let eventArchont = parent.find('.noteLess');
               let content = parent.find('.noteContent');
               eventArchont.removeAttr('class');
               eventArchont.attr('class', 'noteExpand');
               eventArchont.html("<i class='material-icons'>expand_more</i>")
               eventHeader.css({"background-color": "transparent", "transition": "all .5s ease-in"})
               content.css({"width": "100%", "min-height": "0px", "height": "0px", "padding": "0", "transform": "scaleY(0)"});
           });

           /*
           $("body").on("click", '#menuExpand', function(){
          //   $(".navList").css({"opacity": "1", "transition": "all .3s ease-in"});
          //   $("#navBar").css({"width": "10%", "transition": "all .3s ease-in"});
             $(this).removeAttr('id').attr("id","menuLess");
           });
           $("body").on("click", '#menuLess', function(){
          //   $(".navList").css({"opacity": "0", "transition": "all .3s ease-in"});
          //    $("#navBar").css({"width": "3%", "transition": "all .3s ease-in"});
             $(this).removeAttr('id').attr("id","menuExpand");
           });
*/


           /* ------------------------- CHANGE MONTH TO LEFT ------------------------------*/

            $( "body" ).on( "click", "#mat-Left", function() {
                if(currentMonth == 0){
                    currentMonth = 11;
                    currentYear -= 1;
                }
                else{
                    currentMonth -= 1;
                }
                 $("#addNoteForm").css({"visibility": "hidden", "animation": "none"});
                 Calendar.createCustomCalendar(currentYear, currentMonth);
                 $(function() {
                         var calendarHeight = $('.calendar table').height();
                         var calendarHighlightHeight = $('#calendar-Highlight').height();
                         $('.note-Page').height(calendarHeight + calendarHighlightHeight);


                   });
              });

           /* ------------------------- CHANGE MONTH TO RIGHT ------------------------------*/

            $( "body" ).on( "click", "#mat-Right", function() {
                  if(currentMonth == 11){
                      currentMonth = 0;
                      currentYear += 1;
                  }
                  else{
                      currentMonth += 1;
                  }
                    $("#addNoteForm").css({"visibility": "hidden", "animation": "none"});
                    Calendar.createCustomCalendar(currentYear, currentMonth);
                    $(function() {
                            var calendarHeight = $('.calendar table').height();
                            var calendarHighlightHeight = $('#calendar-Highlight').height();
                            $('.note-Page').height(calendarHeight + calendarHighlightHeight);


                      });
              });




       /* ------------------------- DRAW CALENDAR WITHOUT MONTH CHANGING ------------------------------*/

          Calendar.createCustomCalendar(currentYear, currentMonth);

          $(function() {
                  var calendarHeight = $('.calendar table').height();
                  var calendarHighlightHeight = $('#calendar-Highlight').height();
                  $('.note-Page').height(calendarHeight + calendarHighlightHeight);


            });
          $(window).resize(function() {
                  var calendarHeight = $('.calendar table').height();
                  var calendarHighlightHeight = $('#calendar-Highlight').height();
                  $('.note-Page').height(calendarHeight + calendarHighlightHeight);

            });

        }
