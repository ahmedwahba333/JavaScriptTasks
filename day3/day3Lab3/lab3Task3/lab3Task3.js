var windowOpen;
var id;
function openWindow() {
  setTimeout(() => {
    windowOpen = window.open("", "", "height=600,width=800");
    windowOpen.moveTo("500", "200");
    var myParag = "hello i'm ahmed mostafa fullstack-developer";
    var myArrParag = myParag.split("");
    var i = 0;
    id = setInterval(() => {
      windowOpen.document.write(myArrParag[i]);
      i++;
      if (i > myArrParag.length - 1) {
        clearInterval(id);
      }
    }, 1000);
  }, 3000);
}

function closeWindow() {
  windowOpen.close();
  clearInterval(id);
}
