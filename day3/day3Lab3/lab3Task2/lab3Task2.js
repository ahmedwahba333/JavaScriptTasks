var myHeading = document.getElementById("myHeading");

function myTime() {
  var myDate = new Date();
  myHeading.innerHTML = myDate.toLocaleTimeString();
}
function clockStart() {
  window.alert("Clock Started");
  var myDate = new Date();
  myHeading.innerHTML = myDate.toLocaleTimeString();
  setInterval(myTime, 1000);
}
