import React from "react";
import {Comic} from "./Comic";
import { formatDistanceToNow } from "date-fns";

function ComicApp() {
  const [comic, setComic] = React.useState<Comic | null>(null);
  const [comicDate, setComicDate] = React.useState<Date>(new Date());

  React.useEffect(() => {
      const fetchComic = async () => {
          const email = "and.pavlov@innopolis.university";
          const apiUrl = `https://fwd.innopolis.university/api/hw2?email=${encodeURIComponent(email)}`;

            const idResponse = await fetch(apiUrl);
            const id = await idResponse.text();
            const comicUrl = `https://fwd.innopolis.university/api/comic?id=${id}`;

            const comicResponse = await fetch(comicUrl);
            const comicData: Comic = await comicResponse.json();
            setComic(comicData);
            setComicDate(new Date(comicData.year, comicData.month, comicData.day))
      };

      fetchComic();
  }, []);

  return (
      <div className="container">
        <h1 id="title">{comic?.safe_title}</h1>
        <div id="comic-container" className="comic-container">
            <img src={comic?.img} alt={comic?.alt} />
            <p>Published on: {comicDate?.toLocaleDateString()} ({formatDistanceToNow(comicDate, { addSuffix: true })})</p>
        </div>
      </div>
  );
}

export default ComicApp;