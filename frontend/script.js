fetch('http://localhost:8000/admin/')
  .then(response => response.json())
  .then(data => {
    console.log(data.message); 
  });
function confirmer() {
  const pays = document.getElementById('pays').value;
  const date = document.getElementById('date').value;
  const nombre = parseInt(document.getElementById('nombre').value);
  const paiement = document.getElementById('paiement').value;

  if (!pays || !date || !nombre || !paiement) {
    alert("Veuillez remplir tous les champs.");
    return;
  }

  if (nombre < 4) {
    window.location.href = '/matchmaking/';
  } else {
    const data = {
      pays: pays,
      date: date,
      nombre: nombre,
      paiement: paiement
    };

    fetch('http://localhost:8000/api/reservation/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (!response.ok) throw new Error("Erreur lors de la réservation");
      return response.json();
    })
    .then(data => {
      alert("Réservation confirmée ! Un e-mail a été envoyé.");
    })
    .catch(error => {
      console.error("Erreur :", error);
      alert("Une erreur est survenue lors de la réservation.");
    });
  }
}

