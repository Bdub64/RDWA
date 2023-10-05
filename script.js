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
      videoElem.srcObject =
        await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
    } catch (err) {
      console.error(err);
    }
  }
  startCapture(gdmOptions)
  //test