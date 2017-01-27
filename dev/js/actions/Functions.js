export function getWeek(date) {
  var d = new Date(date);
  d.setHours(0,0,0,0);
  d.setDate(d.getDate()+4-(d.getDay()||7));
  return Math.ceil((((d-new Date(d.getFullYear(),0,1))/8.64e7)+1)/7);
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
export function getAppSettings(pathname){
  let settings = {};
  switch (pathname) {
    case "dashboard":
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
      settings = {"header":"Create", "hasTabs":false, "searchBtn": false}
      break;
    case "attendance":
      settings = {"header":"Attendance", "hasTabs":false, "searchBtn": false}
      break;
    case "classes":
      settings = {"header":"Classes", "hasTabs":false, "searchBtn": false}
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
        settings = {"header":"Files", "hasTabs":false, "searchBtn": false}
      }else if(/^testview(\/.+|)/.test(pathname)){
        settings = {"header":"Test", "hasTabs":true, "searchBtn": false}
      }else if(/^test(\/.+|)/.test(pathname)){
        settings = {"header":"Test", "hasTabs":true, "searchBtn": false}
      }else if(/^survey(\/.+|)/.test(pathname)){
        settings = {"header":"Survey", "hasTabs":true, "searchBtn": false}
      }
  }
  return settings;
}
