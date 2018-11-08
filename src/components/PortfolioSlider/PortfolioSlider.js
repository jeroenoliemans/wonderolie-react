import React, { Component } from 'react';
import './PortfolioSlider.css';
import constants from '../../global/constants';
import ReactSiema from './ReactSiema'

class PortfolioSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    };

    // Create the ref
    this.slider = React.createRef()
  }

  prevSlide() {
    this.slider.prev();
  }

  nextSlide() {
    this.slider.next();
  }

  // life cycle
  componentWillUnmount() {
    this.slider = null;
  }

  render() {
    const {
        sliderImages
    } = this.props;

    let slider;

    const portfolioSliderImages = this.props.sliderImages.map((image, index) => {
      return (
        <img key={index} src={image} alt="slide" />
      )
    });

    return (
      <div className="PortFolioSlider">
        <ReactSiema ref={siema => this.slider = siema}>
          {portfolioSliderImages}
        </ReactSiema>
        <button onClick={() => this.prevSlide()}>prev</button>
            <button onClick={() => this.nextSlide()}>next</button>
      </div>
    );
  }
}

export default PortfolioSlider;
