const loading = document.querySelector(".user-list");
async function loadUsers(){
loading.innerHTML = `<p class="loading">Loading...</p>`;
try{
const response = await fetch("https://jsonplaceholder.typicode.com/users");

if(!response.ok){
  loading.innerHTML = `<p class = "error">Error: ${response.status}</p>`;
  return;
}
const user = await response.json();

const team = user.map(({ name, username, email, address }) => {
const city = address.city
 return `
 <div>
<h2>${name}</h2>
<p>${username}</p>
<p>${email}</p>
<p>${city}</p>
</div>`
}).join("");

loading.innerHTML = team;
}
catch (error){
loading.innerHTML = `<p class="error">Failed to load team data: ${error.message}</p>`;
}

}


const btn = document.querySelector("button");
btn.addEventListener("click",()=>{
loadUsers();
})