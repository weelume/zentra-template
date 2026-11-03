'use client'
import {text,type Copy} from '../config'
import {useZentra} from './Shell'
import {Count} from './Motion'
import metrics from '../content/work-metrics.json'
/** 每个案例必须有经实际滚动核对的指标，禁止从其他案例或初态零值兜底。 */
export function WorkMetrics({slug}:{slug:string}){const{t}=useZentra(),items=(metrics as Record<string,{value:number;label:Copy}[]>)[slug];if(!items)throw new Error('缺少作品统计：'+slug);return <div className="z-work-metrics">{items.map((metric,i)=><article key={i}><strong>+<Count value={metric.value} suffix="%"/></strong><p>{t(metric.label)}</p></article>)}<p className="z-form-note">{t(text('演示统计，不构成效果承诺。','Demonstration figures, not a performance guarantee.'))}</p></div>}
