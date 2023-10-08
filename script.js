const gdmOptions = {
    video: {
      displaySurface: "window",
    },
    audio: {
      echoCancellation: true,
      noiseSuppression: true,
      sampleRate: 44100,
      suppressLocalAudioPlayback: true,
    },
    surfaceSwitching: "include",
    selfBrowserSurface: "exclude",
    systemAudio: "exclude",
  };
  
  const videoElem = document.getElementById("video");
  
  async function startCapture(displayMediaOptions) {
  
    try {
      console.log('Attempting C# script run...')
      videoElem.srcObject = DotNet.invokeMethod('videoClass','getVideo') // should change navigator... to a pull for the c# video feed when next available. pushing to Main for now.
    } catch (err) {
      console.error(err);
    }
  }
  startCapture(gdmOptions)