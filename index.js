import { catsData } from "./data.js";

const emotionRadios = document.getElementById("emotion-radios");
const getImageBtn = document.getElementById("get-image-btn");
const gifsOnlyOption = document.getElementById("gifs-only-option");
const memeModal = document.getElementById("meme-modal");
const memeModalInner = document.getElementById("meme-modal-inner");
const memeModalClosBtn = document.getElementById("meme-modal-close-btn");

emotionRadios.addEventListener("change", highlightCheckedOption);
memeModalClosBtn.addEventListener("click", closeModal);
getImageBtn.addEventListener("click", renderCat);

function highlightCheckedOption(e) {
    const radioArray = document.getElementsByClassName("radio");
    for (let radio of radioArray) {
        radio.classList.remove("highlight");
    };
    document.getElementById(e.target.id).parentElement.classList.add("highlight");
};

function closeModal() {
    memeModal.style.display = "none";
};

function renderCat() {
    const catObject = getSingleCatObject();
    memeModalInner.innerHTML = `
        <img
        class="cat-img"
        src="./images/${catObject.image}"
        alt="${catObject.alt}">
    `
    memeModal.style.display = "flex";
};

function getSingleCatObject() {
    const catsArray = getMatchingCatsArray();
    if (catsArray.length === 1) {
        return catsArray[0];
    } else {
        const randomCat = Math.floor(Math.random() * catsArray.length);
        return catsArray[randomCat];
    };
};

function getMatchingCatsArray() {
    let checkRadio = document.querySelector('input[name="emotions"]:checked');
    
    if(checkRadio != null){
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value;
        const isGifChecked = gifsOnlyOption.checked;
        const matchingCatsArray = catsData.filter(function(cat){
            if (isGifChecked){
                return cat.emotionTags.includes(selectedEmotion) && cat.isGif;
            } else {
                return cat.emotionTags.includes(selectedEmotion);
            };     
        });
        return matchingCatsArray;
    };
    
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