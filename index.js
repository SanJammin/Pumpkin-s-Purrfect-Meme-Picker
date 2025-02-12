import { catsData } from "./data.js";

const emotionRadios = document.getElementById("emotion-radios");

emotionRadios.addEventListener("change", function(e){
    document.getElementById(e.target.id).parentElement.style.backgroundColor = "red";
});

function getEmotionsArray(cats){
    const emotionArray = [];
    for (let cat of cats) {
        for (let emotionTag of cat.emotionTags) {
            if (!emotionArray.includes(emotionTag)){
                emotionArray.push(emotionTag);
            };
        };
    };
    return emotionArray;
};

function renderEmotionsRadios(cats) {
    const emotions = getEmotionsArray(cats);

    let radioItems = ``;

    for (let emotion of emotions) {
        radioItems += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input
                type="radio"
                id="${emotion}"
                value="${emotion}"
                name="emotions"
            >
        </div>
        `
    };

    emotionRadios.innerHTML = radioItems;
};

renderEmotionsRadios(catsData);