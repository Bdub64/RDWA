  const videoElem = document.getElementById("video");
  
  async function startCapture() {
  
    try {
      console.log('Attempting C# script run...')
      videoElem.srcObject =  // should change navigator... to a pull for the c# video feed when next available. pushing to Main for now.
    } catch (err) {
      console.error(err);
    }
  }
  startCapture()