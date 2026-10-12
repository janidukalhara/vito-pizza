export const img=(n:number)=>({0:"/images/vito-logo.png",23:"/images/pickme-logo.jpg",24:"/images/uber-eats-logo.png"}[n]||`/images/home-${n}.webp`);
export const branches=[
 {name:'Kandy',id:'kandy',address:'Saranankara Road, Kandy',hours:'12:30 PM – 9:30 PM',phone:'077 634 8000',social:'1N5wiDkGLh',image:img(6)},
 {name:'Colombo',id:'colombo',address:'Independence Arcade, Independence Ave, Colombo',hours:'12 PM – 9:30 PM',phone:'077 140 9090',social:'18X4sb58vt',image:img(7)},
 {name:'Peradeniya',id:'peradeniya',address:'4th Floor, Hameedia Building, Peradeniya Road, Kandy',hours:'12 PM – 11:30 PM',phone:'077 992 1990',social:'1D5Ppzh7T2',image:img(8)},
 {name:'Negombo',id:'negombo',address:'1st Floor, Commercial Bank Building, Puttalam–Colombo Road, Negombo',hours:'12 PM – 11:30 PM',phone:'077 769 9293',social:'1B2Wak57C1',image:img(9)},
 {name:'Galle',id:'galle',address:'Ground Floor (Old Matara Road), Galle City Center, Galle',hours:'12 PM – 9:30 PM',phone:'077 736 4500',social:'1B168m4NPR',image:img(10)},
 {name:'City of Dreams',id:'city-of-dreams',address:'8th Floor, The Shoppes at City of Dreams, Justice Akbar Mawatha, Colombo',hours:'12 PM – 9:30 PM',phone:'077 799 3435',social:'1bQ6Dcrozm',image:img(11)}
];
export const nav=[['/','Home'],['/about','About Us'],['/menu','Menu'],['/gallery','Gallery'],['/contact','Contact']];
export const heroVideo = '/images/Vito.mp4';