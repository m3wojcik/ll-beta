import {toolbarHeaders} from "./config"

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
export function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes*60000);
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
export function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}
export function humanFileSize(size) {
    var i = Math.floor( Math.log(size) / Math.log(1024) );
    return ( size / Math.pow(1024, i) ).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
};
export function getAppSettings(pathname){
  let settings = {};
  switch (pathname) {
    case "":
      settings = {header: toolbarHeaders.dashobard}
      break;
    case "profile/view":
      settings = {header: toolbarHeaders.profile}
      break;
    case "profile/edit":
      settings = {header:toolbarHeaders.editProfile}
      break;
    case "profile/changePassword":
      settings = {header: toolbarHeaders.changePassword}
      break;
    case "profile/loginHistory":
      settings = {header: toolbarHeaders.loginHistory}
      break;
    case "inbox":
      settings = {header: toolbarHeaders.inbox, hasTabs:true, searchBtn: true}
      break;
    case "sent":
      settings = {header:toolbarHeaders.sent, hasTabs:true, searchBtn: true}
      break;
    case "trash":
      settings = {header: toolbarHeaders.trash, hasTabs:true, searchBtn: true}
      break;
    case "createmessage":
      settings = {header: toolbarHeaders.createMessage, backBtn: true, backPath: "inbox"}
      break;
    case "attendance":
      settings = {header: toolbarHeaders.attendance}
      break;
    case "classes":
      settings = {header: toolbarHeaders.classes, hasTabs: true}
      break;
    case "marks":
      settings = {header: toolbarHeaders.marks}
      break;
    case "tests":
      settings = {header: toolbarHeaders.tests, hasTabs:false, searchBtn: true}
      break;
    case "elibrary/list":
      settings = {header: toolbarHeaders.elibrary, searchBtn: true}
      break;
    case "surveys":
      settings = {header:toolbarHeaders.surveys, searchBtn: true}
      break;
    case "payments":
      settings = {header:toolbarHeaders.payments}
      break;
    default:
      if(/^files(\/.+|)/.test(pathname)){
        settings = {header: toolbarHeaders.files, searchBtn: true}
      }else if(/^testview(\/.+|)/.test(pathname)){
        settings = {header:toolbarHeaders.test, hasTabs:true, backBtn: true, backPath: "tests" }
      }else if(/^test(\/.+|)/.test(pathname)){
        settings = {header:toolbarHeaders.test, hasTabs:true, backBtn: true, backPath: "tests" }
      }else if(/^survey(\/.+|)/.test(pathname)){
        settings = {header: toolbarHeaders.survey, hasTabs:true}
      }else if(/^classDetails(\/.+|)/.test(pathname)){
        settings = {hasTabs:false, backBtn: true, backPath: "classes"}
      }else if(/^message(\/.+|)/.test(pathname)){
        settings = {header:toolbarHeaders.message, backBtn: true, backPath: "inbox"}
      }
  }
  return settings;
}
