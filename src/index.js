const { fetchData } = require("./fetcher");

document.addEventListener('DOMContentLoaded', async () => {
    const productListElement = document.getElementById('productList');

    const displayProducts = async () => {
        try {
            const products = await fetchData()
            console.log('products', products)

            productListElement.innerHTML = "";

            products.forEach((product, index) => {
                if(index % 4 === 0) {
                    productListElement.innerHTML += '<div class="mb-4 w-100"></div>'
                }

                const cardElement = document.createElement("div");
                cardElement.classList.add('col-md-3');
                cardElement.innerHTML = `
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">$ ${product.price}</p>
                    </div>
                </div>`

                productListElement.appendChild(cardElement)
            });
        } catch (error) {
            throw error
        }
    }  
    await displayProducts();
})