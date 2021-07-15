import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { getUserProfile } from "../../modules/userProfileManager";

const UserProfileDetails = () => {
    const [userProfile, setUserProfile] = useState();
    const { id } = useParams();

    useEffect(() => {
        getUserProfile(id).then(userProfile => setUserProfile(userProfile));
    }, []);

    if (!userProfile) {
        return null;
    };

    //* console.log("USER ID: ",id);
    //* console.log("USERPROFILE OBJ: ", userProfile);
    const defaultProfileImage = "https://robohash.org/numquamutut.png?size=150x150&set=set1";
    const createTime = (userProfile.createDateTime.split("T"))
    const time = (createTime.pop())
    const date = (createTime.shift())
    const timeSplit = ((time).split(":"))
    const dateSplit = ((date).split("-"))
    const year = (dateSplit[0])
    const day = (dateSplit[2])
    const month = (dateSplit[1])
    const hour = (timeSplit[0])
    const minute = (timeSplit[1])
    const midnightCheck = (hour == "00" ? "12" : hour)
    const nightNoon = (hour > 12 ? " PM" : " AM")
    const TimeStamp = (day + "/" + month + "/" + year + " @ " + midnightCheck + ":" + minute + "" + nightNoon);


    return (
        <>
            <Link to={`/UserProfiles/`}>
                <h3>Back To User Profiles</h3>
            </Link>
            <Card className="alignCenter border alignCenter justifyCenter">
                <img id="profilePhoto" src={`${userProfile.imageLocation ? userProfile.imageLocation : defaultProfileImage}`} alt="default profile picture" />
                <h3><strong>{userProfile.displayName}</strong>, <em>{userProfile.userType.name}</em></h3>
                <h5><strong>Profile Created On: </strong>{TimeStamp}</h5>

                <CardBody className="alignCenter border alignCenter justifyCenter">
                    <div className="alignCenter border alignCenter justifyCenter">
                        <p><strong>Name: </strong>{userProfile.fullName}</p>
                        <p><strong>User Type: </strong>{userProfile.userType.name}</p>
                        <p><strong>Email: </strong>{userProfile.email}</p>
                    </div>


                </CardBody>
            </Card >
        </>
    );
};

export default UserProfileDetails;
