function validationScript(item, message) {
    item.setCustomValidity(message);
    item.style.borderColor = "red";
}

function unvalidaterScript(item) {
    item.setCustomValidity('');
    item.style.borderColor = "black";
}