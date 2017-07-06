import React, { Component } from 'react';
import Slider from 'react-md/lib/Sliders';

export default class Canvas extends Component {
  constructor() {
    super()
    this.state = {
      ctx: null,
      image: null,
      sliderValue: 1,
      isDragging: false
    }
  }
  componentDidMount() {
    const {src} = this.props
    this.updateCanvas(src);
  }
  componentWillReceiveProps(next){
    const {src} = this.props
    if(src != next.src){
      this.updateCanvas(next.src)
    }
  }
  drawImage = (x, y, width, height) =>{
    const {ctx, image} = this.state
    ctx.drawImage(image,x, y, width, height)
  }
  updateCanvas = (src)=> {
    const ctx = this.refs.canvas.getContext('2d');
    var image = new Image();
    //image.crossOrigin = "anonymous"
    image.src = src
    image.onload = function() {
      this.setState({
        ctx: ctx,
        image: image
      })
      let ratio = image.width / image.height
      console.log('ratio start', ratio);
      if(ratio > 1){
        this.drawImage(0,0,image.width * (200/image.height),200)
      }else{
        this.drawImage(0,0,200, image.height * (200/image.width))
      }

      //var dataurl = this.refs.canvas.toDataURL("image/png");
      //console.log('dataurl', dataurl);
    }.bind(this)
  }
  handleSliderChange = (value) =>{
    const {sliderValue, image} = this.state
    if(value != sliderValue) {
      this.setState({sliderValue: value})
      let ratio = image.width / image.height,
          minWidth = 200,
          minHeight = 200,
          imgWidth = image.width,
          imgHeight = image.height,
          percent = value / 100
      if(ratio > 1){
        minWidth = imgWidth * (minHeight / imgHeight)
      }else{
        minHeight = imgHeight * (minWidth / imgWidth)
      }
      let drawnWidth = minWidth + (imgWidth - minWidth) * percent,
          drawnHeight = minHeight + (imgHeight - minHeight) * percent,
          posX = -1 * (drawnWidth - minWidth) / 2,
          posY = -1 * (drawnHeight - minHeight) / 2
      this.drawImage(posX,posY,drawnWidth, drawnHeight)
    }
  }
  _onMouseDown = (e)=> {
    console.log('down');
    this.setState({isDragging: true})
  }
  _onMouseUp = (e)=> {
    console.log('up');
    this.setState({isDragging: false})
  }
  _onMouseMove = (e)=> {
    if(this.state.isDragging){
      console.log(e.screenX, e.screenY);
    }
    //console.log(e.screenX, e.screenY);
    //this.setState({ x: e.screenX, y: e.screenY });
  }
  render() {
    return (
      <div>
        <canvas onMouseUp={this._onMouseUp} onMouseDown={this._onMouseDown} onMouseMove={this._onMouseMove} ref="canvas" width={200} height={200}/>
        <Slider
          id="minMaxSlider"
          label="zoom"
          onChange={this.handleSliderChange}
          defaultValue={1}
          min={1}
          max={100}
          step={1}
        />
      </div>
    );
  }
}
