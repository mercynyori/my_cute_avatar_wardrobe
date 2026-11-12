const $=id=>document.getElementById(id);
const heart='<path d="M200 352c-12-14-26 0-14 12l14 12 14-12c12-12-2-26-14-12z" fill="#fff" opacity=".9"/>';
const D=[
{cat:'hats',n:'Bow',i:'🎀',c:'#ff4f8b',s:'<path d="M140 100L98 76Q90 100 98 124Z M140 100L182 76Q190 100 182 124Z" fill="var(--c)"/><circle cx="140" cy="100" r="9" fill="#fff" opacity=".7"/>'},
{cat:'hats',n:'Crown',i:'👑',c:'#ffcf3d',s:'<path d="M148 112L156 66L180 92L200 58L220 92L244 66L252 112Z" fill="var(--c)" stroke="#6b2742" stroke-width="3" stroke-linejoin="round"/><circle cx="200" cy="96" r="5" fill="#ff4f8b"/>'},
{cat:'hats',n:'Beanie',i:'🧶',c:'#7cc8ff',s:'<path d="M104 134Q200 28 296 134Q200 112 104 134Z" fill="var(--c)"/><circle cx="200" cy="50" r="15" fill="#fff"/><path d="M104 134Q200 112 296 134" stroke="#fff" stroke-width="8" fill="none"/>'},
{cat:'tops',n:'Tee',i:'👕',c:'#7cc8ff',s:'<path d="M158 296Q200 284 242 296L250 336L236 342V392Q200 400 164 392V342L150 336Z" fill="var(--c)"/>'+heart},
{cat:'tops',n:'Hoodie',i:'🧥',c:'#b79cff',s:'<path d="M152 294Q200 280 248 294L260 354L240 358V402Q200 412 160 402V358L140 354Z" fill="var(--c)"/><ellipse cx="200" cy="291" rx="38" ry="12" fill="var(--c)" stroke="#fff" stroke-width="3" opacity=".95"/><rect x="178" y="366" width="44" height="22" rx="10" fill="#fff" opacity=".35"/><path d="M190 300V330M210 300V330" stroke="#fff" stroke-width="3" stroke-linecap="round"/>'},
{cat:'tops',n:'Stripy sweater',i:'🧵',c:'#ffd166',s:'<path d="M158 296Q200 284 242 296L252 346L238 350V394Q200 402 162 394V350L148 346Z" fill="var(--c)"/><rect x="163" y="322" width="74" height="9" fill="#fff" opacity=".85"/><rect x="163" y="346" width="74" height="9" fill="#fff" opacity=".85"/><rect x="163" y="370" width="74" height="9" fill="#fff" opacity=".85"/>'},
{cat:'bottoms',n:'Skirt',i:'👗',c:'#ff7eb3',s:'<path d="M160 384H240L264 442Q252 452 238 442Q225 452 212 442Q200 452 188 442Q175 452 162 442Q148 452 136 442Z" fill="var(--c)"/><rect x="158" y="380" width="84" height="10" rx="5" fill="#fff" opacity=".6"/>'},
{cat:'bottoms',n:'Shorts',i:'🩳',c:'#6ed3ae',s:'<path d="M160 384H240L248 434H208L200 412L192 434H152Z" fill="var(--c)"/><circle cx="200" cy="394" r="4" fill="#fff"/>'},
{cat:'bottoms',n:'Tutu',i:'🩰',c:'#f9a8d4',s:'<ellipse cx="200" cy="402" rx="70" ry="26" fill="var(--c)"/><ellipse cx="200" cy="410" rx="56" ry="20" fill="#fff" opacity=".35"/><rect x="158" y="382" width="84" height="12" rx="6" fill="#ff4f8b"/>'},
{cat:'shoes',n:'Sneakers',i:'👟',c:'#ff7eb3',s:'<g fill="var(--c)" stroke="#fff" stroke-width="4"><ellipse cx="182" cy="496" rx="23" ry="12"/><ellipse cx="218" cy="496" rx="23" ry="12"/></g><path d="M170 494h24M206 494h24" stroke="#fff" stroke-width="3"/>'},
{cat:'shoes',n:'Boots',i:'🥾',c:'#b9805a',s:'<rect x="160" y="462" width="42" height="40" rx="12" fill="var(--c)"/><rect x="198" y="462" width="42" height="40" rx="12" fill="var(--c)"/><rect x="160" y="462" width="42" height="9" rx="4" fill="#fff" opacity=".8"/><rect x="198" y="462" width="42" height="9" rx="4" fill="#fff" opacity=".8"/>'},
{cat:'extras',n:'Round glasses',i:'👓',c:'#6b2742',s:'<g fill="#fff" fill-opacity=".2" stroke="var(--c)" stroke-width="5"><circle cx="160" cy="203" r="28"/><circle cx="240" cy="203" r="28"/></g><path d="M188 200Q200 192 212 200" stroke="var(--c)" stroke-width="5" fill="none"/>'},
{cat:'extras',n:'Heart necklace',i:'💖',c:'#ff3d7f',s:'<path d="M176 292Q200 322 224 292" stroke="#fff" stroke-width="3" fill="none"/><path d="M200 336c-11-13-24 0-13 11l13 11 13-11c11-11-2-24-13-11z" fill="var(--c)"/>'},
{cat:'dresses',n:'Ball gown',i:'👸',c:'#ff9ec7',s:'<path d="M162 296Q200 286 238 296L236 372L272 472Q200 494 128 472L164 372Z" fill="var(--c)"/><rect x="162" y="366" width="76" height="9" fill="#fff" opacity=".7"/><path d="M200 380V474M172 380L152 470M228 380L248 470" stroke="#fff" stroke-width="2" opacity=".4"/><path d="M200 370l-16-9v18zM200 370l16-9v18z" fill="#fff"/>'},
{cat:'dresses',n:'Sundress',i:'🌼',c:'#ffd166',s:'<path d="M168 330Q200 322 232 330L236 380L256 450Q200 464 144 450L164 380Z" fill="var(--c)"/><path d="M178 330L180 296M222 330L220 296" stroke="var(--c)" stroke-width="7" stroke-linecap="round"/><g fill="#fff" opacity=".85"><circle cx="184" cy="360" r="5"/><circle cx="214" cy="352" r="5"/><circle cx="198" cy="392" r="5"/><circle cx="170" cy="420" r="5"/><circle cx="226" cy="414" r="5"/><circle cx="198" cy="436" r="5"/></g>'},
{cat:'dresses',n:'Sailor dress',i:'⚓',c:'#7cc8ff',s:'<path d="M160 296Q200 286 240 296L238 380L258 442Q200 456 142 442L162 380Z" fill="var(--c)"/><circle cx="158" cy="302" r="14" fill="var(--c)"/><circle cx="242" cy="302" r="14" fill="var(--c)"/><path d="M170 294L200 336L230 294Z" fill="#fff"/><path d="M200 336l-11 6 11 6 11-6z" fill="#ff4f8b"/><rect x="142" y="432" width="116" height="8" fill="#fff" opacity=".8"/>'},
{cat:'dresses',n:'Strawberry dress',i:'🍓',c:'#ff5470',s:'<path d="M164 296Q200 286 236 296L240 360Q272 380 256 426Q200 442 144 426Q128 380 160 360Z" fill="var(--c)"/><g fill="#ffe9a8"><ellipse cx="180" cy="340" rx="3" ry="5"/><ellipse cx="216" cy="336" rx="3" ry="5"/><ellipse cx="200" cy="372" rx="3" ry="5"/><ellipse cx="166" cy="400" rx="3" ry="5"/><ellipse cx="234" cy="398" rx="3" ry="5"/><ellipse cx="200" cy="414" rx="3" ry="5"/></g><path d="M184 296L200 310L216 296L200 288Z" fill="#7bd88f"/>'}
];
const CATS={hats:'Hats 🎀',tops:'Tops 👕',bottoms:'Bottoms 👗',dresses:'Dresses 🌸',shoes:'Shoes 👟',extras:'Extras 💖',mine:'My clothes 📁'};
const PAL=['#ff4f8b','#ffb3d1','#ffd166','#7bd88f','#6ec9ff','#b79cff','#ffffff','#3d1a2c'];
const worn={};let cat='hats',cur=null;
D.forEach((d,k)=>d.id='d'+k);
const byCat=c=>D.filter(d=>d.cat===c);

function draw(c){
  const g=$('L-'+c);g.innerHTML='';
  (worn[c]||[]).forEach(it=>g.insertAdjacentHTML('beforeend','<g style="--c:'+it.c+'">'+it.s+'</g>'));
}
function tabs(){
  $('tabs').innerHTML='';
  Object.keys(CATS).forEach(c=>{
    const b=document.createElement('button');b.className='tab'+(c===cat?' on':'');b.textContent=CATS[c];
    b.onclick=()=>{cat=c;cur=null;tabs();list()};$('tabs').appendChild(b);
  });
  if(!document.getElementById('upl')){}
}
function list(){
  const box=$('items');box.innerHTML='';
  byCat(cat).forEach(it=>{
    const b=document.createElement('button');b.className='item'+((worn[cat]||[]).includes(it)?' on':'');b.title=it.n;
    if(it.img){b.innerHTML='<img alt="">';b.firstChild.src=it.img}else b.textContent=it.i;
    b.onclick=()=>toggle(it);box.appendChild(b);
  });
  if(cat==='mine'){
    const l=document.createElement('label');l.className='btn';l.style.alignSelf='center';
    l.innerHTML='＋ Add pictures<input type="file" accept="image/*" multiple>';
    l.querySelector('input').onchange=addMine;box.appendChild(l);
  }
  swatches();
}
function toggle(it){
  const w=worn[cat]=worn[cat]||[];
  const at=w.indexOf(it);
  if(at>-1){w.splice(at,1);cur=null}
  else{if(cat!=='mine')w.length=0;
    const clr=c=>{worn[c]=[];draw(c)};
    if(cat==='dresses'){clr('tops');clr('bottoms')}
    if(cat==='tops'||cat==='bottoms')clr('dresses');
    w.push(it);cur=it;sparkle()}
  draw(cat);list();
}
function swatches(){
  const s=$('sw');s.innerHTML='';
  if(!cur||cat==='mine')return;
  PAL.forEach(col=>{
    const b=document.createElement('button');b.className='sw';b.style.background=col;b.setAttribute('aria-label','Colour '+col);
    b.onclick=()=>{cur.c=col;draw(cat)};s.appendChild(b);
  });
}
function addMine(e){
  [...e.target.files].forEach(f=>{
    const fr=new FileReader();
    fr.onload=()=>{
      const id='m'+D.length;
      D.push({id,cat:'mine',n:f.name,img:fr.result,c:'#fff',s:'<image href="'+fr.result+'" x="130" y="285" width="140" height="140" preserveAspectRatio="xMidYMid meet"/>'});
      list();
    };
    fr.readAsDataURL(f);
  });
}
function sparkle(x,y){
  const st=$('stage');
  for(let k=0;k<4;k++){
    const h=document.createElement('span');h.className='heart';h.textContent=['💗','✨','🌸','💖'][k];
    h.style.left=(x??st.clientWidth*(.3+.13*k))+'px';h.style.top=(y??st.clientHeight*.3)+'px';
    st.appendChild(h);setTimeout(()=>h.remove(),1300);
  }
}
function play(a){
  if(a==='confetti'){confetti();return}
  const t=a==='wave'?$('aR'):$('av');
  t.classList.remove(a);void t.getBoundingClientRect();t.classList.add(a);
  setTimeout(()=>t.classList.remove(a),a==='dance'?2500:2300);
  if(a==='jump'||a==='dance'||a==='spin')sparkle();
  if(a==='spin')confetti();
}
document.querySelectorAll('[data-p]').forEach(b=>b.onclick=()=>play(b.dataset.p));
$('stage').onclick=e=>{const r=$('stage').getBoundingClientRect();play('jump');sparkle(e.clientX-r.left,e.clientY-r.top)};
$('undress').onclick=()=>{Object.keys(worn).forEach(c=>{worn[c]=[];draw(c)});cur=null;list()};
function confetti(){
  const cols=['#ff4f8b','#ffd166','#7cc8ff','#7bd88f','#b79cff','#ffffff'];
  for(let k=0;k<80;k++){
    const p=document.createElement('i');p.className='conf';
    const s=6+Math.random()*8;
    p.style.cssText='left:'+Math.random()*100+'vw;width:'+s+'px;height:'+(Math.random()>.5?s:s/2)+'px;background:'+cols[k%6]+';border-radius:'+(Math.random()>.5?'50%':'2px')+';animation-duration:'+(2+Math.random()*2)+'s;animation-delay:'+Math.random()*.6+'s;--dx:'+((Math.random()-.5)*180)+'px;--r:'+Math.random()*900+'deg';
    document.body.appendChild(p);setTimeout(()=>p.remove(),5000);
  }
}
/* music: built-in music-box tune, or your own song */
let ac,on=false,timer,src,buf,step=0;
const NOTES=[523,659,784,659,880,784,659,523,587,698,880,698,988,880,698,587];
function tone(f,d,v,t){const o=ac.createOscillator(),g=ac.createGain();o.type=t||'triangle';o.frequency.value=f;
  g.gain.setValueAtTime(v,ac.currentTime);g.gain.exponentialRampToValueAtTime(.001,ac.currentTime+d);
  o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+d)}
function tick(){const f=NOTES[step%NOTES.length];tone(f,.4,.12);if(step%4===0)tone(f/4,.6,.1,'sine');step++}
function startMusic(){
  ac=ac||new (window.AudioContext||window.webkitAudioContext)();ac.resume();
  if(buf){src=ac.createBufferSource();src.buffer=buf;src.loop=true;src.connect(ac.destination);src.start()}
  else timer=setInterval(tick,280);
  on=true;$('music').textContent='Stop ⏸';$('av').classList.add('groove');
}
function stopMusic(){
  clearInterval(timer);if(src){try{src.stop()}catch(e){}src=null}
  on=false;$('music').textContent='Music 🎵';$('av').classList.remove('groove');
}


$('music').onclick=()=>on?stopMusic():startMusic();
$('song').onchange=async e=>{
  const f=e.target.files[0];if(!f)return;
  try{
    ac=ac||new (window.AudioContext||window.webkitAudioContext)();
    buf=await ac.decodeAudioData(await f.arrayBuffer());
    if(on)stopMusic();startMusic();
  }catch(err){$('hint').textContent='That file could not be played. Try an mp3 or wav.'}
  e.target.value='';
};
tabs();list();
