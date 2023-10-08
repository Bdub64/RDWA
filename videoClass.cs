    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    namespace videoNamespace
    {
        core = new VideoCaptureCore(videoView1 as IVideoView);

            [JSInvokable] public static VideoCaptureCore getVideo(){
                //Grabbing the fullscreen of the computer and setting it to the video source
                core.Screen_Capture_Source = new ScreenCaptureSourceSettings() {FullScreen = true};
                //Has something to do with audio, not sure if this enables or disables its streaming
                core.Audio_PlayAudio = core.Audio_RecordAudio = false;
                //setting the output format to mp4 and starting to record. May not need to set to mp4 - raw stream may work for js
                core.Output_Format = new MP4Output();
                core.Mode = VideoCaptureMode.ScreenCapture;
                await core.StartAsync();

                return core.Output;
            }
        }
        