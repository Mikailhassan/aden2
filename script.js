document.addEventListener("DOMContentLoaded", () => {
  // Load products and attach event listeners
  const productsContainer = document.getElementById('products-container');
  const pageType = productsContainer ? productsContainer.getAttribute('data-type') : null;

  if (productsContainer && pageType) {
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
          });
  }

  // Add event listeners for hardcoded Buy Now buttons in perfume cards
  document.querySelectorAll('.perfume-card .btn-danger').forEach(button => {
      button.addEventListener('click', (event) => {
          const productName = event.target.parentNode.querySelector('p').textContent;
          alert(`You clicked Buy Now for ${productName}`);
      });
  });

  // Add event listeners for modal Buy Now buttons
  document.querySelectorAll('.btn-buy').forEach(button => {
      button.addEventListener('click', (event) => {
          const productName = event.target.getAttribute('data-name');
          const price = event.target.getAttribute('data-price');
          
          // Set the values in the modal form
          document.getElementById('productName').value = productName;
          document.getElementById('price').value = price;
          
          // Show the modal
          $('#purchaseModal').modal('show');
      });
  });

  // Handle the purchase form submission
  document.getElementById('purchaseForm').addEventListener('submit', (event) => {
      event.preventDefault();
      
      // Get form values
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const phoneNumber = document.getElementById('phoneNumber').value;
      const paymentMethod = document.getElementById('paymentMethod').value;
      const productName = document.getElementById('productName').value;
      const price = document.getElementById('price').value;
      
      // Simulate payment process
      alert(`Payment successful for ${productName} by ${username} using ${paymentMethod}. Total: ksh ${price}\nYour order will be delivered to ${phoneNumber} within 72 hours.`);
      
      // Close the modal
      $('#purchaseModal').modal('hide');
  });
});
