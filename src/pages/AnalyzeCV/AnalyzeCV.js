import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { DropzoneArea } from "material-ui-dropzone";
import { AttachFile, Description, PictureAsPdf } from "@mui/icons-material";
const AnalyzeCV = () => {
  const handlePreviewIcon = (fileObject, classes) => {
    const { type } = fileObject.file;
    const iconProps = {
      className: classes.image,
    };

    switch (type) {
      case "application/msword":
      case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        return <Description {...iconProps} />;
      case "application/pdf":
        return <PictureAsPdf {...iconProps} />;
      default:
        return <AttachFile {...iconProps} />;
    }
  };
  return (
    <Card
      sx={{
        maxWidth: 1100,
        margin: "auto",
        px: 20,
        pt: 8,
        pb: 30,
        background: "#b3dffb",
        borderRadius: 10,
        mt: 10,
      }}
    >
      <CardContent>
        <Typography variant="h3" textAlign="center" color="#134978">
          Get Professional Review of your Resume
        </Typography>
        <Typography variant="subtitle1" align="center" color="#5392bb">
          AI alogrithm reviews of your resume and give feedback.
        </Typography>
      </CardContent>
      <DropzoneArea
        onChange={(files) => console.log("Files:", files)}
        getPreviewIcon={handlePreviewIcon}
        acceptedFiles={["application/pdf", "application/msword"]}
      />
    </Card>
  );
};

export default AnalyzeCV;
