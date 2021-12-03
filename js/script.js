const overview = document.querySelector(".overview");
const username = "markie-m";
const repoList = document.querySelector(".repo-list");

const ghUserInfo = async function () {
    const response = await fetch(`https://api.github.com/users/${username}`);

    const data = await response.json();
    console.log(data);
    displayUserInfo(data);
};

ghUserInfo();

const displayUserInfo = function (data) {
    const div = document.createElement("div");
    div.classList.add("user-info");
    div.innerHTML = `
    <figure>
        <img alt="user avatar" src=${data.avatar_url} />
    </figure>
    <div>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Bio:</strong> ${data.bio}</p>
        <p><strong>Location:</strong> ${data.location}</p>
        <p><strong>Number of public repos:</strong> ${data.public_repos}</p>
    </div>`;
    overview.append(div);
};

const ghRepos = async function () {
    const fetchRepos = await fetch(`https://api.github.com/users/${username}/repos?sort&per_page=100`);
    const repoData = await fetchRepos.json();
    console.log(repoData);
};


