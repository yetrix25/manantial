
var title = document.querySelector('.animated-title');
title.addEventListener('click', function() {
  if (title.style.animationPlayState === 'paused') {
    title.style.animationPlayState = 'running';
  } else {
    title.style.animationPlayState = 'paused';
  }
});
