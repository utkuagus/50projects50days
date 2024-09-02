const APIURL = 'https://api.github.com/users/'

const form = document.querySelector(".form")
const search = document.querySelector(".search")
const profile = document.querySelector(".profile")

profile.innerHTML = ""

form.addEventListener("submit", e => {
    e.preventDefault()
    const query = search.value

    if(!query || query == "") {
        return
    }

    getUser(query)
    search.value = ""

})

async function getUser(query) {
    try {
        const { data } = await axios(APIURL + query)

        createUserCard(data)
        getRepos(query)

        profile.classList.add("flex")
    } catch(err) {
        if(!err || !err.response) {
            profile.innerText = "Unknown Error"
            return
        }
        if(err.response.status == 404) {
            profile.innerText = 'No profile with this username'
        }
    }
}

function createUserCard(data) {
    const userID = data.name || data.login
    const userBio = data.bio ? `<p>${data.bio}</p>` : ''
    const cardHTML = `
            <div class="profile-img flex center">
              <img src="${data.avatar_url}" alt="${data.name}" class="avatar">        
            </div>
            <div class="profile-info flex column">
                <h2 class="name">${userID}</h2>
                <p>${userBio}</p>
                <div class="detail flex">
                    <span>
                        <span class="count">${data.followers}</span>
                        <span class="subject">Followers</span>
                    </span>
                    <span>
                        <span class="count">${data.following}</span>
                        <span class="subject">Following</span>
                    </span>
                    <span>
                        <span class="count">${data.public_repos}</span>
                        <span class="subject">Repos</span>
                    </span>
                </div>
                <div class="repos flex">
                </div>
            </div>
    `
    profile.innerHTML = cardHTML
    
}

async function getRepos(username) {
    try {
        const { data } = await axios(APIURL + username + '/repos?sort=created')

        addReposToCard(data)
    } catch(err) {
            profile.innerText = 'Problem fetching repos'
    }
}

function addReposToCard(repos) {
    const reposEl = document.querySelector('.repos')

    repos
        .slice(0, 5)
        .forEach(repo => {
            const repoEl = document.createElement('a')
            repoEl.classList.add('repo-item')
            repoEl.href = repo.html_url
            repoEl.target = '_blank'
            repoEl.innerText = repo.name

            reposEl.appendChild(repoEl)
        })
}
