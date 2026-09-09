function updateRealtimeInfo() {
    const now = new Date();
    const optionsDate = { timeZone: 'Asia/Jayapura', weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' };
    const dateString = now.toLocaleDateString('id-ID', optionsDate);

    const headerDateEl = document.getElementById('header-date');
    if (headerDateEl) headerDateEl.innerText = dateString;

    const savedData = localStorage.getItem('bencana_image_layout_data');
    let timeString = "18:00 WIT";
    let locationString = "Kelurahan Mandala, Kota Jayapura";

    if (savedData) {
        const data = JSON.parse(savedData);
        if (data.time) {
            timeString = data.time;
            const headerTimeEl = document.getElementById('header-time');
            if (headerTimeEl) headerTimeEl.innerText = timeString;
        }
        if (data.location) {
            locationString = data.location;
            const headerLocEl = document.getElementById('header-location');
            if (headerLocEl) headerLocEl.innerText = locationString;
        }

        if (data.kk !== undefined) document.getElementById('val-kk').innerHTML = `${data.kk} <span class="unit-block">KK</span>`;
        if (data.jiwa !== undefined) document.getElementById('val-jiwa').innerHTML = `${data.jiwa} <span class="unit-block">JIWA</span>`;
        if (data.tenda !== undefined) document.getElementById('val-tenda').innerHTML = `${data.tenda} <span class="unit-block">TITIK</span>`;
        if (data.totalPengungsi !== undefined) document.getElementById('val-total-pengungsi').innerHTML = `${data.totalPengungsi} <span class="unit">JIWA</span>`;
        if (data.tertampung !== undefined) document.getElementById('val-tertampung').innerHTML = `${data.tertampung} <span class="unit">JIWA</span>`;
        if (data.belumTertampung !== undefined) document.getElementById('val-belum-tertampung').innerHTML = `${data.belumTertampung} <span class="unit">JIWA</span>`;
        
        if (data.dewasa !== undefined) document.getElementById('val-dewasa').innerText = data.dewasa;
        if (data.anak !== undefined) document.getElementById('val-anak').innerText = data.anak;
        if (data.balita !== undefined) document.getElementById('val-balita').innerText = data.balita;
        if (data.bayi !== undefined) document.getElementById('val-bayi').innerText = data.bayi;
        if (data.lansia !== undefined) document.getElementById('val-lansia').innerText = data.lansia;
        if (data.hamil !== undefined) document.getElementById('val-hamil').innerText = data.hamil;
        if (data.disabilitas !== undefined) document.getElementById('val-disabilitas').innerText = data.disabilitas;
    }

    const runningTextEl = document.getElementById('running-text-content');
    if (runningTextEl) {
        runningTextEl.innerHTML = `UPDATE SITUASI TERKINI &nbsp;&bull;&nbsp; HARI / TANGGAL: <b>${dateString.toUpperCase()}</b> &nbsp;&bull;&nbsp; WAKTU UPDATE: <b>${timeString}</b> &nbsp;&bull;&nbsp; LOKASI: <b>${locationString}</b> &nbsp;&bull;&nbsp; POS MEDIA CENTER MUSIBAH KEBAKARAN MANDALA &nbsp;&bull;&nbsp;`;
    }
}

setInterval(updateRealtimeInfo, 1000);
updateRealtimeInfo();