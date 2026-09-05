/**
 * Fungsi untuk memperbarui tanggal, hari, dan jam secara realtime berbasis WIT (Waktu Indonesia Timur)
 */
function updateRealtimeInfo() {
    const now = new Date();
    
    // Opsi format tanggal dengan zona waktu WIT (Asia/Jayapura)
    const optionsDate = { 
        timeZone: 'Asia/Jayapura', 
        weekday: 'long', 
        day: '2-digit', 
        month: 'long', 
        year: 'numeric' 
    };
    
    // Opsi format jam dengan zona waktu WIT (Asia/Jayapura)
    const optionsTime = { 
        timeZone: 'Asia/Jayapura', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false 
    };

    const dateString = now.toLocaleDateString('id-ID', optionsDate).toUpperCase();
    const timeString = now.toLocaleTimeString('id-ID', optionsTime).replace(/\./g, ':');

    // Update pada Header
    const headerDateEl = document.getElementById('header-date');
    if (headerDateEl) {
        headerDateEl.innerText = dateString;
    }

    // Update pada Running Text Footer
    const runningTextEl = document.getElementById('running-text-content');
    if (runningTextEl) {
        runningTextEl.innerHTML = `UPDATE SITUASI TERKINI &nbsp;&bull;&nbsp; HARI / TANGGAL: <b>${dateString}</b> &nbsp;&bull;&nbsp; PUKUL: <b>${timeString} WIT</b> &nbsp;&bull;&nbsp; POS MEDIA CENTER MUSIBAH KEBAKARAN MANDALA &nbsp;&bull;&nbsp;`;
    }
}

// Jalankan fungsi setiap 1 detik agar jam dan tanggal selalu sinkron secara realtime
setInterval(updateRealtimeInfo, 1000);
updateRealtimeInfo();

/**
 * Fungsi untuk memuat data dari localStorage agar dashboard selalu sinkron dengan halaman admin
 */
function loadDashboardData() {
    const savedData = localStorage.getItem('bencana_data');
    if (savedData) {
        const data = JSON.parse(savedData);
        if (data.rumah !== undefined) document.getElementById('val-rumah').innerText = data.rumah;
        if (data.usaha !== undefined) document.getElementById('val-usaha').innerText = data.usaha;
        if (data.perahu !== undefined) document.getElementById('val-perahu').innerText = data.perahu;
        if (data.kapal !== undefined) document.getElementById('val-kapal').innerText = data.kapal;
        if (data.ibadah !== undefined) document.getElementById('val-ibadah').innerText = data.ibadah;
        if (data.korbanTotal !== undefined) document.getElementById('val-korban-total').innerText = data.korbanTotal;
        if (data.jiwa !== undefined) document.getElementById('val-jiwa').innerText = data.jiwa;
        if (data.lukaRingan !== undefined) document.getElementById('val-luka-ringan').innerText = data.lukaRingan;
        if (data.lukaBerat !== undefined) document.getElementById('val-luka-berat').innerText = data.lukaBerat;
        if (data.sakitRingan !== undefined) document.getElementById('val-sakit-ringan').innerText = data.sakitRingan;
        if (data.sakitBerat !== undefined) document.getElementById('val-sakit-berat').innerText = data.sakitBerat;
    }
}

// Cek perubahan data setiap 500 milidetik secara real-time dari panel admin
setInterval(loadDashboardData, 500);
loadDashboardData();