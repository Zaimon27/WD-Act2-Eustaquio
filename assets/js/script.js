function changeColor() {
    const body = document.body;

    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "#f4f4f4";
        body.style.color = "#333";
    } else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
}
