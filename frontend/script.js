// script.js
fetch('http://localhost:3000/api/products')
  .then(response => response.json())
  .then(data => {
    const productContainer = document.getElementById('product-list');

    data.forEach(product => {
      const item = document.createElement('div');
      item.className = 'product-card';
      item.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: Rs.${product.price}</p>
        <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})">
          Add to Cart
        </button>
      `;
      productContainer.appendChild(item);
    });
  })
  .catch(error => console.error('Error:', error));

// Cart logic
function addToCart(id, name, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ id, name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} added to cart!`);
}
