let deliveryButton = document.querySelector('.delivery-button');
let modalContanier = document.querySelector('.modal-container');
let modalClose = document.querySelector('.modal-close-button')

deliveryButton.onclick = function() {
  modalContanier.classList.remove('modal-contanier-close');
};
modalClose.onclick = function() {
  modalContanier.classList.add('modal-contanier-close')
}
