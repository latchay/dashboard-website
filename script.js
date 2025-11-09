// Sidebar toggle
const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.getElementById("sidebar");

if (toggleBtn && sidebar) {
  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show");
  });
}

// Dark mode toggle (only exists on dashboard)
const darkToggle = document.getElementById("darkModeToggle");
if (darkToggle) {
  darkToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark");
  });
}

// Login modal logic (only exists on dashboard)
const modal = document.getElementById("loginModal");
const closeModalBtn = document.getElementById("closeModal");

if (closeModalBtn && modal) {
  closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("show");
  });
}

// Login function (only used on dashboard)
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user === "admin" && pass === "admin") {
    alert("Login successful!");
    modal.classList.remove("show");
  } else {
    alert("Invalid credentials");
  }
}

// On page load: show login modal & draw chart (only on dashboard)
window.onload = () => {
  if (modal) {
    modal.classList.add("show");
  }

  const chartCanvas = document.getElementById("myChart");
  if (chartCanvas) {
    const ctx = chartCanvas.getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [{
          label: "Sales",
          data: [120, 190, 300, 250, 220],
          backgroundColor: "#4e73df"
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true }
        }
      }
    });
  }
};
