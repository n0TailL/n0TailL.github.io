// Get the template select dropdown
const templateSelect = document.getElementById('template-select');

// Listen for the 'change' event on the dropdown
templateSelect.addEventListener('change', () => {
    // Hide all templates
    const templates = document.querySelectorAll('.template');
    templates.forEach(template => template.style.display = 'none');

    // Show the selected template
    const targetId = templateSelect.value;
    const targetTemplate = document.querySelector(targetId);
    targetTemplate.style.display = 'block';
});


function autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}

function setRadioValue(radio) {
    radio.value = radio.parentNode.textContent.trim();
}

function copyToClipboard() {
    var options = '';
    var copyText = document.getElementById('copyText').value.trim();
    if (copyText !== '') {
        options += copyText + '\n';
    }
    var radios = document.querySelectorAll('input[type="radio"]:checked');
    var checkedCategories = new Set();
    radios.forEach(function(radio) {
        var category = radio.parentNode.parentNode.querySelector('h3').textContent.trim();
        if (checkedCategories.has(category)) {
            radio.checked = false;
            return;
        }
        checkedCategories.add(category);
        options += '\n' + category + '\n';
        options += ' ✔ ' + radio.value + '\n';
    });
    navigator.clipboard.writeText(options).then(function() {
        // alert("Copied to clipboard:\n" + options);
    }, function() {
        alert("Failed to copy to clipboard. Please copy the following text manually:\n" + options);
    });
}



