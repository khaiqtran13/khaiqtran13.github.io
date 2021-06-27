// // reference to http://jsfiddle.net/nicolapeluchetti/dAyzq/1/
// $(document).ready(function() {     
// //automatically sets date to current time
// var dateToday = new Date();
// console.log(dateToday);

// var dates = $("#my_date_picker").datepicker({
//     beforeShowDay: $.datepicker.noWeekends, //disables weekends
//     defaultDate: "+1w",
//     changeMonth: true, //allows manual selection of month and year
//     changeYear: true,
//     //numberOfMonths: <int>, //number of months to display at once
//     minDate: dateToday,
//     onSelect: function(selectedDate) {
//         var option = this.id == "from" ? "minDate" : "maxDate",
//             instance = $(this).data("datepicker"),
//             date = $.datepicker.parseDate(instance.settings.dateFormat || $.datepicker._defaults.dateFormat, selectedDate, instance.settings);
//         dates.not(this).datepicker("option", option, date);
//     }
// });
// })
    


function updateDatePicker(){
    $( "#my_date_picker" ).datepicker("destroy");
    
    var dateToday = new Date();
    var currPhy = document.getElementById("physician-choice").value;
    console.log(currPhy);

    if (currPhy === "lilpump") {
        console.log("ESKTITTT");
        var dates = $("#my_date_picker").datepicker({
            beforeShowDay: function(date){ return [date.getDay() == 6 || date.getDay() == 0,""]},
            defaultDate: "+1w",
            changeMonth: true, //allows manual selection of month and year
            changeYear: true,
            //numberOfMonths: <int>, //number of months to display at once
            minDate: dateToday,
            onSelect: function(selectedDate) {
                var option = this.id == "from" ? "minDate" : "maxDate",
                    instance = $(this).data("datepicker"),
                    date = $.datepicker.parseDate(instance.settings.dateFormat || $.datepicker._defaults.dateFormat, selectedDate, instance.settings);
                dates.not(this).datepicker("option", option, date);
            }
        });
    } else if(currPhy === ""){
        console.log("empty");
    } else if(currPhy === "ryder-balmes"){
        var dates = $("#my_date_picker").datepicker({
            beforeShowDay: function(date){ return [date.getDay() == 2 || date.getDay() == 3,""]},
            defaultDate: "+1w",
            changeMonth: true, //allows manual selection of month and year
            changeYear: true,
            //numberOfMonths: <int>, //number of months to display at once
            minDate: dateToday,
            onSelect: function(selectedDate) {
                var option = this.id == "from" ? "minDate" : "maxDate",
                    instance = $(this).data("datepicker"),
                    date = $.datepicker.parseDate(instance.settings.dateFormat || $.datepicker._defaults.dateFormat, selectedDate, instance.settings);
                dates.not(this).datepicker("option", option, date);
            }
        });
    } else {
        var dates = $("#my_date_picker").datepicker({
            beforeShowDay: $.datepicker.noWeekends, //disables weekends
            defaultDate: "+1w",
            changeMonth: true, //allows manual selection of month and year
            changeYear: true,
            //numberOfMonths: <int>, //number of months to display at once
            minDate: dateToday,
            onSelect: function(selectedDate) {
                var option = this.id == "from" ? "minDate" : "maxDate",
                    instance = $(this).data("datepicker"),
                    date = $.datepicker.parseDate(instance.settings.dateFormat || $.datepicker._defaults.dateFormat, selectedDate, instance.settings);
                dates.not(this).datepicker("option", option, date);
            }
        });
    }
    $( "#datepicker" ).datepicker("refresh");
}
