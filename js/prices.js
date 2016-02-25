// Будемо зберігати ціни всіх маркерів у вкладеному масиві (масив підмасивів).
// Спочатку - масив виробників, всередині його - масив типів марекрів, ще всередині - масив кольорів


var getPricesArray = function () {
    var pricesArray = [];// загальний масив всіх цін всіх маркерів
    var buromaxMarkers = []; // масив однієї з марок
    var markerColors = []; // масив кольорів (буде мінятись і копіюватись в інші масиви)

    markerColors['black'] = 5.6; //array consists of prices
    markerColors['red'] = 5.6;
    markerColors['green'] = 5.6;
    markerColors['blue'] = 5.6;
    buromaxMarkers['styrayuchi'] = markerColors;

    // масив для нестираючих маркерів (використовуємо той же масив)
    markerColors = []; // створюємо новий масив
    markerColors['black'] = 3.0; //array consists of prices
    markerColors['red'] = 3.0;
    markerColors['green'] = 3.0;
    markerColors['blue'] = 3.0;

    buromaxMarkers['nestyrayuchi'] = markerColors;

    // масив для cd-маркерів (використовуємо той же масив)
    markerColors = []; // створюємо новий масив
    markerColors['black'] = 13.0; //array consists of prices
    markerColors['red'] = 13.0;
    markerColors['green'] = 13.0;
    markerColors['blue'] = 13.0;
    buromaxMarkers['forcd'] = markerColors;

    pricesArray['buromax'] = buromaxMarkers;
    var leoMarkers = []; // масив іншої марки
    markerColors = []; // створюємо новий масив
    markerColors['black'] = 5.6; //array consists of prices
    markerColors['red'] = 5.6;
    markerColors['green'] = 5.6;
    markerColors['blue'] = 5.6;
    leoMarkers['styrayuchi'] = markerColors;

    // масив для нестираючих маркерів (використовуємо той же масив)
    markerColors = []; // створюємо новий масив
    markerColors['black'] = 3.0; //array consists of prices
    markerColors['red'] = 3.0;
    markerColors['green'] = 3.0;
    markerColors['blue'] = 3.0;

    leoMarkers['nestyrayuchi'] = markerColors;

    // масив для cd-маркерів (використовуємо той же масив)
    markerColors = []; // створюємо новий масив
    markerColors['black'] = 13.0; //array consists of prices
    markerColors['red'] = 13.0;
    markerColors['green'] = 13.0;
    markerColors['blue'] = 13.0;
    leoMarkers['forcd'] = markerColors;

    pricesArray['leo'] = leoMarkers;

    var dSignerMarkers = [];

    markerColors = []; // створюємо новий масив
    markerColors['black'] = 5.6; //array consists of prices
    markerColors['red'] = 5.6;
    markerColors['green'] = 5.6;
    markerColors['blue'] = 5.6;
    dSignerMarkers['styrayuchi'] = markerColors;

    // масив для нестираючих маркерів (використовуємо той же масив)
    markerColors = []; // створюємо новий масив
    markerColors['black'] = 3.0; //array consists of prices
    markerColors['red'] = 3.0;
    markerColors['green'] = 3.0;
    markerColors['blue'] = 3.0;

    dSignerMarkers['nestyrayuchi'] = markerColors;

    // масив для cd-маркерів (використовуємо той же масив)
    markerColors = []; // створюємо новий масив
    markerColors['black'] = 13.0; //array consists of prices
    markerColors['red'] = 13.0;
    markerColors['green'] = 13.0;
    markerColors['blue'] = 13.0;
    dSignerMarkers['forcd'] = markerColors;

    pricesArray['dsignerb'] = dSignerMarkers;
    var schneiderMarkers = [];

    markerColors = []; // створюємо новий масив
    markerColors['black'] = 5.6; //array consists of prices
    markerColors['red'] = 5.6;
    markerColors['green'] = 5.6;
    markerColors['blue'] = 5.6;
    schneiderMarkers['styrayuchi'] = markerColors;

    // масив для нестираючих маркерів (використовуємо той же масив)
    markerColors = []; // створюємо новий масив
    markerColors['black'] = 3.0; //array consists of prices
    markerColors['red'] = 3.0;
    markerColors['green'] = 3.0;
    markerColors['blue'] = 3.0;

    schneiderMarkers['nestyrayuchi'] = markerColors;

    // масив для cd-маркерів (використовуємо той же масив)
    markerColors = []; // створюємо новий масив
    markerColors['black'] = 13.0; //array consists of prices
    markerColors['red'] = 13.0;
    markerColors['green'] = 13.0;
    markerColors['blue'] = 13.0;
    schneiderMarkers['forcd'] = markerColors;

    pricesArray['schneider'] = schneiderMarkers;

    return pricesArray;
};
