// It might be a good idea to add event listener to make sure this file 
// only runs after the DOM has finshed loading. 
document.addEventListener("DOMContentLoaded", init)

function init() {
    Comment.getComments()
    initializeForm()
}

function initializeForm() {
    const quote = document.getElementById('new-quote')
    const author = document.getElementById('author')
    console.log(quote, author)
    new Form(quote, author)
}