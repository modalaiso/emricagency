document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form-container");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const data = new FormData(form);
  
      fetch(form.action, {
        method: "POST",
        body: data,
      })
        .then(() => alert("Demande envoyée !"))
        .catch(() => alert("Erreur lors de l'envoi."));
    });
  });
  