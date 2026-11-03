'use client'
import type {SiteTemplatePageProps} from '../../../types'
import {Shell,useZentra} from '../components/Shell'
import {InnerHero,WorkGrid,FAQ} from '../components/Sections'
import {text} from '../config'
function Content(){const{t}=useZentra();return <><InnerHero title={t(text('精选作品','Selected Works'))} label={t(text('作品','Portfolio'))}/><section className="z-section"><div className="z-container"><WorkGrid/></div></section><FAQ/></>}
export default function Work(props:SiteTemplatePageProps){return <Shell {...props}><Content/></Shell>}
