
(function(){
  const toggle = document.querySelector('[data-toggle]');
  const sidebar = document.querySelector('.sidebar');
  if(toggle && sidebar){ toggle.addEventListener('click',()=>sidebar.classList.toggle('open')); }
  const input = document.querySelector('#docSearch');
  if(input){
    input.addEventListener('input', function(){
      const q = this.value.toLowerCase().trim();
      document.querySelectorAll('[data-module-link]').forEach(function(el){
        const txt = el.textContent.toLowerCase();
        el.style.display = !q || txt.includes(q) ? 'flex' : 'none';
      });
      document.querySelectorAll('[data-module-card]').forEach(function(el){
        const txt = el.textContent.toLowerCase();
        el.style.display = !q || txt.includes(q) ? '' : 'none';
      });
    });
  }
})();
