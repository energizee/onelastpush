'use strict';
// Demo-day refinements: new-player reset and a gender-coded wording check in Job Match.

// 1. New player: clears saved progress and the confidence survey so shared laptops start fresh.
(function addNewPlayerReset(){
  const btn=document.createElement('button');
  btn.type='button';
  btn.className='start-job-link';
  btn.textContent='New player? Clear saved progress';
  btn.onclick=()=>{
    try{['hiddenTalentProgress','novaCityConfidenceV1','novaCityMirrorV1'].forEach(k=>localStorage.removeItem(k))}catch(e){}
    location.reload();
  };
  const note=document.querySelector('.start-note');
  if(note)note.after(btn);
})();

// 2. Gender-coded wording. Masculine-coded words in job ads make roles less appealing to women
// (Gaucher, Friesen & Kay, 2011, Journal of Personality and Social Psychology). Shown as a
// prompt about the ad, never as a judgement of the reader.
const masculineCoded=['aggressive','ambitious','assertive','competitive','confident','decisive','determined','dominant','dominate','driven','fearless','forceful','headstrong','independent','ninja','rockstar','rock star','guru','hero','self-reliant','superior','outspoken','strong-willed','work hard play hard','fast-paced'];
function findCodedWords(text){
  const clean=' '+normalise(text)+' ';
  return masculineCoded.filter(w=>clean.includes(' '+normalise(w)+' '));
}
const baseAnalyseJob=analyseJob;
analyseJob=function(){
  baseAnalyseJob();
  const area=document.getElementById('jobResults');
  if(!area||!currentListing||currentListing.length<40)return;
  const words=findCodedWords(currentListing);
  const box=document.createElement('div');
  box.className='match-result';
  box.innerHTML=words.length
    ?`<h3>About how this ad is written</h3><p>This listing uses ${words.length} word${words.length===1?'':'s'} research links to ads that women are less likely to apply for: <b>${words.map(jobSafe).join(', ')}</b>.</p><p>That says something about the ad's wording, not about you. If the actual tasks fit what you've shown, apply.</p><small>Based on Gaucher, Friesen &amp; Kay (2011). Keyword check only.</small>`
    :`<h3>About how this ad is written</h3><p>We didn't find common masculine-coded wording in this listing.</p><small>Based on Gaucher, Friesen &amp; Kay (2011). Keyword check only.</small>`;
  area.prepend(box);
  // "X of Y": how much of the ad the player has already shown evidence for.
  if(currentAnalysis&&currentAnalysis.length){
    const shown=currentAnalysis.filter(s=>s.evidence.length).length,total=currentAnalysis.length;
    const tally=document.createElement('div');
    tally.className='match-result mirror-tally';
    tally.innerHTML=`<h3>You've shown evidence for ${shown} of ${total} skills in this ad</h3><p>${shown?'You don\'t need 100% to apply. Job ads are wish lists, and people who wait until they tick every box miss roles they could do.':'Play a few missions to build evidence. You still don\'t need 100% to apply.'}</p>`;
    area.prepend(tally);
  }
};

// 3. Confidence Mirror: predict before each mission (first play only), compare at the end.
const mirrorKey='novaCityMirrorV1';
let mirror={predict:{},outcome:{}};
try{mirror={...mirror,...JSON.parse(localStorage.getItem(mirrorKey)||'{}')}}catch(e){}
const saveMirror=()=>{try{localStorage.setItem(mirrorKey,JSON.stringify(mirror))}catch(e){}};

const baseStartMission=startMission;
startMission=function(m){
  if(mirror.predict[m.id]!==undefined)return baseStartMission(m);
  openModal(`<div class="tag">BEFORE YOU START</div><h2 id="modalTitle">${jobSafe(m.name)}</h2><p>${jobSafe(m.desc)}.</p><p><strong>How confident are you about this one?</strong></p><div class="mirror-scale" role="group" aria-label="Confidence from 1, not at all, to 5, very">${[1,2,3,4,5].map(n=>`<button type="button" data-predict="${n}" aria-label="${n} of 5${n===1?', not at all':n===5?', very confident':''}">${n}</button>`).join('')}</div><p class="passport-small">1 = not at all · 5 = very. There's no wrong answer.</p><div class="action-row"><button type="button" id="skipPredict">Skip</button></div>`);
  document.querySelectorAll('[data-predict]').forEach(b=>b.onclick=()=>{mirror.predict[m.id]=+b.dataset.predict;saveMirror();baseStartMission(m)});
  $('skipPredict').onclick=()=>{mirror.predict[m.id]=0;saveMirror();baseStartMission(m)};
};

// Track what actually happened, for the Mirror and for specific evidence lines.
const baseFail=fail;
fail=function(message){
  if(active&&!state.solved){const o=mirror.outcome[active.id]||(mirror.outcome[active.id]={});o.timeouts=(o.timeouts||0)+1;saveMirror()}
  baseFail(message);
};
const baseSuccess=success;
success=function(explanation){
  const m=active,mistakes=state.mistakes,wasSolved=state.solved;
  baseSuccess(explanation);
  if(!m||wasSolved)return;
  const o=mirror.outcome[m.id]||(mirror.outcome[m.id]={});
  if(o.firstMistakes===undefined){o.firstMistakes=mistakes;o.firstTimeouts=o.timeouts||0}
  o.bestLevel=Math.max(o.bestLevel||0,(plays[m.id]||1)-1);
  saveMirror();
};

function evidenceDetail(id){
  const o=mirror.outcome[id];if(!o||o.firstMistakes===undefined)return '';
  const parts=[];
  const retries=o.firstMistakes+(o.firstTimeouts||0);
  parts.push(retries===0?'Solved on the first attempt.':`Kept going after ${retries} unsuccessful ${retries===1?'attempt':'attempts'} and solved it, which is what problem-solving looks like in real jobs.`);
  if(o.bestLevel>0)parts.push(`Also completed a harder version (level ${o.bestLevel+1}).`);
  return parts.join(' ');
}
function mirrorHtml(){
  const rows=missions.filter(m=>mirror.predict[m.id]>0&&completed.has(m.id));
  if(!rows.length)return '';
  const doubted=rows.filter(m=>mirror.predict[m.id]<=2);
  const headline=doubted.length
    ?`You expected to struggle with ${doubted.length} ${doubted.length===1?'mission':'missions'}. You completed ${doubted.length===1?'it':'all of them'}.`
    :`You backed yourself, and the evidence agrees.`;
  return `<div class="passport-change mirror"><h3>Your Confidence Mirror</h3><p><strong>${headline}</strong></p>${rows.map(m=>{const p=mirror.predict[m.id],o=mirror.outcome[m.id]||{},first=(o.firstMistakes||0)+(o.firstTimeouts||0)===0;return `<div><strong>${jobSafe(m.name)}</strong><span>Expected ${p}/5 → ${first?'Solved first try':'Solved'}</span><span class="mirror-bars"><i class="mirror-bar exp" style="width:${p*20}%" title="Expected"></i><i class="mirror-bar did" title="What you did"></i></span></div>`}).join('')}<small>Top bar: how confident you felt. Bottom bar: what you did. The gap between how you felt and what you did is the gap that keeps many women and non-binary people out of STEM.</small></div>`;
}
function cvText(){
  const done=missions.filter(m=>completed.has(m.id));
  if(!done.length)return '';
  return 'Skills evidence (Hidden Talent STEM challenges)\n'+done.map(m=>`- ${passportEvidence[m.id][1]}: ${passportEvidence[m.id][0]} ${evidenceDetail(m.id)}`.trim()).join('\n')+'\n\nThese were practice challenges, not employment. Use them as examples in a personal statement or interview.';
}

// 4. Passport: Mirror, specific evidence lines, and copy-for-CV.
const basePassport=showPassport;
showPassport=function(){
  basePassport();
  document.querySelectorAll('.passport-evidence article').forEach((art,i)=>{
    const m=missions.filter(x=>completed.has(x.id))[i];const d=m&&evidenceDetail(m.id);
    if(d){const s=document.createElement('p');s.className='evidence-detail';s.textContent=d;art.querySelector('div').appendChild(s)}
  });
  const html=mirrorHtml(),meter=document.querySelector('.passport-meter');
  if(html&&meter)meter.insertAdjacentHTML('afterend',html);
  const actions=document.querySelector('.passport-actions');
  if(actions&&completed.size){
    const btn=document.createElement('button');btn.type='button';btn.textContent='Copy my evidence for a CV';
    btn.onclick=async()=>{const t=cvText();try{await navigator.clipboard.writeText(t);btn.textContent='Copied'}catch(e){openModal(`<h2 id="modalTitle">Your CV evidence</h2><textarea rows="12" style="width:100%">${jobSafe(t)}</textarea><div class="action-row"><button id="cvBack">Back to passport</button></div>`);$('cvBack').onclick=()=>showPassport()}};
    actions.prepend(btn);
  }
};
// Route every way into the passport through the enhanced version.
showResults=()=>showPassport();
const passportBtn=document.getElementById('passportButton');
if(passportBtn){passportBtn.removeEventListener('click',previousPassport);passportBtn.addEventListener('click',()=>showPassport())}
