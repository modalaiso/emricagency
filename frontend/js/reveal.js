document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.section-title');
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    reveals.forEach(el => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.step-reveal');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  
  reveals.forEach(el => observer.observe(el));
});