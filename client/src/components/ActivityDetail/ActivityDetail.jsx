import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getActivities } from '../../redux/actions/actions';

const ActivityDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const activities = useSelector(state => state.activities);

    useEffect(() => {
        dispatch(getActivities(id));
    }, [dispatch, id]);
   
    const activity = activities[0];

    return (
        <div>
            <h1>Detalles de la Actividad</h1>
            {activity ? (
                <div>
                    <h2>Nombre: {activity.name}</h2>
                    <p>Dificultad: {activity.difficulty}</p>
                    <p>Duración: {activity.duration} horas</p>
                    <p>Temporada: {activity.season}</p>
                </div>
            ) : (
                <p>Actividad no encontrada.</p>
            )}
           <Link to="/home"><button>Back to home</button></Link> 
        </div>
    );
};

export default ActivityDetail;
