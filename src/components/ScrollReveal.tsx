import React,{useLayoutEffect,useMemo,useRef} from 'react';
import {gsap} from 'gsap';import {ScrollTrigger} from 'gsap/ScrollTrigger';import{useReducedMotion}from'motion/react';
gsap.registerPlugin(ScrollTrigger);
// Segments retain React ownership; every segment in a rendered line animates together.
function split(node:React.ReactNode,key='r'):React.ReactNode{if(typeof node==='string')return node.split(/(\s+)/).map((part,i)=>/^\s*$/.test(part)?part:<span className="reveal-segment" key={`${key}-${i}`}>{part}</span>);if(Array.isArray(node))return node.map((n,i)=>split(n,`${key}-${i}`));if(React.isValidElement(node)){const p=node.props as any;return React.cloneElement(node as any,{key:node.key??key},typeof node.type==='string'&&p.children?split(p.children,key):p.children);}return node;}
export default function ScrollReveal({children,as:Tag='p',enableBlur=true,baseOpacity=.15,baseRotation:_,blurStrength=3,className='',...props}:any){
 const ref=useRef<HTMLElement>(null);const reduce=useReducedMotion();const content=useMemo(()=>split(children),[children]);
 useLayoutEffect(()=>{const el=ref.current;if(!el||reduce||el.closest('.hero,.page-hero,[data-scroll-reveal="off"]'))return;let context:gsap.Context|undefined;let active=true;let timer:ReturnType<typeof setTimeout>;let width=0;
 const build=()=>{if(!active)return;context?.revert();const items=[...el.querySelectorAll<HTMLElement>('.reveal-segment')];if(!items.length)return;const box=el.getBoundingClientRect();width=el.clientWidth;if(box.top<innerHeight*.9&&box.bottom>0)return;
 const rows:{top:number;items:HTMLElement[]}[]=[];const tolerance=Math.max(4,parseFloat(getComputedStyle(el).lineHeight)*.35||6);items.forEach(item=>{const top=item.getBoundingClientRect().top;let row=rows.find(r=>Math.abs(r.top-top)<tolerance);if(!row){row={top,items:[]};rows.push(row)}row.items.push(item)});
 context=gsap.context(()=>{const timeline=gsap.timeline({scrollTrigger:{trigger:el,start:'top 92%',end:'bottom 65%',scrub:.35,invalidateOnRefresh:true}});rows.forEach((row,i)=>timeline.fromTo(row.items,{opacity:baseOpacity,y:16,filter:enableBlur?`blur(${blurStrength}px)`:'none'},{opacity:1,y:0,filter:'blur(0px)',duration:.65,ease:'power2.out'},i*.2));},el);
 };
 const schedule=()=>{clearTimeout(timer);timer=setTimeout(build,420)};schedule();document.fonts.ready.then(()=>{if(active)schedule()});const observer=new ResizeObserver(()=>{if(Math.abs(el.clientWidth-width)>1)schedule()});observer.observe(el);
 return()=>{active=false;clearTimeout(timer);observer.disconnect();context?.revert()};},[content,reduce,enableBlur,baseOpacity,blurStrength]);
 return <Tag ref={ref} className={`scroll-reveal ${className}`} {...props}>{content}</Tag>;
}
