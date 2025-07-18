document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form-container");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // empêche la soumission
        e.stopPropagation(); // bloque toute propagation
        e.stopImmediatePropagation(); // bloque les écouteurs suivants (rarement utile mais safe ici)

        const data = new FormData(form);

        fetch(form.action, {
            method: "POST",
            body: data,
        })
        .then(() => {
            alert("Demande envoyée !");
            form.reset();
        })
        .catch(() => alert("Erreur lors de l'envoi."));
    });
});
  