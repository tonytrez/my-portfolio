var app = {

    init : function() {
        // Hidden the instruction card
        window.addEventListener('click', app.instructionHandler);
        // close card handler
        document.querySelector('.contact-close-cross').addEventListener('click', app.contactCloseHandler);
        document.querySelector('.presentation-close-cross').addEventListener('click', app.presentationCloseHandler);
        document.querySelector('.skills-close-cross').addEventListener('click', app.skillsCloseHandler);
        document.querySelector('.portfolio-close-cross').addEventListener('click', app.portfolioCloseHandler);
        document.querySelector('.download-close-cross').addEventListener('click', app.downloadCloseHandler);

    },

    instructionHandler : function() {
        let instruction = document.querySelector('.instruction');
        instruction.classList.add('hidden');
    },

    contactCloseHandler : function() {
        let contact = document.querySelector('#contact')
        contact.classList.remove('visible');
        contact.classList.add('hidden');
    },

    presentationCloseHandler : function() {
        let presentation = document.querySelector('#presentation')
        presentation.classList.remove('visible');
        presentation.classList.add('hidden');
    },

    skillsCloseHandler : function() {
        let skills = document.querySelector('#skills')
        skills.classList.remove('visible');
        skills.classList.add('hidden');
    },

    portfolioCloseHandler : function() {
        let portfolio = document.querySelector('#portfolio')
        portfolio.classList.remove('visible');
        portfolio.classList.add('hidden');
    },

    downloadCloseHandler : function() {
        let download = document.querySelector('#download')
        download.classList.remove('visible');
        download.classList.add('hidden');
    }

}

document.addEventListener('DOMContentLoaded', app.init);