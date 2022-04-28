// Followed with tutorial
// const init = () => {
//   const form = document.querySelector('form')
//   form.addEventListener('submit', e => {
//     e.preventDefault()
//     const id = form.searchByID.value

//     fetch(`http://localhost:3000/movies/${id}`)
//       .then(res => res.json())
//       .then(data => {
//         const title = document.querySelector('#movieDetails > h4')
//         const summary = document.querySelector('#movieDetails > p')

//         title.textContent = data.title;
//         summary.textContent = data.summary;
//       })

//   })

// }

// Thought entirely too much for the below
const init = (e) => {
  const form = document.querySelector('form')
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch('http://localhost:3000/movies')
      .then(res => res.json())
      .then(movies => {
        const id = form.searchByID.value
        console.log(id)
        console.log("Movies", movies)
        // grab DOM elements
        const title = document.querySelector('#movieDetails > h4')
        const summary = document.querySelector('#movieDetails > p')
        // find movie with ID
        const movie = movies.find(element => element.id == id)
        // Enter into every movie
        if (movie != undefined) {
          title.textContent = movie.title
          summary.textContent = movie.summary
        } else {
          title.textContent = "Sorry no movie with that ID"
          summary.textContent = "Sorry no summary available"
        }
        // Only worked for last id (3). I suspect it's because of the forEach function
        // movies.forEach(movie => {
        //   console.log(movie)
        //   console.log("ID: ", id)
        //   console.log("Movie ID: ", movie.id)
        //   // Find if id in form matches id in movie json object
        //   if (movie.id === parseInt(id)) {
        //     title.textContent = movie.title
        //     summary.textContent = movie.summary
        //     console.log("In If State", movie.id === parseInt(id))
        //   }
        //   else {
        //     console.log('In Else state', movie.id === parseInt(id))
        //     title.textContent = "Sorry no movie with that ID"
        //     summary.textContent = "Sorry no summary available"
        //   }
        // })
      })
  })
}

document.addEventListener('DOMContentLoaded', init);