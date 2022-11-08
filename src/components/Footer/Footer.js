import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts Clone <br />
        <a href="https://solo.to/akash_khandelwal" target="__blank">
        Created By Akash Khandelwal <FavoriteIcon />
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.instagram.com/skykhandelwal1999/" target="__blank">
          <InstagramIcon fontSize="large" />
        </a>
        <a href="https://www.linkedin.com/in/akash-khandelwal-5b09531aa/" target="__blank">
          <LinkedInIcon fontSize="large" />
        </a>
        <a href="https://m.facebook.com/akash.khandelwal.1042?ref=bookmarks" target="__blank">
          <FacebookIcon fontSize="large" />
        </a>
        <a href="https://github.com/Akashkhandelwal191" target="__blank">
          <GitHubIcon fontSize="large" />
        </a>
      </div>
      <h6>Inshorts Pte. Ltd &copy; COPYRIGHT 2022</h6>
    </div>
  );
};

export default Footer;


