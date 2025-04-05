function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  setMode();
}

function changesIcon(iconElement) {
  toggleDarkMode();

  if (iconElement) {
    iconElement.classList.toggle("fa-sun");
    iconElement.classList.toggle("fa-moon");
  }
}

function setMode() {
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("davi-mode", isDark ? "dark" : "light");
}

function applySavedMode() {
  const mode = localStorage.getItem("davi-mode");
  const icons = document.getElementsByClassName("sun-moon");

  if (mode === "dark") {
    document.body.classList.add("dark-mode");

    // Đổi icon thành moon
    for (let i = 0; i < icons.length; i++) {
      icons[i].classList.remove("fa-sun");
      icons[i].classList.add("fa-moon");
    }
  } else {
    document.body.classList.remove("dark-mode");

    // Đổi icon thành sun
    for (let i = 0; i < icons.length; i++) {
      icons[i].classList.remove("fa-moon");
      icons[i].classList.add("fa-sun");
    }
  }
}

window.onload = applySavedMode;
