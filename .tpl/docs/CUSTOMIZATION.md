# 修改指南

品牌、联系方式和标语：src/features/site-templates/catalog/zentra/config.ts。集合、服务、作品、团队和 FAQ：content/data.ts；详情正文：content/reference.json，中英一起修改。

主题颜色、字体、间距、卡片玻璃效果和滚动条：theme.css；仅在 .zentra 下生效。首屏与不同区块的动画：components/Motion.tsx 与 pages/Home.tsx。图库、FAQ 和加载更多：components/Sections.tsx。

新增页面需要建立页面模块并更新 meta.ts 与 template.json 的 surfaces.pages。替换图片时同时更新来源、许可及 SHA256 记录。修改布局后重新拍摄真实三端展示截图，记录实际解码尺寸。
