const globalArr = [];

const scrapeNumbers = () => {
    // Get all elements with the specified class name
    const elements = document.getElementsByClassName("grid-ball--pick3-primary");

    const drawings = [];
    let drawing = "";

    // Loop through the elements using a for loop
    for (let i = 0; i < elements.length; i += 1) {
        const element = elements[i];

        // Do something with the element
        drawing += String(element.innerHTML.trim());

        if (drawing.length === 3) {
            drawings.push(drawing);
            globalArr.push(drawing);
            drawing = "";
        }
    }

    console.log(drawings);

}
