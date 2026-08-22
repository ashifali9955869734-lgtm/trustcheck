// =========================
// TrustCheck v1 - Part 1
// =========================

const input = document.querySelector(".hero-search input");
const button = document.querySelector(".hero-search button");

button.addEventListener("click", startAnalysis);

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        startAnalysis();
    }
});

function startAnalysis() {

    const value = input.value.trim();

    if (value === "") {
        showMessage(
            "⚠️ Please enter a website URL, email, phone number or message."
        );
        return;
    }

    button.disabled = true;
    button.textContent = "Analyzing...";

    setTimeout(() => {

        fakeAI(value);

    }, 1800);

}

function fakeAI(text) {

    let risk = "Safe";
    let score = 92;

    const suspiciousWords = [

        "free",
        "gift",
        "win",
        "lottery",
        "bonus",
        "urgent",
        "claim",
        "verify",
        "bank",
        "password",
        "upi",
        "otp"

    ];

    suspiciousWords.forEach(word => {

        if (text.toLowerCase().includes(word)) {

            score -= 10;

        }

    });

    if (score < 70) {

        risk = "Medium Risk";

    }

    if (score < 45) {

        risk = "High Risk";

    }

    showResult(score, risk);

}
// =========================
// TrustCheck v1 - Part 2
// =========================

function showResult(score, risk) {

    button.disabled = false;
    button.textContent = "Analyze";

    let color = "#22c55e";

    if (risk === "Medium Risk") {

        color = "#f59e0b";

    }

    if (risk === "High Risk") {

        color = "#ef4444";

    }

    const oldBox = document.querySelector(".result-box");

    if (oldBox) {

        oldBox.remove();

    }

    const box = document.createElement("div");

    box.className = "result-box";

    box.innerHTML = `

        <h2>Analysis Complete</h2>

        <h3 style="color:${color};">

            ${risk}

        </h3>

        <p>

            Trust Score : <strong>${score}%</strong>

        </p>

        <p>

            This is an AI estimation only.
            Always verify before sharing
            money or personal information.

        </p>

    `;

    document.querySelector(".hero").appendChild(box);

}

function showMessage(message) {

    const oldBox = document.querySelector(".result-box");

    if (oldBox) {

        oldBox.remove();

    }

    const box = document.createElement("div");

    box.className = "result-box";

    box.innerHTML = `

        <p>${message}</p>

    `;

    document.querySelector(".hero").appendChild(box);

}
// =========================
// TrustCheck v1 - Part 3
// =========================

// Auto focus
window.addEventListener("load", () => {
    if (input) input.focus();
});

// Clear result when typing
input.addEventListener("input", () => {

    const result = document.querySelector(".result-box");

    if (result) {

        result.remove();

    }

});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// Coming soon buttons
document.querySelectorAll(".gold-btn,.dark-btn").forEach(btn => {

    btn.addEventListener("click", (e) => {

        if (btn.getAttribute("href") === "#") {

            e.preventDefault();

            alert("🚀 This feature is coming in TrustCheck v2.");

        }

    });

});

console.log("✅ TrustCheck v1 Loaded Successfully");
