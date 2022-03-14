export function formatDateTime(dt) {
  const year = dt.getFullYear();
  const month = dt.getMonth() + 1;
  const day = dt.getDate();
  const hours = dt.getHours();
  const minutes = dt.getMinutes();
  const seconds = dt.getSeconds();
  return (
    str0l(day, 2) +
    "." +
    str0l(month, 2) +
    "." +
    year +
    " " +
    str0l(hours, 2) +
    ":" +
    str0l(minutes, 2) +
    ":" +
    str0l(seconds, 2)
  );
}

function str0l(val, len) {
  let strVal = val.toString();
  while (strVal.length < len) strVal = "0" + strVal;
  return strVal;
}
