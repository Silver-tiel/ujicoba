const button = document.querySelector("#notifButton");

if (button) {
    button.addEventListener("click", () => {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                new Notification("Spare Parts System", {
                    body: "This is a simple push notification!",
                    icon: "https://cdn-icons-png.flaticon.com/512/1827/1827370.png"
                });
            }
        });
    });
} else {
    console.error("Button with ID #notifButton not found!");
}