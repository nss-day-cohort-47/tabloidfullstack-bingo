import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const UserProfile = ({ userProfile }) => {
    console.log("USER PROFILE: ", userProfile);
    console.log("USER IMAGE: ", userProfile);
    return (
        <Card className="alignCenter border alignCenter justifyCenter">
            <p className="text-left px-2">Tabloid User Profile:</p>
            <img className="justifyCenter" src={userProfile.imageLocation} />
            {/* <Link to={`/userProfiles/${userProfile.id}`}> */}
            <p><strong>{userProfile.displayName}</strong>, <em>{userProfile.userType.name}</em></p>
            {/* </Link> */}
            <CardBody className="alignCenter border alignCenter justifyCenter">
                <div className="alignCenter border alignCenter justifyCenter">
                    <p><strong>Name: </strong>{userProfile.fullName}</p>
                    <p><strong>User Type: </strong>{userProfile.userType.name}</p>
                    <p><strong>Email: </strong>{userProfile.email}</p>
                </div>


            </CardBody>
        </Card >
    );
};

export default UserProfile;