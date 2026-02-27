document.getElementById("attack").addEventListener("mouseenter", () => {
    const randomX = Math.random() * 50;
    const randomY = Math.random() * 30;
    document.getElementById("attack").style.transform = `translate(${randomX}vw, ${randomY}vh)`; // ボタンを移動させる
})

document.getElementById("run").addEventListener("click", () => {
    // 1. JavaScript上で新しいボタン要素を作成する
    const newBtn = document.createElement("button");
    newBtn.textContent = "よわむしめ！";

    newBtn.style.position = "absolute"; 
    newBtn.style.zIndex = "1000";
    newBtn.style.padding = "1vh 3vw";
    newBtn.style.fontSize = "5vh";
    newBtn.style.backgroundColor = "transparent";
    newBtn.style.border = "2px solid white";
    newBtn.style.borderRadius = "10px";
    newBtn.style.color = "red";
    newBtn.style.fontFamily = "KHドット小伝馬町12"
    
    const randomX = Math.random() * 80;
    const randomY = Math.random() * 80;

    newBtn.style.left = `${randomX}vw`;
    newBtn.style.top = `${randomY}vh`;

    document.body.appendChild(newBtn);
});

document.getElementById("talk").addEventListener("click", () => {
    const news = document.createElement("button");

    const messages = [
        "むりです",
        "はなす意味ある？",
        "金払うならいいぞ",
        "アーアーキコエナイ",
        "ワタシニホンゴワカリマセン",
        "キミハダレ？",
        "疲れてんだけど",
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);

    news.textContent = messages[randomIndex];

    news.style.position = "absolute";
    news.style.zIndex = "1000";
    news.style.padding = "1vh 1vw";
    news.style.fontSize = "3vh";
    news.style.border = "2px solid red";
    news.style.borderRadius = "10px";
    news.style.color = "white";
    news.style.fontFamily = "KHドット小伝馬町12"

    const randomX = Math.random() * 80;
    const randomY = Math.random() * 80;

    news.style.left = `${randomX}vw`;
    news.style.top = `${randomY}vh`;

    document.body.appendChild(news);
});

const dog = document.getElementById("dog");
const text2 = document.getElementById("text2");
const friend = document.getElementById("friend");
const finalScreen = document.getElementById("page2");
const lastScreen = document.getElementById("page3");

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            
            if (entry.target.id === "page2") {
                dog.style.opacity = 1;
            }

            if (entry.target.id === "page3") {
                text2.style.opacity = 1;
                friend.style.opacity = 1;
            }

            observer.unobserve(entry.target);
        }
    });
}, options);


observer.observe(finalScreen);
observer.observe(lastScreen); 
