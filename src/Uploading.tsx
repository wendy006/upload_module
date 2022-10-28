import React from "react";
import { Box } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core/styles";
import type { sectionData } from "./Home";

interface IProps {
  sectionFile: sectionData;
}

const Uploading = ({ sectionFile }: IProps) => {
  const [progress, setProgress] = React.useState(-1);
  const [files, setFiles] = React.useState<string[]>(sectionFile.fileNames);
  const [id] = React.useState<Number>(sectionFile.id);
  //this field is the content we used to sent to the server side, but in this demo, I was not required to do so.
  const [formData, setFormData] = React.useState<FormData>(
    sectionFile.formData
  );

  const classes = useStyles();

  React.useEffect(() => {
    //https://dev.to/jbrocher/react-tips-tricks-uploading-a-file-with-a-progress-bar-3m5p
    //Just simulate the progress on the UI part. Normally, in the process of uploading, update the progress number asynchronously, and then setProgress, so that the updated progress bar can be rendered.
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          sectionFile.uploaded = true;
          return 100;
        } else {
          return prevProgress + 8;
        }
      });
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      {progress < 100 && (
        <Box className={classes.dragContainer}>
          <Box sx={{ width: "100%" }}>
            <LinearProgress variant="determinate" value={progress} />
          </Box>
          <Box>
            {files.map((_file, i) => {
              return <span> {_file} | </span>;
            })}
          </Box>
        </Box>
      )}
    </>
  );
};

const useStyles = makeStyles({
  dragContainer: {
    height: 40,
    background: "#6f60aa",
    padding: "10px 10px",
    margin: "0 auto",
    marginTop: 10,
  },
});

export default Uploading;
