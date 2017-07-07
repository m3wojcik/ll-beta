import React, { Component } from 'react';
import Slider from 'react-md/lib/Sliders';

export default class Canvas extends Component {
  constructor() {
    super()
    this.state = {
      ctx: null,
      image: null,
      sliderValue: 1,
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
    const {ctx, image, drawnWidth, drawnHeight} = this.state
    if(width && height){
      ctx.drawImage(image,x, y, width, height)
    }else{
      ctx.drawImage(image,x, y, drawnWidth, drawnHeight)
    }
  }
  updateCanvas = (src)=> {
    const {w, h} = this.props
    const ctx = this.refs.canvas.getContext('2d');
    var image = new Image();
    let drawnWidth = w,
        drawnHeight = h,
        minWidth = w,
        minHeight = h,
        startPosX = 0,
        startPosY = 0
    //image.crossOrigin = "anonymous"
    image.src = src
    image.onload = function() {
      let ratio = image.width / image.height

      if(ratio > 1){
        minWidth = image.width * (minHeight / image.height)
        drawnWidth = image.width * (h/image.height)
        startPosX = -1 * (drawnWidth - w) / 2
      }else{
        minHeight = image.height * (minWidth / image.width)
        drawnHeight = image.height * (w/image.width)
        startPosY = -1 * (drawnHeight - h) / 2
      }
      console.log('position', startPosX, startPosY);
      this.setState({
        posX: startPosX,
        posY: startPosY,
        tmpX: startPosX,
        tmpY: startPosY,
        ctx: ctx,
        image: image,
        drawnWidth: drawnWidth,
        drawnHeight: drawnHeight,
        startWidth: drawnWidth,
        startHeight: drawnHeight
      })
      this.drawImage(startPosX, startPosY, drawnWidth, drawnHeight)
      //var dataurl = this.refs.canvas.toDataURL("image/png");
      //console.log('dataurl', dataurl);
    }.bind(this)
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
  _onMouseDown = (e)=> {

    this.setState({
      isDragging: true,
      startMoveX: e.nativeEvent.offsetX,
      startMoveY: e.nativeEvent.offsetY
    })
  }
  _onMouseUp = (e)=> {
    if(this.state.isDragging){
      this.setState({
        isDragging: false,
        posX: this.state.tmpX,
        posY: this.state.tmpY
      })
    }
  }
  _onMouseMove = (e)=> {
    const {w, h} = this.props
    if(this.state.isDragging){
      const {posX, posY, startMoveX, startMoveY, drawnWidth, drawnHeight} = this.state
      const canvas = this.refs.canvas.getBoundingClientRect()
      let offsetX = e.clientX - canvas.left,
          offsetY = e.clientY - canvas.top,
          moveX = posX + offsetX - startMoveX,
          moveY = posY + offsetY - startMoveY
        //  console.log('start', startMoveY, e.nativeEvent.offsetY);
      if(moveX > 0) moveX = 0
      else if(moveX < w - drawnWidth) moveX = w - drawnWidth
      if(moveY > 0) moveY = 0
      else if(moveY < h - drawnHeight) moveY = h - drawnHeight

      this.setState({tmpX: moveX, tmpY: moveY})
      this.drawImage(moveX,moveY)
      //console.log('move',moveX, posX, startMoveX, offsetX);
    }
  }
  render() {
    const {w, h} = this.props
//TODO reset select value przy nowym src
    return (
      <div>
        <canvas
          onMouseLeave={this._onMouseUp}
          onMouseUp={this._onMouseUp}
          onMouseDown={this._onMouseDown}
          onMouseMove={this._onMouseMove}
          ref="canvas"
          width={w}
          height={h}/>
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
