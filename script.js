// LOGIN
const form = document.getElementById("loginForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "Kevinlane" && password === "KevinLa340") {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", username);

      window.location.href = "dashboard.html";
    } else {
      alert("incorrect information");
    }
  });
}

// PROTECT DASHBOARD
if (window.location.pathname.includes("dashboard.html")) {
  if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "index.html";
  }
}

// LOGOUT
function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}
// FETCH BTC PRICE
// async function getBTCPrice() {
//   try {
//     const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd");
//     const data = await res.json();

//     document.getElementById("btc-price").innerText =
//       "$" + data.bitcoin.usd;
//   } catch (err) {
//     console.log(err);
//   }
// }

// setInterval(getBTCPrice, 5000);
// getBTCPrice();


// fake demo price, works everywhere
document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("btc-price");
  el.innerText = "$69,780"; // hardcoded for demo
});