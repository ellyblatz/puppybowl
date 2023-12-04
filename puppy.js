const team = document.querySelector(".team")
const singlePupDiv = document.querySelector("#singlePupDiv")
let pups = []


window.addEventListener("hashchange", () => {
    //console.log("hello world")
    render()
})



async function getTeam() {
    const response = await fetch ("https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players")
    const array = await response.json()
    //console.log(array.data)
    pups = array.data.players
    //console.log(pups)
    render()

}


async function render () {
    const pupTeam = pups.map((puppy) => {
        return `<div id="football"><a href=#${puppy.name}> ${puppy.name} </a></div>`
        
    })
    team.innerHTML = "<h2>Meet the pups!</h2>"+ pupTeam.join("")

    const name = window.location.hash.slice(1)
    //console.log(name)
    const singlePup = pups.find((puppy)=> {
        return puppy.name === name
    })

       //console.log(singlePup)

    //team.innerHTML = singlePup ? "" :  "<h1>All Puppies</h1>" + `<div class="puppyContainer">${puppyList.join("")}</div>`

    if(singlePup) {
        team.innerHTML=""
        singlePupDiv.innerHTML = `<div id"dawg">
            <h3> ${singlePup.name}</h3>
            <img src = ${singlePup.imageUrl} />
            <br>
            <h4> Breed: ${singlePup.breed}</h4>
            <h4> Status: ${singlePup.status}</h4>
            ` + 
            `<div id="football"> <a href=#> back to the team </a> </div>
            </div>`}
    
    else {
        team.innerHTML = `<div class="puppyContainer"> ${pupTeam.join("")}</div>`
        singlePupDiv.innerHTML = ""
    }
        
}


getTeam() 