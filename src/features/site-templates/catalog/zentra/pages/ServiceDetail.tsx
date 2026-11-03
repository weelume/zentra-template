'use client'
import Link from 'next/link'
import type {SiteTemplatePageProps} from '../../../types'
import {Shell,useZentra} from '../components/Shell'
import {FAQ,InnerHero,Metrics} from '../components/Sections'
import {Reveal} from '../components/Motion'
import {asset,text} from '../config'
import {services} from '../content/data'
import {getReference,ReferenceBody} from '../components/ReferenceBody'
function Content({index}:{index:number}) {
  const{t,locale,href}=useZentra(),service=services[index],detail=getReference('services/'+service.slug)
  return <><InnerHero title={t(service.title)} label={t(text('品牌','Branding'))}/>
    <section className="z-section"><div className="z-container">
      <div className="z-detail-grid"><h2 className="z-title">{t(text('我们提供什么','What We Offer'))}</h2><div className="z-prose">{detail.blocks[0].paragraphs.map((paragraph,i)=><p key={i}>{paragraph[locale]}</p>)}<Link className="z-button z-dark-button z-back" href={href('services')}>{t(text('所有服务','All Services'))}</Link></div></div>
      <Reveal kind="image"><img className="z-detail-image" src={asset(detail.images[0])} alt={t(service.title)}/></Reveal>
      <section className="z-section"><p className="z-form-note">{t(text('以下数据为原参考站演示内容','The following figures are reference-site demo content'))}</p><Metrics/></section>
      {detail.blocks.slice(1).map((block,i)=><div className="z-detail-grid" key={i}><Reveal kind="image"><img className="z-detail-image" src={asset(detail.images[i+1])} alt={block.heading?.[locale]??t(service.title)} loading="lazy"/></Reveal><ReferenceBody detail={{images:[],blocks:[block]}} locale={locale}/></div>)}
      <Link className="z-button z-dark-button z-back" href={href('services')}>{t(text('返回服务列表','Back To Service'))}</Link>
    </div></section><FAQ/></>
}
function Detail(props:SiteTemplatePageProps & {index:number}){return <Shell {...props}><Content index={props.index}/></Shell>}
export const SEO=(props:SiteTemplatePageProps)=><Detail {...props} index={0}/>
export const Branding=(props:SiteTemplatePageProps)=><Detail {...props} index={1}/>
export const Social=(props:SiteTemplatePageProps)=><Detail {...props} index={2}/>
export const Advertising=(props:SiteTemplatePageProps)=><Detail {...props} index={3}/>
