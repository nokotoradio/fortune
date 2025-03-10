const images = ["01えり枠あり.jpg", "02えり枠あり.jpg", "03えり枠あり.jpg", "04えり枠あり.jpg", 
    "05えり枠あり.jpg", "06えりりん枠あり.jpg", "07えりりん枠あり.jpg", "08えりりん枠あり.jpg", 
    "09えりりん枠あり.jpg", "10えりりん枠あり.jpg", "川瀬枠あり01.jpg", "川瀬枠あり02.jpg", 
    "川瀬枠あり03.jpg"];

const fixedImageFortunes = {
"01えり枠あり.jpg": "「今日は何をやっても\nうまくいく一日!\n自信を持って進もう!」",
"05えり枠あり.jpg": "「新しいチャンスが\n訪れそう!\nアンテナを張ってみよう。」",
"川瀬枠あり02.jpg": "「ポジティブな気持ちが\n幸運を引き寄せる。\n笑顔で過ごそう!」"
};

const fortunes = [
"「嬉しいサプライズが\n待っているかも!\nワクワクして過ごそう。」",
"「あなたの魅力が\n最大限に輝く日。\n笑顔を大切に!」",
"「直感が冴える日。\n迷ったら心の声に\n従ってみて。」",
"「小さな幸せを\n大切にすることで\n大きな幸運がくる!」",
"「今日はリラックスが\n大事な日。\n深呼吸して整えよう。」",
"「新しい出会いが\n人生を変えるかも!\n積極的に行動しよう。」",
"「感謝の気持ちを\n伝えると良い日。\n誰かにありがとうを!」",
"「ちょっとした挑戦が\n大きな成長に!\n勇気を出してみよう。」",
"「楽しいことが\n待っている予感!\n準備を整えよう。」",
"「流れに身を任せると\n思わぬ発見が!\n柔軟な心を持とう。」",
"「大切な人との\n絆が深まる日。\n連絡を取ってみよう。」",
"「ユーモアを忘れずに!\n楽しい一日になるよ。」",
"「自分の長所を\n活かすことで\n良い結果が生まれる!」",
"「好きなことを\n全力で楽しもう!\n最高の時間が過ごせるよ。」",
"「心を落ち着けると\n新しいアイデアが\n浮かぶかも!」",
"「ワクワクすることを\n見つけると運気UP!\n楽しいことを探そう!」"
];

let interval;
let shuffledImages = [];

function shuffleArray(array) {
return array.sort(() => Math.random() - 0.5);
}

function spinRoulette() {
const imageElement = document.getElementById('image');
const fortuneTextElement = document.getElementById('fortune-text');
const fortuneButton = document.getElementById('fortune-button');
const stopButton = document.getElementById('stop-button');

shuffledImages = shuffleArray([...images]);

fortuneButton.style.display = "none";
stopButton.style.display = "block";

let index = 0;

interval = setInterval(() => {
imageElement.src = shuffledImages[index];
if (fixedImageFortunes[shuffledImages[index]]) {
fortuneTextElement.textContent = fixedImageFortunes[shuffledImages[index]];
} else {
const randomFortuneIndex = Math.floor(Math.random() * fortunes.length);
fortuneTextElement.textContent = fortunes[randomFortuneIndex];
}
index = (index + 1) % shuffledImages.length;
}, 150);
}

function stopRoulette() {
const imageElement = document.getElementById('image');
const fortuneTextElement = document.getElementById('fortune-text');
const stopButton = document.getElementById('stop-button');
const fortuneButton = document.getElementById('fortune-button');

stopButton.style.display = "none";
fortuneButton.style.display = "block";

clearInterval(interval);

const randomIndex = Math.floor(Math.random() * shuffledImages.length);
const selectedImage = shuffledImages[randomIndex];

imageElement.src = selectedImage;

if (fixedImageFortunes[selectedImage]) {
fortuneTextElement.textContent = fixedImageFortunes[selectedImage];
} else {
const randomFortuneIndex = Math.floor(Math.random() * fortunes.length);
fortuneTextElement.textContent = fortunes[randomFortuneIndex];
}
}
