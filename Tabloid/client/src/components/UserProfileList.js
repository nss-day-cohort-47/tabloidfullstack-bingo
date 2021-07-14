import React, { useEffect, useState } from "react";
import UserProfile from './UserProfile';
import { getAllUserProfiles } from "../modules/userProfileManager";

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
            <div className="row justify-content-center">
                {userProfiles.map((userProfile) => (
                    <UserProfile userProfile={userProfile} key={userProfile.id} />
                ))}
            </div>
        </div>
    );

};

export default UserProfileList;
