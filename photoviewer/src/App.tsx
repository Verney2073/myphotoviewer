import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { PhotoViewer } from './photoviewer/photoviewer';
import { SecondaryPhotos, getImageUrls, } from './photoviewer/imageselector';
import {NavBar} from './photoviewer/NavBar'

//It seems logical to start a React project here - what are the components you'll want to call?
//What Components do I need - that is, functions to send/get data, and blocks of HTML to return? 
//These can begin to be formulated here, then moved out into Component files 
//Which variables will be used across many components? 
//Which components will be used once, which may reappear? 


function App() {
  //create the useState for imageUrl here - as this needs to be used by both PhotoViewer and secondaryPhotos
  //Think in terms of scope - App is calling the other functions so needs to pass the imageUrl var and setImageUrl state-function down...
  //Rather than other functions trying to pass them 'up' to App()
  const imageUrls = getImageUrls();
  const [imageUrl, setImageUrl] = useState(imageUrls[5]);
  const [pageState,setPageState] = useState("homepage");

  if (pageState === "homepage"){
  return (
    <div>
      <NavBar pageState ={pageState} setPageState={setPageState}/>
      <br></br>
      <h1>My Photo Viewer</h1>
      <PhotoViewer src={imageUrl} />
      <SecondaryPhotos
        srcArray={imageUrls}
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
      />

    </div>
  )} else {
    return (
      <div>
        <NavBar pageState ={pageState} setPageState={setPageState}/> 
        <h1>This page isn't built yet!</h1>
      </div>
    )
  };
}


export default App
