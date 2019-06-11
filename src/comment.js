class Comment {
    constructor({author, id, quote}) {
        this.author = author
        this.id = id
        this.quote = quote
        Comment.all.push(this)
    }

    render(container) {
        const comCard = document.createElement('li')
        comCard.className = 'quote-card'

        const comQuote = document.createElement('blockquote')
        comQuote.className = 'blockquote'
    
        const quote = document.createElement('p')
        quote.className = 'mb-0'
        quote.innerHTML = this.quote

        const author = document.createElement('footer')
        author.className = 'blockquote-footer'
        author.innerHTML = this.author

        comQuote.appendChild(quote)
        comQuote.appendChild(author)
        comCard.appendChild(comQuote)
        container.appendChild(comCard)
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