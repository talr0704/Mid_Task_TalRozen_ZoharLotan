   
    
        
const behaviorData = {
    "behaviors": [
        {
            "id": 1,
            "title": "תוקפנות",
            "abstract": "אנשים עם דמנציה עשויים להפגין תוקפנות פיזית או מילולית",
            "fullContent": "אנשים עם דמנציה עשויים להפגין תוקפנות פיזית או מילולית, שיכולה להיות תגובה לבלבול, תסכול או פחד.",
            "cat": "אגרסיביות",
            "pic": "./Images/1.png"
           
        },
        {
            "id": 2,
            "title": "שיטוט",
            "abstract": "אנשים עם דמנציה עלולים למצוא את עצמם משוטטים אבודים ברחוב",
            "fullContent": "אנשים עם דמנציה עשויים למצוא את עצמם מסתובבים ברחוב ללא ידיעתם, דבר שעלול לסכן אותם. התנהגות כזו מהווה אתגר גדול עבור המטפלים שלהם.",
            "cat" : "בלבול",
            "pic": "./Images/2.png"
        },
        {
            "id": 3,
            "title": "חוסר שקט",
            "abstract": "חוסר מנוחה, הליכה הלוך ושוב",
            "fullContent": "חוסר מנוחה, הליכה הלוך ושוב. חוסר שקט עשוי לנבוע מחוסר יכולת לתקשר באופן יעיל או מגורמים סביבתיים" ,
            "cat" : "בלבול",
            "pic": "./Images/3.png"
        },
        {
            "id": 4,
            "title": "התנהגויות חוזרות",
            "abstract": "חזרה על מילים, ביטויים ופעולות",
            "fullContent": "חזרה על מילים, ביטויים ופעולות היא התנהגות נפוצה בדימנציה. ההתנהגות נובעת לעיתים קרובות מאובדן זיכרון וירידה קוגניטיבית",
            "cat" : "בלבול",
            "pic" : "./Images/4.png"
        },
        {
            "id": 5,
            "title": "ירידה במצב רוח לקראת הערב",
            "abstract": "לעיתים חולי דמנציה חווים בלבול וחוסר שקט בעיקר בשעות אחר הצהריים",
            "fullContent": "אנשים מסוימים עם דמנציה חווים בלבול, חרדה וחוסר שקט מוגברים בשעות אחר הצהריים המאוחרות או בערב, הידועים כקשים יותר לחולים. הטיפול הופך לאתגר גדול יותר בזמנים אלה.  "
            ,
            "cat" : "אגרסיביות",
            "pic" : "./Images/5.png"
        },
        {
            "id": 6,
            "title": "התנגדות לטיפול",
            "abstract": "לעיתים החולים עשויים להתנגד לעזרה בפעילויות טיפול אישיות"
          ,  "fullContent": "אנשים עם דמנציה עשויים להתנגד לעזרה בפעילויות טיפול אישיות, כגון רחצה או התלבשות. זה יכול לקרות בגלל אובדן ההבנה או תחושה של אובדן שליטה.  "
            ,
            "cat" : "אגרסיביות",
            "pic":"./Images/6.png"
        }
    , {
        "id": 7,
        "title": "הזיות",
        "abstract": "תפיסת דברים שאינם קיימים"
      ,  "fullContent": "תפיסת דברים שאינם קיימים, כגון ראייה או שמיעה של דברים שאחרים לא רואים ולא שומעים. היא שכיחה בסוגים מסוימים של דמנציה. התמודדות עם הזיות יכולה להיות מאתגרת הן עבור הפרט והן עבור מטפליו. "
        ,"cat" : "בלבול",
        "pic":"./Images/7.png"
    }
    , {
        "id": 8,
        "title": "התנהגות חברתית לא הולמת",
        "abstract": "דמנציה יכולה להוביל לדיכוי חברתי"
      ,  "fullContent": "דמנציה יכולה להוביל לדיכוי חברתי, מה שיכול לגרום להתנהגויות לא הולמות חברתית, כגון התפשטות בפומבי או הערות לא הולמות."
      ,"cat" : "אגרסיביות",
      "pic":"./Images/8.png"
    }

,{
    "id": 9,
    "title": "אגירה או הסתרת חפצים",
    "abstract": "דמנציה יכולה להוביל לאגירה "
  ,  "fullContent": " אנשים מסוימים עם דמנציה עשויים להתחיל לאגור או להסתיר דברים. "
  ,"cat" : "בלבול",
  "pic":"./Images/9.png"
}
,
{
    "id": 10,
    "title": "סירוב לאכול או לשתות",
    "abstract": " היעדר תחושת רעב וקושי בזיהוי מזון"
  ,  "fullContent": "קושי בזיהוי מזון, שכחה כיצד להשתמש בסכום, או פשוט אובדן עניין באכילה, יכול להוביל לירידה במשקל/חוסר בויטמנים/ירידה במצב הרוח. התנהגות זו יכולה להיות בעלת השלכות בריאותיות משמעותיות. "
  ,"cat" : "אגרסיביות",
  "pic":"./Images/10.png"
}

    
    
    
        ]
}


document.addEventListener("DOMContentLoaded", function (event) {
    renderCards(behaviorData);
});

// function renderCard(behavior) {
//     const placeholderCard = document.getElementById('placeholderCard');

//     const img = placeholderCard.querySelector('.card-img-top');
//     img.src = behavior.pic;

//     const title = placeholderCard.querySelector('.card-title');
//     title.textContent = behavior.title;

//     const abstract = placeholderCard.querySelector('.card-text');
//     abstract.textContent = behavior.abstract;
// }

function updateModalContent(title, content) {
    const modalTitle = document.getElementById('exampleModalLabel');
    const modalBody = document.getElementById('modal-body');
    modalTitle.textContent = title;
    modalBody.textContent = content;
}


function createCard(behaviorData) {
    const card = document.createElement('div');
    card.classList.add('card');

    // Add image
    const img = document.createElement('img');
    img.src = behaviorData.pic;
    card.appendChild(img);

    // Add title
    const title = document.createElement('h2');
    title.textContent = behaviorData.title;
    card.appendChild(title);

    // Add abstract
    const abstract = document.createElement('p');
    abstract.textContent = behaviorData.abstract;
    card.appendChild(abstract);

    // Add button
    const button = document.createElement('button');
    button.textContent = 'לעוד מידע';
    button.classList.add('btn',"btn-sm");
    button.setAttribute('data-bs-toggle', 'modal');
    button.setAttribute('data-bs-target', '#myModal');

    button.addEventListener('click', function () {
        updateModalContent(behaviorData.title, behaviorData.fullContent);
    });

    card.appendChild(button);

    return card;
}

// Function to render cards
function renderCards(data) {
    const container = document.getElementById('cards-container');
    const placeholderCard = document.getElementById('placeholderCard');

  

    // Clear previous content
    container.innerHTML = '';

    // Iterate over behaviors and create cards
    data.behaviors.forEach(behaviorData => {
        const card = createCard(behaviorData);
        container.appendChild(card);
    });


}


function filterCards(searchText) {
    const filteredData = behaviorData.behaviors.filter(behavior => {
        // Search in title and abstract
        return behavior.cat.toLowerCase().includes(searchText.toLowerCase());
    });
    const info = { "behaviors": filteredData };
    renderCards(info);
}

// Event listener for search input
document.getElementById('search-input').addEventListener('input', function (event) {
    const searchText = event.target.value.trim();
    filterCards(searchText);
});