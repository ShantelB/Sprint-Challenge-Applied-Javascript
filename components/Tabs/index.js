// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
        tabs(response.data);
      console.log(response.data.topics)
    })

    .catch(error => {
      console.log(error)
    })

    const parent = document.querySelector('.tabs')

    function tabs (arr) {

          const div = document.createElement("div");
          div.classList.add("tab");
          div.textContent = arr.topics

          let header = document.querySelector(".tabs");
  header.appendChild(div);
  
    }

    
  