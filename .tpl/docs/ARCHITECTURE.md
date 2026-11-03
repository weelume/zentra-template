# 架构

应用为 React + Next.js + TypeScript，采用 feature-based 结构，模板入口位于 src/features/site-templates/catalog/zentra。

config.ts 集中品牌与素材路径，content/data.ts 为双语集合，content/reference.json 为逐页正文，theme.css 为作用域主题与响应式样式。components/ 包含外壳、导航、页脚、语言上下文、分字动画、计数、FAQ、列表和图库。pages/ 按页面职责组合区块，meta.ts 注册页面。

host.tsx 定义可选消费方身份边界，独立工程默认自身品牌。src/app/[[...slug]]/page.tsx 为独立运行路由；未知页面返回真实 404。routing.ts 保留语言切换的深层路径、查询和锚点。没有后端层或外部数据服务。

图库通用实现位于 components/Gallery.tsx，由 Sections.tsx 重导出；手势层与内容分页层分开维护。
