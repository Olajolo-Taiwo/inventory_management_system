let inventory = [];

function addProduct(id, name, price, quantity) {
  for (let product of inventory) {
    if (product.id === id) {
      alert("Product with this ID already exists!");
      return;
    }
  }

  let product = { id, name, price: parseFloat(price), quantity: parseInt(quantity) };
  inventory.push(product);
  alert("Product added successfully!");
}

function removeProduct(id) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].id === id) {
      inventory.splice(i, 1);
      alert("Product removed!");
      return;
    }
  }
  alert("Product not found!");
}

function updateStock(id, amount) {
  for (let product of inventory) {
    if (product.id === id) {
      product.quantity += parseInt(amount);
      alert("Stock updated!");
      return;
    }
  }
  alert("Product not found!");
}

function generateReport() {
  let output = "=== Inventory Report ===\n";
  output += "Total Products: " + inventory.length + "\n";

  let totalValue = 0;
  let lowStockItems = [];

  for (let product of inventory) {
    totalValue += product.price * product.quantity;

    // Check low stock
    if (product.quantity < 10) {
      lowStockItems.push(product.name + " (" + product.quantity + ")");
    }
  }

  output += "Total Inventory Value: $" + totalValue.toFixed(2) + "\n";
  output += "Low Stock Items: " + (lowStockItems.length ? lowStockItems.join(", ") : "None");

  document.getElementById("reportOutput").textContent = output;
}

function handleAddProduct() {
  let id = document.getElementById("productId").value;
  let name = document.getElementById("productName").value;
  let price = document.getElementById("productPrice").value;
  let quantity = document.getElementById("productQuantity").value;

  if (id && name && price && quantity) {
    addProduct(id, name, price, quantity);
  } else {
    alert("Please fill all fields.");
  }
}
function handleUpdateStock() {
  let id = document.getElementById("updateId").value;
  let amount = document.getElementById("updateAmount").value;

  if (id && amount) {
    updateStock(id, amount);
  } else {
    alert("Please enter product ID and amount.");
  }
}

function handleRemoveProduct() {
  let id = document.getElementById("removeId").value;
  if (id) {
    removeProduct(id);
  } else {
    alert("Please enter product ID.");
  }
}
