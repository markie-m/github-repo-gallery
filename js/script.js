const overview = document.querySelector(".overview");
const username = "markie-m";

const ghInfo = async function () {
    const response = await fetch(`https://api.github.com/users/${username}`);

    const repos = await response.json();
    console.log(repos);
};
ghInfo();

const userInfo = function (repos) {
    const div = document.createElement("div");
    div.classList.add("user-info");
    div.innerHTML = `<figure>
    <img alt="user avatar" src=${repos.avatar_url} />
  </figure>
  <div>
    <p><strong>Name:</strong> ${repos.name}</p>
    <p><strong>Bio:</strong> ${repos.bio}</p>
    <p><strong>Location:</strong> ${repos.location}</p>
    <p><strong>Number of public repos:</strong> ${repos.public_repos}</p>
  </div>`;
  overview.append(div);
}