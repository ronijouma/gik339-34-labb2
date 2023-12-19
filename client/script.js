document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

async function fetchData() {
  try {
    const url = "http://localhost:3000/users";
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Något gick fel med förfrågan: " + response.statusText);
    }
    const users = await response.json();
    createUsersList(users);
  } catch (error) {
    console.error("Fel vid hämtning av data:", error);
  }
}

function createUsersList(users) {
  const ul = document.createElement("ul");
  ul.className = "user-list";

  users.forEach((user) => {
    const li = document.createElement("li");
    // Antag att varje user-objekt har egenskaperna firstName, lastName och username
    li.textContent = `${user.firstName} ${user.lastName} - ${user.username}`;
    li.style.backgroundColor = user.color;
    li.style.color = "white"; // För vit textfärg om bakgrunden är mörk
    ul.appendChild(li);
  });

  document.getElementById("userList").appendChild(ul);
}
