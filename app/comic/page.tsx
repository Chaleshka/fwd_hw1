import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import BasicPage from '../BasicPage';


export interface Comic {
  id: number;
  img: string;
  alt: string;
  safe_title: string;
  year: number;
  month: number;
  day: number;
}

async function fetchComicData() {
  const email = 'and.pavlov@innopolis.university';
  const apiUrl = `https://fwd.innopolis.university/api/hw2?email=${encodeURIComponent(email)}`;

  const idResponse = await fetch(apiUrl);
  const id = await idResponse.text();
  const comicUrl = `https://fwd.innopolis.university/api/comic?id=${id}`;

  const comicResponse = await fetch(comicUrl);
  const comicData: Comic = await comicResponse.json();

  return comicData;
}

export default async function ComicPage() {
  const comic = await fetchComicData();
  const comicDate = new Date(comic.year, comic.month - 1, comic.day);

  return (
    <BasicPage title="XKCD Comic" description="Comic generated on fwd course">
      <div className="container">
        <h1 id="title">{comic.safe_title}</h1>
        <div id="comic-container" className="comic-container">
          <img src={comic.img} alt={comic.alt} />
          <p>
            Published on: {comicDate.toLocaleDateString()} (
            {formatDistanceToNow(comicDate, { addSuffix: true })})
          </p>
        </div>
      </div>
    </BasicPage>
  );
}
