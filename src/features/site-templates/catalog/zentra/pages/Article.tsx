'use client'
import Link from 'next/link'
import type {SiteTemplatePageProps} from '../../../types'
import {Shell,useZentra} from '../components/Shell'
import {FAQ,InnerHero} from '../components/Sections'
import {Reveal} from '../components/Motion'
import {asset,text} from '../config'
import {articles} from '../content/data'
import {getReference,ReferenceBody} from '../components/ReferenceBody'
function Content({index}:{index:number}){const{t,href,locale}=useZentra(),article=articles[index],detail=getReference('blog/'+article.slug);return <><InnerHero title={t(article.title)}/><section className="z-section"><div className="z-container"><dl className="z-detail-meta"><div><dt>{t(text('作者','Author'))}</dt><dd>{detail.author}</dd></div><div><dt>{t(text('发表时间','Published'))}</dt><dd>{detail.published}</dd></div><div><dt>{t(text('分类','Category'))}</dt><dd>{t(text('品牌与营销',detail.category??'Brand'))}</dd></div></dl><Reveal kind="image"><img className="z-detail-image" src={asset(article.image)} alt={t(article.title)}/></Reveal><article className="z-article"><ReferenceBody detail={detail} locale={locale}/></article><div className="z-detail-gallery">{detail.images.filter(image=>image!==article.image).map((image,i)=><Reveal key={image} kind="image" delay={i*.1}><img src={asset(image)} alt={t(article.title)+` ${i+1}`} loading="lazy"/></Reveal>)}</div><Link className="z-button z-dark-button z-back" href={href('blog')}>{t(text('返回博客','Back To Blog'))}</Link></div></section><FAQ/></>}
function Detail(props:SiteTemplatePageProps & {index:number}){return <Shell {...props}><Content index={props.index}/></Shell>}
export const Future=(props:SiteTemplatePageProps)=><Detail {...props} index={0}/>
export const Clients=(props:SiteTemplatePageProps)=><Detail {...props} index={1}/>
export const Grow=(props:SiteTemplatePageProps)=><Detail {...props} index={2}/>
export const Build=(props:SiteTemplatePageProps)=><Detail {...props} index={3}/>
export const Presence=(props:SiteTemplatePageProps)=><Detail {...props} index={4}/>
export const Search=(props:SiteTemplatePageProps)=><Detail {...props} index={5}/>
export const Simple=(props:SiteTemplatePageProps)=><Detail {...props} index={6}/>
export const Audiences=(props:SiteTemplatePageProps)=><Detail {...props} index={7}/>
export const Iconic=(props:SiteTemplatePageProps)=><Detail {...props} index={8}/>
export const Omnichannel=(props:SiteTemplatePageProps)=><Detail {...props} index={9}/>
