var today = new Date();
$("#startDate").datepicker("setDate", today.getMonth() + '/' + today.getDate() + '/' + today.getFullYear());
$("#endDate").datepicker("setDate", new Date());