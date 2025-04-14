/************* Contraste ************/
var theme = document.getElementById("thememode");
var body =  document.getElementById("body");

theme.addEventListener("click", function(){

  if (body.classList.contains("light_theme")){
  body.classList.remove("light_theme");
  body.classList.add("dark_theme");
  
  }

  else{
    body.classList.remove("dark_theme");
  body.classList.add("light_theme");
  
  }
  // Mettre à jour la popup si elle est ouverte
  const popupContent = document.querySelector(".popup-content-info");
  if (popupContent) {
    if (body.classList.contains("dark_theme")) {
      popupContent.classList.add("popup-dark");
    } else {
      popupContent.classList.remove("popup-dark");
    }
  }
});


function updateTooltipText() {
  const tooltip = document.getElementById('theme-tooltip');
  const body = document.getElementById('body');
  
  if (body.classList.contains('light_theme')) {
      tooltip.textContent = 'Dark mode';
  } else {
      tooltip.textContent = 'Light mode';
  }
}

// Appelez cette fonction après chaque changement de thème
document.getElementById('thememode').addEventListener('click', updateTooltipText);

/************* Popup ************/

function openPopup(id) {
  const popup = document.getElementById(id);
  const background = document.getElementById("background");

  if (popup && background) {
    popup.style.display = "block";
    background.style.display = "block";

    // Ajouter l'animation
    const content = popup.querySelector(".popup-content, .popup-content-info");
    if (content) {
      content.classList.add("slide-in");
      content.scrollTop = 0;
    }

    // Appliquer le mode sombre si nécessaire
    if (document.body.classList.contains("dark_theme")) {
      content.classList.add("popup-dark");
    } else {
      content.classList.remove("popup-dark");
    }
    
  } 
}

function closePopup(id) {
  const popup = document.getElementById(id);
  const background = document.getElementById("background");

  if (popup && background) {
    popup.style.display = "none";
    background.style.display = "none";

    // Supprimer l'animation pour permettre une nouvelle ouverture
    const content = popup.querySelector(".popup-content, .popup-content-info");
    if (content) {
      content.classList.remove("slide-in");
    }
  } 
}


/************* date et temps ************/

function updateDateTime() {
    const dateElement = document.getElementById('current-date');
    const timeElement = document.getElementById('current-time');
    
    const now = new Date();
    
    const dateOptions = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const dateStr = now.toLocaleDateString('fr-FR', dateOptions);
    dateElement.textContent = dateStr.charAt(0).toUpperCase() + dateStr.slice(1);
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

updateDateTime();
setInterval(updateDateTime, 1000);


/************* démarage ************/
document.addEventListener('DOMContentLoaded', () => {
  const startup = document.getElementById('wiiStartup');
  
  setTimeout(() => {
    startup.style.opacity = '0';
    setTimeout(() => {
      startup.style.display = 'none';
    }, 1000);
  }, 20000);

  // Optional: Close on click
  startup.addEventListener('click', () => {
    startup.style.opacity = '0';
    setTimeout(() => {
      startup.style.display = 'none';
    }, 1000);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const startup = document.getElementById("wiiStartup");

  // Fonction pour gérer la transition
  function hideStartup() {
    startup.classList.add("hidden");

    // Optionnel : cacher complètement après la transition
    setTimeout(() => {
      startup.style.display = "none";
    }, 1000); 
  }

  // Attendre un moment avant de cacher la page de démarrage
  const timeoutId = setTimeout(hideStartup, 20000);

  // Ajouter un gestionnaire d'événements de clic
  startup.addEventListener("click", function() {
    clearTimeout(timeoutId);
    hideStartup();
  });
});


/************* Jeu ************/
let score = 0;
function increaseScore() {
    score++;
    document.getElementById("score").innerText = score;
    moveTarget();
}
function moveTarget() {
    let gameArea = document.getElementById("gameArea");
    let target = document.getElementById("target");
    let maxX = gameArea.clientWidth - target.clientWidth;
    let maxY = gameArea.clientHeight - target.clientHeight;
    let newX = Math.floor(Math.random() * maxX);
    let newY = Math.floor(Math.random() * maxY);
    target.style.left = newX + "px";
    target.style.top = newY + "px";
}


/************* Éteindre ************/
function confirmClose() {
  if (confirm("Êtes-vous sûr de vouloir quitter le Portfolio ?")) {
      window.close();
  }
}


