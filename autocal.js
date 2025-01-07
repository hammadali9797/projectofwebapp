
const basePrices = {
    table: { wood: 50, metal: 70, fiber: 100 },
    chair: { wood: 30, metal: 40, fiber: 60 },
    sofa: { wood: 150, metal: 200, fiber: 300 },
};

// Function to update the price
function updatePrice() {
    const furnitureType = document.getElementById("furniture-type").value;
    const material = document.getElementById("material").value;
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);
    const height = parseFloat(document.getElementById("height").value);

    
    if (!length || !width || !height) {
        document.getElementById("price").innerText = "$0";
        return;
    }

    // Calculate the volume or area based on the need
    const volume = length * width * height;

    // Calculate price based on selected type, material, and size
    const basePrice = basePrices[furnitureType][material];
    const price = basePrice + (volume / 1000) * 10;  
    // Update the displayed price
    document.getElementById("price").innerText = `$${price.toFixed(2)}`;
}

// Reset karna ka liya Function
function resetForm() {
    document.getElementById("furniture-type").value = "table";
    document.getElementById("material").value = "wood";
    document.getElementById("length").value = "";
    document.getElementById("width").value = "";
    document.getElementById("height").value = "";
    document.getElementById("price").innerText = "$0";
}
