// notif.js - Client Side Polling & Native Notification
let lastNotifId = localStorage.getItem('lastNotifId') || 0;

function checkNewNotifications() {
    fetch('api/get_latest.php')
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                const notif = data.data;
                
                // Jika ID berbeda dengan yang terakhir disimpan, tampilkan notif
                if (notif.id > lastNotifId) {
                    showNativeNotification(notif.message);
                    lastNotifId = notif.id;
                    localStorage.setItem('lastNotifId', lastNotifId);
                }
            }
        })
        .catch(err => console.error('Polling error:', err));
}

function showNativeNotification(message) {
    if (Notification.permission === "granted") {
        new Notification("Pesan Baru - Spare Parts", {
            body: message,
            icon: "https://cdn-icons-png.flaticon.com/512/1827/1827370.png"
        });
    }
}

// Minta izin saat pertama kali buka
document.addEventListener('DOMContentLoaded', () => {
    if (Notification.permission !== "granted" && Notification.permission !== "denied") {
        Notification.requestPermission();
    }
    
    // Jalankan polling setiap 3 detik
    setInterval(checkNewNotifications, 3000);
});