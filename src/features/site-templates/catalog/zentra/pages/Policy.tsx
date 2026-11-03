'use client'
import type {SiteTemplatePageProps} from '../../../types'
import {Shell,useZentra} from '../components/Shell'
import {InnerHero} from '../components/Sections'
import {getReference,ReferenceBody} from '../components/ReferenceBody'
import {text} from '../config'
function Content({privacy}:{privacy:boolean}){const{t,locale}=useZentra();return <><InnerHero title={t(privacy?text('隐私政策','Privacy Policy'):text('使用条款','Terms & Conditions'))}/><section className="z-section"><article className="z-container z-article"><ReferenceBody detail={getReference(privacy?'legal/privacy':'legal/terms')} locale={locale}/></article></section></>}
export const Privacy=(props:SiteTemplatePageProps)=><Shell {...props}><Content privacy/></Shell>
export const Terms=(props:SiteTemplatePageProps)=><Shell {...props}><Content privacy={false}/></Shell>
