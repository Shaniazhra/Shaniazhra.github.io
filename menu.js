// script.js

const correctPin = "250422";
let enteredPin = "";

function appendPin(num) {
    if (enteredPin.length < 6) {
        enteredPin += num;
        updatePinDisplay();
    }
}

function clearPin() {
    enteredPin = "";
    updatePinDisplay();
}

function updatePinDisplay() {
    const pinDisplay = document.getElementById("pin-display");
    const spans = pinDisplay.getElementsByTagName("span");

    for (let i = 0; i < spans.length; i++) {
        if (i < enteredPin.length) {
            spans[i].textContent = "*"; // Replace each digit with '*'
        } else {
            spans[i].textContent = "";
        }
    }
}

function checkPin() {
    const errorMessage = document.getElementById("error-message");
    const countdownEnded = true; // Replace with actual countdown logic if needed

    if (countdownEnded) {
        if (enteredPin === correctPin) {
            document.querySelector(".pin-container").style.display = "none";
            document.querySelector(".content-container").style.display = "block";
            document.getElementById("bg-music").play();
        } else {
            errorMessage.textContent = "Wrong PIN. Forgot?";
            clearPin();
        }
    } else {
        errorMessage.textContent = "Wait until countdown finishes!";
        clearPin();
    }
}

// Array untuk menyimpan pesan yang ditulis
let wishes = [];

// Fungsi untuk menampilkan pesan
function displayWishes() {
    const wishMessages = document.getElementById("wish-messages");
    wishMessages.innerHTML = "";
    wishes.forEach(wish => {
        const p = document.createElement("p");
        p.textContent = wish;
        wishMessages.appendChild(p);
    });
}

// Fungsi untuk menambahkan pesan baru
function postWish() {
    const wishInput = document.getElementById("wish-input");
    const wishMessage = wishInput.value.trim();

    if (wishMessage !== "") {
        wishes.push(wishMessage);
        wishInput.value = ""; // Mengosongkan input setelah submit
        displayWishes(); // Menampilkan ulang pesan-pesan yang ada
    }
}

// Fungsi untuk menampilkan Wishes Board
function showWishesBoard() {
    document.getElementById("wishes-board").style.display = "block";
    document.getElementById("message").style.display = "none";
    document.getElementById("journey").style.display = "none";
    document.getElementById("greeting-card").style.display = "none";
    displayWishes(); // Memastikan untuk menampilkan pesan yang sudah ada saat menuju Wishes Board
}

// Fungsi untuk menampilkan Journey
function showJourney() {
    document.getElementById("journey").style.display = "block";
    document.getElementById("message").style.display = "none";
    document.getElementById("wishes-board").style.display = "none";
    document.getElementById("greeting-card").style.display = "none";
}

// Fungsi untuk menampilkan Message
function showMessage() {
    document.getElementById("message").style.display = "block";
    document.getElementById("journey").style.display = "none";
    document.getElementById("wishes-board").style.display = "none";
    document.getElementById("greeting-card").style.display = "none";
}
