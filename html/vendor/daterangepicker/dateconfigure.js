var date = new Date();
var currentMonth = date.getMonth();
var currentDate = date.getDate();
var currentYear = date.getFullYear();


$(function () {
            $('#datetimepicker12').datetimepicker({
                inline: true,
                sideBySide: true
            });
});


$('input[name="daterange"]').daterangepicker({

 minDate: new Date(currentYear, currentMonth, currentDate)
    , dateFormat: 'yy-mm-dd'
    , startDate: moment(date).add(0,'days')
    , endDate: moment(date).add(10,'days')
    , locale: {
        format: 'YYYY.MM.DD'
    }, 
	
 "locale": {
        "format": "YYYY/MM/DD",
        "separator": " - ",
        "applyLabel": "日程を保存",
        "cancelLabel": "キャンセル",
        "fromLabel": "From",
        "toLabel": "To",
		"autoUpdateInput": true,
        "customRangeLabel": "Custom",
        "daysOfWeek": [
            "Su",
            "Mo",
            "Tu",
            "We",
            "Th",
            "Fr",
            "Sa"
        ],
        "monthNames": [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agusto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre"
        ],
        "firstDay": 1
    }
}, function(start, end, label) {
	 //$('.datechoosen').html("A new date range was chosen: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));	
});

