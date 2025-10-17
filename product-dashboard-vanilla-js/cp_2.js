// Step 3: Define function, use fetch() then() catch() to log names
function fetchProductsThen() {
    return fetch("https://www.course-api.com/javascript-store-products")
    .then((res) => res.json())
    .then((data) => {
        data.forEach((p) => console.log(p.fields.name));
        return data;
    })
    .catch((err) => {
        console.error("Fetchfailed:", err);
    })
   
}
