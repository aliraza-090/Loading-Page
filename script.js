// Simulating page loading time
window.onload = function() {
    setTimeout(() => {
        document.getElementById("loading-screen").classList.add("hidden");
        document.getElementById("content").style.display = "block";
    }, 2000); // 2 seconds delay
};
