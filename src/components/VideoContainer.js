import React from 'react';
import { useAuth } from '../contexts/AuthContext';


const VideoContainer = () => {
    const { currentUser } = useAuth();
    return (
        <div>
            <h1>Video Container</h1>
            <p>{currentUser.email}</p>
            <p>{JSON.stringify(currentUser)}</p>

        </div>
    );
}

export default VideoContainer;
