import React, { useEffect, useState } from "react";
import UserProfile from './UserProfile';
import { getAllUserProfilesDeactive } from "../../modules/userProfileManager";
import { Link } from "react-router-dom";

const UserProfileList = () => {
    const [userProfiles, setUserProfiles] = useState([]);

    const getUserProfiles = () => {
        getAllUserProfilesDeactive().then(userProfiles => setUserProfiles(userProfiles));
    };

    useEffect(() => {
        getUserProfiles();
    }, []);
    //* console.log("USER PROFILES:", userProfiles)

    return (
        <div className="container">
            <Link to={`/UserProfiles/`}>
                <h3>Back</h3>
            </Link>
            <h2 className="row justify-content-center">Deactivated Users</h2>
            <br />
            <div className="row justify-content-center">
                {userProfiles.map((userProfile) => (
                    <UserProfile userProfile={userProfile} key={userProfile.id} />
                ))}
            </div>
            <br />
            <br />
            <Link className="row justify-content-center" to={`/UserProfiles/`}>
                <h3>Show Active Users</h3>
            </Link>
        </div>
    );

};

export default UserProfileList;
