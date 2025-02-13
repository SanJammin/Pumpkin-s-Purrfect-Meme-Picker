import { catsData } from "./data.js";

const emotionRadios = document.getElementById("emotion-radios");

emotionRadios.addEventListener("change", highlightCheckedOption);


function highlightCheckedOption(e) {
    const radioArray = document.getElementsByClassName("radio");
    for (let radio of radioArray) {
        radio.classList.remove("highlight");
    };
    document.getElementById(e.target.id).parentElement.classList.add("highlight");
};

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