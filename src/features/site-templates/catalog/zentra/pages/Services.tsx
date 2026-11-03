'use client'
import type {SiteTemplatePageProps} from '../../../types'
import {Shell,useZentra} from '../components/Shell'
import {InnerHero,ServiceGrid,BlogSection,FAQ} from '../components/Sections'
import {text} from '../config'
function Content(){const{t}=useZentra();return <><InnerHero title={t(text('品牌服务','Services'))} label={t(text('品牌','Branding'))}/><section className="z-section"><div className="z-container"><ServiceGrid/></div></section><BlogSection/><FAQ/></>}
export default function Services(props:SiteTemplatePageProps){return <Shell {...props}><Content/></Shell>}
