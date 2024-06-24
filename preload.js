
window.addEventListener('DOMContentLoaded', () => {
  const { ipcRenderer } = require('electron');
  document.getElementById('new-window-button').addEventListener('click', () => {
    ipcRenderer.send('open-new-window');
  });
});
