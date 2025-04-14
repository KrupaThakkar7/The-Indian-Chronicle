let headlines = document.getElementById("headlines");
let fetchHeadlines = async function () {
    let result = await fetch(process.env.API_KEY);
    // console.log(result);
    let data = await result.json();
    displayHeadlines(data.articles);
}
fetchHeadlines();
let displayHeadlines = (data) => {
    console.log(data);
    data.forEach(element => {
        let subdiv = document.createElement('div');
        subdiv.style.backgroundImage = `url(${element.urlToImage}})`;
        subdiv.innerHTML = `<p>${element.title}</p>`;
        headlines.appendChild(subdiv);
    });
}

let business = document.getElementById('business');
let fetchBusiness = async function () {
    let result = await fetch(process.env.API_BUSINESS);
    let data = await result.json();
    console.log(data)
    displayBusiness(data.articles);
}
fetchBusiness();
let displayBusiness = (data) => {
    data.forEach(element => {
        for (let key in element) {
            if (element[key] === null) {
                element[key] = `${key} will be updated soon`
            }
        }
        let subdiv = document.createElement('div');
        subdiv.innerHTML = `<h2>${element.source.name}</h2>
        <h4> ${element.title}</h4>
        <img src = ${element.urlToImage} alt = 'Image will be updated soon'>
        <p>${element.description}</p>
        <a href = ${element.url} target = '_blank'><button>Explore more</button></a>`
        business.appendChild(subdiv);
    })
}

let entertainment = document.getElementById('ent');
let fetchEntertainment = async function () {
    let result = await fetch(process.env.API_ENTERTAINMENT);
    let data = await result.json();
    console.log(data)
    displayEntertainment(data.articles);
}
fetchEntertainment();
let displayEntertainment = (data) => {
    data.forEach(element => {
        for (let key in element) {
            if (element[key] === null) {
                element[key] = `${key} will be updated soon`
            }
        }
        let subdiv = document.createElement('div');
        subdiv.innerHTML = `<h2>${element.source.name}</h2>
        <h4> ${element.title}</h4>
        <img src = ${element.urlToImage} alt = 'Image will be updated soon'>
        <p>${element.description}</p>
        <a href = ${element.url} target = '_blank' ><button>Explore more</button></a>`
        entertainment.appendChild(subdiv);
    })
}

let health = document.getElementById('health');
let fetchHealth = async function () {
    let result = await fetch(process.env.API_HEALTH);
    let data = await result.json();
    console.log(data)
    displayHealth(data.articles);
}
fetchHealth();
let displayHealth = (data) => {
    data.forEach(element => {
        for (let key in element) {
            if (element[key] === null) {
                element[key] = `${key} will be updated soon`
            }
        }
        let subdiv = document.createElement('div');
        subdiv.innerHTML = `<h2>${element.source.name}</h2>
        <h4> ${element.title}</h4>
        <img src = ${element.urlToImage}>
        <p>${element.description}</p>
        <a href = ${element.url} target = '_blank' alt = 'Image will be updated soon'><button>Explore more</button></a>`
        health.appendChild(subdiv);
    })
}

let science = document.getElementById('science');
let fetchScience = async function () {
    let result = await fetch(process.env.API_SCIENCE);
    let data = await result.json();
    console.log(data)
    displayScience(data.articles);
}
fetchScience();
let displayScience = (data) => {
    data.forEach(element => {
        for (let key in element) {
            if (element[key] === null) {
                element[key] = `${key} will be updated soon`
            }
        }
        let subdiv = document.createElement('div');
        subdiv.innerHTML = `<h2>${element.source.name}</h2>
        <h4> ${element.title}</h4>
        <img src = ${element.urlToImage}>
        <p>${element.description}</p>
        <a href = ${element.url} target = '_blank' alt = 'Image will be updated soon'><button>Explore more</button></a>`
        science.appendChild(subdiv);
    })
}

let sports = document.getElementById('sports');
let fetchSports = async function () {
    let result = await fetch(process.env.API_SPORTS);
    let data = await result.json();
    console.log(data)
    displaySports(data.articles);
}
fetchSports();
let displaySports = (data) => {
    data.forEach(element => {
        for (let key in element) {
            if (element[key] === null) {
                element[key] = `${key} will be updated soon`
            }
        }
        let subdiv = document.createElement('div');
        subdiv.innerHTML = `<h2>${element.source.name}</h2>
        <h4> ${element.title}</h4>
        <img src = ${element.urlToImage}>
        <p>${element.description}</p>
        <a href = ${element.url} target = '_blank' alt = 'Image will be updated soon'><button>Explore more</button></a>`
        sports.appendChild(subdiv);
    })
}

let tech = document.getElementById('tech');
let fetchTech = async function () {
    let result = await fetch(process.env.API_TECH);
    let data = await result.json();
    console.log(data)
    displayTech(data.articles);
}
fetchTech();
let displayTech = (data) => {
    data.forEach(element => {
        for (let key in element) {
            if (element[key] === null) {
                element[key] = `${key} will be updated soon`
            }
        }
        let subdiv = document.createElement('div');
        subdiv.innerHTML = `<h2>${element.source.name}</h2>
        <h4> ${element.title}</h4>
        <img src = ${element.urlToImage} alt='Image will be updated soon!' >
        <p>${element.description}</p>
        <a href = ${element.url} target = '_blank'><button>Explore more</button></a>`
        tech.appendCtechhild(subdiv);
    })
}