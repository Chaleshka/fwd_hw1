import { formatDistanceToNow } from 'date-fns';

interface Comic {
    id: number;
    img: string;
    alt: string;
    safe_title: string;
    year: number;
    month: number;
    day: number;
}

document.addEventListener('DOMContentLoaded', async () => {
    let email = "and.pavlov@innopolis.university";
        
    const apiUrl = `https://fwd.innopolis.university/api/hw2?email=${encodeURIComponent(email)}`;

    try {
        const idResponse = await fetch(apiUrl);
        const id = await idResponse.text();
        const comicUrl = `https://fwd.innopolis.university/api/comic?id=${id}`;

        const comicResponse = await fetch(comicUrl);
        const comicData: Comic = await comicResponse.json();
        displayComic(comicData);
    } catch (error) {
        console.error('Error fetching comic:', error);
    }
});

function displayComic(comic: Comic) {
    const comicContainer = document.getElementById('comic-container') as HTMLDivElement;

    const img = document.createElement('img');
    img.src = comic.img;
    img.alt = comic.alt;

    const title = document.getElementById("title") as HTMLHeadingElement;
    title.textContent = comic.safe_title;

    const date = document.createElement('p');
    const comicDate = new Date(comic.year, comic.month, comic.day);
    date.textContent = `Published on: ${comicDate.toLocaleDateString()} (${formatDistanceToNow(comicDate, { addSuffix: true })})`;

    console.log(formatDistanceToNow(comicDate, { addSuffix: true }));
    comicContainer.appendChild(img);
    comicContainer.appendChild(date);
}
