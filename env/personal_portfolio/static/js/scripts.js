console.log("js is working fine")
console.log("js is perfectly working")
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show')
        }
    });
});

const scrollanimations = document.querySelectorAll('.scroll');
scrollanimations.forEach((e1)=>observer.observe(e1));

document.addEventListener('DOMContentLoaded', () => {
    const currentMode = localStorage.getItem('mode') || 'dark';
    const modeToggleBtn = document.getElementById('mode-toggle');
  
    if (currentMode === 'dark') {
      document.body.classList.add('dark-mode');
      document.documentElement.style.setProperty('--bg-color', '#191919');
      document.documentElement.style.setProperty('--text-color', '#f8f9fa');
      modeToggleBtn.textContent = '🔆';
    } else {
      document.documentElement.style.setProperty('--bg-color', '#ffffff');
      document.documentElement.style.setProperty('--text-color', '#000000');
      modeToggleBtn.textContent = '🌒';
    }
  
    modeToggleBtn.addEventListener('click', () => {
      const currentMode = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
  
      if (currentMode === 'dark') {
        document.body.classList.add('dark-mode');
        document.documentElement.style.setProperty('--bg-color', '#191919');
        document.documentElement.style.setProperty('--text-color', '#f8f9fa');
        modeToggleBtn.textContent = '🔆';
      } else {
        document.body.classList.remove('dark-mode');
        document.documentElement.style.setProperty('--bg-color', '#ffffff');
        document.documentElement.style.setProperty('--text-color', '#000000');
        modeToggleBtn.textContent = '🌒';
      }
  
      localStorage.setItem('mode', currentMode);
    });
  });
  


  // Get the image element
const image = document.querySelector('.image-container img');

// Add 'fade-in' class after a short delay (e.g., 100ms)
setTimeout(function() {
  image.classList.add('fade-in');
}, 100);
