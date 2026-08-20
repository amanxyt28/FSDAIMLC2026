const div = document.getElementById("container");
const button = document.getElementById("btn");
const h2 = document.getElementById("h2");

h2.innerText = "Data is Loading";

async function display() {
    try {
        const serverData = await fetch(
            "https://fakestoreapi.com/products"
        );

        const jsonData = await serverData.json();

        console.log(jsonData[0].title);
        console.log(jsonData);

        h2.textContent = jsonData[0].title;

    } catch (error) {
        console.error(error);
    }
}

button.addEventListener("click", display);