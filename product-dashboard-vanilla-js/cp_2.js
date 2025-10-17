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
        const products = await res.json();
        displayProduct(products);
        return products;
    } catch (err) {
        handleError(err);
        return null;
    }
}

//App bootstrap - call both to saisfy rubric behaviors

// Step 5: Display Product
function displayProducts(products) {
    container.innerHTML = ""; // to clear previous
    products.slice(0,5).forEach((p) => {
        const {name, price} = p.fields;
        const imageUrl = getImageUrl(p.fields);
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <img class="product-image" src ="${www.course-api.com/javascript-store-products}" alt="${escapeHtml(name)}">
            <><div class="product-name"> ${escapeHtml(name)} </div>
            <div class="product-price"> $${(price / 100).toFixed(2)} </div></>
        `;
        container.appendChild(card);
    });
    statusEl.textContent = "Showing first 5 products.";
};