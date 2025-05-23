import React from "react";

function ProfilePic({ user, size }) {
  user = {
    picture: `https://placehold.co/${size}x${size}`,
    name: "Placeholder",
  };
  return (
    <img
      className="profile-pic rounded-circle"
      src={user.picture}
      alt={`Profile picture of ${user.name}`}
      width={size}
      height={size}
    />
  );
}

export default ProfilePic;
