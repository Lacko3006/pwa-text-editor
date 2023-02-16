const butInstall = document.getElementById("buttonInstall");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  butInstall.addEventListener("click", async () => {
    event.prompt();
  });
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  butInstall.textContent = "Successfully installed!";
  console.log("clicked")
});