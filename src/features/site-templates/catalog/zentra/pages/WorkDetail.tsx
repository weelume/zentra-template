'use client'
import Link from 'next/link'
import type {SiteTemplatePageProps} from '../../../types'
import {Shell,useZentra} from '../components/Shell'
import {FAQ,InnerHero} from '../components/Sections'
import {Reveal} from '../components/Motion'
import {asset,text} from '../config'
import {works} from '../content/data'
import {getReference,ReferenceBody} from '../components/ReferenceBody'
import {WorkMetrics} from '../components/WorkMetrics'
function Content({index}:{index:number}){const{t,href,locale}=useZentra(),work=works[index],detail=getReference('work/'+work.slug);return <><InnerHero title={work.name}/><section className="z-section"><div className="z-container"><dl className="z-detail-meta"><div><dt>{t(text('年份','Year'))}</dt><dd>{work.year}</dd></div><div><dt>{t(text('客户','Client'))}</dt><dd>{work.client}</dd></div><div><dt>{t(text('服务','Services'))}</dt><dd>{work.category}</dd></div></dl><ReferenceBody detail={{images:[],blocks:detail.blocks.slice(0,1)}} locale={locale}/><div className="z-work-results"><Reveal kind="image"><img className="z-detail-image" src={asset(work.image)} alt={work.name}/></Reveal><WorkMetrics slug={work.slug}/></div><ReferenceBody detail={{images:[],blocks:detail.blocks.slice(1)}} locale={locale}/><div className="z-detail-gallery">{detail.images.filter(image=>image!==work.image).map((image,i)=><Reveal key={image} kind="image" delay={i%2*.1}><img src={asset(image)} alt={`${work.name} ${i+1}`} loading="lazy"/></Reveal>)}</div><Link className="z-button z-dark-button z-back" href={href('work')}>{t(text('返回作品列表','Back to Work'))}</Link></div></section><FAQ/></>}
function Detail(props:SiteTemplatePageProps & {index:number}){return <Shell {...props}><Content index={props.index}/></Shell>}
export const Astra=(props:SiteTemplatePageProps)=><Detail {...props} index={0}/>
export const Nova=(props:SiteTemplatePageProps)=><Detail {...props} index={1}/>
export const Celeste=(props:SiteTemplatePageProps)=><Detail {...props} index={2}/>
export const Elysia=(props:SiteTemplatePageProps)=><Detail {...props} index={3}/>
export const Serenva=(props:SiteTemplatePageProps)=><Detail {...props} index={4}/>
export const Lunara=(props:SiteTemplatePageProps)=><Detail {...props} index={5}/>
export const Aviqa=(props:SiteTemplatePageProps)=><Detail {...props} index={6}/>
export const Aurielle=(props:SiteTemplatePageProps)=><Detail {...props} index={7}/>
