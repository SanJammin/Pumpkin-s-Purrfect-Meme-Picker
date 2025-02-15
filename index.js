import { catsData } from "./data.js";

const emotionRadios = document.getElementById("emotion-radios");
const getImageBtn = document.getElementById("get-image-btn");
const gifsOnlyOption = document.getElementById("gifs-only-option");

emotionRadios.addEventListener("change", highlightCheckedOption);
getImageBtn.addEventListener("click", getMatchingCatsArray);

function highlightCheckedOption(e) {
    const radioArray = document.getElementsByClassName("radio");
    for (let radio of radioArray) {
        radio.classList.remove("highlight");
    };
    document.getElementById(e.target.id).parentElement.classList.add("highlight");
};

function getMatchingCatsArray() {
    let checkRadio = document.querySelector('input=[name="emotions"]:checked')
    
    if(checkRadio != null){
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value;
        const isGifChecked = gifsOnlyOption.checked;
        const matchingCatsArray = catsData.filter(function(cat){
            if (isGifChecked){
                return cat.emotionTags.includes(selectedEmotion) && cat.isGif === true;
            } else {
                return cat.emotionTags.includes(selectedEmotion);
            };     
        });
    };
    
}

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