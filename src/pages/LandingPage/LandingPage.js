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
                    my: 3,
                  },
                  textDecoration: "capitalize",
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
              mt: 20,
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
                  textTransform: "capitalize",
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
                Coming Soon...
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
                pt: 5,
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
              justifyContent: "space-between",
              margin: "auto",
              p:10,
              pt: 11,
              "@media screen and (max-width: 768px)": {
                p: 0,
              },
            }}
          >
            <Card
              className="card"
              sx={{
                width: "450px",
                height: "230px",
                display: "flex",
                px: 5,
                pt: 5,
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
                  width: "100px",
                  pt: 2,
                }}
              >
                <CardMedia
                  component="img"
                  alt=""
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
                width: "450px",
                height: "230px",
                display: "flex",
                px: 5,
                pt: 5,
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
                  height: "175px",
                  width: "175px",
                  pt: 3,
                }}
              >
                <CardMedia
                  component="img"
                  alt=""
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
                  Smart
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
                  Forget about Word templates and hours of editing. Powered by
                  intelligent technologies, ProResume will save your time and
                  guide you to the best version of your resume.
                </Typography>
              </CardContent>
            </Card>
            <Card
              className="card"
              sx={{
                width: "450px",
                height: "230px",
                display: "flex",
                px: 5,
                pt: 5,
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
                  height: "150px",
                  width: "150px",
                  pt: 2,
                }}
              >
                <CardMedia
                  component="img"
                  alt=""
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
                  Customizable template
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
                  Just choose from a list of templates and jump-start the
                  configuration. Every template can be adjusted to make it your
                  own style.
                </Typography>
              </CardContent>
            </Card>
            <Card
              className="card"
              sx={{
                width: "450px",
                height: "230px",
                display: "flex",
                px: 5,
                pt: 5,
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
                  height: "175px",
                  width: "175px",
                  pt: 2,
                }}
              >
                <CardMedia
                  component="img"
                  alt=""
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
                  Create Unlimited Resumes
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
                  A select library of expertly designed templates for easy
                  online resume making, all created by professional graphic
                  designers. Choose from various styles and formats with ease.
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
          <Box sx={{ width: "70%" }}>
            <Accordion
              sx={{ mb: 3, boxShadow: "none", borderBottom: "2px solid black" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h6">How Resume Builder works?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Our online resume builder features design and customization
                  tools with real-time previews available, giving you the
                  ultimate control over the look and feel of your resume.
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
                  Is Resume Builder really free?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yes, resume-builder-and-analyzer.web.app is completely free
                  for everyone. After creating a Resume, you can login into the
                  ResumeBuilder Dashboard and download your resume in PDF format
                  for free. There’s no trickery, no hidden cost.
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
                <Typography variant="h6">
                  Which is the best Resume Template?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Every resume template is unique in its own way and serve its
                  purpose. Our suggestion is to go with whichever template that
                  catches your attention. Since each recruiter/employer has its
                  preferences, there is no “best resume template or format” that
                  will be suitable for all the positions/jobs.
                </Typography>
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
                <Typography variant="h6">
                  How long should a Resume be?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  From research it has been found that most of the recruiters
                  recommend using maximum one page resume, especially when you
                  are a student or having less than 5 years of relevant work
                  experience. Even if you have more than 5 years work experience
                  and many other relevant activities that are relevant to the
                  job you are applying for, don’t go beyond 2-3 pages
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default LandingPage;
