console.log('console from main.js file');

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

//const {app, BrowserWindow} = require('electron')

const path = require('path');
const url = require('url');

let wind;
let wind2;

function createWindow() {
     wind = new BrowserWindow({
          webPreferences: {
               nodeIntegration: true,
               contextIsolation: false,
               enableRemoteModule: true,
          },
     });
     wind2 = new BrowserWindow({
          webPreferences: {
               nodeIntegration: true,
               contextIsolation: false,
               enableRemoteModule: true,
          },
          height: 150,
          width5: 300,
          frame: false,
     });
     wind.loadURL(url.format(
          {
               pathname: path.join(__dirname, 'index.html'),
               protocol: 'file',
               slashes: true,
          }
     ));

     wind2.loadURL(url.format(
          {
               pathname: path.join(__dirname, 'indextwo.html'),
               protocol: 'file',
               slashes: true,
          }
     ));

     //to have an access of dev tools

     wind.webContents.openDevTools();
    // wind2.webContents.openDevTools();

     wind.on('closed', () => {
          wind = null;
     });

     wind2.on('closed', () => {
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

app.on('activate', () => {
     if (wind2 === null) {
          createWindow();
     }
});