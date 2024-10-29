let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    alert(`${name} foi adicionado ao carrinho.`);
}

function showSection(sectionId) {
    // Oculta todas as seções
    document.getElementById('menu').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('cart').style.display = 'none';
    
    // Mostra a seção selecionada
    document.getElementById(sectionId).style.display = 'block';
    
    // Atualiza o carrinho se a seção 'cart' for selecionada
    if (sectionId === 'cart') {
        displayCartItems();
    }
}

function displayCartItems() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        listItem.innerHTML = `${item.name} - R$${item.price.toFixed(2)}
            <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">X</button>`;
        cartItems.appendChild(listItem);
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    displayCartItems();
}

function processPayment() {
    if (cart.length === 0) {
        alert("O carrinho está vazio!");
        return;
    }
    alert("Pedido realizado com sucesso!");
    cart = [];
    displayCartItems();
    showSection('menu');
}
