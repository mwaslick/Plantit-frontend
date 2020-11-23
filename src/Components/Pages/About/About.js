import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Spring } from "react-spring/renderprops";

const muiBaseTheme = createMuiTheme();

const theme = {
  overrides: {
    MuiCard: {
      root: {
        "&.MuiEngagementCard--01": {
          transition: "0.3s",
          maxWidth: 300,
          margin: "auto",
          justifyContent: "center",
          boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
          "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
          },
          "& .MuiCardMedia-root": {
            paddingTop: "56.25%",
            height: 150,
          },
          "& .MuiCardContent-root": {
            textAlign: "center",
            padding: muiBaseTheme.spacing(3),
          },
          "& .MuiDivider-root": {
            margin: `${muiBaseTheme.spacing(3)}px 0`,
          },
          "& .MuiTypography--heading": {
            fontWeight: "bold",
          },
          "& .MuiTypography--subheading": {
            lineHeight: 1.8,
          },
          "& .MuiAvatar-root": {
            display: "inline-block",
            border: "2px solid white",
            "&:not(:first-of-type)": {
              marginLeft: -muiBaseTheme.spacing(),
            },
          },
        },
      },
    },
  },
};

export default function About() {
  return (
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <div className="About" style={{ background: "#005254" }}>
        {/* Our Story */}
        <Grid container>
          <Grid item xs={12}>
            <Typography
              className={"MuiTypography--heading"}
              variant={"h3"}
              fontWeight="bold"
              component="h1"
              align="center"
              style={{ color: "#a9a9a9", marginTop: "2%", marginLeft: "2%" }}
            >
              Our Story
            </Typography>
          </Grid>
          <Grid
            item
            style={{ justifyContent: "center", width: "70%", margin: "auto" }}
          >
            <Divider light />
            <Typography
              className={"MuiTypography--subheading"}
              variant="subtitle1"
              component="subtitle1"
              align="center"
              style={{ color: "#a9a9a9" }}
            >
              We came together with a common goal: making our plants happy,
              healthy, and most importantly, alive. There are many avenues to
              find information about plants, but we are glad you have come here
              to learn, teach, and share.
            </Typography>
          </Grid>
        </Grid>
        <Grid container style={{ marginTop: "2%", justifyContent: "center" }}>
          {/* Caitlin's card with animation */}
          <Spring
            from={{ opacity: 0, marginTop: -100 }}
            to={{ opacity: 1, marginTop: 0 }}
            config={{ duration: 2000 }}
          >
            {(props) => (
              <div style={props}>
                <Grid item xs className="Caitlin">
                  <Card className={"MuiEngagementCard--01"}>
                    <CardMedia
                      className={"MuiCardMedia-root"}
                      image={
                        "https://res.cloudinary.com/dbd23cfw2/image/upload/v1605902503/project%203/CaitPic_u6r2z5.jpg"
                      }
                      style={{ height: 150 }}
                    />
                    <CardContent className={"MuiCardContent-root"}>
                      <Typography
                        className={"MuiTypography--heading"}
                        variant={"h6"}
                        gutterBottom
                      >
                        Caitlin Bouroncle
                      </Typography>
                      <Typography
                        className={"MuiTypography--subheading"}
                        variant={"caption"}
                      >
                        Caitlin served as Project Manager and worked primarily on
                        the frontend build with React and Material UI. It was
                        incredible working with such a dedicated team!
                      </Typography>
                      <Divider className={"MuiDivider-root"} light />
                      <Button
                        variant="outlined"
                        size="small"
                        color="inherit"
                        href="https://github.com/caitlinbou"
                      >
                        Github
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        color="inherit"
                        href="https://caitlinbou.github.io/caitlinbouroncle/"
                      >
                        Portfolio
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              </div>
            )}
          </Spring>

          {/* Janelle's card with animation */}
          <Spring
            from={{ opacity: 0, marginTop: -200 }}
            to={{ opacity: 1, marginTop: 0 }}
            config={{ delay: 1000, duration: 2000 }}
          >
            {(props) => (
              <div style={props}>
                <Grid item xs className="Janelle">
                  <Card className={"MuiEngagementCard--01"}>
                    <CardMedia
                      className={"MuiCardMedia-root"}
                      image={
                        "https://res.cloudinary.com/dbd23cfw2/image/upload/v1605907795/project%203/janelleheadshot1-sm_opdiel.jpg"
                      }
                      style={{ height: 150 }}
                    />
                    <CardContent className={"MuiCardContent-root"}>
                      <Typography
                        className={"MuiTypography--heading"}
                        variant={"h6"}
                        gutterBottom
                      >
                        Janelle Deane
                      </Typography>
                      <Typography
                        className={"MuiTypography--subheading"}
                        variant={"caption"}
                      >
                        Janelle primarily focused on the frontend working with
                        React and Material-Ui. It was a blast to combine a love
                        of coding and gardens!
                      </Typography>
                      <Divider className={"MuiDivider-root"} light />
                      <Button
                        variant="outlined"
                        size="small"
                        color="inherit"
                        href="https://github.com/janelle-deane"
                      >
                        Github
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        color="inherit"
                        href="https://janelle-deane.herokuapp.com/"
                      >
                        Portfolio
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              </div>
            )}
          </Spring>

          {/* Ann's card with animation */}
          <Spring
            from={{ opacity: 0, marginTop: -200 }}
            to={{ opacity: 1, marginTop: 0 }}
            config={{ delay: 2000, duration: 2000 }}
          >
            {(props) => (
              <div style={props}>
                <Grid item xs className="Ann">
                  <Card className={"MuiEngagementCard--01"}>
                    <CardMedia
                      className={"MuiCardMedia-root"}
                      image={
                        "https://res.cloudinary.com/dbd23cfw2/image/upload/v1606088759/project%203/Ann_Headshot1_wni57i.jpg"
                      }
                      style={{ height: 150 }}
                    />
                    <CardContent className={"MuiCardContent-root"}>
                      <Typography
                        className={"MuiTypography--heading"}
                        variant={"h6"}
                        gutterBottom
                      >
                        Ann Guinee
                      </Typography>
                      <Typography
                        className={"MuiTypography--subheading"}
                        variant={"caption"}
                      >
                        Ann primarily focused the database, manipulating it and
                        connecting it to the page. It was wonderful to learn more
                        about botany!
                      </Typography>
                      <Divider className={"MuiDivider-root"} light />
                      <Button
                        variant="outlined"
                        size="small"
                        color="inherit"
                        href="https://github.com/GnuArtemis"
                      >
                        Github
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        color="inherit"
                        href="https://ann-guinee-website.herokuapp.com/"
                      >
                        Portfolio
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              </div>
            )}
          </Spring>

          {/* Maria's card with animation */}
          <Spring
            from={{ opacity: 0, marginTop: -200 }}
            to={{ opacity: 1, marginTop: 0 }}
            config={{ delay: 3000, duration: 2000 }}
          >
            {(props) => (
              <div style={props}>
                <Grid item xs className="Maria">
                  <Card className={"MuiEngagementCard--01"}>
                    <CardMedia
                      className={"MuiCardMedia-root"}
                      image={
                        "https://res.cloudinary.com/dbd23cfw2/image/upload/v1606088837/project%203/mwpicture_cropped_xyuhbo.png"
                      }
                      style={{ height: 150 }}
                    />
                    <CardContent className={"MuiCardContent-root"}>
                      <Typography
                        className={"MuiTypography--heading"}
                        variant={"h6"}
                        gutterBottom
                      >
                        Maria Waslick
                      </Typography>
                      <Typography
                        className={"MuiTypography--subheading"}
                        variant={"caption"}
                      >
                        Maria primarily worked on the back-end routes and user management process, as well as front-end styling. It was great to work on such an expansive project!
                      </Typography>
                      <Divider className={"MuiDivider-root"} light />
                      <Button
                        variant="outlined"
                        size="small"
                        color="inherit"
                        href="https://github.com/mwaslick"
                      >
                        Github
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        color="inherit"
                        href="https://mwaslick.github.io/portfolio/index.html"
                      >
                        Portfolio
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              </div>
            )}
          </Spring>

          {/* Matt's card with animation */}
          <Spring
            from={{ opacity: 0, marginTop: -200 }}
            to={{ opacity: 1, marginTop: 0 }}
            config={{ delay: 4000, duration: 2000 }}
          >
            {(props) => (
              <div style={props}>
                <Grid item xs className="Matt">
                  <Card className={"MuiEngagementCard--01"}>
                    <CardMedia
                      className={"MuiCardMedia-root"}
                      image={
                        "https://res.cloudinary.com/dbd23cfw2/image/upload/v1605907736/project%203/mgw_photo_rabivp.jpg"
                      }
                      style={{ height: 150 }}
                    />
                    <CardContent className={"MuiCardContent-root"}>
                      <Typography
                        className={"MuiTypography--heading"}
                        variant={"h6"}
                        gutterBottom
                      >
                        Matt Weber
                      </Typography>
                      <Typography
                        className={"MuiTypography--subheading"}
                        variant={"caption"}
                      >
                        Matt worked on the front end with React and Konva and utilized his engineering tool experience as the primary developer of the garden planner tool.
                      </Typography>
                      <Divider className={"MuiDivider-root"} light />
                      <Button
                        variant="outlined"
                        size="small"
                        color="inherit"
                        href="https://github.com/webermg"
                      >
                        Github
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        color="inherit"
                        href="https://hidden-tundra-83871.herokuapp.com/"
                      >
                        Portfolio
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              </div>
            )}
          </Spring>
        </Grid>
      </div>
    </MuiThemeProvider>
  );
}
