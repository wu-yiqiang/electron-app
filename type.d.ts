declare module '@*'
import { BrowserWindow } from 'electron'
interface IWindowsCfg {
  id: number | null
  title: string
  width: number | null
  height: number | null
  minWidth: number | null
  minHeight: number | null
  route: string
  resizable: boolean
  maximize: boolean
  backgroundColor: string
  data: object | null
  isMultiWindow: boolean
  isMainWin: boolean
  parentId: number | null
  modal: boolean
}

interface IWindowOpt {
  width: number
  height: number
  icon: NativeImage
  backgroundColor: string
  autoHideMenuBar: boolean
  resizable: boolean
  minimizable: boolean
  maximizable: boolean
  frame: boolean
  show: boolean
  parent?: BrowserWindow
  minWidth: number
  minHeight: number
  modal: boolean
  webPreferences: {
    contextIsolation: boolean //上下文隔离
    nodeIntegration: boolean //启用Node集成（是否完整的支持 node）
    webSecurity: boolean
    // preload: string
  }
}

// 窗口组
interface IGroup {
  [props: string]: {
    route: string;
    isMultiWindow: boolean;
  };
}
