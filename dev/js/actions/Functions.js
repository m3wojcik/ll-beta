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
