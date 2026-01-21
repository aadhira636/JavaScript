const musicAlbums = {
    1: {
        name: "Thriller",
        artist: "Michael Jackson",
        description: "Best-selling album of all time.",
    },
    2: {
        name: "Back in Black",
        artist: "AC/DC",
        description: "One of the best-selling albums worldwide.",
    },
    3: {
        name: "The Dark Side of the Moon",
        artist: "Pink Floyd",
        description: "A landmark album in rock history.",
    }
};

function changeMusicRecords(records, id, prop, value) {
    console.log("records before change:", records);
    console.log("id:", id);
    console.log("prop:", prop);
    console.log("value:", value);

    return records;
}
const answer = changeMusicRecords(musicAlbums, 2, 'artist', 'Bon Scott');

console.log("answer:", answer);

console.log(!true && false);