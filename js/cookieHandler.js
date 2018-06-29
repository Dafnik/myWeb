function setCookie(cname,cvalue,exdays) {
  let d = new Date();
  d.setTime(d.getTime() + (exdays*365*24*60*60*1000));
  //toGTMString exists
  let expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie(value) {
  return (value !== "");
}

function deleteCookie(cname) {
  document.cookie = cname+ "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}