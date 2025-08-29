import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  function EpisodeList({ episodes, setSelectedEpisode }) {
    return (
      <section className="list">
        <h2>Episode List</h2>
        <ul className="episode-list">
          {episodes.map((episode) => (
            <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
              {episode.title}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  function EpisodeDetails({ selectedEpisode }) {
    if (!selectedEpisode) {
      return (
        <section className="details">Select an episode to see details</section>
      );
    }
    return (
      <section className="details">
        <h2>{selectedEpisode.title}</h2>
        <p>{selectedEpisode.description}</p>
      </section>
    );
  }

  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <EpisodeList
          episodes={episodes}
          setSelectedEpisode={setSelectedEpisode}
        />
        <EpisodeDetails selectedEpisode={selectedEpisode} />
      </main>
    </>
  );
}
