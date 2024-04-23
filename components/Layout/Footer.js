import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
              color: "#fff", // Default color
            },
            "& svg:hover": {
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
            "& svg.instagram:hover": {
              color: "red",
            },
            "& svg.twitter:hover": {
              color: "blue",
            },
            "& svg.github:hover": {
              color: "purple",
            },
            "& svg.youtube:hover": {
              color: "red",
            },
          }}
        >
          {/* icons */}
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramIcon className="instagram" />
          </a>
          <a href="https://twitter.com/Moo7hitk" target="_blank" rel="noopener noreferrer">
            <TwitterIcon className="twitter" />
          </a>
          <a href="https://github.com/mohitk654295" target="_blank" rel="noopener noreferrer">
            <GitHubIcon className="github" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <YouTubeIcon className="youtube" />
          </a>
          
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
