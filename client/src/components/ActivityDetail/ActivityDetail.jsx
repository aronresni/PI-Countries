import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getActivitiesById } from '../../redux/actions/actions';

const ActivityDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const activity = useSelector(state => state.actividad);
    useEffect(() => {
        dispatch(getActivitiesById(id));
    }, [dispatch, id]);


    return (
        <div>
            <h1>Detalles de la Actividad</h1>
            <div>
                <h2>Nombre: {activity.name}</h2>
                <p>Dificultad: {activity.difficulty}</p>
                <p>Duración: {activity.duration} horas</p>
                <p>Temporada: {activity.season}</p>
                <h3>Países relacionados:</h3>
                <ul>
                    {activity.Countries.map(country => (
                        <li key={country.id}>
                            <p>{country.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <Link to="/home">
                <button>Regresar a la página principal</button>
            </Link>
        </div>
    );

};

export default ActivityDetail;
