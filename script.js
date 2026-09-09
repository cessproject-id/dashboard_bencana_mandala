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

function loadDashboardData() {
    const savedData = localStorage.getItem('bencana_card_data');
    if (savedData) {
        const data = JSON.parse(savedData);
        if (data.kk !== undefined) document.getElementById('val-kk').innerText = data.kk;
        if (data.jiwaCard !== undefined) document.getElementById('val-jiwa-card').innerText = data.jiwaCard;
        if (data.pengungsi !== undefined) document.getElementById('val-pengungsi').innerText = data.pengungsi;
        if (data.tenda !== undefined) document.getElementById('val-tenda').innerText = data.tenda;
        if (data.korbanTotal !== undefined) document.getElementById('val-korban-total').innerText = data.korbanTotal;
        if (data.jiwa !== undefined) document.getElementById('val-jiwa').innerText = data.jiwa;
        if (data.lukaRingan !== undefined) document.getElementById('val-luka-ringan').innerText = data.lukaRingan;
        if (data.lukaBerat !== undefined) document.getElementById('val-luka-berat').innerText = data.lukaBerat;
        if (data.sakitRingan !== undefined) document.getElementById('val-sakit-ringan').innerText = data.sakitRingan;
        if (data.sakitBerat !== undefined) document.getElementById('val-sakit-berat').innerText = data.sakitBerat;
    }
}

setInterval(loadDashboardData, 500);
loadDashboardData();