/*
 * THE PERSONAL INTERNET — JID
 * All personal information and project links can be edited here.
 * No framework, API keys or build step needed.
 */
window.SITE = {
  brand: 'jid.',
  firstName: 'Jid',
  fullName: 'Abdulkadir O. Abdulwajid',
  location: 'Nigeria',
  email: 'walekadir@gmail.com',
  linkedin: 'https://www.linkedin.com/in/abdulthedataanalyst/',
  twitter: 'https://x.com/Swiiish_x',
  intro: 'I explore where data, design, journalism and technology meet — then turn what I learn into work people can actually use.',
  focus: [
    { id:'design', title:'Design', label:'VISUAL THINKING', desc:'Making information striking, clear and worth paying attention to.', theme:'pink', symbol:'✳', detail:'Canva Pro • Graphics • Visual storytelling', href:'work.html?filter=design' },
    { id:'data', title:'Data', label:'ANALYTICAL THINKING', desc:'Finding the interesting story hiding inside the numbers.', theme:'mint', symbol:'↗', detail:'Excel • Power BI • SQL', href:'work.html?filter=data' },
    { id:'journalism', title:'Stories', label:'EDITORIAL THINKING', desc:'Asking better questions, checking the facts and making sense of what matters.', theme:'blue', symbol:'❝', detail:'Reporting • Editing • Research', href:'writing.html' },
    { id:'code', title:'Building', label:'EXPERIMENTAL THINKING', desc:'Learning in public, breaking things gently and making useful little tools.', theme:'purple', symbol:'{ }', detail:'Web experiments • Prototypes', href:'playground.html' }
  ],
  projects: [
    { id:'wordnaija', name:'WordNaija', category:'code', categoryLabel:'Build / Game', kind:'Live project', year:'2026', title:'A little word game, with a Naija twist.', desc:'A playful word puzzle built around language, culture and curiosity.', link:'https://word-naija.vercel.app/', cta:'Open the game', art:'word', accent:'purple', featured:true },
    { id:'fees', name:'Payment Fee Calculator', category:'data', categoryLabel:'Data / Tool', kind:'Live project', year:'2026', title:'Making digital payment fees easier to compare.', desc:'An interactive calculator for comparing Nigerian payment gateway fees.', link:'https://jidspaymentfeecalcv4.vercel.app/', cta:'Try the calculator', art:'fees', accent:'mint', featured:true },
    { id:'naira', name:'Naira Time Machine', category:'data', categoryLabel:'Data / Storytelling', kind:'Archive project', year:'2026', title:'What could your naira buy back then?', desc:'An interactive exploration of purchasing power across time, originally made as a personal experiment.', link:'', cta:'Case study in preparation', art:'naira', accent:'blue', featured:true },
    { id:'trueprofit', name:'TrueProfit', category:'code', categoryLabel:'Build / Finance', kind:'Archive project', year:'2026', title:'What is your business actually earning?', desc:'A side-hustle profit calculator that accounts for easily missed expenses.', link:'', cta:'Case study in preparation', art:'profit', accent:'pink', featured:false },
    { id:'designarchive', name:'Visual Design Archive', category:'design', categoryLabel:'Visual / Canva', kind:'Samples being curated', year:'Next', title:'Visual work made to communicate clearly.', desc:'A home for selected designs, presentations, visual explainers and infographics. Real samples will be added as they are selected.', link:'', cta:'Samples in preparation', art:'design', accent:'pink', featured:false },
    { id:'newroom', name:'The Newsroom', category:'journalism', categoryLabel:'Writing / Editorial', kind:'Starter writing', year:'2026', title:'A little space for better questions.', desc:'Original starter notes on explaining information, visual thinking and learning in public.', link:'writing.html', cta:'Read the notes', art:'editorial', accent:'blue', featured:false }
  ],
  notes: [
    { slug:'story-in-the-spreadsheet', title:'The story hiding inside a spreadsheet', topic:'Data & storytelling', mins:'3 min read', date:'Starter note', desc:'A few thoughts on why rows and columns mean more when we ask the right questions.', accent:'mint' },
    { slug:'design-as-clarity', title:'Good design is a form of explanation', topic:'Design', mins:'3 min read', date:'Starter note', desc:'Why visual clarity is more useful than decoration for its own sake.', accent:'pink' },
    { slug:'beginner-builder', title:'The joy of being a beginner again', topic:'Learning in public', mins:'2 min read', date:'Starter note', desc:'A note on experimenting with code without needing to know everything first.', accent:'purple' }
  ],
  now: [
    'Exploring how to make data stories more interactive.',
    'Building small projects to strengthen my web development skills.',
    'Growing my visual storytelling and reporting practice.'
  ]
};

const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => Array.from(root.querySelectorAll(selector));
const esc = (s) => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const icon = (name) => {
  const shared = 'width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';
  const paths = {
    arrow:'<path d="M5 12h14m-7-7 7 7-7 7"/>',
    arrowUp:'<path d="M7 17 17 7M8 7h9v9"/>',
    sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>',
    moon:'<path d="M20.985 12.486A9 9 0 0 1 11.514 3.015 9 9 0 1 0 20.985 12.486Z"/>',
    menu:'<path d="M4 8h16M4 16h16"/>',
    x:'<path d="M5 5l14 14M19 5 5 19"/>',
    copy:'<rect width="13" height="13" x="8" y="8" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>',
    check:'<path d="m5 12 4 4L19 6"/>',
    mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    chevron:'<path d="m6 9 6 6 6-6"/>'
  };
  return `<svg ${shared}>${paths[name]||paths.arrowUp}</svg>`;
};

function mountShell() {
  const page = document.body.dataset.page || 'home';
  const nav = [ ['home','Home','index.html'],['work','Work','work.html'],['writing','Writing','writing.html'],['playground','Playground','playground.html'],['about','About','about.html'] ];
  const header = $('#site-header');
  if(header) header.innerHTML = `<div class="nav-shell wrap">
    <a class="brand" href="index.html" aria-label="Jid, home"><span class="brand-mark">j<span>✳</span></span><span class="brand-type">jid<span class="brand-dot">.</span></span></a>
    <nav class="desktop-nav" aria-label="Main navigation">${nav.map(([key,label,href])=>`<a ${key===page?'aria-current="page"':''} href="${href}">${label}</a>`).join('')}</nav>
    <div class="nav-actions"><button class="theme-toggle icon-btn" type="button" aria-label="Switch colour theme" title="Switch colour theme">${icon('sun')}</button><a href="contact.html" class="nav-contact">Let's talk ${icon('arrowUp')}</a><button class="menu-toggle icon-btn" type="button" aria-label="Open menu" aria-expanded="false">${icon('menu')}</button></div>
  </div><nav class="mobile-nav" aria-label="Mobile navigation">${nav.map(([key,label,href])=>`<a ${key===page?'aria-current="page"':''} href="${href}">${label}</a>`).join('')}<a href="contact.html">Get in touch</a></nav>`;
  const footer = $('#site-footer');
  if(footer) footer.innerHTML = `<div class="wrap footer-inner"><div><a href="index.html" class="footer-wordmark">jid<span>.</span></a><p>Curious by nature. Making things along the way.</p></div><div class="footer-links"><a href="${SITE.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn ${icon('arrowUp')}</a><a href="${SITE.twitter}" target="_blank" rel="noopener noreferrer">X / Twitter ${icon('arrowUp')}</a><a href="mailto:${esc(SITE.email)}">Email ${icon('arrowUp')}</a></div><div class="footer-bottom"><span>© <span id="copyright-year"></span> ${esc(SITE.fullName)}</span><span>Made with curiosity, in Nigeria <span class="tiny-star">✳</span></span></div></div>`;
  if($('#copyright-year')) $('#copyright-year').textContent = new Date().getFullYear();
  const savedTheme = localStorage.getItem('jid-theme');
  if(savedTheme === 'light' || savedTheme === 'dark') document.documentElement.dataset.theme = savedTheme;
  refreshTheme();
  $$('.theme-toggle').forEach(b=>b.addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='light'?'dark':'light';document.documentElement.dataset.theme=next;localStorage.setItem('jid-theme',next);refreshTheme();}));
  const menu = $('.menu-toggle');
  menu?.addEventListener('click',()=>{const isOpen=document.body.classList.toggle('menu-open');menu.setAttribute('aria-expanded',String(isOpen));menu.setAttribute('aria-label',isOpen?'Close menu':'Open menu');menu.innerHTML=icon(isOpen?'x':'menu');});
  $$('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>document.body.classList.remove('menu-open')));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.body.classList.remove('menu-open');if(menu){menu.setAttribute('aria-expanded','false');menu.innerHTML=icon('menu');}}});
  $$('.copy-email').forEach(button=>button.addEventListener('click',()=>copyEmail(button)));
}
function refreshTheme(){
  const light = document.documentElement.dataset.theme==='light';
  $$('.theme-toggle').forEach(b=>{b.innerHTML=icon(light?'moon':'sun');b.setAttribute('aria-label',light?'Switch to dark mode':'Switch to light mode');});
}
async function copyEmail(button){
  try{await navigator.clipboard.writeText(SITE.email);const prev=button.innerHTML;button.innerHTML=`${icon('check')} Copied`;setTimeout(()=>button.innerHTML=prev,1800)}
  catch{window.location.href=`mailto:${SITE.email}`;}
}
function artMarkup(art){
  if(art==='word') return `<div class="project-art word-art"><div class="word-grid">${['W','O','R','D','N','A','I','J','A'].map((x,i)=>`<span class="${[0,1,3,5,7].includes(i)?'found':''}">${x}</span>`).join('')}</div><span class="art-stamp">PLAY / LEARN / REPEAT</span></div>`;
  if(art==='fees') return `<div class="project-art fees-art"><div class="fee-top"><span>PAYMENT LAB</span><span>↗</span></div><div class="fee-symbol">₦<span>?</span></div><div class="fee-lines"><span></span><span></span><span></span></div><span class="art-stamp">COMPARE · CALCULATE · DECIDE</span></div>`;
  if(art==='naira') return `<div class="project-art naira-art"><div class="naira-year">2005 <span>→</span> 2026</div><div class="naira-graph"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><span class="naira-currency">₦</span><span class="art-stamp">VALUE / TIME / CONTEXT</span></div>`;
  if(art==='design') return `<div class="project-art design-art"><div class="design-square square-a"></div><div class="design-square square-b"></div><div class="design-word">MAKE<br>IT <i>CLEAR.</i></div><span class="art-stamp">COLOUR / CLARITY / FORM</span></div>`;
  if(art==='editorial') return `<div class="project-art editorial-art"><div class="editorial-header">THE NEWSROOM <span>✳</span></div><div class="editorial-title">ASK<br>BETTER<br><i>QUESTIONS.</i></div><span class="art-stamp">RESEARCH / VERIFY / EXPLAIN</span></div>`;
  return `<div class="project-art profit-art"><div class="profit-circle">↗</div><div class="profit-type">TRUE<br/>PROFIT<span>.</span></div><span class="art-stamp">BEYOND REVENUE</span></div>`;
}
function projectMarkup(project){
  const isExternal=Boolean(project.link && /^https?:/i.test(project.link));
  const status = isExternal ? `<span class="live-status"><span></span> Live project</span>` : `<span class="archive-status">${esc(project.kind)}</span>`;
  return `<article class="project-card accent-${project.accent}" data-category="${project.category}">${artMarkup(project.art)}<div class="project-copy"><div class="project-meta"><span>${esc(project.categoryLabel)}</span>${status}</div><h3>${esc(project.name)}</h3><p>${esc(project.desc)}</p><div class="project-bottom"><span>${esc(project.year)}</span>${project.link?`<a class="round-link" href="${esc(project.link)}" ${isExternal?'target="_blank" rel="noopener noreferrer"':''} aria-label="${esc(project.cta)}: ${esc(project.name)}">${icon('arrowUp')}</a>`:`<span class="coming-soon">Case study coming soon</span>`}</div></div></article>`;
}
function noteMarkup(note) {return `<a class="note-card accent-${note.accent}" href="article.html?slug=${encodeURIComponent(note.slug)}"><div class="note-top"><span>${esc(note.topic)}</span><span>${icon('arrowUp')}</span></div><div class="note-asterisk">✳</div><div><h3>${esc(note.title)}</h3><p>${esc(note.desc)}</p><div class="note-meta"><span>${esc(note.date)}</span><span>${esc(note.mins)}</span></div></div></a>`;}
function renderProjects(container, filter='all', featuredOnly=false){
  const projectList=SITE.projects.filter(p=>(!featuredOnly||p.featured)&&(filter==='all'||p.category===filter));
  container.innerHTML=projectList.length?projectList.map(projectMarkup).join(''):'<div class="empty-state">Nothing in this category yet. More experiments are on the way.</div>';
}
function initHome(){
  const grid=$('#home-project-grid');if(grid)renderProjects(grid,'all',true);
  const notes=$('#home-notes');if(notes)notes.innerHTML=SITE.notes.slice(0,2).map(noteMarkup).join('');
  const lensBox=$('#lens-detail');
  const lensButtons=$$('.lens-button');
  function setLens(id){const data=SITE.focus.find(item=>item.id===id)||SITE.focus[0];lensButtons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lens===id)));if(lensBox){lensBox.className=`lens-detail accent-${data.theme}`;lensBox.innerHTML=`<span class="eyebrow">${esc(data.label)}</span><div class="lens-symbol" aria-hidden="true">${esc(data.symbol)}</div><h3>${esc(data.title)} is one way I think.</h3><p>${esc(data.desc)}</p><div class="lens-detail-footer"><span>${esc(data.detail)}</span><a href="${data.href}">Explore ${data.title.toLowerCase()} ${icon('arrowUp')}</a></div>`;}}
  lensButtons.forEach(b=>b.addEventListener('click',()=>setLens(b.dataset.lens)));
  setLens('design');
}
function initWork(){
  const grid=$('#work-project-grid');if(!grid)return;
  const params=new URLSearchParams(window.location.search);
  let filter=params.get('filter')||'all';
  const allowed=['all','data','code','design','journalism'];if(!allowed.includes(filter))filter='all';
  function run(){renderProjects(grid,filter);$$('.filter-btn').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===filter)));$('#filter-count').textContent=SITE.projects.filter(p=>filter==='all'||p.category===filter).length+' projects';}
  $$('.filter-btn').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter;const url=new URL(location.href);if(filter==='all')url.searchParams.delete('filter');else url.searchParams.set('filter',filter);history.replaceState(null,'',url);run();}));run();
}
function initWriting(){const grid=$('#writing-notes');if(grid)grid.innerHTML=SITE.notes.map(noteMarkup).join('');}
function initArticle(){
  const slug=new URLSearchParams(location.search).get('slug')||SITE.notes[0].slug;
  const note=SITE.notes.find(n=>n.slug===slug);
  const root=$('#article-root');if(!root)return;
  if(!note){root.innerHTML='<p>That note could not be found. <a href="writing.html">Back to writing</a></p>';return;}
  document.title=`${note.title} — Jid`;
  const bodies={
    'story-in-the-spreadsheet':`<p>It is easy to mistake a spreadsheet for the story itself. It is not. It is a room full of clues.</p><p>A row may tell us what happened, but usually not why. A chart can reveal that something changed, but the context around that change comes from asking better questions: Who does this affect? What are we comparing? What is missing?</p><h2>Begin with curiosity</h2><p>Before opening a dashboard, I like to start with the question I want to answer. A simple question shapes which numbers matter, how they should be checked, and what the audience really needs to know.</p><p>Good analysis is not just about producing the right number. It is about helping another person understand what that number means.</p>`,
    'design-as-clarity':`<p>A visually impressive design can still fail if the person viewing it cannot understand the message. The job of design is not to decorate a difficult idea. It is to make that idea easier to grasp.</p><h2>What deserves attention?</h2><p>When I approach a graphic, I think about hierarchy: what should someone notice first, what supports it, and what can be removed? These choices matter as much as the colours or typefaces.</p><p>Clarity does not mean every design must look plain. There is room for energy and personality. But the excitement should point somewhere useful.</p>`,
    'beginner-builder':`<p>Learning to build things on the web has reminded me how valuable it is to be a beginner. Almost every small project begins with a question I do not fully know how to answer.</p><p>Sometimes the result is clumsy. Sometimes a simple interaction takes longer than expected. But the act of making something teaches me things that reading alone never could.</p><h2>Small projects count</h2><p>I am interested in useful little experiments: a calculator, a word game, a clearer way to show information. Each one is a chance to practise, discover a better approach, and improve the next thing.</p><p>The goal is not to pretend I know everything. It is to keep learning, and to have something real to show for it.</p>`
  };
  root.innerHTML=`<a class="back-link" href="writing.html">← All writing</a><div class="article-heading"><span class="eyebrow">${esc(note.topic)} · ${esc(note.date)}</span><h1>${esc(note.title)}</h1><p>${esc(note.desc)}</p><div class="article-byline"><span class="byline-avatar">j✳</span><span>${esc(SITE.fullName)}<small>${esc(note.mins)} · Starter note / original draft</small></span></div></div><div class="article-body">${bodies[slug]||''}</div><div class="article-next"><p>Thanks for reading. More thoughts are on their way.</p><a class="pill-button" href="writing.html">Browse all notes ${icon('arrow')}</a></div>`;
}
function initLab(){
  const bars=$$('#lab-chart .lab-bar');const range=$('#lab-range');const output=$('#lab-output');const label=$('#lab-range-value');const choices=$$('.lab-mode');let mode='growth';
  const data={growth:[28,37,32,49,58,70],steady:[38,42,47,52,56,61]};
  function update(){const multiplier=Number(range.value);const values=data[mode].map(v=>Math.min(96,Math.round(v*multiplier/100)));bars.forEach((b,i)=>{b.style.height=values[i]+'%';b.querySelector('span').textContent=values[i];});label.textContent=multiplier+'%';output.textContent=mode==='growth'?`In this invented sample, the later periods rise more sharply. At ${multiplier}% scale, the trend remains upward — but a trend alone does not explain its cause.`:`In this invented sample, every period rises gradually. At ${multiplier}% scale, the steadier pattern is easier to compare than individual spikes.`;}
  choices.forEach(b=>b.addEventListener('click',()=>{mode=b.dataset.mode;choices.forEach(x=>x.setAttribute('aria-pressed',String(x===b)));update();}));range?.addEventListener('input',update);if(range)update();
  const ideaButton=$('#idea-shuffle');const ideaText=$('#idea-text');const ideas=['Can a small chart explain a big issue?','What would this headline look like as an infographic?','What is the simplest useful tool I could build next?','How might this story change if we start with the people?'];let ideaIndex=0;ideaButton?.addEventListener('click',()=>{ideaIndex=(ideaIndex+1)%ideas.length;ideaText.textContent=ideas[ideaIndex];});
  const blue=$('#blue-reveal');blue?.addEventListener('click',()=>{const panel=$('#blue-message');const next=panel.hidden;panel.hidden=!next;blue.setAttribute('aria-expanded',String(next));blue.innerHTML=next?'Hide the Blue Corner −':'Open the Blue Corner +';});
}
function initContact(){const button=$('#contact-copy');button?.addEventListener('click',()=>copyEmail(button));}
function initReveal(){if(!('IntersectionObserver'in window)){ $$('.reveal').forEach(el=>el.classList.add('revealed'));return; }const obs=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('revealed');obs.unobserve(entry.target);}})},{threshold:.08,rootMargin:'0px 0px -15px 0px'});$$('.reveal').forEach(el=>obs.observe(el));}
document.addEventListener('DOMContentLoaded',()=>{mountShell();const page=document.body.dataset.page;({home:initHome,work:initWork,writing:initWriting,article:initArticle,playground:initLab,contact:initContact}[page]||(()=>{}))();initReveal();});
