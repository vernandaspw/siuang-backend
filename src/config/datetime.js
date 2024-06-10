// Fungsi untuk mengonversi waktu server (UTC) ke waktu klien
const waktuConvertServerToClient = (datetimeUTC) => {
    const clientTimezoneOffsetMinutes = new Date().getTimezoneOffset();
    const clientTimezoneOffsetHours = clientTimezoneOffsetMinutes / 60;
    const datetime = new Date(datetimeUTC);
    datetime.setHours(datetime.getHours() - clientTimezoneOffsetHours);
    return datetime.toISOString();
};

const waktuConvertClientToServer = (datetimeClient) => {
    const datetime = new Date(datetimeClient);
    datetime.setHours(datetime.getHours());
    return datetime.toISOString();
};

// Fungsi untuk menambah menit pada waktu server
const waktuServerTambahMenit = (datetimeUTC, menit) => {
    const datetime = new Date(datetimeUTC);
    datetime.setMinutes(datetime.getMinutes() + menit);
    return datetime.toISOString();
};

const waktuServerTambahHari = (datetimeUTC, hari) => {
    const datetime = new Date(datetimeUTC);
    datetime.setDate(datetime.getDate() + hari);
    return datetime.toISOString();
};

function waktuFormatCountdown(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    let humanReadable = '';
    if (hours > 0) {
        humanReadable += `${hours} jam `;
    }
    if (minutes > 0) {
        humanReadable += `${minutes} menit `;
    }
    humanReadable += `${seconds} detik`;

    return humanReadable;
}

module.exports = {
    waktuConvertServerToClient,
    waktuConvertClientToServer,
    waktuServerTambahMenit,
    waktuServerTambahHari,
    waktuFormatCountdown
};
