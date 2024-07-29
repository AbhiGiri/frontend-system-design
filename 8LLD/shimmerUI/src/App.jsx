import { useEffect } from 'react'
import { useState } from 'react'
import Shmmer from '../components/Shmmer';
import MemeCard from '../components/MemeCard';


function App() {
  const [memes, setMemes] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);


  useEffect( () => async () =>{
    setShowShimmer(true);
    const data = await fetch("https://meme-api.com/gimme/20");
    const json = await data.json();

    setShowShimmer(false);
    setMemes((memes) => [...memes, ...json.memes]);
  }, []);

  return (
    <div className="flex flex-wrap">
      {memes.map((meme, i) => (
        <MemeCard key={i} data={meme} />
      ))}

      {showShimmer && <Shmmer/>}
    </div>
  )
}

export default App
