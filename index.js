import { catsData } from "./data.js";

const emotionRadios = document.getElementById("emotion-radios");

function getEmotionsArray(cats){
    const emotionArray = [];
    for (let cat of cats) {
        for (let emotionTag of cat.emotionTags) {
            emotionArray.push(emotionTag);
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
            name="choice-radios"
            >
        </div>
        `
    }

    emotionRadios.innerHTML = radioItems;
}

renderEmotionsRadios(catsData);