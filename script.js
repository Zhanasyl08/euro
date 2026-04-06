 const hamburger = document.getElementById('hamburger');
        const popupMenu = document.querySelector('.popup-menu');
        const closePopup = document.getElementById('close-popup');

        hamburger.addEventListener('click', () => {
            popupMenu.classList.add('active');
        });

        closePopup.addEventListener('click', () => {
            popupMenu.classList.remove('active');
        });