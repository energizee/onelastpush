'use strict';
// Demo-day refinements: new-player reset and a gender-coded wording check in Job Match.

// 1. New player: clears saved progress and the confidence survey so shared laptops start fresh.
(function addNewPlayerReset(){
  const btn=document.createElement('button');
  btn.type='button';
  btn.className='start-job-link';
  btn.textContent='New player? Clear saved progress';
  btn.onclick=()=>{
    try{localStorage.removeItem('hiddenTalentProgress');localStorage.removeItem('novaCityConfidenceV1')}catch(e){}
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
};
