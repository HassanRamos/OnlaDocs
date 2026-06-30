
(function(){
  const search=document.getElementById('navSearch');
  const links=[...document.querySelectorAll('.nav-link')];
  const active=document.body.dataset.active;
  links.forEach(a=>{ if(active && a.getAttribute('href').endsWith(active+'.html')) a.classList.add('active'); });
  if(search){ search.addEventListener('input',()=>{ const q=search.value.trim().toLowerCase(); links.forEach(a=>{ a.style.display=!q || a.dataset.title.includes(q)?'block':'none'; }); }); }
  const mobile=document.getElementById('mobileMenu');
  const sidebar=document.querySelector('.sidebar');
  if(mobile && sidebar){ mobile.addEventListener('click',()=>sidebar.classList.toggle('open')); }
})();
