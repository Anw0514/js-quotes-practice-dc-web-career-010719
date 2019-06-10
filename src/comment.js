class Comment {
    constructor() {

    }

    static getComments() {
        fetch('http://localhost:3000/quotes').then(resp => resp.json())
        .then(comments => console.log(comments))
    }
}