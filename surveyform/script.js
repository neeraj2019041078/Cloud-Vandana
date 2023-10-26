function submitForm() {

    let isValid = validateForm();

    if (isValid) {
      
        displayPopup();
    }
}

function validateForm() {
   
    return true;
}

function resetForm() {
    document.getElementById('surveyForm').reset();
}

function displayPopup() {
    let popupContent = document.getElementById('popupContent');
    popupContent.innerHTML = '';

  
    let form = document.getElementById('surveyForm');
    for (let i = 0; i < form.elements.length - 2; i++) {
        let element = form.elements[i];
        if (element.type !== 'button') {
            let label = document.querySelector(`label[for="${element.id}"]`).textContent;
            let value = element.type === 'checkbox' ? (element.checked ? 'Yes' : 'No') : element.value;

            let div = document.createElement('div');
            div.innerHTML = `<strong>${label}:</strong> ${value}`;
            popupContent.appendChild(div);
        }
    }

   
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
   
    document.getElementById('popup').style.display = 'none';
    resetForm();
}
