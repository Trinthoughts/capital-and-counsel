document.querySelector('.menu')?.addEventListener('click',()=>document.querySelector('.nav')?.classList.toggle('open'));
(function(){document.querySelectorAll('.nav').forEach(nav=>{if(!nav.querySelector('a[href="real-estate.html"]')){const anchor=nav.querySelector('a[href="private-wealth.html"]');if(anchor){anchor.insertAdjacentHTML('afterend','<a href="real-estate.html">Real Estate</a><a href="tax.html">Tax</a>')}}});})();
function subscribe(e){e.preventDefault();const n=document.getElementById('form-note');if(n)n.textContent='Thanks — connect this form to your email provider before launch.';return false;}
(function(){['light-theme.css','lawyer-illustration.css','mobile.css','menu-mobile.css'].forEach(href=>{if(!document.querySelector('link[href="'+href+'"]')){const l=document.createElement('link');l.rel='stylesheet';l.href=href;document.head.appendChild(l);}})})();
(function(){
const path=location.pathname.split('/').pop()||'index.html';
const data={
'deals.html':{label:'EDITORIAL · DEALS',image:'https://images.unsplash.com/photo-1768382880068-37533aea4286?auto=format&fit=crop&fm=jpg&q=90&w=1800',alt:'Modern office building in Canary Wharf',cards:['https://images.unsplash.com/photo-1770625297396-a3915f7632b6?auto=format&fit=crop&fm=jpg&q=90&w=1200','https://images.unsplash.com/photo-1778222013845-482e292ee899?auto=format&fit=crop&fm=jpg&q=90&w=1200','https://images.unsplash.com/photo-1770461846516-b7e5993a8e4f?auto=format&fit=crop&fm=jpg&q=90&w=1200']},
'private-equity.html':{label:'PRIVATE CAPITAL',image:'https://images.unsplash.com/photo-1770461846516-b7e5993a8e4f?auto=format&fit=crop&fm=jpg&q=90&w=1800',alt:'Financial district architecture',cards:['https://images.unsplash.com/photo-1768382880068-37533aea4286?auto=format&fit=crop&fm=jpg&q=90&w=1200','https://images.unsplash.com/photo-1782922474098-8bf2977017ae?auto=format&fit=crop&fm=jpg&q=90&w=1200','https://images.unsplash.com/photo-1778222013845-482e292ee899?auto=format&fit=crop&fm=jpg&q=90&w=1200']},
'financing.html':{label:'CAPITAL & FINANCING',image:'https://images.unsplash.com/photo-1768382880068-37533aea4286?auto=format&fit=crop&fm=jpg&q=90&w=1800',alt:'Canary Wharf financial district',cards:['https://images.unsplash.com/photo-1770461846516-b7e5993a8e4f?auto=format&fit=crop&fm=jpg&q=90&w=1200','https://images.unsplash.com/photo-1770625297396-a3915f7632b6?auto=format&fit=crop&fm=jpg&q=90&w=1200','https://images.unsplash.com/photo-1782922474098-8bf2977017ae?auto=format&fit=crop&fm=jpg&q=90&w=1200']},
'private-client.html':{label:'PRIVATE CLIENT',image:'https://images.unsplash.com/photo-1778731525509-6f6f07cb6ddb?auto=format&fit=crop&fm=jpg&q=90&w=1800',alt:'Luxury residential interior',cards:['https://images.unsplash.com/photo-1778731525593-5d14356f3dba?auto=format&fit=crop&fm=jpg&q=90&w=1200','https://images.unsplash.com/photo-1778164909438-c27c813cb480?auto=format&fit=crop&fm=jpg&q=90&w=1200','https://images.unsplash.com/photo-1778731525509-6f6f07cb6ddb?auto=format&fit=crop&fm=jpg&q=90&w=1200']},
'private-wealth.html':{label:'PRIVATE WEALTH',image:'https://images.unsplash.com/photo-1559385301-0187cb6eff46?auto=format&fit=crop&fm=jpg&q=90&w=1800',alt:'Luxury yacht at sea',cards:['https://images.unsplash.com/photo-1778731525509-6f6f07cb6ddb?auto=format&fit=crop&fm=jpg&q=90&w=1200','https://images.unsplash.com/photo-1778731525593-5d14356f3dba?auto=format&fit=crop&fm=jpg&q=90&w=1200','https://images.unsplash.com/photo-1778164909438-c27c813cb480?auto=format&fit=crop&fm=jpg&q=90&w=1200']},
'real-estate.html':{label:'REAL ESTATE',image:'https://images.unsplash.com/photo-1781816927578-ec36210fede0?auto=format&fit=crop&fm=jpg&q=90&w=1800',alt:'Aerial view of land and property',cards:['https://images.unsplash.com/photo-1777268209440-296c2bb6facf?auto=format&fit=crop&fm=jpg&q=90&w=1200','https://images.unsplash.com/photo-1779062553598-80c1240e149c?auto=format&fit=crop&fm=jpg&q=90&w=1200','https://images.unsplash.com/photo-1778164909438-c27c813cb480?auto=format&fit=crop&fm=jpg&q=90&w=1200','https://images.unsplash.com/photo-1780819813687-011f85d23d15?auto=format&fit=crop&fm=jpg&q=90&w=1200']},
'tax.html':{label:'TAX',image:'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&fm=jpg&q=90&w=1800',alt:'Calculator and tax forms',cards:['https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&fm=jpg&q=90&w=1200','https://images.unsplash.com/photo-1770461846516-b7e5993a8e4f?auto=format&fit=crop&fm=jpg&q=90&w=1200','https://images.unsplash.com/photo-1768382880068-37533aea4286?auto=format&fit=crop&fm=jpg&q=90&w=1200']},
'legal-tech.html':{label:'LEGAL TECHNOLOGY',image:'https://images.unsplash.com/photo-1775519520461-6b6e068d9250?auto=format&fit=crop&fm=jpg&q=90&w=1800',alt:'Data centre server racks',cards:['https://images.unsplash.com/photo-1775519520461-6b6e068d9250?auto=format&fit=crop&fm=jpg&q=90&w=1200','https://images.unsplash.com/photo-1667264501379-c1537934c7ab?auto=format&fit=crop&fm=jpg&q=90&w=1200','https://images.unsplash.com/photo-1770461846516-b7e5993a8e4f?auto=format&fit=crop&fm=jpg&q=90&w=1200']}
}
const d=data[path],main=document.querySelector('main.listing');
if(!d||!main||main.querySelector('.section-hero'))return;

const style=document.createElement('style');
style.textContent=`
.section-hero{width:100%;margin:34px 0 58px;border:2px solid #c9a35c;background:#fffdf8;box-sizing:border-box;overflow:hidden}
.section-hero img{display:block;width:100%;height:360px;object-fit:cover}
.section-hero-caption{padding:18px 22px 20px;border-top:1px solid #d5d0c5}
.section-hero-caption span{font-size:10px;text-transform:uppercase;letter-spacing:.14em;color:#9a763d;font-weight:700}
.section-hero-caption p{margin:7px 0 0;color:#596169;font-size:13px;line-height:1.55}
.category-feed{margin-top:0}
.category-feed-head{display:flex;justify-content:space-between;align-items:end;border-bottom:1px solid #343434;padding-bottom:13px;margin-bottom:26px}
.category-feed-head h2{font-family:"Libre Baskerville",serif;font-size:28px;font-weight:400;margin:0}
.category-feed-head span{font-size:10px;letter-spacing:.14em;color:#9b9b9b;text-transform:uppercase}
.category-feature{display:grid;grid-template-columns:1.15fr .85fr;min-height:390px;border:1px solid #343434;background:#242424;margin-bottom:34px}
.category-feature-media{display:block;min-height:390px;overflow:hidden;background:#242424}
.category-feature-media img{display:block;width:100%;height:100%;min-height:390px;object-fit:cover;transition:transform .35s ease}
.category-feature-media:hover img,.category-card-media:hover img{transform:scale(1.025)}
.category-feature-copy{display:flex;flex-direction:column;justify-content:center;padding:38px 42px}
.category-feature-copy .kicker,.category-card-copy .kicker{margin:0 0 8px}
.category-feature-copy h2{font-family:"Libre Baskerville",serif;font-size:clamp(30px,3.4vw,46px);line-height:1.14;font-weight:400;margin:0 0 15px}
.category-feature-copy h2 a:hover,.category-card-copy h3 a:hover{text-decoration:none}
.category-feature-copy p:not(.kicker){color:#b9b9b9;font-size:14px;line-height:1.7;margin:0}
.category-feature-copy .read-link{margin-top:25px;font-size:10px;letter-spacing:.13em;text-transform:uppercase;font-weight:700;color:#d1b16c}
.category-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px}
.category-card{min-width:0;border-bottom:1px solid #343434;padding-bottom:22px}
.category-card-media{display:block;height:185px;overflow:hidden;background:#242424;margin-bottom:16px}
.category-card-media img{display:block;width:100%;height:100%;object-fit:cover;transition:transform .35s ease}
.category-card-copy h3{font-family:"Libre Baskerville",serif;font-size:21px;line-height:1.25;font-weight:400;margin:0 0 9px}
.category-card-copy p:not(.kicker){color:#aaa;font-size:13px;line-height:1.6;margin:0}
.category-card .read-link{display:inline-block;margin-top:14px;font-size:10px;letter-spacing:.13em;text-transform:uppercase;font-weight:700;color:#d1b16c}
.category-card.is-coming-soon .category-card-media,.category-feature.is-coming-soon .category-feature-media{filter:saturate(.45);opacity:.72}
@media(max-width:800px){
.section-hero{margin:26px 0 40px}
.section-hero img{height:240px}
.section-hero-caption{padding:15px 17px 17px}
.category-feed-head{align-items:center;margin-bottom:20px}
.category-feed-head h2{font-size:23px}
.category-feed-head span{font-size:9px}
.category-feature{grid-template-columns:1fr;min-height:0;margin-bottom:34px}
.category-feature-media{min-height:230px;height:230px}
.category-feature-media img{min-height:230px}
.category-feature-copy{padding:24px 22px 27px}
.category-feature-copy h2{font-size:29px}
.category-grid{grid-template-columns:1fr;gap:30px}
.category-card-media{height:210px}
.category-card-copy h3{font-size:22px}
}`;
document.head.appendChild(style);

const hero=document.createElement('div');
hero.className='section-hero';
hero.innerHTML='<img src="'+d.image+'" alt="'+d.alt+'" loading="eager"><div class="section-hero-caption"><span>'+d.label+'</span><p>'+main.querySelector('.dek').textContent+'</p></div>';
const list=main.querySelector('.list');
if(!list)return;
main.insertBefore(hero,list);

const articles=Array.from(list.querySelectorAll('article'));
if(!articles.length)return;
list.className='category-feed';
const head=document.createElement('div');
head.className='category-feed-head';
head.innerHTML='<h2>Top stories</h2><span>'+articles.length+' stories</span>';
list.prepend(head);

const articleImage=(article,index)=>d.cards[index%d.cards.length];
const grid=document.createElement('div');
grid.className='category-grid';
articles.forEach((article)=>{
article.classList.add('category-card');
if(/COMING SOON/i.test(article.textContent))article.classList.add('is-coming-soon');

const media=document.createElement('div');
media.className='category-card-media';
const img=document.createElement('img');
img.src=articleImage(article,grid.children.length);
img.alt='';
img.loading='lazy';
media.appendChild(img);

const h2=article.querySelector('h2');
if(h2&&h2.querySelector('a')){
const a=document.createElement('a');
a.href=h2.querySelector('a').href;
a.appendChild(media);
article.insertBefore(a,article.firstChild);
}else article.insertBefore(media,article.firstChild);

const copy=document.createElement('div');
copy.className='category-card-copy';
while(article.children.length>1)copy.appendChild(article.children[1]);
article.appendChild(copy);

if(!/COMING SOON/i.test(article.textContent)){
const read=document.createElement('span');
read.className='read-link';
read.textContent='Read article →';
copy.appendChild(read);
}
grid.appendChild(article);
});
list.appendChild(grid);
})();
