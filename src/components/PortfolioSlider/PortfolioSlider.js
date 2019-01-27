import React, { Component } from 'react';
import './PortfolioSlider.css';
import constants from '../../global/constants';
import ReactSiema from './ReactSiema';
import './PortfolioSlider.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

class PortfolioSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      width: '360px'
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
    console.log('this.containerRef.current.clientWidth', this.containerRef.current.clientWidth < 450)
    if(this.containerRef.current.clientWidth < 450) {
      // resize
      this.setState({width: `${this.containerRef.current.clientWidth -20}px`});
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
        <img key={index} src={`${process.env.PUBLIC_URL}/${image}`} alt="slide" />
      )
    });

    return (
      <div style={widthStyle} ref={this.containerRef} className="PortFolioSlider">
        <ReactSiema ref={siema => this.slider = siema}>
          {portfolioSliderImages}
        </ReactSiema>
        <button className="PortFolioSliderPrev" onClick={() => this.prevSlide()}><FiChevronLeft /></button>
        <button className="PortFolioSliderNext" onClick={() => this.nextSlide()}><FiChevronRight /></button>
      </div>
    );
  }
}

export default PortfolioSlider;
