function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  setMode();
}

function changesIcon(iconElement) {
  if (!iconElement) return;

  // Lưu icon hiện tại để xác định hướng đổi
  const isCurrentlySun = iconElement.classList.contains("fa-sun");

  // Thay icon thành spinner
  iconElement.classList.remove("fa-sun", "fa-moon");
  iconElement.classList.add("fa-spinner", "fa-spin");

  // Sau delay thì đổi icon và theme
  setTimeout(() => {
    iconElement.classList.remove("fa-spinner", "fa-spin");

    // Đổi sang icon phù hợp sau khi loading
    if (isCurrentlySun) {
      iconElement.classList.add("fa-moon");
    } else {
      iconElement.classList.add("fa-sun");
    }

    toggleDarkMode();
  }, 600); // thời gian loading
}

function setMode() {
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("modeByThean", isDark ? "dark" : "light");
}

function applySavedMode() {
  const mode = localStorage.getItem("modeByThean");
  const icons = document.getElementsByClassName("sun-moon");

  for (let i = 0; i < icons.length; i++) {
    const icon = icons[i];

    if (mode === "dark") {
      document.body.classList.add("dark-mode");
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    } else {
      document.body.classList.remove("dark-mode");
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    }
  }
}

window.onload = applySavedMode;
