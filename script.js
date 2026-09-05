/**
 * Fungsi untuk memperbarui tanggal & jam secara realtime di header dan running text
 */
function updateRealtimeInfo() {
    const now = new Date();
    const optionsDate = { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' };
    const dateString = now.toLocaleDateString('id-ID', optionsDate).toUpperCase();
    const timeString = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const headerDateEl = document.getElementById('header-date');
    if (headerDateEl) {
        headerDateEl.innerText = dateString;
    }

    const runningTextEl = document.getElementById('running-text-content');
    if (runningTextEl) {
        runningTextEl.innerHTML = `UPDATE SITUASI TERKINI &nbsp;&bull;&nbsp; HARI / TANGGAL: <b>${dateString}</b> &nbsp;&bull;&nbsp; PUKUL: <b>${timeString} WIT</b> &nbsp;&bull;&nbsp; SITUASI POSKO UTAMA MUSIBAH KEBAKARAN MANDALA DALAM KONDISI TERKENDALI DAN PEMANTAUAN KETAT PETUGAS &nbsp;&bull;&nbsp;`;
    }
}

setInterval(updateRealtimeInfo, 1000);
updateRealtimeInfo();

/**
 * Fungsi untuk memuat data dari localStorage agar dashboard selalu sinkron
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

// Cek perubahan data setiap 500 milidetik secara real-time
setInterval(loadDashboardData, 500);
loadDashboardData();