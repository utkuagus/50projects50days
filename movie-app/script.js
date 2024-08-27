const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query='

const movieContainer = document.querySelector(".movie-container")
const form = document.querySelector(".form")
const search = document.querySelector(".search")

async function fetchMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    return data.results
}

function getColorByScore(score) {
    if(score >= 8) {
        return "lime"
    }
    else if(score >= 5) {
        return "orange"
    }
    return "red"
}

function formatMovies(movie) {
    return `
            <div class="movie">
                <img src=${IMG_PATH + movie.poster_path} class="poster"/>
                <div class="info">
                    <div class="title">${movie.title}</div>
                    <div class="score ${getColorByScore(movie.vote_average)}">${movie.vote_average}</div>
                </div>
                <div class="overview">
                    <h3>Overview</h3>
                    <p>${movie.overview}</p>
                </div>
            </div>
    `
}

function addMovies(movies) {
    movieContainer.innerHTML = movies.join(" ")
}

async function getMoviesByUrl(url) {
    const data = await fetchMovies(url);

    const movies = data.map(formatMovies)

    addMovies(movies)
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const searchValue = search.value
    
    if(!searchValue || searchValue === ""){
        window.location.reload()
    }

    getMoviesByUrl(SEARCH_API + searchValue)
    search.value = ""
})


movieContainer.innerHTML = ""
getMoviesByUrl(API_URL)