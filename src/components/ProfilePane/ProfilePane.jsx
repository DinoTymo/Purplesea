import React, {useState, useEffect} from "react";
import PostPane from "../MainPane/PostPane";
import ProfileBanner from "./ProfileBanner";

function ProfilePane() {
    return(
        <div className="main-pane">
            <div className="profile-banner">
                <ProfileBanner />
            </div>
            <PostPane />
        </div>
    );
}

export default ProfilePane;