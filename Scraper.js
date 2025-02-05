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
};

const clickNextArrow = () => {
    const element = document.getElementById('pagination-next-arrow');
    if (element) {
        element.click();
    } else {
        console.error('Element with ID "pagination-next-arrow" not found.');
    }
};

const delay = ms => new Promise(res => setTimeout(res, ms));

// 1000×(ln(1000)+0.577) == 7484
const Scraper = async () => {
    for (let i = 0; i < 15; i += 1) {
        scrapeNumbers();
        await delay(1000);
        clickNextArrow();
        await delay(1000);
    }
};
