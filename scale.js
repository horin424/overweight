// Gradual scaling from 375px to 1000px
function handleScaling() {
  const pageWrapper = document.querySelector('.page-wrapper');
  const viewportWidth = window.innerWidth;
  
  if (viewportWidth >= 376 && viewportWidth < 1000) {
    const scale = viewportWidth / 375;
    pageWrapper.style.transform = `scale(${scale})`;
    pageWrapper.style.transformOrigin = 'top center';
    pageWrapper.style.width = '375px';
    pageWrapper.style.margin = '0 auto';
  } else if (viewportWidth >= 1000) {
    pageWrapper.style.transform = 'scale(2.6667)';
    pageWrapper.style.transformOrigin = 'top center';
    pageWrapper.style.width = '375px';
    pageWrapper.style.margin = '0 auto';
  } else {
    pageWrapper.style.transform = 'none';
    pageWrapper.style.width = '';
    pageWrapper.style.margin = '';
  }
}

// Run on load and resize
window.addEventListener('load', handleScaling);
window.addEventListener('resize', handleScaling);
