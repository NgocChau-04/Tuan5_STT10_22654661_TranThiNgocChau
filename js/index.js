// Get modal elements
var modal = document.getElementById("orderModal");
var openModalButton = document.getElementById("openModalButton");
var closeButton = document.getElementsByClassName("close")[0];
var orderButton = document.getElementById("orderButton");

// Open modal on button click
openModalButton.onclick = function() {
    modal.style.display = "block";
};

// Close modal on 'x' click
closeButton.onclick = function() {
    modal.style.display = "none";
};

// Close modal on close button
document.getElementById("closeButton").onclick = function() {
    modal.style.display = "none";
};

// Optionally, you can close the modal when clicking outside of the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Handle order button click (you can add more functionality as needed)
orderButton.onclick = function() {
    alert("Order placed!");
    modal.style.display = "none";
};
