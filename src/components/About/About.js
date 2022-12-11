import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import postData from '../../redux/thunk/postData/postData';

const About = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(postData())
    }, [dispatch])
    const state = useSelector((state) => state);
    console.log(state);
    return (
        <div>
            <h1>About</h1>
        </div>
    );
};

export default About;