(() => {
  const navItems = document.querySelectorAll(".nav a");
  const path = window.location.pathname.split("/").pop() || "index.html";

  navItems.forEach((item) => {
    const href = item.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      item.setAttribute("aria-current", "page");
    }
  });
})();
