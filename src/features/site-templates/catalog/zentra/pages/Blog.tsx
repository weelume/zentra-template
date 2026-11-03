'use client'
import type {SiteTemplatePageProps} from '../../../types'
import {Shell,useZentra} from '../components/Shell'
import {InnerHero,BlogGrid,FAQ} from '../components/Sections'
import {text} from '../config'
function Content(){const{t}=useZentra();return <><InnerHero title={t(text('品牌洞察','Insights'))} label={t(text('博客','Blogs'))}/><section className="z-section"><div className="z-container"><BlogGrid limit={4} loadMore/></div></section><FAQ/></>}
export default function Blog(props:SiteTemplatePageProps){return <Shell {...props}><Content/></Shell>}
