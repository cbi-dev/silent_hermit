// 1. Fetch products via Shopify's Storefront API
fetch('/collections/all/products.json')
  .then(response => response.json())
  .then(data => {
    const products = data.products;

    // 2. Render product grid dynamically
    const collectionContainer = document.getElementById('CollectionContainer');
    collectionContainer.innerHTML = ''; // Clear existing content

    products.forEach(product => {
      const productHTML = `
        <div class="product">
          <img src="${product.images[0].src}" alt="${product.title}">
          <h3>${product.title}</h3>
          <p>${product.price}</p>
        </div>
      `;
      collectionContainer.insertAdjacentHTML('beforeend', productHTML);
    });
  });

// 3. Add filtering logic
document.getElementById('filter-price').addEventListener('change', (event) => {
  const filterValue = event.target.value;
  // Implement filtering logic here
});