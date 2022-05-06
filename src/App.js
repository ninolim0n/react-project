import React, {useState, useEffect} from "react";
import Select from "./components/Select";
import Card from "./components/Card";
import getDog from "./helpers/getDog";

const initialDog = {
  image:"https://cdn.wamiz.fr/cdn-cgi/image/quality=80,width=400,height=400,fit=cover/animal/breed/pictures/6166a6947cef1669106860.jpg",
  breed: {
    id:1,
    name:"Boston Terrier",

  }
}

function App() {
  const [dog, setDog] = useState(initialDog);
  const [loading, setLoading] = useState(false);

  useEffect(() =>{
    updateDog();
  }, [])

  const updateDog = (breedId) => {
    setLoading(true)
    getDog(breedId).then((newDog) =>{
      setDog(newDog);
      setLoading(false)
    })
  }

  return (
    <div className="app">

        <Select updateDog={updateDog}  />
        <Card dog={dog} updateDog={updateDog} loading={loading} />

    </div>
  );
}

export default App;
