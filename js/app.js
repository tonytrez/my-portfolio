var app = {

    init : function() {
        let inputs = document.querySelectorAll('.input');
        // Hidden the instruction card
        window.addEventListener('click', app.instructionHandler);
        // Contact card visibility management
        inputs.forEach(input => {
            input.addEventListener('focus', app.contactHandler);
        });

    },

    instructionHandler : function() {
        let instruction = document.querySelector('.instruction');
        instruction.classList.add('hidden');
    },
    
    contactHandler : function() {
        let contact = document.querySelector('#contact');
        contact.classList.add('visible', 'opacity-contact');
    }
}

document.addEventListener('DOMContentLoaded', app.init);