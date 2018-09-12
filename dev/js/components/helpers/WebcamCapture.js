import React, { Component } from 'react';
import FontIcon from 'react-md/lib/FontIcons';
import Button from 'react-md/lib/Buttons/Button';
import {DialogContainer} from 'react-md'
import Webcam from 'react-webcam';
import {FormattedMessage} from 'react-intl';


class WebcamCapture extends Component {
  constructor(props) {
    super(props);
    this.state = {dialogVisible: false };
  }
  componentDidMount() {

  }
  componentWillReceiveProps(next){

  }
  handleWebcamModal = () =>{
    this.toggleDialogVisible()
  }
  toggleDialogVisible= ()=>{
    const {dialogVisible} = this.state
    this.setState({dialogVisible: !dialogVisible})
  }
  handleCapture = () =>{
    const {onCaptureScreen} = this.props
    const imageSrc = this.refs.cam.getScreenshot();
    onCaptureScreen(imageSrc)
    this.toggleDialogVisible()
  }
  render(){
    const {w, h} = this.props
    const {dialogVisible} = this.state
    const videoConstraints = {

      facingMode: 'user',
    }  
    return(
     <div className="text-center">
       <Button iconEl={<FontIcon>camera_alt</FontIcon>} onClick={this.handleWebcamModal} flat primary swapTheming>
        <FormattedMessage 
          id="WebcamCapture.useWebcam"
          defaultMessage="Use webcam"
        />
       </Button>
       <DialogContainer
            id="webcamDialog"
            visible={dialogVisible}
            title={<FormattedMessage 
              id="WebcamCapture.webcam"
              defaultMessage="Webcam"
            />}
            focusOnMount={false}
            onHide={this.toggleDialogVisible}
            portal={true}
          >
            <div>
              <Webcam
                audio={false}
                width="100%"
                height={300}
                screenshotFormat="image/jpeg"
                ref="cam" 
                videoConstraints={videoConstraints}
              />
              <div className="text-center">
                <Button iconEl={<FontIcon>camera_alt</FontIcon>} onClick={this.handleCapture} raised primary >
                  <FormattedMessage 
                    id="WebcamCapture.capture"
                    defaultMessage="Capture"
                  />
                </Button>
              </div>
              
            </div>
          </DialogContainer>
     </div>
    )
  }
}
export default WebcamCapture
