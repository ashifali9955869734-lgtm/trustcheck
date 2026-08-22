const input = document.querySelector(".search-box input");
const button = document.querySelector(".search-box button");

button.addEventListener("click", () => {

    const value = input.value.trim();

    if (value === "") {
        alert("Please enter a website URL.");
        return;
    }

    alert("Analysis feature is coming in the next version.");

});
