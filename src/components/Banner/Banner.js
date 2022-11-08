import { Container, Typography } from "@mui/material";
import React from "react";
import "./Banner.css";
import Carousel from "../Carousel/Carousel";

//Banner Component After Header
const Banner = () => {
  return (
    <div className="Banner">
      <Container className="BannerContent">
        <div className="BannerTagLine">
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Monserrat",
            }}
          >
            Crypto Tracker
          </Typography>

          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
        </div>

        <Carousel />
      </Container>
    </div>
  );
};

export default Banner;
