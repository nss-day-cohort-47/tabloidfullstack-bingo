import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const UserProfile = ({ userProfile }) => {
    //* console.log("USER PROFILE: ", userProfile.id);
    return (
        <Card className="alignCenter alignCenter justifyCenter">
            <p className="text-left px-2">Tabloid User Profile:</p>
            <Link to={`/UserProfiles/${userProfile.id}`}>
                <h4><strong>{userProfile.displayName}</strong>, <em>{userProfile.userType.name}</em></h4>
            </Link>
            <CardBody className="alignCenter  alignCenter justifyCenter">
                <div className="alignCenter border alignCenter justifyCenter">
                    <p><strong>Name: </strong>{userProfile.fullName}</p>
                    <p><strong>User Type: </strong>{userProfile.userType.name}</p>
                </div>
            </CardBody>
        </Card >
    );
};

export default UserProfile;