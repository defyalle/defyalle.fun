const titleList = ["dǝɟʎɐןןǝ", "𝐝𝐞𝐟𝐲𝐚𝐥𝐥𝐞", "ᴅᴇғʏᴀʟʟᴇ", "𝘥𝘦𝘧𝘺𝘢𝘭𝘭𝘦", "ｄｅｆｙａｌｌｅ",];
let titleIndex = 0;

setInterval(() => {
    titleIndex = (titleIndex + 1) % titleList.length;
    document.title = titleList[titleIndex];
}, 100);

let vid = document.getElementById("banakalsa.mp3");
vid.volume = 0.2;