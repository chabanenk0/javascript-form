
// Для зручності я створив декілька допоміжних функцій
// для зчитування даних різних елементів форми (текстових інпутів, чекбоксів тощо)
// Зверніть увагу, що функції в джаваскрипті можна обявляти різними способами.

// Функція для зчитування значення текстового поля
// Параметр - id текстового поля
// Ця функція обявлена у традиційному форматі, як і у інших мовах програмування
function textInputValue(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        return element.value;
    }
    return null;
}

// Функція для читання значення группи залежних кнопок-перемикачів (radio buttons)
// Параметр - імя класу, який повинен бути заданим в усіх елементах групи
// Дана функція повинна перебрати всі кнопки і повернути значення тієї, яка вибрана
// Дана функція обявлена у стилі javascript (змінній radioButtonsInputValue  присвоюється функція)
var radioButtonsInputValue = function (className) {
    var buttons = document.getElementsByClassName(className);
    var n = buttons.length;
    var i;
    for (i = 0; i < n; i++) {
        if (buttons[i].checked) {
            return buttons[i].value;
        }
    }
    return null;
};

// функція зчитування значення checkbox
// параметр - id чекбокс-елемента
function checkboxInputValue(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        return "on" == element.value ; // у включеного чекбокса value містить рядок тексту "on"
        // або
        // return element.checked; // у включеного поле checked містить true
    }
    return null;
}

var selectInputValue = function (elementId) {
    var selectInput = document.getElementById(elementId);
    return selectInput.value;
};

// Функція для зчитування всіх даних форми
var readDataFromForm = function () {
    var formData = []; // обявлення масиву, куди будуть покладені всі введені користувачем дані
    formData['marker_type'] = selectInputValue('marker-type');
    formData['marker_manufacturer'] = selectInputValue('marker-manufacturer');
    formData['marker_color'] = radioButtonsInputValue('marker-color');
    formData['marker_kryshechka'] = checkboxInputValue('marker-kryshechka');
    formData['marker_number'] = textInputValue('marker-number');
    formData['last_name'] = textInputValue('user-last-name');
    formData['first_name'] = textInputValue('user-first-name');
    formData['father_name'] = textInputValue('user-father-name');
    formData['delivery_type'] = textInputValue('delivery-type');
    formData['address'] = textInputValue('user-address');

    return formData;
};

// Будемо зберігати ціни всіх маркерів у вкладеному масиві (масив підмасивів).
// дивіться файл prices.js


// Функції для розрахунку вартості замовлення
var calculateTotalPrice = function (formData) {
    var allPricesArray = getPricesArray(); // дістаємо масив всіх цін всіх маркерів
    // дістаємо з масива підмасив потрібної марки (виробника)
    var manufacturerArray = allPricesArray[formData['marker_manufacturer']];
    if (!manufacturerArray) return -1; // помилка - не знайдено виробника

    // Далі в масиві виробника (піделементи його - це типи маркерів) шукаємо вибраний тип
    var typeArray = manufacturerArray[formData['marker_type']];
    if (!typeArray) return -1; // помилка - не знайдено тип маркера

    // далі у масиві конкретного типу шукаємо вибраний колір. Елемент цього масиву - ціна маркера

    var price = typeArray[formData['marker_color']];
    if (!price) return -1; // помилка - не знайдено тип маркера

    // множимо ціну на кількість

    var totalPrice = price * formData['marker_number'];

    // додаємо вартість додаткової кришечки ;) чи ще чого придумаєте
    if (formData['marker_kryshechka']) {
        totalPrice = totalPrice + 2; //2 грн скажімо
    }

    // додаємо вартість доставки
    if ('novaposhta' == formData['delivery_type']) {
        totalPrice = totalPrice + 35;
    } else if ('ukrposhta' == formData['delivery_type']) {
        totalPrice = totalPrice + 10;
    }

    return totalPrice;

};

// функція, яка виводить результат розрахунку на екран користувачу
function outputResultMessage(totalPrice, userName) {
    var text = 'Шановний ' + userName + '! <br>Повна вартість Вашого замовлення - ' + totalPrice + ' грн. <br>Дякуємо, що Ви з нами!'
    // шукаємо хтмл-елемент, куди треба вивести текст результата:
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = text;

}

var submitOrder = function () {
    var formData = readDataFromForm(); // викликаємо нашу функцію для читання даних з форми
    var totalPrice = calculateTotalPrice(formData); // наша функція розрахунку ціни

    if (totalPrice > 0 ) {
        outputResultMessage(totalPrice, formData['first_name']);
    } else {
        alert('Ви не повністю заповнили форму!');
    }


};