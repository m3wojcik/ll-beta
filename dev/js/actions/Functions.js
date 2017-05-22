export function getWeek(date) {
  var d = new Date(date);
  d.setHours(0,0,0,0);
  d.setDate(d.getDate()+4-(d.getDay()||7));
  console.log('getWeek',d);
  return Math.ceil((((d-new Date(d.getFullYear(),0,1))/8.64e7)+1)/7);
}
export function getDay(date) {
  var d = new Date(date);
  var day = d.getDay();
  if(day == 0) day = 6
  else day = day -1
  return day
}
export function getShortDayName(date) {
  const d = new Date(date);
  const day = d.getDay();
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return days[day]
}
export function getDayName(date) {
  const d = new Date(date);
  const day = d.getDay();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[day]
}
export function isToday(date) {
  var d = new Date(date).setHours(0,0,0,0);
  var today = new Date().setHours(0,0,0,0);
  if(d==today) return true
  return false
}
export function isDateLowerThanToday(date) {
  var d = new Date(date).setHours(0,0,0,0);
  var today = new Date().setHours(0,0,0,0);
  if(d < today) return true
  return false
}
export function getDaysDiference(date1, date2) {
  var d1 = new Date(date1);
  var d2 = new Date(date2);
  const oneDay = 1000*60*60*24;
  const timeZoneOffset = new Date(d1).getTimezoneOffset() * 60 *1000;
  d1.setHours(0,0,0,0);
  d2.setHours(0,0,0,0);
  return Math.floor((d2-d1 - timeZoneOffset)/oneDay);
}
export function getParamFromPath(path){
  return path.replace(/^(\/|)[^\/]+(\/(.+)|)/, "$3");
}
export function getCleanPath(path){
  return path.replace(/^\/|\/$/g, '');
}
export function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
export function getDays(date) {
  const oneDay = 1000*60*60*24;
  const timeZoneOffset = new Date(date).getTimezoneOffset() * 60 *1000;
  return Math.floor((new Date(date).getTime() - timeZoneOffset)/oneDay);
}
export function getShortMonth(montNumber) {
  var monthNames = [
       "Jan", "Feb", "Mar",
       "Apr", "May", "June", "July",
       "Aug", "Sep", "Oct",
       "Nov", "Dec"
     ];
     return monthNames[montNumber];
}
export function compareDates(date1, date2, precision) {
    const d1 = new Date(date1).getTime();
    const d2 = new Date(date2).getTime();
    let result = d2 - d1;
    if(precision == "d"){
      result = result /(1000*60*60*24);
    }else if(precision == "h"){
      result = result /(1000*60*60);
    }else if(precision == "m"){
      result = result /(1000*60);
    }else if(precision == "s"){
      result = result /(1000);
    }
    return Math.floor(result);
}
export function getAppSettings(pathname){
  let settings = {};
  console.log('path',pathname);
  switch (pathname) {
    case "":
      settings = {"header":"Dashboard", "hasTabs":false, "searchBtn": false}
      break;
    case "profile/view":
      settings = {"header":"Profile", "hasTabs":false, "searchBtn": false}
      break;
    case "profile/edit":
      settings = {"header":"Edit profile", "hasTabs":false, "searchBtn": false}
      break;
    case "profile/changePassword":
      settings = {"header":"Change password", "hasTabs":false, "searchBtn": false}
      break;
    case "profile/loginHistory":
      settings = {"header":"Login history", "hasTabs":false, "searchBtn": false}
      break;
    case "inbox":
      settings = {"header":"Inbox", "hasTabs":true, "searchBtn": true}
      break;
    case "createmessage":
      settings = {"header":"Create", "hasTabs":false, "searchBtn": false, backBtn: true, backPath: "inbox" }
      break;
    case "attendance":
      settings = {"header":"Attendance", "hasTabs":false, "searchBtn": false}
      break;
    case "classes":
      settings = {"hasTabs":false, "searchBtn": false}
      break;
    case "marks":
      settings = {"header":"Marks", "hasTabs":false, "searchBtn": false}
      break;
    case "tests":
      settings = {"header":"Tests", "hasTabs":false, "searchBtn": true}
      break;
    case "elibrary/list":
      settings = {"header":"E-library", "hasTabs":false, "searchBtn": true}
      break;
    case "elibrary/reserved":
      settings = {"header":"Reserved", "hasTabs":false, "searchBtn": false}
      break;
    case "surveys":
      settings = {"header":"Surveys", "hasTabs":false, "searchBtn": true}
      break;
    case "payments":
      settings = {"header":"Payments", "hasTabs":false, "searchBtn": false}
      break;
    default:
      if(/^files(\/.+|)/.test(pathname)){
        settings = {"header":"Files", "hasTabs":false, "searchBtn": true}
      }else if(/^testview(\/.+|)/.test(pathname)){
        settings = {"header":"Test", "hasTabs":true, "searchBtn": false}
      }else if(/^test(\/.+|)/.test(pathname)){
        settings = {"header":"Test", "hasTabs":true, "searchBtn": false}
      }else if(/^survey(\/.+|)/.test(pathname)){
        settings = {"header":"Survey", "hasTabs":true, "searchBtn": false}
      }else if(/^classDetails(\/.+|)/.test(pathname)){
        settings = {"hasTabs":false, "searchBtn": false, backBtn: true, backPath: "classes"}
      }
  }
  return settings;
}
