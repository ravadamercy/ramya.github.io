let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    alert(`${name} has been added to your cart.`);
    console.log(cart);
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    this.reset();
});
