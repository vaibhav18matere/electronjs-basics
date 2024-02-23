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