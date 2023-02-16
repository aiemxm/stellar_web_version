import React, { useState } from "react";
import "./AboutUs.css";
import MediaCard from "../../components/MediaCard/MediaCard";
import CustomMap from "../../components/CustomMap/CustomMap";
import profiles from "../../data/profiles.json";

const AboutUs = () => {
  const presentation = profiles[2];
  const [profile, setProfile] = useState(profiles[0]);

  return (
    <div className="about-main">
      <MediaCard
        media={<CustomMap />}
        name={presentation.name}
        job={presentation.job}
      />
      {profile && (
        <MediaCard
          media={
            <img
              className="profile-pic"
              src={profile.profilePicture}
              alt="profile picture"
            />
          }
          name={profile.name}
          job={profile.job}
          github={profile.github}
        />
      )}
    </div>
  );
};

export default AboutUs;
