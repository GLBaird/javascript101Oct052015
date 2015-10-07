var avatars = [
    "79.jpg",
    "326.jpg",
    "341.gif",
    "573.jpg",
    "631.jpg",
    "717.gif",
    "721.jpg",
    "755.jpg",
    "841.gif",
    "933.jpg",
    "1143.jpg",
    "1335.jpg",
    "1384.jpg",
    "1483.jpg",
    "4139.gif",
    "4236.jpg",
    "4238.jpg",
    "4717.jpg",
    "4814.jpg",
    "7742.jpg",
    "13512.gif",
    "14403.gif",
    "14635.gif"
];

function getRandomAvatarPath() {
    var randomIndex = Math.floor( Math.random() * avatars.length );
    var baseFilePath = "images/avatars/";
    return baseFilePath + avatars[randomIndex];
}