import { useRef, useState } from "react";
import { Button } from "reactstrap";

export default function Home() {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <audio ref={audioRef} src="/music/01SONICHEROES.mp3" loop />
      <Button color="primary" onClick={toggleMusic}>
        {isPlaying ? "⏸ Pause Music" : "▶ Play Music"}
      </Button>
      <p>Welcome to Tabloid!</p>
    </div>
  );
}
