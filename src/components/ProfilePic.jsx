import React, { useState, useEffect } from "react";

function ProfilePic({ handle, size }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/data/users.json")
      .then((response) => response.json())
      .then((userResults) => {
        const foundUser = userResults.find(
          (userResult) => userResult.handle === handle,
        );
        setUser(foundUser);
      });
  }, [handle]);

  if (!user) return null;

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
