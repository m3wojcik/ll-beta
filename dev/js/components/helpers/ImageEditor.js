import React, { Component } from 'react';

class ImageEditor extends Component {
  constructor(props) {
    super(props);
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
    };
  }
  componentDidMount() {
    const {onSetCanvaRef} = this.props
    onSetCanvaRef(this.refs.canvas)
    this.setState({
      ctx: this.refs.canvas.getContext('2d'),
      image: new Image()
    })
  }
  componentWillReceiveProps(next){
    const {src} = this.props
    if(src != next.src){
     this.loadCanvas(next.src)
    }
  }
  loadCanvas = (imageData)=>{
    const {ctx, image} = this.state
    const {w, h } = this.props
    
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
  render(){
    const {src, w, h} = this.props  
    return(
      <canvas
        ref="canvas" 
        width={w}
        height={h}
      />

    )
  }
}
export default ImageEditor
