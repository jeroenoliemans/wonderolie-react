import React, { Component } from 'react';
import './PortfolioSlider.css';
import constants from '../../global/constants';
import ReactSiema from './ReactSiema'
import './PortfolioSlider.css'

class PortfolioSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      width: '100%'
    };

    // Create the ref
    this.containerRef = React.createRef();
    this.slider = React.createRef()
  }

  prevSlide() {
    this.slider.prev();
  }

  nextSlide() {
    this.slider.next();
  }

  componentDidMount() {
    if(this.containerRef.current.clientWidth < 360) {
      // resize
      this.setState({width: `${this.containerRef.current.clientWidth}px`});
    }
  }

  // life cycle
  componentWillUnmount() {
    this.slider = null;
  }

  render() {
    const {
        sliderImages
    } = this.props;

    let widthStyle = {
      width: `${this.state.width}`
    }

    let slider;

    const portfolioSliderImages = this.props.sliderImages.map((image, index) => {
      return (
        <img key={index} src={image} alt="slide" />
      )
    });

    return (
      <div style={widthStyle} ref={this.containerRef} className="PortFolioSlider">
        <ReactSiema ref={siema => this.slider = siema}>
          {portfolioSliderImages}
        </ReactSiema>
        <button className="PortFolioSliderPrev" onClick={() => this.prevSlide()}>prev</button>
        <button className="PortFolioSliderNext" onClick={() => this.nextSlide()}>next</button>
      </div>
    );
  }
}

export default PortfolioSlider;
