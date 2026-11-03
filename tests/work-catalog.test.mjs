import test from 'node:test'
import assert from 'node:assert/strict'
import {readFile} from 'node:fs/promises'
import ts from 'typescript'
const base=new URL('../src/features/site-templates/catalog/zentra/',import.meta.url)
const compile=source=>'data:text/javascript;base64,'+Buffer.from(ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText).toString('base64')
const config=compile(await readFile(new URL('config.ts',base),'utf8'))
const data=compile((await readFile(new URL('content/data.ts',base),'utf8')).replace("from '../config'",'from '+JSON.stringify(config)))
const {works}=await import(data)
const {zentraTemplate}=await import(compile((await readFile(new URL('meta.ts',base),'utf8')).replace("from './content/data'",'from '+JSON.stringify(data))))
const metadata=JSON.parse(await readFile(new URL('../.tpl/template.json',import.meta.url),'utf8'))
const metrics=JSON.parse(await readFile(new URL('content/work-metrics.json',base),'utf8'))
const details=JSON.parse(await readFile(new URL('content/reference.json',base),'utf8'))
test('作品总览八个原站案例均有独立路由与交付元数据，避免按首页六项截断',()=>{const expected=['astra-glow','nova-cosmetics','celeste-beauty','elysia-cosmetics','serenva-beauty','lunara-bloom','aviqa-beauty','aurielle-cosmetics'].map(slug=>'work/'+slug).sort();assert.deepEqual(works.map(item=>'work/'+item.slug).sort(),expected);assert.deepEqual(zentraTemplate.surfaces[0].pages.filter(page=>page.slug.startsWith('work/')).map(page=>page.slug).sort(),expected);assert.deepEqual(metadata.surfaces[0].pages.filter(page=>page.slug.startsWith('work/')).map(page=>page.slug).sort(),expected)})
test('每项作品都有三项已观测的非零计数与双语标签和独立正文',()=>{for(const work of works){assert.equal(metrics[work.slug].length,3);assert.ok(metrics[work.slug].every(metric=>metric.value>0&&metric.label.zh&&metric.label.en));assert.ok(details['work/'+work.slug].blocks.length>=3)}assert.deepEqual(metrics['aviqa-beauty'].map(item=>item.value),[420,75,180]);assert.deepEqual(metrics['aurielle-cosmetics'].map(item=>item.value),[370,75,160])})
