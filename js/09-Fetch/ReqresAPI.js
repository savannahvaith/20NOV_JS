const getUsers = document.querySelector('#getUsers');
const peeps = document.querySelector('#peeps');

const retrieveData = () => {
    fetch("https://reqres.in/api/users")
        .then((response) => {
            console.log(response);
            if (response.status !== 200) {
                console.error('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            } else {
                response.json().then(json => {
                    console.log(json);
                    console.log(json.data);
                    for (let i = 0; i < json.data.length; i++) {
                        let p = document.createElement("p");
                        let a = document.createElement("a");
                        // p.setAttribute("class", "customer");
                        p.className = "customer";

                        a.setAttribute("href", `https://reqres.in/api/users/${json.data[i].id}`);

                        let anchorInfo = document.createTextNode("id");
                        let info = document.createTextNode(json.data[i].first_name);
                        
                        p.appendChild(info);
                        a.appendChild(anchorInfo);
                        p.appendChild(a);
                        peeps.appendChild(p);
                    }
                })
            }
        })
        .catch(err => console.error(`Stop! ${err}`));
}

getUsers.addEventListener('click', retrieveData);

const createUsers = () => {
    fetch('https://reqres.in/api/users', {
        method: 'POST',
        body: JSON.stringify({ name: "sv", job: "js" }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.error('Stop trying to make fetch happen', err));
}

const registerSuccessful = () => {
    fetch("https://reqres.in/api/register", {
        method: "POST",
        body: JSON.stringify({
            email: "eve.holt@reqres.in",
            password: "pistol"
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.error(`Somerhing went wrong!`))
}

const loginSuccessful = () => {
    fetch("https://reqres.in/api/login", {
        method: "POST",
        body: JSON.stringify({
            email: "eve.holt@reqres.in",
            password: "pistol"
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.error(`Somerhing went wrong!`))
}

const updateFunction = () => {
    fetch("https://reqres.in/api/users/2", {
        method: "PUT", 
        body: JSON.stringify({
            name:"sav"
        }),
        headers:{
            "Content-Type": "application/json"
        }
    }).then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));
}
