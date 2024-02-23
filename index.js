console.log('console from index.js - rendered processs 1');

const newWindowBtn = document.getElementById('newBrowserWindBtn');

const electron = require('electron');
const BrowserWindow = electron.remote.BrowserWindow;

const path = require('path');
const url = require('url');

newWindowBtn.addEventListener('click', function (event) {
     console.log('open a new window');
     let winThree = new BrowserWindow({
          webPreferences: {
               nodeIntegration: true,
               contextIsolation: false,
               enableRemoteModule: true,
          },
     });
     winThree.loadURL(url.format({
          pathname: path.join(__dirname, '/indexthree.html'),
          protocol: 'file',
          slashes: true,
     }));

     winThree.webContents.openDevTools();
})