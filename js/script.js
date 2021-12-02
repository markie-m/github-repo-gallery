const overview = document.querySelector(".overview");
const username = "markie-m";

const ghInfo = async function () {
    const response = await fetch(`https://api.github.com/users/${username}`);
    // Create and name an async function to fetch information from your GitHub profile using the GitHub API address: https://api.github.com. Target the “users” endpoint and use a template literal to add the global username variable to the endpoint: users/${username}. Notice that you’ll add a “$” character in front of the variable name to create a placeholder. Because you’re using a template literal, surround the URL in backticks instead of quotation marks.

    const repos = await response.json();
    console.log(repos);
};

ghInfo();