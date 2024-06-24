
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const contextMenu = require('electron-context-menu');

let mainWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  contextMenu({
    showSearchWithGoogle: false,
    showLookUpSelection: false,
  });

  mainWindow.loadFile('index.html');
}

app.on('ready', createMainWindow);

ipcMain.on('open-new-window', () => {
  let newWindow = new BrowserWindow({
    width: 400,
    height: 300,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  newWindow.loadFile('newWindow.html');
});
