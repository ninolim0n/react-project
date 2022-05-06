import React, {useState, useEffect } from 'react'
import getBreeds from '../helpers/getBreeds';
import Error from './Error';

const initialBreeds = [
    {
        id: 1,
        name: 'Boston Terrier'
    },
    {
        id: 2,
        name: 'Pug'
    }
]

const Select = ({updateDog}) => {
    const [breeds, setBreeds] = useState(initialBreeds);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        updateBreeds();
    }, [])

    const updateBreeds = () => {
        getBreeds().then((newBreeds) => {
             setBreeds(newBreeds);
        })
        .catch((error) => {
            console.log(error)
            setErro("Error al cargar las razas")
        })
    }

  return (
    <>
        <select onChange={(e) => updateDog(e.target.value)}>
        {breeds.map(breed => (
            <option value={breed.id} key={breed.id} >{breed.name}</option>
        ))}
        </select>
        { erro && <Error /> }
    </>
  )
}

export default Select;


