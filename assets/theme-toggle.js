

document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.querySelector("#theme-toggle");
    const circle = toggleBtn.querySelector(".toggle-circle");
    if (!toggleBtn) return;
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      circle.classList.add("translate-x-6");
    }

    toggleBtn.addEventListener("click", () => {
      const isDark = document.documentElement.classList.toggle("dark");
      
      localStorage.setItem("theme", isDark ? "dark" : "light");

      circle.classList.toggle("translate-x-6", isDark);
    });
  });
