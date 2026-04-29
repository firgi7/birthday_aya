window.onload = function() {
    const fill = document.getElementById('progress-fill');
    const percentText = document.getElementById('percent');
    const loadingScreen = document.getElementById('loading-screen');
    const mainMenu = document.getElementById('main-menu');
    
    let width = 0;
    
    // Interval loading
    let loadingInterval = setInterval(() => {
        if (width >= 100) {
            clearInterval(loadingInterval);
            
            // Beri jeda sebentar setelah 100% sebelum pindah layar
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                mainMenu.style.display = 'flex';
            }, 500);
        } else {
            // Naikkan persentase secara acak agar terlihat natural
            width += Math.floor(Math.random() * 5) + 1; 
            if (width > 100) width = 100;
            
            fill.style.width = width + '%';
            percentText.innerText = width;
        }
    }, 100); // Kecepatan loading (ms)
};

// Fungsi navigasi menu (seperti kode sebelumnya)
function showPage(page) {
    // ... isi fungsi showPage
}