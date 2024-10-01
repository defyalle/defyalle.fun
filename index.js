const titleList = ["𝙙𝙚𝙛𝙮𝙖𝙡𝙡𝙚", "𝐝𝐞𝐟𝐲𝐚𝐥𝐥𝐞", "𝘥𝘦𝘧𝘺𝘢𝘭𝘭𝘦", "𝚍𝚎𝚏𝚢𝚊𝚕𝚕𝚎", "dǝɟʎɐllǝ", "ｄｅｆｙａｌｌｅ"];
let titleIndex = 0;

setInterval(() => {
    titleIndex = (titleIndex + 1) % titleList.length;
    document.title = titleList[titleIndex];
}, 100);