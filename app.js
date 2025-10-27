document.addEventListener("DOMContentLoaded", () => {
  // --- Vidéos des projets ---
  const video1 = document.getElementById("projectVideo1");
  const video2 = document.getElementById("projectVideo2");
  const video3 = document.getElementById("projectVideo3");
  const hoverSign = document.querySelector(".hover-sign");

  [video1, video2, video3].filter(Boolean).forEach((video) => {
    video.addEventListener("mouseover", () => {
      video.play();
      if (hoverSign) hoverSign.classList.add("active");
    });
    video.addEventListener("mouseout", () => {
      video.pause();
      if (hoverSign) hoverSign.classList.remove("active");
    });
  });

  // --- Sidebar ---
  const sideBar = document.querySelector(".sidebar");
  const menu = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");

  if (menu && sideBar) {
    menu.addEventListener("click", () => {
      sideBar.classList.remove("close-sidebar");
      sideBar.classList.add("open-sidebar");
    });
  }

  if (closeIcon && sideBar) {
    closeIcon.addEventListener("click", () => {
      sideBar.classList.remove("open-sidebar");
      sideBar.classList.add("close-sidebar");
    });
  }

  // --- Scroll fluide pour le header et la sidebar ---
  const navLinks = document.querySelectorAll("header ul li a, .sidebar ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const text = link.textContent.trim().toLowerCase();
      let targetSection;

      if (text.includes("accueil")) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (text.includes("propos")) {
        targetSection = document.querySelector(".info-section");
      } else if (text.includes("compétence")) {
        targetSection = document.querySelector(".skills-section");
      } else if (text.includes("projet")) {
        targetSection = document.querySelector(".my-project");
      }

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      // Fermer la sidebar après le clic (sur mobile)
      if (sideBar && sideBar.classList.contains("open-sidebar")) {
        sideBar.classList.remove("open-sidebar");
        sideBar.classList.add("close-sidebar");
      }
    });
  });

  // --- Bouton "Me contacter" ---
  const contactButton = document.querySelector(".hero button");
  if (contactButton) {
    contactButton.addEventListener("click", (e) => {
      e.preventDefault();
      const contactSection = document.querySelector(".contact-section");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  // --- Icône enveloppe : ouvrir Gmail ---
  const emailIcon = document.querySelector(".box-icons .bxs-envelope");
  if (emailIcon) {
    emailIcon.addEventListener("click", () => {
      window.location.href = "mailto:aleichea@gmail.com";
    });
  }

  // --- Icône téléphone : ouvrir l’application téléphone ---
  const phoneIcon = document.querySelector(".box-icons .bxs-phone");
  if (phoneIcon) {
    phoneIcon.addEventListener("click", () => {
      window.location.href = "tel:4385281518";
    });
  }

  // --- Envoi du message via mailto ---
  const sendButton = document.getElementById("send-message");
  if (sendButton) {
    sendButton.addEventListener("click", (e) => {
      e.preventDefault();

      const name = document.getElementById("contact-name").value.trim();
      const email = document.getElementById("contact-email").value.trim();
      const message = document.getElementById("contact-message").value.trim();

      const subject = encodeURIComponent(`Message de ${name || "un visiteur"}`);
      const body = encodeURIComponent(
        `Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`
      );

      window.location.href = `mailto:aleichea@gmail.com?subject=${subject}&body=${body}`;
    });
  }

  // --- Icône LinkedIn : ouvrir ton profil LinkedIn ---
  const linkedinIcon = document.querySelector(".box-icons .bxl-linkedin-square");
  if (linkedinIcon) {
    linkedinIcon.addEventListener("click", () => {
      window.open(
        "https://www.linkedin.com/in/abdelrahman-aleiche-8703a5304/",
        "_blank"
      );
    });
  }

  // --- Icônes du footer ---
  const footerBoxIcons = document.querySelectorAll(".footer .box-icons p i");
  footerBoxIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      if (icon.classList.contains("bxs-envelope")) {
        window.location.href = "mailto:aleichea@gmail.com";
      } else if (icon.classList.contains("bxs-phone")) {
        window.location.href = "tel:4385281518";
      } else if (icon.classList.contains("bxl-linkedin-square")) {
        window.open(
          "https://www.linkedin.com/in/abdelrahman-aleiche-8703a5304/",
          "_blank"
        );
      }
    });
  });

  // --- Scroll vers la section suivante ---
  const scrollDown = document.querySelector(".scroll-down");
  if (scrollDown) {
    scrollDown.addEventListener("click", () => {
      const nextSection = document.querySelector("#about");
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
  



});

