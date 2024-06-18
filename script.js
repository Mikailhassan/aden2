document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById('products-container');
    const pageType = productsContainer.getAttribute('data-type');
  
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => {
        const filteredProducts = data.filter(product => product.type === pageType);
        filteredProducts.forEach(product => {
          const productCard = document.createElement('div');
          productCard.classList.add('card', 'h-100');
          productCard.innerHTML = `
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.description}</p>
            </div>
            <div class="card-footer">
              <small class="text-body-secondary">Price: $${product.price}</small>
              <button class="btn btn-primary buy-btn" data-id="${product.id}">Buy Now</button>
            </div>
          `;
          productsContainer.appendChild(productCard);
        });
  
        // Add event listeners for Buy Now buttons
        document.querySelectorAll('.buy-btn').forEach(button => {
          button.addEventListener('click', (event) => {
            const productId = event.target.getAttribute('data-id');
            alert(`Product ID ${productId} purchased!`);
          });
        });




document.querySelectorAll('.perfume-card .btn-danger').forEach(button => {
  button.addEventListener('click', (event) => {
      const productName = event.target.parentNode.querySelector('p').textContent;
      alert(`You clicked Buy Now for ${productName}`);
  });
});


});


const buyNow1 = document.querySelectorAll("buyNow1")
buyNow1.addEventListener("click", function(){
  alert("am clicked")
})


      });
  