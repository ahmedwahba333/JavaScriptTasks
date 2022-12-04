var myWindow = window.open("", "", "width= 500,height=500");
myWindow.moveTo(400, 400);
myWindow.document.write("typing message");
setTimeout(() => {
  myWindow.close();
}, 3000);
