"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var electron = require("electron");
var path = require("path");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var path__default = /* @__PURE__ */ _interopDefaultLegacy(path);
const windowsCfg = {
  id: null,
  title: "",
  width: null,
  height: null,
  minWidth: 750,
  minHeight: 750,
  route: "",
  resizable: true,
  maximize: false,
  backgroundColor: "#eee",
  data: null,
  isMultiWindow: false,
  isMainWin: false,
  parentId: null,
  modal: false
};
class Window {
  constructor() {
    __publicField(this, "main");
    __publicField(this, "group");
    __publicField(this, "tray");
    this.main = null;
    this.group = {};
    this.tray = null;
  }
  winOpts(wh = []) {
    return {
      width: wh[0],
      height: wh[1],
      backgroundColor: "#f7f8fc",
      autoHideMenuBar: true,
      resizable: true,
      minimizable: true,
      maximizable: true,
      frame: true,
      show: false,
      minWidth: 0,
      minHeight: 0,
      modal: true,
      webPreferences: {
        contextIsolation: false,
        nodeIntegration: true,
        webSecurity: false,
        preload: path__default["default"].join(__dirname, "../electron-preload/index.js")
      }
    };
  }
  getWindow(id) {
    return electron.BrowserWindow.fromId(id);
  }
  createWindows(options) {
    console.log("------------\u5F00\u59CB\u521B\u5EFA\u7A97\u53E3...");
    let args = Object.assign({}, windowsCfg, options);
    console.log("args", args);
    for (let i in this.group) {
      if (this.getWindow(Number(i)) && this.group[i].route === args.route && !this.group[i].isMultiWindow) {
        console.log("\u7A97\u53E3\u5DF2\u7ECF\u5B58\u5728\u4E86");
        this.getWindow(Number(i)).focus();
        return;
      }
    }
    let opt = this.winOpts([args.width || 390, args.height || 590]);
    console.log("\u521B\u5EFA\u7A97\u53E3\u7684\u914D\u7F6E\u53C2\u6570", opt);
    if (args.parentId) {
      console.log("parentId\uFF1A" + args.parentId);
      opt.parent = this.getWindow(args.parentId);
    } else if (this.main) {
      console.log(666);
    }
    opt.modal = args.modal;
    opt.resizable = args.resizable;
    if (args.backgroundColor)
      opt.backgroundColor = args.backgroundColor;
    if (args.minWidth)
      opt.minWidth = args.minWidth;
    if (args.minHeight)
      opt.minHeight = args.minHeight;
    console.log("opt", opt);
    let win = new electron.BrowserWindow(opt);
    console.log("\u7A97\u53E3id\uFF1A" + win);
    this.group[win.id] = {
      route: args.route,
      isMultiWindow: args.isMultiWindow
    };
    console.log("this.group", this.group);
    if (args.maximize && args.resizable) {
      win.maximize();
    }
    if (args.isMainWin) {
      if (this.main) {
        console.log("\u4E3B\u7A97\u53E3\u5B58\u5728");
        delete this.group[this.main.id];
        this.main.close();
      }
      this.main = win;
    }
    args.id = win.id;
    win.on("close", () => win.setOpacity(0));
    let winURL;
    if (electron.app.isPackaged) {
      winURL = args.route ? `app://./index.html${args.route}` : `app://./index.html`;
    } else {
      winURL = args.route ? `http://${process.env["VITE_DEV_SERVER_HOST"]}:${process.env["VITE_DEV_SERVER_PORT"]}${args.route}?winId=${args.id}` : `http://${process.env["VITE_DEV_SERVER_HOST"]}:${process.env["VITE_DEV_SERVER_PORT"]}?winId=${args.id}`;
    }
    console.log("\u65B0\u7A97\u53E3\u5730\u5740:", winURL);
    win.loadURL(winURL);
    win.webContents.openDevTools({ mode: "bottom" });
    win.once("ready-to-show", () => {
      win.show();
    });
  }
  createTray() {
    console.log("\u521B\u5EFA\u6258\u76D8");
    const contextMenu = electron.Menu.buildFromTemplate([
      {
        label: "\u6CE8\u9500",
        click: () => {
          console.log("\u6CE8\u9500");
        }
      },
      {
        type: "separator"
      },
      {
        label: "\u9000\u51FA",
        role: "quit"
      }
    ]);
    this.tray = new electron.Tray(path__default["default"].join(__dirname, "../favicon.ico"));
    this.tray.on("click", () => {
      for (let i in this.group) {
        if (this.group[i])
          this.getWindow(Number(i)).show();
      }
    });
    this.tray.on("right-click", () => {
      var _a;
      (_a = this.tray) == null ? void 0 : _a.popUpContextMenu(contextMenu);
    });
    this.tray.setToolTip("\u5C0F\u732A\u8BFE\u5802");
  }
  listen() {
    electron.ipcMain.on("pinUp", (event, winId) => {
      event.preventDefault();
      if (winId && this.main.id == winId) {
        let win = this.getWindow(Number(this.main.id));
        if (win.isAlwaysOnTop()) {
          win.setAlwaysOnTop(false);
        } else {
          win.setAlwaysOnTop(true);
        }
      }
    });
    electron.ipcMain.on("window-hide", (event, winId) => {
      if (winId) {
        this.getWindow(Number(winId)).hide();
      } else {
        for (let i in this.group) {
          if (this.group[i])
            this.getWindow(Number(i)).hide();
        }
      }
    });
    electron.ipcMain.on("window-show", (event, winId) => {
      if (winId) {
        this.getWindow(Number(winId)).show();
      } else {
        for (let i in this.group) {
          if (this.group[i])
            this.getWindow(Number(i)).show();
        }
      }
    });
    electron.ipcMain.on("mini", (event, winId) => {
      console.log("\u6700\u5C0F\u5316\u7A97\u53E3id", winId);
      if (winId) {
        this.getWindow(Number(winId)).minimize();
      } else {
        for (let i in this.group) {
          if (this.group[i]) {
            this.getWindow(Number(i)).minimize();
          }
        }
      }
    });
    electron.ipcMain.on("window-max", (event, winId) => {
      if (winId) {
        this.getWindow(Number(winId)).maximize();
      } else {
        for (let i in this.group)
          if (this.group[i])
            this.getWindow(Number(i)).maximize();
      }
    });
    electron.ipcMain.on("window-new", (event, args) => this.createWindows(args));
    electron.ipcMain.on("resizeEvent", (event, args) => {
      resizeEvent(args);
    });
  }
}
async function createWindow() {
  let window = new Window();
  window.listen();
  window.createWindows({ isMainWin: true });
  window.createTray();
}
electron.app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    electron.app.quit();
  }
});
electron.app.on("activate", () => {
  if (electron.BrowserWindow.getAllWindows().length === 0)
    createWindow();
});
electron.app.on("ready", async () => {
  createWindow();
});
{
  if (process.platform === "win32") {
    process.on("message", (data) => {
      if (data === "graceful-exit") {
        electron.app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      electron.app.quit();
    });
  }
}
