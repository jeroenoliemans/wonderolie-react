import React, { Component } from 'react';
import portFolioService  from '../../services/portFolioService';
import PortfolioSlider from '../PortfolioSlider/PortfolioSlider';
import SkilList from '../../global-components/SkillList';
import {Link} from 'react-router-dom';
import { FiX } from 'react-icons/fi';
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
          <h1 className="PortFolioDetailTitle">
            <span>{this.state.detail.name}</span>
            <Link className="PortFolioDetailClose" to="/" title="close"><FiX /></Link>
          </h1>
          <section className="PortFolioDetailMeta">
            <PortfolioSlider sliderImages={this.state.detail.images} />          
            <SkilList listData={this.state.detail.skills} />  
          </section>
          <p className="PortFolioDetailDescription">{this.state.detail.description}</p>  
      </div>
    );
  }
}

export default PortFolioDetail;
