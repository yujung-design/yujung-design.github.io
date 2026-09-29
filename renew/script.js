// 흑백 전환 기능 구현
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'monotone') {
        document.documentElement.removeAttribute('data-theme');
        themeToggleBtn.textContent = '흑백전환';
    } else {
        document.documentElement.setAttribute('data-theme', 'monotone');
        themeToggleBtn.textContent = '컬러전환';
    }
});