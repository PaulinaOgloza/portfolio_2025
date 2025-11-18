document.addEventListener("DOMContentLoaded", () => {
  // ===== Smooth Scroll for Navbar Links =====
  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  }

  const links = [
    { selector: ".navbar-watch-reel", target: "watch-reel" },
    { selector: ".navbar-about-me", target: "about-me" },
    { selector: ".navbar-contact", target: "contact" },
  ];

  const navbarCollapse = document.querySelector(".navbar-collapse");

  links.forEach((link) => {
    const el = document.querySelector(link.selector);
    if (el) {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToSection(link.target);
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse && navbarCollapse.classList.contains("show"))
          bsCollapse.hide();
      });
    }
  });

  // ===== Video Overlay Click =====
  const overlay = document.getElementById("videoOverlay");
  const wrapper = document.querySelector(".video-wrapper"); // wrapper div that contains the iframe

  overlay.addEventListener("click", () => {
    wrapper.classList.add("playing"); // removes blur
    overlay.style.display = "none";

    // Scroll iframe into view as a pseudo "play"
    const iframe = document.getElementById("streamableIframe");
    iframe.scrollIntoView({ behavior: "smooth" });
  });
});
