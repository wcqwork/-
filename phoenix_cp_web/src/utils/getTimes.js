export function getTimes(data) {
    let start = new Date(),
        end = new Date();
    let nowMonth = start.getMonth(); //当前月
    let nowYear = start.getFullYear(); //当前年
    let jd = Math.ceil((nowMonth + 1) / 3);
    switch (data) {
        case "今天":
            break;
        case "昨天":
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 1);
            end = start;
            break;
        case "本周":
            var thisDay = start.getDay() - 1;
            var thisDate = start.getDate();
            if (thisDay != 0) {
                start.setDate(thisDate - thisDay);
            }
            break;
        case "过去7天":
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            break;
        case "本月":
            end = getCurrentMonthLast();
            start = getCurrentMonthFirst();
            break;
        case "过去30天":
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            break;
        case "本季度":
            start = new Date(nowYear, (jd - 1) * 3, 1);
            end = new Date(nowYear, jd * 3, 0);
            break;
        case "上周":
            var oDate = new Date();
            oDate.setTime(oDate.getTime() - 3600 * 1000 * 24 * 7);
            var day = oDate.getDay() - 1;
            if (day == 0) {
                start.setDate(oDate.getDate());
                end.setDate(oDate.getDate() + 6);
            } else {
                start.setTime(oDate.getTime() - 3600 * 1000 * 24 * day);
                end.setTime(oDate.getTime() + 3600 * 1000 * 24 * (6 - day));
            }
            break;
        case "上个月":
            end = gettimeEnd();
            start = gettimeStart();
            break;
    }
    return [start, end];
}
//获取当前月第一天
function getCurrentMonthFirst() {
    var date = new Date();
    date.setDate(1);
    return date;
}
// 获取当前月的最后一天
function getCurrentMonthLast() {
    var date = new Date();
    var currentMonth = date.getMonth();
    var nextMonth = ++currentMonth;
    var nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1);
    var oneDay = 1000 * 60 * 60 * 24;
    return new Date(nextMonthFirstDay - oneDay);
}

function gettimeStart() {
    const nowdays = new Date();
    let year = nowdays.getFullYear();
    let month = nowdays.getMonth();
    if (month === 0) {
        month = 12;
        year = year - 1;
    }
    if (month < 10) {
        month = "0" + month;
    }
    let firstDayOfPreMonth = year + "-" + month + "-" + "01";
    firstDayOfPreMonth = firstDayOfPreMonth.toString();
    return new Date(firstDayOfPreMonth);
}

function gettimeEnd() {
    const nowdays = new Date();
    let year = nowdays.getFullYear();
    let month = nowdays.getMonth();
    if (month === 0) {
        month = 12;
        year = year - 1;
    }
    if (month < 10) {
        month = "0" + month;
    }
    const lastDay = new Date(year, month, 0);
    let lastDayOfPreMonth = year + "-" + month + "-" + lastDay.getDate();
    lastDayOfPreMonth = lastDayOfPreMonth.toString();
    return new Date(lastDayOfPreMonth);
}

//输入时间获取第几周
// let date = new Date("2022-04-13");  //传参
// getWeekInYear(date)
export function getWeekInYear(date) {
    //判断该星期是否跨年，如果跨年就是第一周
    let weekStartDate = getWeekStartByDate(date); //一周开始时间
    let endDate = getDateFromDay(weekStartDate, 6); //一周结束时间
    if (weekStartDate.getFullYear() != endDate.getFullYear()) {
        let num = 1;
        return num;
    }
    let d1 = new Date(date);
    let d2 = new Date(date);
    d2.setMonth(0);
    d2.setDate(1);
    d2 = getWeekStartByDate(d2);
    let rq = d1 - d2;
    let days = Math.ceil(rq / (24 * 60 * 60 * 1000)) + 1;
    let num = Math.ceil(days / 7);
    // console.log(endDate.getFullYear() + "年第" + num + "周");
    return { num: num, year: endDate.getFullYear() };
}

function getWeekStartByDate(date) {
    let day = date.getDay();
    return getDateFromDay(date, -day);
}

function getDateFromDay(dayDate, day) {
    let date = new Date();
    date.setTime(dayDate.getTime() + day * 24 * 60 * 60 * 1000);
    return date;
}