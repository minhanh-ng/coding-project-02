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
};

//Step 4: fetchProductsAsync(), use async/await and try/catch to retrieve product data, displayProducts(products), and handleError(error)
async function fetchProductsAsync() {
    try{
        const res = await fetch("https://www.course-api.com/javascript-store-products");
        const data = await res.json();
        displayProduct(data);
        return data;
    } catch (err) {
        handleError(err);
        return null;
    }
}