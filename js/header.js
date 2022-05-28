const drop = document.querySelector('.header__nav-small-drop');
drop.addEventListener('click', function() {
  const zzz = document.querySelector('.header__nav-small');
  zzz.style.display = 'block';
});

var close = document.querySelector('.header__nav-small-heading span');
close.addEventListener('click', function() {
  const zzz = document.querySelector('.header__nav-small');
  zzz.style.display = 'none';
} );
