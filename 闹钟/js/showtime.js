showtime();

function checktime(i) {
	if(i < 10) {
		i = "0" + i;
	}
	return i;
}

function showtime() {
	var myDate = new Date();
	var year = myDate.getFullYear();
	var month = myDate.getMonth() + 1;
	var date1 = myDate.getDate();
	var day = myDate.getDay();
	var weekends = new Array();
	weekends[1] = "星期一";
	weekends[2] = "星期二";
	weekends[3] = "星期三";
	weekends[4] = "星期四";
	weekends[5] = "星期五";
	weekends[6] = "星期六";
	weekends[0] = "星期天";
	var h = myDate.getHours();
	var m = myDate.getMinutes();
	var s = myDate.getSeconds();
	m = checktime(m);
	s = checktime(s);
	document.querySelector("div").innerHTML = year + "年" + month + "月" + date1 + "日" + weekends[day] + h + ":" + m + ":" + s;
	setTimeout(showtime, 1000);
}