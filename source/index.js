const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let window;

function CreateWindow() {
  window = new BrowserWindow({
    title: 'Windows Utility Tool',
    width: 800,
    height: 600,
    setMenuBarVisibility: false,
    autoHideMenuBar: true,
    frame: false,
    transparent: true,
    resizable: false,

    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      contextIsolation: false,
      // devTools: false,
    },
  });
  window.setIcon(path.join(__dirname, '/images/icons8-tools-48.png'));
  // window.setMenu(null);

  window.loadFile(path.join(__dirname, '/html/index.html'));

  window.on('closed', () => {
    window = null;
  });
}

app.on('ready', CreateWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

ipcMain.on('Exit', () => {
  app.quit();
});

ipcMain.on('Hide', () => {
  window.minimize();
});

ipcMain.on('Drives', () => {
  window.loadFile(path.join(__dirname, '/html/drives.html'));
});

ipcMain.on('CleanTemp', () => {
  window.loadFile(path.join(__dirname, '/html/temp.html'));
});

ipcMain.on('Back', () => {
  if (!window.webContents.canGoBack()) return;

  window.webContents.goBack();
});
