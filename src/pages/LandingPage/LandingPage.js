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
import teamMember from "../../assets/LandingPageAssets/TeamMembers.svg";
// style
import "./LandingPageStyle.scss";

const LandingPage = () => {
  return (
    <>
      <div>
         <Box
          sx={{
            "@media screen and (max-width: 768px)": {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              pl: 10,
              position: "relative",
              mt: 20,
              "@media screen and (max-width: 768px)": {
                flexDirection: "column",
                pl: 0,
                justifyContent: "center",
                mt: 10,
              },
            }}
          >
            <Box
              sx={{
                width: "45%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                height: "460px",
                "@media screen and (max-width: 768px)": {
                  width: "100%",
                  justyfyContent: "center",
                  order: 2,
                  height: "auto",
                },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  "@media screen and (max-width: 768px)": {
                    fontSize: "1.6rem",
                    textAlign: "center",
                    px: 4,
                    mt: 2,
                  },
                }}
              >
                Free resume builder for modern Job Seekers
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "#64607D",
                  "@media screen and (max-width: 768px)": {
                    fontSize: "1rem",
                    textAlign: "center",
                    px: 4,
                    mt: 2,
                  },
                }}
              >
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
                  "@media screen and (max-width: 768px)": {
                    width: "50%",
                    margin: "auto",
                    mt: 2,
                    px: 4,
                  },
                }}
              >
                Build Resume
              </Button>
            </Box>
            <Box
              sx={{
                "@media screen and (max-width:768px)": {
                  width: "100%",
                  order: 1,
                },
              }}
            >
              <img className="hero-img" src={heroImg} alt="" />
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
              "@media screen and (max-width: 768px)": {
                flexDirection: "column",
                pl: 0,
                mt: 20,
              },
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
                "@media screen and (max-width: 768px)": {
                  width: "100%",
                  height: "auto",
                  px: 2,
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#1ea5fc",
                  "@media screen and (max-width:768px)": {
                    fontSize: "1.4rem",
                  },
                }}
              >
                Our Feature
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 400,
                  "@media screen and (max-width:768px)": {
                    fontSize: "1.6rem",
                    my: 3
                  },
                }}
              >
                Create Resume in simple and easy steps
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "#64607D",
                  "@media screen and (max-width:768px)": {
                    fontSize: "1rem",
                  },
                }}
              >
                Why kept very ever home mrs. Considered sympathize ten
                uncommonly occasional assistance sufficient not. Letter of on
                become he tended active enable to.
              </Typography>
            </Box>
            <Box
              sx={{
                "@media screen and (max-width:768px)": {
                  width: "100%",
                },
              }}
            >
              <img className="hero-img" src={resume} alt="" />
            </Box>
          </Box>
        </Box> 
        <Box
          sx={{
            pl: 10,
            mt: 35,
            "@media screen and (max-width: 768px)": {
              flexDirection: "column",
              pl: 0,
              mx: 3,
              mt: 20
            },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#1ea5fc",
              "@media screen and (max-width: 768px)": {
                fontSize: "1.4rem",
              },
            }}
          >
            Resume Template
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 400,
              width: "40%",
              mb: 10,
              "@media screen and (max-width: 768px)": {
                fontSize: "1.4rem",
                width: "100%",
                mb: 3,
              },
            }}
          >
            Start by choosing a resume template design
          </Typography>
          <Box
            sx={{
              margin: "auto",
              width: "50%",
              "@media screen and (max-width: 768px)": {
                width: "100%",
              },
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
              "@media screen and (max-width: 768px)": {
                flexDirection: "column",
                pl: 0,
                mx: 3,
              },
            }}
          >
            <Box
              sx={{
                width: "45%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                height: "460px",
                "@media screen and (max-width: 768px)": {
                  flexDirection: "column",
                  width: "80%",

                  justifyContent: "center",
                  height: "auto",
                },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  "@media screen and (max-width: 768px)": {
                    fontSize: "1.4rem",
                    my: 3,
                  },
                }}
              >
                Discover more than 100+ jobs and apply
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "#64607D",
                  "@media screen and (max-width: 768px)": {
                    fontSize: "1rem",
                    mb: 3,
                  },
                }}
              >
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
                  "@media screen and (max-width: 768px)": {
                    width: "52%",
                    height: "35px",
                    px: 2,
                  },
                }}
              >
                Get Started
              </Button>
            </Box>
            <Box
              sx={{
                "@media screen and (max-width: 768px)": {
                  width: "100%",
                },
              }}
            >
              <img className="hero-img" src={googlePayPal} alt="" />
            </Box>
          </Box>
        </Box> 

        {/* Why choose us */}

        <Box
          sx={{
            pl: 10,
            mt: 35,
            backgroundColor: "#f2f6fb",
            "@media screen and (max-width: 768px)": {
              display: "flex",
              flexDirection: "column",
              pl: 0,
              px: 3,
            },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              "@media screen and (max-width: 768px)": {
                fontSize: "1.4rem",
                fontWeight: 700,
                pt: 4,
                mb: 4,
              },
            }}
          >
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
              "@media screen and (max-width: 768px)": {
                p: 0,
              },
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
                "@media screen and (max-width: 768px)": {
                  px: 2,
                  width: "100%",
                },
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
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "700",
                    mb: 2,
                    "@media screen and (max-width: 768px)": {
                      fontSize: "1.4rem",
                    },
                  }}
                >
                  Totally Free
                </Typography>
                <Typography
                  sx={{
                    color: "#757095",
                    fontSize: "18px",
                    "@media screen and (max-width: 768px)": {
                      fontSize: "1rem",
                    },
                  }}
                >
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
                "@media screen and (max-width: 768px)": {
                  width: "100%",
                },
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
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "700",
                    mb: 2,
                    "@media screen and (max-width: 768px)": {
                      fontSize: "1.2rem",
                    },
                  }}
                >
                  Totally Free
                </Typography>
                <Typography
                  sx={{
                    color: "#757095",
                    fontSize: "18px",
                    "@media screen and (max-width: 768px)": {
                      fontSize: "1rem",
                    },
                  }}
                >
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
                "@media screen and (max-width: 768px)": {
                  width: "100%",
                },
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
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "700",
                    mb: 2,
                    "@media screen and (max-width: 768px)": {
                      fontSize: "1.2rem",
                    },
                  }}
                >
                  Totally Free
                </Typography>
                <Typography
                  sx={{
                    color: "#757095",
                    fontSize: "18px",
                    "@media screen and (max-width: 768px)": {
                      fontSize: "1rem",
                    },
                  }}
                >
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
                "@media screen and (max-width: 768px)": {
                  width: "100%",
                },
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
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "700",
                    mb: 2,
                    "@media screen and (max-width: 768px)": {
                      fontSize: "1.2rem",
                    },
                  }}
                >
                  Totally Free
                </Typography>
                <Typography
                  sx={{
                    color: "#757095",
                    fontSize: "18px",
                    "@media screen and (max-width: 768px)": {
                      fontSize: "1rem",
                    },
                  }}
                >
                  End-to-end payments and financial management in a single
                  solution. Meet the right platform.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* Meet our team */}
         <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            "@media screen and (max-width: 768px)": {
              flexDirection: "column",
              mx: 3,
            },
          }}
        >
          <Box
            sx={{
              width: "100%",
              "@media screen and (max-width: 768px)": {
                order: 2,
              },
            }}
          >
            <img className="hero-img" src={teamMember} alt="" />
          </Box>
          <Box
            sx={{
              disaply: "flex",
              flexDirection: "column",
              pl: 6,
              justifyContent: "center",
              "@media screen and (max-width: 768px)": {
                pl: 0,
              },
            }}
          >
            <Box
              sx={{
                width: "50%",
                mb: 4,
                "@media screen and (max-width: 768px)": {
                  width: "100%",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#1ea5fc",
                  "@media screen and (max-width: 768px)": {
                    fontSize: "1rem",
                  },
                }}
              >
                Meet Our Team
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  textTransform: "capitalize",
                  "@media screen and (max-width: 768px)": {
                    fontSize: "1.6rem",
                    width: "60%",
                    fontWeight: 700,
                  },
                }}
              >
                The creative crew behind ProResume.
              </Typography>
            </Box>
            <Box
              sx={{
                width: "70%",
                "@media screen and (max-width: 768px)": {
                  width: "100%",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#1ea5fc",
                  "@media screen and (max-width: 768px)": {
                    fontSize: "1rem",
                  },
                }}
              >
                WHO WE ARE
              </Typography>
              <Typography sx={{ color: "#696767" }}>
                We are a team of creatively diverse, driven, and innovative
                individuals working in various locations from India to Nepal.
              </Typography>
            </Box>
          </Box>
        </Box> 

        {/* FAQs */}

        <Box
          sx={{
            // pl: 10,
            my: 30,
            px: 30,
            display: "flex",
            "@media screen and (max-width: 768px)": {
              flexDirection: "column",
              px: 3,
              my: 10,
            },
          }}
        >
          <Box sx={{}}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "700",
                width: "80%",
                mb: 5,
                "@media screen and (max-width: 768px)": {
                  fontSize: "1.6rem",
                  width: "60%",
                },
              }}
            >
              Any Questions? We got You
            </Typography>
            <Typography
              sx={{
                color: "#1B1C31",
                lineHeight: "30px",
                width: "80%",
                "@media screen and (max-width: 768px)": {
                  width: "100%",
                  mb: 4,
                },
              }}
            >
              Yet bed any for assistance indulgence unpleasing. Not thoughts all
              exercise blessing. Indulgence way everything joy alteration
              boisterous the attachment.
            </Typography>
          </Box>
          <Box sx={{}}>
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
