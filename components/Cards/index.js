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


axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        const reading = Object.values(response.data.articles);
        const p = document.querySelector('.cards-container');
        reading.forEach(element => {
            element.forEach(x => {
            console.log(x)
            p.appendChild(cards(x))

           
            })
        
        })
       
    })



    .catch(error => {
      console.log(error)
    })



function cards (arr) {
    // creating the elements
const top = document.createElement('div')
const headliner = document.createElement('div')
const person = document.createElement('div')
const contain = document.createElement('div')
const image = document.createElement('img')
const name = document.createElement('span')

//Adding the Classes
top.classList.add('card')
headliner.classList.add('headline')
person.classList.add('author')
contain.classList.add('img-container')

// Adding the Content to the Elements
 image.src = arr.authorPhoto
 top.textContent = arr.articles
headliner.textContent = arr.headline
person.textContent = arr.author
 name.textContent = `By ${arr.authorName}`

// Appending the Elements
top.appendChild(headliner)
top.appendChild(person)
person.appendChild(contain)
contain.appendChild(image)
person.appendChild(name)

const parents = document.querySelector('.cards-container')
  parents.appendChild(top)

  return top


}
