let update = document.querySelector("#update-time");
update.textContent = new Date(document.lastModified).toUTCString();