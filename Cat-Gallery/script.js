const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
function showModal(thumbnail) {
  modalContent.src = thumbnail.src;
  modal.style.display = "block";
}

function hideModal() {
  modal.style.display = "none";
}