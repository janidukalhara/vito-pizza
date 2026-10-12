import{siFacebook,siInstagram,siTiktok,siYoutube}from'simple-icons';
const icons={facebook:siFacebook,instagram:siInstagram,tiktok:siTiktok,youtube:siYoutube};
export default function SocialIcon({name,size=19}:{name:keyof typeof icons,size?:number}){const icon=icons[name];return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={icon.path}/></svg>}
