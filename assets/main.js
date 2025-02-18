let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  showInstallButton(); // Fonction pour afficher un bouton d'installation
});

function showInstallButton() {
  const installButton = document.getElementById('install-button');
  if (installButton) {
    installButton.style.display = 'block';
    installButton.addEventListener('click', () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('L\'utilisateur a accepté l\'installation');
          } else {
            console.log('L\'utilisateur a refusé l\'installation');
          }
          deferredPrompt = null;
        });
      }
    });
  }
}