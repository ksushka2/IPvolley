// 1. Функция для удаления всех слов, состоящих более чем из 7 букв
function removeLongWords() {
    const textArea = document.getElementById('textInput1');
    if (!textArea) return;
    
    const text = textArea.value;
    if (!text.trim()) {
        alert('Пожалуйста, введите текст в поле выше!');
        return;
    }
    
    // Разбиваем текст на слова, фильтруем слова длиной 7 букв и меньше
    const words = text.split(/\s+/);
    const filteredWords = words.filter(word => {
        // Убираем знаки препинания для подсчета букв
        const cleanWord = word.replace(/[.,!?;:()\-"]/g, '');
        return cleanWord.length <= 7;
    });
    
    const result = filteredWords.join(' ');
    alert('Результат:\n\n' + result);
}

// 2. Функция для поиска наиболее часто встречающейся буквы
function findMostFrequentLetter() {
    const textArea = document.getElementById('textInput2');
    if (!textArea) return;
    
    const text = textArea.value.toLowerCase();
    if (!text.trim()) {
        alert('Пожалуйста, введите текст в поле выше!');
        return;
    }
    
    // Создаем объект для подсчета букв
    const letterCount = {};
    
    // Проходим по каждому символу текста
    for (let char of text) {
        // Проверяем, является ли символ буквой (русской или английской)
        if (/[а-яёa-z]/.test(char)) {
            letterCount[char] = (letterCount[char] || 0) + 1;
        }
    }
    
    // Находим букву с максимальным количеством вхождений
    let maxCount = 0;
    let mostFrequentLetter = '';
    
    for (let letter in letterCount) {
        if (letterCount[letter] > maxCount) {
            maxCount = letterCount[letter];
            mostFrequentLetter = letter;
        }
    }
    
    if (mostFrequentLetter) {
        alert(`Наиболее часто встречающаяся буква: "${mostFrequentLetter.toUpperCase()}"\nВстречается ${maxCount} раз(а)`);
    } else {
        alert('В тексте не найдено букв!');
    }
}


// 4. Функция для изменения цвета фона
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
    
    // Сохраняем выбранный цвет в localStorage
    localStorage.setItem('backgroundColor', color);
}

// Восстанавливаем сохраненный цвет фона при загрузке страницы
window.addEventListener('DOMContentLoaded', function() {
    const savedColor = localStorage.getItem('backgroundColor');
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    }
});
