// public/js/app.js
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('Service Worker enregistré avec succès:', registration);
      })
      .catch((error) => {
        console.log('Enregistrement du Service Worker échoué:', error);
      });
  }