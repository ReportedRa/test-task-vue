let startButton = document.querySelector(`.start-button`);
let modalContainer = document.querySelector(`.modal-container`);
let jsonResult = document.querySelector(`.json-result`);
let formSubmit = document.querySelector(`.input-container`);

startButton.addEventListener(`click`, function() {
    modalContainer.classList.toggle(`modal-container-active`);
})

modalContainer.addEventListener(`click`, function(e) {
    if (e.target == modalContainer) {
        modalContainer.classList.toggle(`modal-container-active`);
    }
})

formSubmit.addEventListener(`submit`, (e) => {

    e.preventDefault();
    const data = new FormData(e.target);
    jsonResult.innerHTML = JSON.stringify(Object.fromEntries(data.entries()));
});

