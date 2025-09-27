// script.js - interatividade simples
document.addEventListener('DOMContentLoaded', function(){
  var menu = document.getElementById('menuToggle');
  if(menu){
    menu.addEventListener('click', function(){
      document.body.classList.toggle('menu-open');
      menu.classList.toggle('active');
    });
  }

  // Simple form validation feedback
  var form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      if(!form.checkValidity()){
        e.preventDefault();
        alert('Por favor, preencha os campos obrigatórios corretamente.');
      } else {
        e.preventDefault();
        alert('Formulário enviado (simulação). Obrigado!');
        form.reset();
      }
    });
  }
});


// Side menu toggle behavior + overlay
(function(){
  function qs(id){return document.getElementById(id)}
  var menuBtn = qs('menuToggle');
  var side = qs('sideMenu');
  var overlay = qs('overlay');

  function openMenu(){
    side.classList.add('open');
    overlay.hidden = false;
    setTimeout(function(){ overlay.classList.remove('hidden'); }, 10);
    document.body.classList.add('menu-open');
    menuBtn.classList.add('active');
    menuBtn.setAttribute('aria-expanded', 'true');
    side.setAttribute('aria-hidden','false');
  }
  function closeMenu(){
    side.classList.remove('open');
    overlay.classList.add('hidden');
    setTimeout(function(){ overlay.hidden = true; }, 220);
    document.body.classList.remove('menu-open');
    menuBtn.classList.remove('active');
    menuBtn.setAttribute('aria-expanded', 'false');
    side.setAttribute('aria-hidden','true');
  }

  if(menuBtn && side && overlay){
    menuBtn.addEventListener('click', function(e){
      if(side.classList.contains('open')) closeMenu();
      else openMenu();
    });
    overlay.addEventListener('click', function(){ closeMenu(); });
    // Close with Escape key
    document.addEventListener('keydown', function(ev){
      if(ev.key === 'Escape' && side.classList.contains('open')) closeMenu();
    });
  }
})();
