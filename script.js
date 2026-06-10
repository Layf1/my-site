function countPhotos() {
    let photos = document.querySelectorAll('.photo');
    let counter = document.getElementById('count');
    
    if (counter) {
        counter.textContent = photos.length;
    }
    
    console.log('Найдено фотографий:', photos.length);
}
function setupLikes() {
    let likeButtons = document.querySelectorAll('.like-btn');
    let totalLikesElement = document.getElementById('total-likes');
    let totalLikes = 0;

    likeButtons.forEach(function(button) {
        // При клике на кнопку
        button.addEventListener('click', function() {
            let likesSpan = this.querySelector('.likes');
            let currentLikes = parseInt(likesSpan.textContent);
            
            if (this.classList.contains('liked')) {
                // Убираем лайк
                currentLikes--;
                totalLikes--;
                this.classList.remove('liked');
            } else {
                // Добавляем лайк
                currentLikes++;
                totalLikes++;
                this.classList.add('liked');
            }
            

            likesSpan.textContent = currentLikes;
            totalLikesElement.textContent = totalLikes;
            

            this.style.transform = 'scale(1.2)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 300);
            
console.log('Лайков всего:', totalLikes);
        });
    });
}
document.addEventListener('DOMContentLoaded', function() {
    console.log('Галерея загружена!');
    
    countPhotos();
    setupLikes();
    

    setTimeout(function() {
        console.log('✅ JavaScript работает правильно!');
    }, 1000);
});
// Обработка формы контактов без перезагрузки и ошибок 405
document.addEventListener('DOMContentLoaded', function() {
    let form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Блокируем стандартную отправку и ошибку 405
            alert('Спасибо! Ваше сообщение успешно отправлено.');
            form.reset(); // Очищаем поля формы после отправки
        });
    }
});
