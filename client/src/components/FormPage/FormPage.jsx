import React, { useState } from 'react'
import "./FormPage.css"

const FormPage = () => {
    const [valorEstrella, setValorEstrella] = useState(null);

    const handleEstrellaChange = (event) => {
        setValorEstrella(event.target.value);
    };
    const initialForm = {
        name: "",
        description: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: [],
    };
    const initialCountriesForm = {
        current: "",
        selected: [],
        ids: [],
    }


    return (
        <form>
            <label>
                Name:
                <input type="name" />
            </label>

            <label>
                Clasificacion:
                <p className="clasificacion">
                    <input
                        id="radio1"
                        type="radio"
                        name="estrellas"
                        value="5"
                        onChange={handleEstrellaChange}
                        checked={valorEstrella === '5'}
                    />
                    <label htmlFor="radio1">★</label>
                    <input
                        id="radio2"
                        type="radio"
                        name="estrellas"
                        value="4"
                        onChange={handleEstrellaChange}
                        checked={valorEstrella === '4'}
                    />
                    <label htmlFor="radio2">★</label>
                    <input
                        id="radio3"
                        type="radio"
                        name="estrellas"
                        value="3"
                        onChange={handleEstrellaChange}
                        checked={valorEstrella === '3'}
                    />
                    <label htmlFor="radio3">★</label>
                    <input
                        id="radio4"
                        type="radio"
                        name="estrellas"
                        value="2"
                        onChange={handleEstrellaChange}
                        checked={valorEstrella === '2'}
                    />
                    <label htmlFor="radio4">★</label>
                    <input
                        id="radio5"
                        type="radio"
                        name="estrellas"
                        value="1"
                        onChange={handleEstrellaChange}
                        checked={valorEstrella === '1'}
                    />
                    <label htmlFor="radio5">★</label>
                </p>

            </label>

            <label>
                Duracion:
                <input type="duracion" />
            </label>
            <label >
                Temporada
                <select>
                    <option>Select One</option>
                    <option value="primavera">Spring</option>
                    <option value="verano">Summer</option>
                    <option value="otoño">Autumn</option>
                    <option value="invierno">Winter</option>
                </select>
            </label>

        </form>
    )
}

export default FormPage
