import { useState } from "react";
import { Button, Box, Typography, Divider, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Uploading from "./Uploading";
import bg from "./assets/bg.png";

type sectionData = {
  id: number;
  fileNames: string[];
  formData: FormData;
  uploaded: boolean;
};

export type { sectionData };

const Home = () => {
  const [source, setSource] = useState<sectionData[]>([]);
  const [tobeUpload, setTobeUpload] = useState<sectionData>();
  const classes = useStyles();
  // https://stackoverflow.com/questions/46119987/upload-and-read-a-file-in-react
  const handleNewFileSelect = (values: any) => {
    let names = [];
    let data = new FormData();

    for (let i = 0; i < values.target.files.length; i++) {
      let file = values.target.files[i];
      names.push(file.name);
      data.append("file", file);
    }

    let newSectionData: sectionData = {
      id: getTimestampInSeconds(),
      fileNames: names,
      formData: data,
      uploaded: false,
    };
    setTobeUpload(newSectionData);
  };

  const handleNewSectionUpload = (button: any) => {
    setSource(source.concat(tobeUpload!));
    setTobeUpload(undefined);
  };

  const getTimestampInSeconds = () => {
    return Math.floor(Date.now() / 1000);
  };

  return (
    <>
      <Typography component="h2" variant="h2" className={classes.title}>
        Demo
      </Typography>
      <Divider></Divider>

      <Box className={classes.dragContainer}>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          fullWidth
          className={classes.drag}
          type="file"
          onChange={(event) => {
            handleNewFileSelect(event);
          }}
          title=""
          value=""
          hidden
          inputProps={{
            style: {
              height: 230,
            },
            multiple: true,
          }}
        />

        {tobeUpload && tobeUpload.fileNames && (
          <Box className={classes.boxCenter}>
            <Typography component="h6" variant="h6" className={classes.title}>
              {" "}
              File To be Upload:
              <br />
              {tobeUpload.fileNames.map((name, i) => {
                return <li>{name}</li>;
              })}
            </Typography>
          </Box>
        )}
      </Box>

      <Button
        disabled={!(tobeUpload && tobeUpload.fileNames)}
        onClick={handleNewSectionUpload}
        className={classes.uploadBtn}
      >
        {" "}
        Upload{" "}
      </Button>
      {source.length > 0 && (
        <Box className={classes.boxPadding}>
          {source.map((_sectionFile, i) => {
            return (
              _sectionFile.uploaded === false && (
                <Uploading sectionFile={_sectionFile} />
              )
            );
          })}
        </Box>
      )}
    </>
  );
};

//https://stackoverflow.com/questions/55781090/styles-withstyles-defaulttheme-option-cant-set-custom-theme
//https://stackoverflow.com/questions/52759220/importing-images-in-typescript-react-cannot-find-module
const useStyles = makeStyles({
  uploadBtn: {
    background: "#00BFFF",
    border: 0,
    borderRadius: 3,
    color: "white",
    height: 50,
    width: 60,
    padding: "1px 1px",
    marginTop: 5,
    float: "right",
    marginRight: "25%",

    "&.Mui-active": {
      background: "#00BFFF",
      color: "white",
    },

    "&.Mui-disabled": {
      background: "#778899",
      color: "#F0FFFF",
    },
  },

  dragContainer: {
    position: "relative",
    height: 250,
    background: "gray",
    padding: "10px 10px",
    margin: "0 auto",
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundSize: "auto 100%",
    backgroundRepeat: "no-repeat",
  },

  drag: {
    background: "blue",
    fontSize: "18px",
    display: "block",
    border: "none",
    textTransform: "none",
    position: "absolute",
    top: 0,
    marginTop: 0,
    opacity: 0,
    width: "100%",
    height: "100%",
    "&.Mui-focused": {
      outline: "none",
    },
  },

  boxPadding: {
    marginTop: 60,
  },

  boxCenter: {
    height: "100%",
    width: "15%",
    float: "right",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "white",
  },

  title: {
    textAlign: "center",
  },
});

export default Home;
