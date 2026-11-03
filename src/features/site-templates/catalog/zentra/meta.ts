import type {SiteTemplate} from '../../types'
import {articles,services,works} from './content/data'
const serviceExports=['SEO','Branding','Social','Advertising'] as const
const workExports=['Astra','Nova','Celeste','Elysia','Serenva','Lunara','Aviqa','Aurielle'] as const
const articleExports=['Future','Clients','Grow','Build','Presence','Search','Simple','Audiences','Iconic','Omnichannel'] as const
export const zentraTemplate:SiteTemplate={
  id:'zentra',name:'Zentra · 数字营销',localizedNames:{en:'Zentra · Digital Marketing Agency'},gitUrl:'https://github.com/weelume/zentra-template',sceneId:'corporate-site',listed:false,
  tags:['数字营销','蓝白波浪','创意机构','分字动效','双语','PC / iPad / H5'],summary:'蓝白创意营销整站，含品牌服务、八组作品、十篇洞察、团队与联系演示。',accentColor:'#1769f1',cover:'/templates/zentra/screenshots/desktop-home.webp',
  screenshots:[{"src":"/templates/zentra/screenshots/desktop-home.webp","alt":"Zentra desktop home","device":"desktop","width":1430,"height":993},{"src":"/templates/zentra/screenshots/desktop-services.webp","alt":"Zentra desktop services","device":"desktop","width":1430,"height":993},{"src":"/templates/zentra/screenshots/desktop-blog.webp","alt":"Zentra desktop blog","device":"desktop","width":1430,"height":993},{"src":"/templates/zentra/screenshots/desktop-contact.webp","alt":"Zentra desktop contact","device":"desktop","width":1430,"height":993},{"src":"/templates/zentra/screenshots/tablet-home.webp","alt":"Zentra tablet home","device":"tablet","width":824,"height":1166},{"src":"/templates/zentra/screenshots/tablet-services.webp","alt":"Zentra tablet services","device":"tablet","width":824,"height":1166},{"src":"/templates/zentra/screenshots/tablet-blog.webp","alt":"Zentra tablet blog","device":"tablet","width":824,"height":1166},{"src":"/templates/zentra/screenshots/tablet-contact.webp","alt":"Zentra tablet contact","device":"tablet","width":824,"height":1166},{"src":"/templates/zentra/screenshots/mobile-home.webp","alt":"Zentra mobile home","device":"mobile","width":380,"height":822},{"src":"/templates/zentra/screenshots/mobile-services.webp","alt":"Zentra mobile services","device":"mobile","width":380,"height":822},{"src":"/templates/zentra/screenshots/mobile-blog.webp","alt":"Zentra mobile blog","device":"mobile","width":380,"height":822},{"src":"/templates/zentra/screenshots/mobile-contact.webp","alt":"Zentra mobile contact","device":"mobile","width":380,"height":822}],
  surfaces:[{id:'site',name:'官网',platform:'pc',locales:['zh','en'],pages:[
    {slug:'',title:'首页',localizedTitles:{en:'Home'},load:()=>import('./pages/Home')},
    {slug:'about',title:'关于我们',localizedTitles:{en:'About'},load:()=>import('./pages/About')},
    {slug:'services',title:'服务',localizedTitles:{en:'Services'},load:()=>import('./pages/Services')},
    ...services.map((service,index)=>({slug:'services/'+service.slug,title:service.title.zh,localizedTitles:{en:service.title.en},load:()=>import('./pages/ServiceDetail').then(module=>({default:module[serviceExports[index]]}))})),
    {slug:'work',title:'作品',localizedTitles:{en:'Works'},load:()=>import('./pages/Work')},
    ...works.map((work,index)=>({slug:'work/'+work.slug,title:work.name,localizedTitles:{en:work.name},load:()=>import('./pages/WorkDetail').then(module=>({default:module[workExports[index]]}))})),
    {slug:'blog',title:'品牌洞察',localizedTitles:{en:'Insights'},load:()=>import('./pages/Blog')},
    ...articles.map((article,index)=>({slug:'blog/'+article.slug,title:article.title.zh,localizedTitles:{en:article.title.en},load:()=>import('./pages/Article').then(module=>({default:module[articleExports[index]]}))})),
    {slug:'contact',title:'联系',localizedTitles:{en:'Contact'},load:()=>import('./pages/Contact')},
    {slug:'legal/privacy',title:'隐私政策',localizedTitles:{en:'Privacy Policy'},load:()=>import('./pages/Policy').then(module=>({default:module.Privacy}))},
    {slug:'legal/terms',title:'使用条款',localizedTitles:{en:'Terms & Conditions'},load:()=>import('./pages/Policy').then(module=>({default:module.Terms}))},
  ]}],
}
