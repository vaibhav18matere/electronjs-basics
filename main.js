console.log('starting...electron app');

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');

let wind;

function createWindow() {
     wind = new BrowserWindow();
     wind.loadURL(url.format(
          {
               pathname: path.join(__dirname, 'index.html'),
               protocol: 'file',
               slashes: true,
          }
     ));

     wind.on('closed', () => {
          wind = null;
     });
}

app.on('ready', createWindow);

// if all browser windows are closed 
// we need to explicitely force closed the application.

app.on('window-all-closed', () => {
     if (process.platform !== 'darwin') {
          app.quit();
     }
});

// on mac, if there are no windows open and we click
// on dock icon then we have to create window again

app.on('activate', () => {
     if (wind === null) {
          createWindow();
     }
});