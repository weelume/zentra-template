'use client'
import {useEffect, useRef, useState, type ReactNode} from 'react'
import {motion, useInView, useReducedMotion} from 'framer-motion'
/** 各类区块使用各自的位移和缩放，不能统一替换为淡入。 */
export function Reveal({children,kind='rise',delay=0,className=''}:{children:ReactNode;kind?:'rise'|'image'|'team'|'quote';delay?:number;className?:string}) {
  const reduce=useReducedMotion()
  const ref=useRef<HTMLDivElement>(null)
  const visible=useInView(ref,{once:true,amount:.12})
  const from={rise:{y:80},image:{x:80,scale:.9},team:{y:80,scale:.9},quote:{y:80,scale:.8}}[kind]
  // 显式绑定当前节点的可见状态，切页与视口变化后仍由本次挂载驱动动画。
  return <motion.div ref={ref} className={className} initial={reduce?false:{...from,opacity:0}} animate={visible||reduce?{x:0,y:0,scale:1,opacity:1}:{...from,opacity:0}} transition={{duration:.7,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>
}
export function SplitTitle({children,hero=false}:{children:string;hero?:boolean}) {
  const reduce=useReducedMotion()
  const ref=useRef<HTMLHeadingElement>(null)
  const visible=useInView(ref,{once:true,amount:.12})
  const Tag=hero?motion.h1:motion.h2
  return <Tag ref={ref} className={hero?'z-hero-title':'z-title'} aria-label={children} initial="hidden" animate={hero||visible||reduce?'visible':'hidden'} transition={{staggerChildren:reduce?0:.025}}>{children.split('\n').map((line,lineIndex)=><span className="z-title-line" key={lineIndex}>{line.split(' ').map((word,i)=><span className="z-word" key={i} aria-hidden="true">{Array.from(word).map((char,j)=><motion.span key={j} variants={{hidden:{opacity:reduce?1:0,y:reduce?0:70,rotateX:reduce?0:-35},visible:{opacity:1,y:0,rotateX:0}}} transition={{duration:.6,ease:[.22,1,.36,1]}}>{char}</motion.span>)}{'\u00a0'}</span>)}</span>)}</Tag>
}
export function Count({value,suffix=''}:{value:number;suffix?:string}) {
  const ref=useRef<HTMLSpanElement>(null),visible=useInView(ref,{once:true,amount:.5}),reduce=useReducedMotion()
  const [count,setCount]=useState(0)
  useEffect(()=>{if(!visible)return;let frame=0;const start=performance.now();const tick=(now:number)=>{const progress=reduce?1:Math.min((now-start)/1800,1);setCount(Math.round(value*(1-Math.pow(1-progress,3))));if(progress<1)frame=requestAnimationFrame(tick)};frame=requestAnimationFrame(tick);return()=>cancelAnimationFrame(frame)},[visible,value,reduce])
  return <span ref={ref} className="z-count" aria-label={`${value}${suffix}`}>{count}{suffix}</span>
}
