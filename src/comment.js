class Comment {
    constructor({author, id, quote}) {
        this.author = author
        this.id = id
        this.quote = quote
        Comment.all.push(this)
    }

    render(container) {
        console.log(this)
        const com = document.createElement('div')
        com.innerHTML = this.quote
        container.appendChild(com)
    }

    static getComments() {
        fetch('http://localhost:3000/quotes').then(resp => resp.json())
        .then(comments => {
            comments.forEach(com => {
                new Comment(com)
            })
            this.populateComments()
        })
    }

    static populateComments() {
        const comList = document.getElementById('quote-list')
        Comment.all.forEach(com => {
            com.render(comList)
        })
    }
}

Comment.all = []