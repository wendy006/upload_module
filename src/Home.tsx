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
import  Uploading  from "./Uploading";
import bg from "./assets/bg.png";
import { Autocomplete } from "@material-ui/lab";

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
          onChange={event => {
            handleNewFileSelect(event);
          }}          
          title=""
          value=""
          hidden
          inputProps={{
            style: { 
              height: 230,
            },
            multiple: true,//上传多个文件
          }}
          
        />
 
        {/* <Typography component="h2" variant="h2" className={classes.title}>
          Drag / Click / Drop File
        </Typography>  */}

        



        

        {  
       (tobeUpload && tobeUpload.fileNames)&& (
        <Box className={classes.boxCenter}>
       <Typography component="h6" variant="h6" className={classes.title}> File To be Upload:  
       <br/> 
       {
        tobeUpload.fileNames.map((name, i) => {
        return ( <li>{name}</li> )  
       })

        }

        </Typography> 
         </Box>

       ) 
       }


         
      </Box>

      
      <Button  disabled = {!(tobeUpload && tobeUpload.fileNames)}  onClick={handleNewSectionUpload} className={classes.uploadBtn}> Upload </Button>
       


        {console.log('wwwwwwwwwwwwwwwwwwwww')}
        
       { 
       
       (source.length > 0)&&(
        <Box className={classes.boxPadding}>
       {
       source.map((_sectionFile, i) => {
        return (_sectionFile.uploaded===false)&&(<Uploading sectionFile={_sectionFile}/>)
      })
        }
        </Box>
       ) 
       }
    </>
      
     
  );
};

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

    // display: "block",
    // margin: "0 auto",
    // position: "absolute",
    marginTop: 5, 
    float:"right",
    marginRight: "25%",

    "&.Mui-active":{
      background: "#00BFFF",
      color: "white", 
    },

    "&.Mui-disabled":{
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
    backgroundRepeat: "no-repeat",  //背景图片只显示一次
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

  boxPadding:{
    marginTop: 60,
  },

  boxCenter:{
     
    height:"100%",
    width: "15%",
    float: "right",
    display:"flex" ,
    alignItems:"center",
    justifyContent:"center",
    background: "white",
  },

  title: { 
    textAlign: "center",
  },
});
 
export default Home;
 