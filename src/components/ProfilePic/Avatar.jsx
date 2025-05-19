import React from "react";
import $ from "jquery";

$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  }
});

function Avatar() {
    return(
        <div>
            <img className="avatar" src="https://avatar.iran.liara.run/public" alt="profile picture" />
        </div>
    )
}

export default Avatar;