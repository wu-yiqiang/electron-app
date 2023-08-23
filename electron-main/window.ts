import { app, BrowserWindow, ipcMain, Menu, Tray, nativeImage } from 'electron'
import {tr} from "element-plus/es/locale";
import path from "path";
import {IWindowsCfg, IWindowOpt, IGroup} from '../type'

export const windowsCfg: IWindowsCfg = {
  id: 1126, //唯一id
  title: "local2Send", //窗口标题
  width: 400, //宽度
  height: 600, //高度
  minWidth: 400, //最小宽度
  minHeight: 600, //最小高度
  route: "", // 页面路由URL '/manage?id=123'
  resizable: true, //是否支持调整窗口大小
  maximize: false, //初始化是否最大化
  backgroundColor: "#eee", //窗口背景色
  data: null, //数据
  isMultiWindow: false, //是否支持多开窗口 (如果为false，当窗体存在，再次创建不会新建一个窗体 只focus显示即可，，如果为true，即使窗体存在，也可以新建一个)
  isMainWin: true, //是否主窗口(当为true时会替代当前主窗口)
  parentId: null, //父窗口id  创建父子窗口 -- 子窗口永远显示在父窗口顶部 【父窗口可以操作】
  modal: false, //模态窗口 -- 模态窗口是禁用父窗口的子窗口，创建模态窗口必须设置 parent 和 modal 选项 【父窗口不能操作】
};

/**
 * 窗口配置
 */
export class Window {
  main: BrowserWindow | null | undefined;
  group: IGroup;
  tray: Tray | null;

  constructor() {
    this.main = null; //当前页
    this.group = {}; //窗口组
    this.tray = null; //托盘
  }

  // 窗口配置
  winOpts(wh: Array<number> = []): IWindowOpt {
    return {
      width: wh[0],
      height: wh[1],
      icon: nativeImage.createFromPath('../src/assets/local2send.png'),
      backgroundColor: '#f7f8fc',
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
        contextIsolation: false, //上下文隔离
        nodeIntegration: true, //启用Node集成（是否完整的支持 node）
        webSecurity: false
        // preload: path.join(__dirname, "../../electron-preload/index.ts"),
      }
    }
  }

  // 获取窗口
  getWindow(id: number): any {
    return BrowserWindow.fromId(id);
  }

  // 创建窗口
  createWindows(options: object) {
    console.log("------------开始创建窗口...");
    let args = Object.assign({}, windowsCfg, options);
    // 判断窗口是否存在
    for (let i in this.group) {
      if (
        this.getWindow(Number(i)) &&
        this.group[i].route === args.route &&
        !this.group[i].isMultiWindow
      ) {
        console.log("窗口已经存在了");
        this.getWindow(Number(i)).focus();
        return;
      }
    }
    // 创建electron窗口的配置参数
    let opt = this.winOpts([args.width || 400, args.height || 600]);

    // 判断是否有父窗口
    if (args.parentId) {
      console.log("parentId：" + args.parentId);
      opt.parent = this.getWindow(args.parentId) as BrowserWindow; // 获取主窗口
    } else if (this.main) {
      console.log(666);
    }

    opt.modal = args.modal;
    opt.resizable = args.resizable; // 窗口是否可缩放
    if (args.backgroundColor) opt.backgroundColor = args.backgroundColor; // 窗口背景色
    if (args.minWidth) opt.minWidth = args.minWidth;
    if (args.minHeight) opt.minHeight = args.minHeight;
    let win = new BrowserWindow(opt);
    console.log("窗口id：" + win);
    this.group[win.id] = {
      route: args.route,
      isMultiWindow: args.isMultiWindow,
    };
    console.log("this.group", this.group);
    // 是否最大化
    if (args.maximize && args.resizable) {
      win.maximize();
    }
    // 是否主窗口
    if (args.isMainWin) {
      if (this.main) {
        console.log("主窗口存在");
        delete this.group[this.main.id];
        this.main.close();
      }
      this.main = win;
    }
    args.id = win.id;
    win.on("close", () => win.setOpacity(0));

    // 打开网址（加载页面）
    let winURL;
    if (app.isPackaged) {
      winURL = args.route
        ? `app://./index.html${args.route}`
        : `app://./index.html`;
    } else {
      winURL = args.route
        ? `http://${process.env["VITE_DEV_SERVER_HOST"]}:${process.env["VITE_DEV_SERVER_PORT"]}${args.route}?winId=${args.id}`
        : `http://${process.env["VITE_DEV_SERVER_HOST"]}:${process.env["VITE_DEV_SERVER_PORT"]}?winId=${args.id}`;
    }
    console.log("新窗口地址:", winURL);
    win.loadURL(winURL);
    // 打开dev-tools
    win.webContents.openDevTools({mode: 'bottom'})
    win.once("ready-to-show", () => {
      win.show();
    });
  }

  // Tray
  createTray() {
    console.log('创建托盘')
    const contextMenu = Menu.buildFromTemplate([
      {
        label: '注销',
        click: () => {
          console.log('注销')
          // 主进程发送消息，通知渲染进程注销当前登录用户 --todo
        }
      },
      {
        type: 'separator' // 分割线
      },
      // 菜单项
      {
        label: '退出',
        role: 'quit' // 使用内置的菜单行为，就不需要再指定click事件
      }
    ])
    // 图标
    const icon = nativeImage.createFromPath('../src/assets/local2send.png')
    this.tray = new Tray(icon)
    this.tray.setToolTip('小猪课堂')
    // 显示未读消息数
    this.tray.setTitle('99')
    // 点击托盘显示窗口
    this.tray.on('click', () => {
      for (let i in this.group) {
        if (this.group[i]) this.getWindow(Number(i)).show()
      }
    })
    // 处理右键
    this.tray.on('right-click', () => {
      this.tray?.popUpContextMenu(contextMenu)
    })
  }


  // Menu
  createMenu() {
    const menuTemplate = [
      {
        label: 'Edit App',
        submenu: [
          {
            label: 'Undo'
          },
          {
            label: 'Redo'
          }
        ]
      },
      {
        label: 'View App',
        submenu: [
          {
            label: 'Reload'
          },
          {
            label: 'Toggle Full Screen'
          }
        ]
      },
      {
        label: 'about',
        submenu: [
          {
            label: 'update'
          },
          {
            label: 'about'
          }
        ]
      }
    ]
    const appMenu = Menu.buildFromTemplate(menuTemplate)
    Menu.setApplicationMenu(appMenu)
  }
  // Dock
  createDock() {}
  // 开启监听
  listen() {
    // 固定
    ipcMain.on('pinUp', (event: Event, winId) => {
      event.preventDefault()
      if (winId && (this.main as BrowserWindow).id == winId) {
        let win: BrowserWindow = this.getWindow(Number((this.main as BrowserWindow).id))
        if (win.isAlwaysOnTop()) {
          win.setAlwaysOnTop(false) // 取消置顶
        } else {
          win.setAlwaysOnTop(true) // 置顶
        }
      }
    })

    // 隐藏
    ipcMain.on('window-hide', (event, winId) => {
      if (winId) {
        this.getWindow(Number(winId)).hide()
      } else {
        for (let i in this.group) {
          if (this.group[i]) this.getWindow(Number(i)).hide()
        }
      }
    })

    // 显示
    ipcMain.on('window-show', (event, winId) => {
      if (winId) {
        this.getWindow(Number(winId)).show()
      } else {
        for (let i in this.group) {
          if (this.group[i]) this.getWindow(Number(i)).show()
        }
      }
    })

    // 最小化
    ipcMain.on('mini', (event: Event, winId) => {
      console.log('最小化窗口id', winId)
      if (winId) {
        this.getWindow(Number(winId)).minimize()
      } else {
        for (let i in this.group) {
          if (this.group[i]) {
            this.getWindow(Number(i)).minimize()
          }
        }
      }
    })

    // 最大化
    ipcMain.on('window-max', (event, winId) => {
      if (winId) {
        this.getWindow(Number(winId)).maximize()
      } else {
        for (let i in this.group) if (this.group[i]) this.getWindow(Number(i)).maximize()
      }
    })

    // 创建窗口
    ipcMain.on('window-new', (event: Event, args) => this.createWindows(args))

    // 窗口大小改变重新渲染
    // ipcMain.on('resizeEvent', (event: Event, args) => {
    //   resizeEvent(args)
    // })
  }
}