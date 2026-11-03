import details from '../content/reference.json'
export interface ReferenceDetail {author?:string;published?:string;category?:string;images:string[];blocks:{heading?:{zh:string;en:string};paragraphs:{zh:string;en:string}[]}[]}
/** 参考正文必须显式存在，缺失即报错，不使用其他文章或通用内容静默代替。 */
export function getReference(slug:string):ReferenceDetail {const detail=(details as Record<string,ReferenceDetail>)[slug];if(!detail)throw new Error('缺少页面内容：'+slug);return detail}
export function ReferenceBody({detail,locale}:{detail:ReferenceDetail;locale:'zh'|'en'}) {return <div className="z-prose">{detail.blocks.map((block,index)=><section key={index}>{block.heading&&<h2>{block.heading[locale]}</h2>}{block.paragraphs.map((paragraph,i)=><p key={i}>{paragraph[locale]}</p>)}</section>)}</div>}
