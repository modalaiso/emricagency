document.getElementById("devis-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const form = e.target;

    const data = {
        prenom: form.prenom.value,
        entreprise: form.entreprise.value,
        email: form.email.value,
        besoins: form.besoins.value
    };

    fetch("TON_URL_SCRIPT_APPS", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        alert("Demande envoyée avec succès !");
        form.reset();
    })
    .catch(error => {
        alert("Une erreur s'est produite.");
        console.error(error);
    });
  });