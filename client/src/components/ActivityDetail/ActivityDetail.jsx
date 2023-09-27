import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getActivitiesById } from '../../redux/actions/actions';
import "./ActivityDetail.css"

const ActivityDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const activity = useSelector(state => state.actividad);
    useEffect(() => {
        dispatch(getActivitiesById(id));
    }, [dispatch, id]);

    console.log(activity);
    return (
        <div>
            <h1>Detalles de la Actividad</h1>
            {Array.isArray(activity) ? (
                <div>
                    <h2>Actividades relacionadas:</h2>
                    <ul>
                        {activity.map(activityItem => (
                            <li key={activityItem.id}>
                                <h2>Activity name: {activityItem.name}</h2>
                                <p>Difficulty: {activityItem.difficulty}</p>
                                <p>Duration: {activityItem.duration} horas</p>
                                <p>Season: {activityItem.season}</p>
                                <h3>Countries with this activity:</h3>
                                <ul>
                                    {activityItem.Countries.map(country => (
                                        <li key={country.id}>
                                            <p>{country.name}</p>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (

                <div>
                    <h2>Activity name: {activity.name}</h2>
                    <p>Difficulty: {activity.difficulty}</p>
                    <p>Duration: {activity.duration} horas</p>
                    <p>Season: {activity.season}</p>
                    <h3>Countries with this activity:</h3>
                    <ul>
                        {activity.Countries.map(country => (
                            <li key={country.id}>
                                <p>{country.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <Link to="/home">
                <button className='btn-back'>Back to home</button>
            </Link>
        </div>
    );

};

export default ActivityDetail;
