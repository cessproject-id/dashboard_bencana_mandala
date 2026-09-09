/**
 * Waktu & Tanggal Realtime zona WIT (Asia/Jayapura)
 */
function updateRealtimeInfo() {
    const now = new Date();
    const optionsDate = { timeZone: 'Asia/Jayapura', weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' };
    const optionsTime = { timeZone: 'Asia/Jayapura', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };

    const dateString = now.toLocaleDateString('id-ID', optionsDate).toUpperCase();
    const timeString = now.toLocaleTimeString('id-ID', optionsTime).replace(/\./g, ':');

    const headerDateEl = document.getElementById('header-date');
    if (headerDateEl) headerDateEl.innerText = dateString;

    const runningTextEl = document.getElementById('running-text-content');
    if (runningTextEl) {
        runningTextEl.innerHTML = `UPDATE SITUASI TERKINI &nbsp;&bull;&nbsp; HARI / TANGGAL: <b>${dateString}</b> &nbsp;&bull;&nbsp; PUKUL: <b>${timeString} WIT</b> &nbsp;&bull;&nbsp; POSKO MEDIA CENTER MUSIBAH KEBAKARAN MANDALA &nbsp;&bull;&nbsp;`;
    }
}

setInterval(updateRealtimeInfo, 1000);
updateRealtimeInfo();

/**
 * Sinkronisasi Data Tabel dengan localStorage (Panel Admin)
 */
function loadDashboardData() {
    const savedData = localStorage.getItem('bencana_table_data');
    if (savedData) {
        const data = JSON.parse(savedData);
        if (data.kk) document.getElementById('val-kk').innerText = data.kk;
        if (data.ketKk) document.getElementById('ket-kk').innerText = data.ketKk;

        if (data.jiwa) document.getElementById('val-jiwa').innerText = data.jiwa;
        if (data.ketJiwa) document.getElementById('ket-jiwa').innerText = data.ketJiwa;

        if (data.pengungsi) document.getElementById('val-pengungsi').innerText = data.pengungsi;
        if (data.ketPengungsi) document.getElementById('ket-pengungsi').innerText = data.ketPengungsi;

        if (data.tenda) document.getElementById('val-tenda').innerText = data.tenda;
        if (data.ketTenda) document.getElementById('ket-tenda').innerText = data.ketTenda;
    }
}

setInterval(loadDashboardData, 500);
loadDashboardData();