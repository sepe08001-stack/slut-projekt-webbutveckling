document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('recruitForm');
    const responseText = document.getElementById('response');

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const user = document.getElementById('name').value;
            
            responseText.textContent = `Välkommen till kriget, ${user}! Din ansökan har skickats till Saxton Hale.`;
            responseText.style.color = "#ef6e14";
            responseText.style.fontWeight = "bold";
            
            form.reset();
        });
    }
});