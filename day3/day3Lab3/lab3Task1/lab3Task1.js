var windowOpen;
function show() {
  windowOpen = window.open(
    "https://www.google.com/",
    "google",
    "height=600,width=800"
  );
  windowOpen.moveTo("500", "200");
}

document.getElementById("openBtn").addEventListener("click", show);

function closeWin() {
  windowOpen.close();
}
