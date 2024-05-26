// Fungsi untuk mengonversi waktu server (UTC) ke waktu klien
const convertServerToClient = (datetimeUTC) => {
    const clientTimezoneOffsetMinutes = new Date().getTimezoneOffset();
    const clientTimezoneOffsetHours = clientTimezoneOffsetMinutes / 60;
    const datetime = new Date(datetimeUTC);
    datetime.setHours(datetime.getHours() - clientTimezoneOffsetHours);
    return datetime.toISOString();
};

// Fungsi untuk menambah menit pada waktu server
const datetimeServerTambahMenit = (datetimeUTC, menit) => {
    const datetime = new Date(datetimeUTC);
    datetime.setMinutes(datetime.getMinutes() + menit);
    return datetime.toISOString();
};

function formatCountdown(milliseconds) {
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
    convertServerToClient,
    datetimeServerTambahMenit,
    formatCountdown
};
