import React, { useRef, useState } from "react";
import {
  Button,
  Box,
  Typography,
  Divider,
  TextField,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import  Uploading  from "./Uploading"

type sectionData = {
  id:number;
  fileNames: string[];
  formData: FormData;
  uploaded: boolean;
};

export type { sectionData };


interface IProps {
  open: boolean;
  onClose: () => void;
}

const Home = ({ open, onClose }: IProps) => {
  console.log("111111111111111");
  const [source, setSource] = useState<sectionData[]>([]);
  const [tobeUpload, setTobeUpload] = useState<sectionData>();
 
 

  const classes = useStyles(); 
 

  // https://stackoverflow.com/questions/46119987/upload-and-read-a-file-in-react
  const handleNewFileSelect = (values: any) => {
    console.log(values);
    console.log(values.target);
    console.log(values.currentTarget);
    console.log(values.target.files);
    console.log(values.target.files[0]);
    console.log(values.target.files[0].name);




    let names = [];
    let data = new FormData();

    for(let i = 0; i < values.target.files.length; i++){
      let file = values.target.files[i];
      names.push(file.name);
      data.append('file', file); 
    }

    console.log(names); 
    let newSectionData:sectionData = {id:getTimestampInSeconds(), fileNames:names, formData:data, uploaded:false}; 
    setTobeUpload(newSectionData);
     
    // setSource(source.concat(newSectionData));
    console.log(tobeUpload); 
  };

  const handleNewSectionUpload = (button:any) => {
     
    setSource(source.concat(tobeUpload!)); 
    console.log(source); 
    setTobeUpload(undefined);
    
  }

  
  // const updateSectionStatus = (tobeRemoved: sectionData) => {
  //   let newSource = source.filter(sectionFile => sectionFile.id != tobeRemoved.id); 
  //   console.log('EEEEEEEEEEEEEEEEEEEEEEEEEE');
  //   console.log(source); 
  //   console.log(newSource); 
  //   setSource(newSource);   
  // }

  const getTimestampInSeconds =() => {
    return Math.floor(Date.now() / 1000)
  }

  console.log("33333");
  const color1 = red[500];
  return (
    
    <>
      <Typography component="h2" variant="h2" className={classes.title}>
        Upload File
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
          onChange={event => {
            handleNewFileSelect(event);
          }}          
          title=""
          value=""
          hidden
          inputProps={{
            style: { 
              height: 280,
            },
            multiple: true,//上传多个文件
          }}
          
        />
 
        <Typography component="h2" variant="h2" className={classes.title}>
          Drag / Click / Drop File
        </Typography> 


        

        {  
       (tobeUpload && tobeUpload.fileNames)&& (
        <Box>
       <Typography component="h6" variant="h6" className={classes.title}>File To be Uploaded: </Typography> 
       {
        tobeUpload.fileNames.map((name, i) => {
        return (<li>{name}</li>)  
       })

        }
        <Button onClick={handleNewSectionUpload}> Upload </Button>
        </Box>

       ) 
       }


         
      </Box>
        {console.log('wwwwwwwwwwwwwwwwwwwww')}
        
       { 
       
       (source.length > 0)&&(

       source.map((_sectionFile, i) => {
        return (_sectionFile.uploaded===false)&&(<Uploading sectionFile={_sectionFile}/>)
      })

       ) 
       }
    </>
      
     
  );
};

const useStyles = makeStyles({
  uploadBtn: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    color: "white",
    height: 100,
    width: "20%",
    padding: "30px 30px",

    display: "block",
    margin: "0 auto",
    marginTop: "22px",
  },

  dragContainer: {
    position: "relative",
    height: 300,
    background: "gray",
    padding: "10px 10px",
    margin: "0 auto",
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

  title: {
    flexGrow: 1,
    textAlign: "center",
  },
});
 
export default Home;
 