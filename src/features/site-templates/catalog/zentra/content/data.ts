import {text, type Copy} from '../config'
export const services = [
  {slug:'seo-digital-strategy',title:text('SEO 数字策略','SEO Digital Strategy'),image:'service-seo.svg',color:'pink',description:text('将市场洞察、创意与研究结合，为你的增长目标制定清晰的数字营销路线。','We craft customized marketing roadmaps that align with your goals — blending research, creativity.'),intro:text('在内容不断涌现的数字世界里，能否被看见至关重要。通过关键词研究、站内优化和长期策略，提升品牌的可发现性、权威性与转化。','In a digital world overflowing with content, visibility is everything. Our SEO & Digital Strategy service ensures your brand doesn’t just appear online — it dominates search results and builds sustainable organic growth.'),steps:[text('SEO 审计与分析','SEO Audit & Analysis'),text('关键词与竞品研究','Keyword & Competitor Research'),text('页面与技术优化','On-page & Technical Optimization'),text('内容策略','Content Strategy')]},
  {slug:'branding-creative-design',title:text('品牌与创意设计','Branding & Creative Design'),image:'service-brand.svg',color:'green',description:text('从标志到视觉叙事，建立鲜明一致的品牌形象，让品牌个性真正被感知。','Brand identity that stands out. From logo to visual storytelling, we bring your brand’s personality to life.'),intro:text('好的品牌形象始于清晰的定位。我们结合品牌研究、视觉设计与叙事，帮助你在每个触点传达一致的价值。','A distinctive brand begins with a clear identity. We bring strategy, visual design, and storytelling together to express your personality across every touchpoint.'),steps:[text('品牌研究与定位','Brand Research & Positioning'),text('标志与视觉识别','Logo & Visual Identity'),text('品牌语言与叙事','Brand Voice & Storytelling'),text('品牌应用与指南','Brand Guidelines & Applications')]},
  {slug:'social-media-marketing',title:text('社交媒体营销','Social Media Marketing'),image:'service-social.svg',color:'yellow',description:text('通过有策略的社交内容与活动，与受众建立联系，让社群持续成长。','Engage your audience and grow your community with strategic social media campaigns.'),intro:text('从内容规划到社群互动，我们将品牌故事变成有意义的对话，让关注者成为长期的支持者。','Build meaningful connections with your audience through strategic content, community engagement, and campaigns that bring your brand story to life.'),steps:[text('社交媒体策略','Social Media Strategy'),text('内容创作与规划','Content Creation & Planning'),text('社群运营','Community Management'),text('数据分析与优化','Analytics & Optimization')]},
  {slug:'paid-advertising',title:text('付费广告投放','Paid Advertising (PPC)'),image:'service-ads.svg',color:'blue',description:text('通过精准的 Google、Meta 等平台广告，让投放预算转化为可衡量的业务增长。','Maximize ROI through targeted ad campaigns on Google, Meta, and beyond designed to boost visible growth.'),intro:text('让每次投放都围绕明确的业务目标。从受众细分到创意测试和转化追踪，持续优化广告表现。','Turn your advertising budget into measurable growth with audience targeting, creative testing, and continuous performance optimization.'),steps:[text('投放策略与受众研究','Campaign Strategy & Audience Research'),text('广告创意与文案','Ad Creative & Copywriting'),text('多平台投放管理','Multi-platform Campaign Management'),text('转化追踪与优化','Conversion Tracking & Optimization')]},
]
export const works = [
  {slug:'astra-glow',name:'Astra Glow',client:'Astra',category:'SEO',year:'2023',image:'work-1.png'},
  {slug:'nova-cosmetics',name:'Nova Cosmetics',client:'Nova',category:'PPC',year:'2023',image:'work-2.png'},
  {slug:'celeste-beauty',name:'Celeste Beauty',client:'Celeste',category:'SSL',year:'2021',image:'work-3.jpg'},
  {slug:'elysia-cosmetics',name:'Elysia Cosmetics',client:'Elysia',category:'UI',year:'2022',image:'work-4.png'},
  {slug:'serenva-beauty',name:'Serenva Beauty',client:'Serenva',category:'UX',year:'2023',image:'work-5.png'},
  {slug:'lunara-bloom',name:'Lunara Bloom',client:'Lunara',category:'EMAIL',year:'2024',image:'work-6.png'},
  {"slug":"aviqa-beauty","name":"Aviqa Beauty","client":"Aviqa","category":"GRAPHIC","year":"2024","image":"ref-WSF8cIdwQHQGp0M28URgoWUCU.jpg"},
  {"slug":"aurielle-cosmetics","name":"Aurielle Cosmetics","client":"Aurielle","category":"EDITING","year":"2020","image":"ref-JICyB7guoDFBkVoxrLlsfEykY.png"},
]
export const articles = [
  {slug:'the-future-of-digital-marketing',title:text('数字营销的未来','The Future of Digital Marketing'),year:'2023'},
  {slug:'mastering-client-relationships',title:text('建立持久的客户关系','Mastering Client Relationships'),year:'2023'},
  {slug:'how-to-grow-your-brand',title:text('如何让品牌持续成长','How to Grow Your Brand'),year:'2024'},
  {slug:'how-to-build-a-brand',title:text('如何建立一个品牌','How to Build a Brand'),year:'2022'},
  {slug:'creating-a-strong-brand-presence',title:text('打造鲜明的品牌存在感','Creating a Strong Brand Presence'),year:'2023'},
  {slug:'why-seo-still-matters',title:text('为什么 SEO 依然重要','Why SEO Still Matters'),year:'2024'},
  {slug:'branding-made-simple',title:text('让品牌建设更清晰','Branding Made Simple'),year:'2025'},
  {slug:'turning-audiences',title:text('从受众到品牌社群','Turning Audiences'),year:'2022'},
  {slug:'from-idea-to-iconic-brand',title:text('从想法到标志性品牌','From Idea to Iconic Brand'),year:'2021'},
  {slug:'building-an-omnichannel',title:text('建立一致的全渠道体验','Building an Omnichannel'),year:'2024'},
].map((article,index)=>({...article,image:`blog-${index+1}.png`}))
export const team = [
  ['Ethan Cole',text('创始人兼首席执行官','Founder & CEO')],['Ava Mitchell',text('创意总监','Creative Director')],['Liam Parker',text('营销策略师','Marketing Strategist')],['Sophia Reed',text('社交媒体经理','Social Media Manager')],['Noah Bennett',text('SEO 与内容负责人','SEO & Content Lead')],['Emma Davis',text('广告投放专家','Paid Ads Specialist')],['Mason Clark',text('品牌设计师','Brand Designer')],['Olivia Grant',text('客户成功经理','Client Success Manager')],
] satisfies [string,Copy][]
export const faqs = [
  {q:text('多久可以看到效果','How soon can I expect to see results?'),a:text('大多数客户在数周内开始看到初步改善。具体时间取决于你的目标、渠道和我们共同确定的策略。','Most clients start seeing initial improvements within a few weeks, though the exact timeline depends on your goals and the strategy we implement.')},
  {q:text('如何开始与新客户合作','How do you start working with a new client?'),a:text('我们先了解业务、受众和目标，再通过研究制定策略，明确时间表与衡量方式。','We begin by understanding your business, audience, and goals, then create a research-led strategy with a clear timeline and measures of success.')},
  {q:text('你们提供哪些服务','What services do you offer?'),a:text('我们提供 SEO 数字策略、品牌与创意设计、社交媒体营销，以及付费广告投放。','We offer SEO and digital strategy, branding and creative design, social media marketing, and paid advertising.')},
  {q:text('你们的不同之处是什么','What makes your agency different?'),a:text('将创意与数据结合，通过清晰的沟通、持续的协作和可衡量的结果，支持品牌长期发展。','We combine creativity with data, transparent communication, and ongoing collaboration to support long-term brand growth.')},
  {q:text('如何衡量项目成果','How do you measure success?'),a:text('我们围绕事先约定的目标，观察有效流量、互动、转化和投入回报，并持续复盘优化。','We track the agreed goals through qualified traffic, engagement, conversions, and return on investment, then use those insights to improve.')},
]
