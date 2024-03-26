document.addEventListener("DOMContentLoaded", function() {
    const cartItems = document.getElementById('cart-items');

    // Add event listener to all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.btn.btn-primary');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const card = event.target.closest('.card');
            const title = card.querySelector('.card-title').innerText;
            const price = card.querySelector('.card-text').innerText;
            const itemHTML = `
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${price}</p>
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" value="1" min="1">
                        <button class="btn btn-danger remove-from-cart">Remove</button>
                    </div>
                </div>
            `;
            cartItems.innerHTML += itemHTML;

            // Add event listener to the remove button for this item
            const removeButton = cartItems.querySelector('.remove-from-cart');
            removeButton.addEventListener('click', function() {
                cartItems.removeChild(removeButton.closest('.card'));
            });
        });
    });
});
