document.addEventListener('DOMContentLoaded', async () => {
    let email = "and.pavlov@innopolis.university";
        
    const apiUrl = `https://fwd.innopolis.university/api/hw2?email=${encodeURIComponent(email)}`;

    try {
        const idResponse = await fetch(apiUrl);
        const id = await idResponse.text();
        const comicUrl = `https://fwd.innopolis.university/api/comic?id=${id}`;

        const comicResponse = await fetch(comicUrl);
        const comicData = await comicResponse.json();

        displayComic(comicData);
    } catch (error) {
        console.error('Error fetching comic:', error);
    }
});

function displayComic(comic) {
    console.log(comic);
    const comicContainer = document.getElementById('comic-container');

    const img = document.createElement('img');
    img.src = comic.img;
    img.alt = comic.alt;

    const title = document.getElementById("title");
    title.textContent = comic.safe_title;

    const date = document.createElement('p');
    const comicDate = new Date(comic.year, comic.month, comic.day);
    date.textContent = `Published on: ${comicDate.toLocaleDateString()}`;

    comicContainer.appendChild(img);
    comicContainer.appendChild(date);
}
