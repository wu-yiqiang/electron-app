export interface RouterModel {
  path: string
  name: string
  meta: MetaModel
  component: Function
}
export interface MetaModel {
  title: string
  icon: string
  keepAlive: boolean
  requireAuth: boolean
  TabbarShow: boolean
}