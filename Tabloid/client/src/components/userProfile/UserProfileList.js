import React, { useEffect, useState } from "react";
import UserProfile from './UserProfile';
import { getAllUserProfiles } from "../../modules/userProfileManager";
import { Link } from "react-router-dom";

const UserProfileList = () => {
    const [userProfiles, setUserProfiles] = useState([]);

    const getUserProfiles = () => {
        getAllUserProfiles().then(userProfiles => setUserProfiles(userProfiles));
    };

    useEffect(() => {
        getUserProfiles();
    }, []);
    //* console.log("USER PROFILES:", userProfiles)

    return (
        <div className="container">
            <h2 className="row justify-content-center">Tabloid Users</h2>
            <div className="row justify-content-center">
                {userProfiles.map((userProfile) => (
                    <UserProfile userProfile={userProfile} key={userProfile.id} />
                ))}
            </div>
            <br />
            <br />
            <div className="textAlign">
                <Link to={`/UserProfiles/Deactivated`}>
                    <h3>Show Deactivated</h3>
                </Link>
            </div>
        </div>
    );

};

export default UserProfileList;
