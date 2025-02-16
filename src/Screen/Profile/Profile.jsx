import React, { useEffect } from "react";
import HeaderProf from "../../Component/ProfileComponent/HeaderProf";
import MyProf from "../../Component/ProfileComponent/MyProf";
import MySkills from "../../Component/ProfileComponent/MySkills";
import MyPortfolio from "../../Component/ProfileComponent/MyPortfolio";
import MySocial from "../../Component/ProfileComponent/MySocial";
import FooterProf from "../../Component/ProfileComponent/FooterProf";

const Profile = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeaderProf />
      <MyProf />
      <MySkills />
      <MyPortfolio />
      <MySocial />
      <FooterProf />
    </div>
  );
};

export default Profile;
