const button = document.querySelector("button")
const modal = document.querySelector("dialog")
const buttonClose = Document.querySelector("dialog button")

button.onclick = function () {
        modal.showModal()
}

buttonClose.onclick = function () {
    modal.close()
}