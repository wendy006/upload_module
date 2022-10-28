import React, { useRef, useState } from "react";
import {
  Box,
} from "@material-ui/core";
 
import LinearProgress from '@material-ui/core/LinearProgress';

 
import { makeStyles } from "@material-ui/core/styles";
import type {sectionData} from "./Home"
 
interface IProps {  
  sectionFile:sectionData; 
  // startUpload: boolean;
}

const Uploading = ({sectionFile}: IProps) => {
  const [progress, setProgress] = React.useState(-1);
  const [files, setFiles] = React.useState<string[]>(sectionFile.fileNames);
  const [id] = React.useState<Number>(sectionFile.id);
  const [formData, setFormData] = React.useState<FormData>(sectionFile.formData);

  
  

  console.log('55555555');
  const classes = useStyles();

 


  React.useEffect(() => { 

  

    // const progress = (progressEvent.loaded / progressEvent.total) * 50;
    // setProgress(progress);

    //https://dev.to/jbrocher/react-tips-tricks-uploading-a-file-with-a-progress-bar-3m5p
    //以下指示模拟以下UI上的进度。正常应该是在uploading的过程中，异步更新progress的数字，然后setProgress，这样可以渲染更新后的进度栏
    const timer = setInterval(() => { 
      // setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 8));
      setProgress((prevProgress) => {
        if(prevProgress >= 100){
          sectionFile.uploaded = true;
          return 100;
        }
        else{
          return prevProgress + 8;
        }
      });
    }, 800);

 

    return () => {
      clearInterval(timer); 
    }; 
  }, []);
 


  
    return( 
      <>
      {
    (progress < 100)&& 
    (
      <Box className={classes.dragContainer}>
       
          <Box sx={{ width: '100%' }}>
          <LinearProgress variant="determinate" value={progress} />
          </Box>  
      <Box>
        { 
        files.map((_file,i) => {
          return <h6><p>{_file}</p></h6>
        })
        
        } 
      </Box> 
      </Box>
    ) 

  }
    </>
    )
  
};


const useStyles = makeStyles({

  dragContainer: {
    // position: "relative",
    height: 300,
    background: "gray",
    padding: "10px 10px",
    margin: "0 auto",
    marginTop: 10,
  },
});
 
export default Uploading;



// const Uploading = ({source, sectionFile,startUpload }: IProps) => {
//   const [progress, setProgress] = React.useState(-1);
//   const [files, setFiles] = React.useState<string[]>(sectionFile.fileNames);
//   const [id] = React.useState<Number>(sectionFile.id);
//   const [formData, setFormData] = React.useState<FormData>(sectionFile.formData);

  
  

//   console.log('55555555');
//   const classes = useStyles();




//   React.useEffect(() => {
//     console.log('6666666666666666666666666666666666');
//     if(startUpload){

  

//     // const progress = (progressEvent.loaded / progressEvent.total) * 50;
//     // setProgress(progress);

//     //https://dev.to/jbrocher/react-tips-tricks-uploading-a-file-with-a-progress-bar-3m5p
//     //以下指示模拟以下UI上的进度。正常应该是在uploading的过程中，异步更新progress的数字，然后setProgress，这样可以渲染更新后的进度栏
//     const timer = setInterval(() => {
//       setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 10));
//     }, 800);

 

//     return () => {
//       clearInterval(timer);
//     };

//   }
//   }, [startUpload]);
 
//   if(files.length > 0 && progress < 100){
//     return (
//       <Box className={classes.dragContainer}>
//       { 
//         (progress >0 && progress < 100) && (
//           <Box sx={{ width: '100%' }}>
//           <LinearProgress variant="determinate" value={progress} />
//           </Box> 
//         )  
//       }
//       <Box>
//         {
          
//         files.map((_file,i) => {
//           return <h6><p>{_file}</p></h6>
//         })
        
//         }
        

      
//       </Box>
  
  
  
//       </Box>
//     )
//   }
//   else{
//     return (
//     <>
//     </>
//     )
//   }
  
// };