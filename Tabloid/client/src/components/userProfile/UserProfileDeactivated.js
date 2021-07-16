import React from "react";
import { useHistory } from "react-router";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { ActivateUser } from "../../modules/userProfileManager";

const UserProfileDeactivated = ({ userProfile }) => {
    //* console.log("USER PROFILE: ", userProfile.id);

    const history = useHistory()
    const handleActivate = (event) => {
        if (window.confirm("Are you sure you want to activate this account?")) {
            event.preventDefault()
            ActivateUser(userProfile.id)
                .then(() => history.push("/UserProfiles/")
                )
        } else {
            history.push("/UserProfiles/")
        }
    }



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
                <button type="button" className="btn btn-primary"
                    onClick={handleActivate}>
                    Activate User
                </button>
            </CardBody>
        </Card >
    );
};

export default UserProfileDeactivated;