'use strict';
// Lightweight presentation/accessibility enhancements, without changing the game mechanics.
const startScreen=document.getElementById('welcome');
const startBtn=document.getElementById('startButton');
const themeBtn=document.getElementById('themeButton');
const startThemeBtn=document.getElementById('siteTheme');
function syncStartTheme(){startScreen.classList.toggle('light',document.body.classList.contains('light'));}
themeBtn.addEventListener('click',syncStartTheme);
startThemeBtn.addEventListener('click',syncStartTheme);
startBtn.addEventListener('click',()=>{syncStartTheme();document.getElementById('missionsButton').focus();});
// Show selected animal explicitly to screen reader users.
document.getElementById('animals').setAttribute('role','group');
document.getElementById('animals').setAttribute('aria-label','Choose your explorer');
// Escape returns focus to the game and allows keyboard users to continue.
const modalOverlay=document.getElementById('overlay');
const closeBtn=document.getElementById('closeModal');
closeBtn.addEventListener('click',()=>document.getElementById('missionsButton').focus());
// Make the canvas game optional: every mission is directly accessible through Missions.
// Synchronise reduced-motion with the user's operating system preference at start.
const motionPref=window.matchMedia?.('(prefers-reduced-motion: reduce)');
if(motionPref?.matches)document.getElementById('reducedMotion').checked=true;
