let charactersContainer = document.getElementById("characters-container");
const characterInfoModal = document.getElementById("character-info");
const closeBtn = document.getElementById("close");
const characterDetailContent = document.getElementById("character-detail-content");
fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    data.results.forEach(character => {
      const card = document.createElement("div");
  card.className = "card";
  charactersContainer.appendChild(card);
  card.innerHTML = `
    <img src="${character.image}" alt="${character.name}" class="character-image">
    <p class="character-detail"><span class="attribute">Name:</span> ${character.name}</p>
    <p class="charcter-detail"><span class="attribute">Status:</span> ${character.status}</p>
    <p class="character-detail"><span class="attribute">Spieces:</span> ${character.species}</p>
  `;

    const img = card.querySelector(".character-image");
    img.addEventListener("click", () => {
      characterDetailContent.innerHTML = `
        <img src="${character.image}" alt="${character.name}" class="character-image">
        <p><span class="attribute">Name:</span> ${character.name}</p>
        <p><span class="attribute">Status:</span> ${character.status}</p>
        <p><span class="attribute">Species:</span> ${character.species}</p>
        <p><span class="attribute">Gender:</span> ${character.gender}</p>
        <p><span class="attribute">Origin:</span> ${character.origin.name}</p>
      `;
      characterInfoModal.style.display = "block";
    });
    });
  });

  closeBtn.addEventListener("click", () => {
    characterInfoModal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if(event.target === characterInfoModal) {
      characterInfoModal.style.display = "none";
    }
  });
