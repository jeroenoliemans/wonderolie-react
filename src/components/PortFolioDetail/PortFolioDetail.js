import React, { Component } from 'react';
import portFolioService  from '../../services/portFolioService';
import PortfolioSlider from '../PortfolioSlider/PortfolioSlider';
import SkilList from '../../global-components/SkillList';
import './PortFolioDetail.css';

class PortFolioDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detail: {
        name: '',
        description: '',
        employer: '',
        id: '',
        images: [],
        skills: [],
        url: ''
      }
    }

    portFolioService.getPortFolioItem(this.props.portfolioIid)
      .then((result) => {
        this.setState((state) => ({
          detail: JSON.parse(result)
        }));
      })
  }


  render() {
    const {
      portfolioIid,
    } = this.props;

    return (
      <div className="PortFolioDetail"> 
        <div className="PortFolioDetailBox">
          <section className="PortFolioDetailMeta">
            <h1 className="PortFolioDetailTitle">{this.state.detail.name}</h1>
            <PortfolioSlider sliderImages={this.state.detail.images} />          
            <SkilList listData={this.state.detail.skills} />  
            <div>{this.state.detail.description}</div>  
          </section>
        </div>
      </div>
    );
  }
}

export default PortFolioDetail;
