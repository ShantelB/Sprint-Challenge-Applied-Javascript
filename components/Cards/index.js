// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

// followersArray.forEach( got => {
//     axios.get("https://lambda-times-backend.herokuapp.com/articles") 
//     .then(response => {
//       console.log(articles(response.data))
//       console.log(response)
//     let users = response.data
//     cards.appendChild(gitHubpeople(users))
//     gitHubpeople(response.data)
//       })
      
//     })

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        let reading = response.data;
        reading.forEach(element => {
            cards(response.data)
            console.log(element)
            
        });

    //   console.log(response.data.articles)
    })

    .catch(error => {
      console.log(error)
    })

const p = document.querySelector('.cards-container')

function cards (arr) {
const top = document.createElement('div')
const headliner = document.createElement('div')
const person = document.createElement('div')
const contain = document.createElement('div')
const image = document.createElement('img')
const name = document.createElement('span')

top.classList.add('card')
headliner.classList.add('headline')
person.classList.add('author')
contain.classList.add('image-container')

img.src = arr.authorPhoto
headliner.textContent = arr.headline
// person.textContent = arr.author
// contain.textContent = arr.image-container
name.textContent = `By ${authorName}`

top.appendChild(headliner)
head.appendChild(person)
person.appendChild(contain)
person.appendChild(image)
person.appendChild(name)

const parents = document.querySelector('.cards-container')
  parents.appendChild(top)


}
