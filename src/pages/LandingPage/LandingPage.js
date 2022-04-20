import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Images
// import backgroundImg1 from "../../assets/LandingPageAssets/LandingPageBackground.svg";
import heroImg from "../../assets/LandingPageAssets/heroImage.svg";
import resume from "../../assets/LandingPageAssets/resume.svg";
import cimg1 from "../../assets/LandingPageAssets/cimg1.svg";
import cimg2 from "../../assets/LandingPageAssets/cimg2.svg";
import cimg3 from "../../assets/LandingPageAssets/cimg3.svg";
import googlePayPal from "../../assets/LandingPageAssets/googlePayPal.svg";
import smile from "../../assets/LandingPageAssets/ChooseUs/smile.svg";
import box from "../../assets/LandingPageAssets/ChooseUs/box.svg";
import tv from "../../assets/LandingPageAssets/ChooseUs/tv.svg";
import share from "../../assets/LandingPageAssets/ChooseUs/share.svg";

// style
import "./LandingPageStyle.scss";

const LandingPage = () => {
  return (
    <>
      <div>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              pl: 10,
              position: "relative",
              mt: 20,
            }}
          >
            <Box
              sx={{
                width: "45%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                height: "460px",
              }}
            >
              <Typography variant="h2" sx={{ fontWeight: 700 }}>
                Free resume builder for modern Job Seekers
              </Typography>
              <Typography variant="h5" sx={{ color: "#64607D" }}>
                By employing the best practices and innovative tech, ProResume
                boosts your chances of landing a better job – completely for
                free.
              </Typography>

              <Button
                sx={{
                  backgroundColor: "#1ea5fc",
                  color: "white",
                  px: 4,
                  py: 2,
                  "&:hover": {
                    backgroundColor: "#1ea5fc",
                    boxShadow: 2,
                  },
                  width: "30%",
                  boxShadow: 6,
                }}
              >
                Build Resume
              </Button>
            </Box>
            <Box>
              <img src={heroImg} alt="" />
            </Box>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              pl: 10,
              mt: 35,
            }}
          >
            <Box
              sx={{
                width: "45%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignSelf: "center",
                height: "300px",
              }}
            >
              <Typography variant="h6" sx={{ color: "#1ea5fc" }}>
                Our Feature
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 400 }}>
                Create Resume in simple and easy steps
              </Typography>
              <Typography variant="h5" sx={{ color: "#64607D" }}>
                Why kept very ever home mrs. Considered sympathize ten
                uncommonly occasional assistance sufficient not. Letter of on
                become he tended active enable to.
              </Typography>
            </Box>
            <Box>
              <img src={resume} alt="" />
            </Box>
          </Box>
        </Box>
        <Box sx={{ pl: 10, mt: 35 }}>
          <Typography variant="h6" sx={{ color: "#1ea5fc" }}>
            Resume Template
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontWeight: 400, width: "40%", mb: 10 }}
          >
            Start by choosing a resume template design
          </Typography>
          <Box
            sx={{
              margin: "auto",
              width: "50%",
            }}
          >
            <Carousel
              showStatus={false}
              showThumbs={false}
              showIndicators={false}
              infiniteLoop={true}
            >
              <div>
                <img src={cimg1} alt="" />
              </div>
              <div>
                <img src={cimg2} alt="" />
              </div>
              <div>
                <img src={cimg3} alt="" />
              </div>
            </Carousel>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              pl: 10,
              mt: 20,
            }}
          >
            <Box
              sx={{
                width: "45%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                height: "460px",
              }}
            >
              <Typography variant="h2" sx={{ fontWeight: 700 }}>
                Discover more than 100+ jobs and apply
              </Typography>
              <Typography variant="h5" sx={{ color: "#64607D" }}>
                Why kept very ever home mrs. Considered sympathize ten
                uncommonly occasional assistance sufficient not. Letter of on
                become he tended active enable to. .
              </Typography>
              <Button
                sx={{
                  backgroundColor: "#1ea5fc",
                  color: "white",
                  px: 4,
                  py: 2,
                  "&:hover": {
                    backgroundColor: "#1ea5fc",
                    boxShadow: 2,
                  },
                  width: "30%",
                  boxShadow: 6,
                }}
              >
                Get Started
              </Button>
            </Box>
            <Box>
              <img src={googlePayPal} alt="" />
            </Box>
          </Box>
        </Box>

        {/* Why choose us */}

        <Box sx={{ pl: 10, mt: 35, backgroundColor: "#f2f6fb" }}>
          <Typography variant="h2" sx={{ textAlign: "center" }}>
            Why Choose Us?
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              width: "100%",
              justifyContent: "space-between",
              margin: "auto",
              p: 20,
              pt: 15,
            }}
          >
            <Card
              className="card"
              sx={{
                width: "45%",
                height: "230px",
                display: "flex",
                px: 5,
                pt: 3,
                justifyContent: "space-between",
                borderRadius: "30px",
              }}
            >
              <Box
                sx={{
                  dispaly: "flex",
                  alignItems: "flex-start",
                  height: "100px",
                  width: "124px",
                  pt: 2,
                }}
              >
                <CardMedia
                  component="img"
                  alt=""
                  height="55"
                  image={smile}
                  className="cardMedia"
                />
              </Box>

              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "700", mb: 2 }}>
                  Totally Free
                </Typography>
                <Typography sx={{ color: "#757095", fontSize: "18px" }}>
                  End-to-end payments and financial management in a single
                  solution. Meet the right platform.
                </Typography>
              </CardContent>
            </Card>
            <Card
              className="card"
              sx={{
                width: "45%",
                height: "230px",
                display: "flex",
                px: 5,
                pt: 3,
                justifyContent: "space-between",
                borderRadius: "30px",
              }}
            >
              <Box
                sx={{
                  dispaly: "flex",
                  alignItems: "flex-start",
                  height: "100px",
                  width: "124px",
                  pt: 2,
                }}
              >
                <CardMedia
                  component="img"
                  alt=""
                  height="55"
                  image={share}
                  className="cardMedia"
                />
              </Box>

              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "700", mb: 2 }}>
                  Totally Free
                </Typography>
                <Typography sx={{ color: "#757095", fontSize: "18px" }}>
                  End-to-end payments and financial management in a single
                  solution. Meet the right platform.
                </Typography>
              </CardContent>
            </Card>
            <Card
              className="card"
              sx={{
                width: "45%",
                height: "230px",
                display: "flex",
                px: 5,
                pt: 3,
                justifyContent: "space-between",
                borderRadius: "30px",
              }}
            >
              <Box
                sx={{
                  dispaly: "flex",
                  alignItems: "flex-start",
                  height: "100px",
                  width: "124px",
                  pt: 2,
                }}
              >
                <CardMedia
                  component="img"
                  alt=""
                  height="55"
                  image={box}
                  className="cardMedia"
                />
              </Box>

              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "700", mb: 2 }}>
                  Totally Free
                </Typography>
                <Typography sx={{ color: "#757095", fontSize: "18px" }}>
                  End-to-end payments and financial management in a single
                  solution. Meet the right platform.
                </Typography>
              </CardContent>
            </Card>
            <Card
              className="card"
              sx={{
                width: "45%",
                height: "230px",
                display: "flex",
                px: 5,
                pt: 3,
                justifyContent: "space-between",
                borderRadius: "30px",
              }}
            >
              <Box
                sx={{
                  dispaly: "flex",
                  alignItems: "flex-start",
                  height: "100px",
                  width: "124px",
                  pt: 2,
                }}
              >
                <CardMedia
                  component="img"
                  alt=""
                  height="55"
                  image={tv}
                  className="cardMedia"
                />
              </Box>

              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "700", mb: 2 }}>
                  Totally Free
                </Typography>
                <Typography sx={{ color: "#757095", fontSize: "18px" }}>
                  End-to-end payments and financial management in a single
                  solution. Meet the right platform.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* Meet our team */}
        <Box>
          
        </Box>
        {/* FAQs */}

        <Box
          sx={{
            pl: 10,
            mt: 25,
            display: "flex",
            width: "100%",
            margin: "auto",
          }}
        >
          <Box sx={{ width: "40%" }}>
            <Typography>Any Questions? We got You</Typography>
            <Typography>
              Yet bed any for assistance indulgence unpleasing. Not thoughts all
              exercise blessing. Indulgence way everything joy alteration
              boisterous the attachment.
            </Typography>
          </Box>
          <Box sx={{ width: "40%" }}>
            <Accordion
              sx={{ mb: 3, boxShadow: "none", borderBottom: "2px solid black" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h6">How this Works</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{ mb: 3, boxShadow: "none", borderBottom: "2px solid black" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography variant="h6">
                  Is there any additional fee?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{ mb: 3, boxShadow: "none", borderBottom: "2px solid black" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel2a-header"
              >
                <Typography variant="h6">How can I get the App?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography></Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              sx={{
                mb: 3,
                boxShadow: "none",
                borderBottom: "2px solid black",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography variant="h6">How can I get the App?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography></Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default LandingPage;
