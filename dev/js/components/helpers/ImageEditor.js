import React, { Component } from 'react';
import Slider from 'react-md/lib/Sliders';
import FontIcon from 'react-md/lib/FontIcons';

class ImageEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ctx: null,
      image: null,
      sliderValue: 1,
      disabledSlider: false,
      isDragging: false,
      posX: null,
      poxY: null,
      tmpX: 0,
      tmpY: 0,
      startWidth: 0,
      startHeight: 0,
      drawnWidth: 0,
      drawnHeight: 0,
      startMoveX: 0,
      startMoveY: 0
    };
  }
  componentDidMount() {
    const {onSetCanvaRef} = this.props
    onSetCanvaRef(this.refs.canvas)
  }
  componentWillReceiveProps(next){
    const {src} = this.props    
    if(src != next.src){
     this.loadCanvas(next.src)
    }
  }
  loadCanvas = (imageData)=>{
    const {w, h } = this.props
    const ctx = this.refs.canvas.getContext('2d')
    const image = new Image()
    let disableSlider = false

    image.src = imageData
    image.onload = function() {
      const ratio = image.width / image.height
      let drawnWidth = w,
            drawnHeight = h,
            minWidth = w,
            minHeight = h,
            startPosX = 0,
            startPosY = 0

      if(ratio > 1){
        minWidth = image.width * (minHeight / image.height)
        drawnWidth = image.width * (h/image.height)
        startPosX = -1 * (drawnWidth - w) / 2
      }else{
        minHeight = image.height * (minWidth / image.width)
        drawnHeight = image.height * (w/image.width)
        startPosY = -1 * (drawnHeight - h) / 2
      }
      if(image.width <= w) disableSlider = true
      if(image.height <= h) disableSlider = true

      this.setState({
        posX: startPosX,
        posY: startPosY,
        tmpX: startPosX,
        tmpY: startPosY,
        ctx: ctx,
        disabledSlider: disableSlider,
        image: image,
        drawnWidth: drawnWidth,
        drawnHeight: drawnHeight,
        startWidth: drawnWidth,
        startHeight: drawnHeight 
      })
      this.drawImage(startPosX, startPosY, drawnWidth, drawnHeight)
    }.bind(this)
  }
  drawImage = (x, y, width, height) =>{
    const {ctx, image, drawnWidth, drawnHeight} = this.state
    if(width && height){
      ctx.drawImage(image,x, y, width, height)
    }else{
      ctx.drawImage(image,x, y, drawnWidth, drawnHeight)
    }
  }
  handleSliderChange = (value) =>{
    const {sliderValue, image, posX, posY, drawnWidth, drawnHeight, startWidth, startHeight} = this.state
    const {w, h} = this.props
    if(value != sliderValue) {
      let ratio = image.width / image.height,
          minWidth = w,
          minHeight = h,
          imgWidth = image.width,
          imgHeight = image.height,
          percent = value / 100
      if(ratio > 1){
        minWidth = imgWidth * (minHeight / imgHeight)
      }else{
        minHeight = imgHeight * (minWidth / imgWidth)
      }
      let newDrawnWidth = minWidth + (imgWidth - minWidth) * percent,
          newDrawnHeight = minHeight + (imgHeight - minHeight) * percent,
          newPosX = posX - (newDrawnWidth - drawnWidth) / 2,
          newPosY = posY - (newDrawnHeight - drawnHeight) / 2

      if(newPosX > 0) newPosX = 0
      else if(newPosX < w - drawnWidth) newPosX = w - drawnWidth
      if(newPosY > 0) newPosY = 0
      else if(newPosY < h - drawnHeight) newPosY = h - drawnHeight

      this.setState({
        sliderValue: value,
        drawnWidth: newDrawnWidth,
        posX: newPosX,
        posY: newPosY,
        drawnHeight: newDrawnHeight
      })
      this.drawImage(newPosX,newPosY,newDrawnWidth, newDrawnHeight)
    }
  }
  onMouseDown = (e)=> {
    
    let x, y
    if(e.type == 'touchstart'){
      console.log(e.targetTouches[0])
      const rect = e.target.getBoundingClientRect();
      x = e.targetTouches[0].pageX - rect.left;
      y = e.targetTouches[0].pageY - rect.top;
    }else{
      x = e.nativeEvent.offsetX
      y = e.nativeEvent.offsetY
    }
    this.setState({
      isDragging: true,
      startMoveX: x,
      startMoveY: y
    })
  }
  onMouseUp = (e)=> {
    if(this.state.isDragging){
      this.setState({
        isDragging: false,
        posX: this.state.tmpX,
        posY: this.state.tmpY
      })
    }
  }
  onMouseMove = (e)=> {
    const {w, h} = this.props
    if(this.state.isDragging){
      const {posX, posY, startMoveX, startMoveY, drawnWidth, drawnHeight} = this.state
      const canvas = this.refs.canvas.getBoundingClientRect()
      let clientX, clientY
      if(e.type == 'touchmove'){
        clientX = e.targetTouches[0].clientX
        clientY = e.targetTouches[0].clientY
      }else{
        clientX = e.clientX
        clientY = e.clientY
      }

      let offsetX = clientX - canvas.left,
          offsetY = clientY - canvas.top,
          moveX = posX + offsetX - startMoveX,
          moveY = posY + offsetY - startMoveY
      if(moveX > 0) moveX = 0
      else if(moveX < w - drawnWidth) moveX = w - drawnWidth
      if(moveY > 0) moveY = 0
      else if(moveY < h - drawnHeight) moveY = h - drawnHeight

      this.setState({tmpX: moveX, tmpY: moveY})
      this.drawImage(moveX,moveY)
    }
  }
  render(){
    const {w, h} = this.props  
    const {disabledSlider} = this.state
    return(
      <div className="avatar-zoom">
        <canvas
          className={this.state.isDragging ? "is-dragging": null}
          onMouseLeave={this.onMouseUp}
          onMouseUp={this.onMouseUp}
          onTouchEnd={this.onMouseUp}
          
          onMouseDown={this.onMouseDown}
          onTouchStart={this.onMouseDown}

          onMouseMove={this.onMouseMove}
          onTouchMove={this.onMouseMove}
          ref="canvas" 
          width={w}
          height={h}
        />
        <Slider
          id="zoomSlider"
          ref="slider"
          defaultValue={1}
          valuePrecision={1}
          value={this.state.sliderValue}
          onChange={this.handleSliderChange}
          disabled={disabledSlider}
          min={1}
          max={100}
          step={1}
          leftIcon={<FontIcon>zoom_in</FontIcon>}
        />
      </div>
    )
  }
}
export default ImageEditor
