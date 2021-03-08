var app = {

    closeCross : document.querySelector('.close-cross'),
    contact : document.querySelector('#contact'),

    init : function() {
        let inputs = document.querySelectorAll('.input');
        // Hidden the instruction card
        window.addEventListener('click', app.instructionHandler);
        // Contact card visibility management
        inputs.forEach(input => {
            input.addEventListener('focus', app.contactFocusHandler);
        });
        app.closeCross.addEventListener('click', app.contactCloseHandler);

    },

    instructionHandler : function() {
        let instruction = document.querySelector('.instruction');
        instruction.classList.add('hidden');
    },
    
    contactFocusHandler : function() {
        app.contact.classList.add('visible', 'opacity-contact');
        app.closeCross.classList.add('visible');
    },

    contactCloseHandler : function() {
        app.contact.classList.remove('visible', 'opacity-contact');
        app.closeCross.classList.remove('visible');
        app.contact.classList.add('hidden');
    }

}

document.addEventListener('DOMContentLoaded', app.init);