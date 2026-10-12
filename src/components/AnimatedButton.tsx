import {useEffect,useRef,useState,type ReactNode} from 'react';
import {Link} from 'react-router-dom';
import styled,{css} from 'styled-components';
const activated=css`
 &&{box-shadow:0 0 0 3px transparent;color:var(--hover-ink);border-radius:24px}
 .arr-1{right:-24px;opacity:0}.arr-2{left:var(--arrow-inset);opacity:1}.button-text{transform:translateX(6px)}.button-circle{transform:translate(-50%,-50%) scale(1);opacity:1}
`;
const Surface=styled.a<{$variant:'red'|'outline'|'cream'}>`
 &&{--arrow-inset:14px;--ink:${p=>p.$variant==='cream'?'#7b2017':'#fff3e7'};--edge:${p=>p.$variant==='red'?'#c93628':'#f1e8d8'};--fill:${p=>p.$variant==='cream'?'#a32419':'#f1e8d8'};--hover-ink:${p=>p.$variant==='cream'?'#fff3e7':'#7b2017'};position:relative;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;min-height:52px;max-width:100%;gap:4px;padding:16px 44px;border:1px solid var(--edge);border-radius:100px;background:${p=>p.$variant==='red'?'#c93628':p.$variant==='cream'?'#f1e8d8':'transparent'};color:var(--ink);font-size:.78rem;font-weight:600;line-height:1.3;letter-spacing:.06em;text-transform:uppercase;cursor:pointer;overflow:hidden;isolation:isolate;box-shadow:0 0 0 1px var(--edge);transition:color .32s ease,border-radius .4s ease,box-shadow .4s,scale .18s;text-decoration:none;touch-action:manipulation}
 .button-arrow{position:absolute;width:21px;height:21px;fill:currentColor;z-index:2;transition:left .38s ease,right .38s ease,opacity .2s;pointer-events:none}.arr-1{right:var(--arrow-inset);opacity:1}.arr-2{left:-24px;opacity:0}
 .button-circle{position:absolute;top:50%;left:50%;width:calc(100% + 2px);height:calc(100% + 2px);transform:translate(-50%,-50%) scale(.88);background:var(--fill);border-radius:inherit;opacity:0;transition:transform .4s cubic-bezier(.23,1,.32,1),opacity .3s;pointer-events:none}
 .button-text{position:relative;z-index:1;display:inline-flex;align-items:center;gap:10px;transform:translateX(-6px);transition:transform .38s ease}
 @media(hover:hover) and (pointer:fine){&:hover{${activated}}}
 &[data-pressed='true'],&:focus-visible{${activated}}
 &&:focus-visible{outline:2px solid #e2ac68;outline-offset:6px}&&:active{scale:.98;box-shadow:0 0 0 2px var(--edge)}
 &&.nav-order{min-height:44px;padding:12px 40px;font-size:.72rem}
 @media(max-width:760px){&&{--arrow-inset:10px;padding:15px 36px;font-size:.72rem;min-height:48px}&&.nav-order{min-height:40px;padding:11px 33px;font-size:.64rem}.button-arrow{width:18px;height:18px}}
 @media(prefers-reduced-motion:reduce){&&,.button-arrow,.button-circle,.button-text{transition:none}&&:active{scale:1}}
`;
const Arrow=({className}:{className:string})=><svg className={`button-arrow ${className}`} viewBox="0 0 24 24" aria-hidden="true"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"/></svg>;
export default function AnimatedButton({to,href,children,variant='red',className=''}:{to?:string;href?:string;children:ReactNode;variant?:'red'|'outline'|'cream';className?:string}){const[pressed,setPressed]=useState(false);const timer=useRef<ReturnType<typeof setTimeout>|undefined>(undefined);useEffect(()=>()=>clearTimeout(timer.current),[]);const reset=()=>{clearTimeout(timer.current);setPressed(false)};return <Surface as={to?Link:'a'} to={to} href={href} $variant={variant} className={`animated-button ${className}`} data-pressed={pressed} onPointerDown={e=>{if(e.pointerType!=='mouse'){clearTimeout(timer.current);setPressed(true)}}} onPointerUp={()=>{timer.current=setTimeout(()=>setPressed(false),180)}} onPointerCancel={reset} onPointerLeave={reset} onBlur={reset}><Arrow className="arr-2"/><span className="button-text">{children}</span><span className="button-circle" aria-hidden="true"/><Arrow className="arr-1"/></Surface>}
