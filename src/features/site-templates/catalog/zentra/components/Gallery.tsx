'use client'
import {useRef,useState} from 'react'
import {motion,useReducedMotion} from 'framer-motion'
import {asset,text} from '../config'
import {useZentra} from './Shell'
const images=['about-1.png','about-2.png','about-3.jpg']
export function Gallery(){
 const{t}=useZentra(),[index,setIndex]=useState(0),dragged=useRef(false),reduce=useReducedMotion()
 const move=(direction:number)=>setIndex(current=>(current+direction+images.length)%images.length)
 return <div className="z-about-gallery">
  {/* 手势位移与分页位移分层：第二张开始拖动也不会被零点约束拉回第一张。 */}
  <motion.div className="z-gallery-gesture" drag="x" dragConstraints={{left:0,right:0}} dragElastic={.1} dragMomentum={false} onPointerDownCapture={()=>{dragged.current=false}} onDragStart={()=>{dragged.current=true}} onClickCapture={event=>{if(dragged.current&&event.detail>0){event.preventDefault();event.stopPropagation()}}} onDragEnd={(_,info)=>{if(Math.abs(info.offset.x)>50)move(info.offset.x<0?1:-1)}}>
   <motion.div className="z-gallery-track" animate={{x:`-${index*100}%`}} transition={{duration:reduce?0:.6,ease:[.22,1,.36,1]}}>{images.map((image,i)=><div key={image}><img src={asset(image)} alt={t(text(`工作室日常 ${i+1}`,`Inside the studio ${i+1}`))} draggable={false}/></div>)}</motion.div>
  </motion.div>
  <div className="z-gallery-controls"><button type="button" onClick={()=>move(-1)} aria-label={t(text('上一张','Previous image'))}>←</button><span aria-live="polite">{index+1} / {images.length}</span><button type="button" onClick={()=>move(1)} aria-label={t(text('下一张','Next image'))}>→</button></div>
 </div>
}
