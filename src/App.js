import React, { Component } from 'react';
import './App.css';
import PortFolioList from './components/PortFolioList/PortFolioList';
import portFolioService  from './services/portFolioService';
import PortfolioFilter from './components/PortFolioFilter/PortfolioFilter';
import constants from './global/constants';

let allItems = [];

class App extends Component {

  constructor(props) {
    super(props);

    this.categoryChange = this.categoryChange.bind(this);

    this.state = {
      items: []
  }

  portFolioService.getPortFolioItems()
    .then((result) => {
      allItems = JSON.parse(result)

      this.setState((state) => ({
        items: allItems
      }));
    })
  }

  categoryChange(categoryId) {
    console.log('categoryId', categoryId);
    let filterList = [];

    if (categoryId == 2) {
      console.log('show all');
      this.setState((state) => ({
        items: allItems
      }));
    } else {
      filterList = categoryId == 1 ? [constants.categories[0]] : [constants.categories[2]]

      let filteredItems = allItems.filter((item) => {
        return  item.categories.includes(filterList[0]);
      });

      console.log(filteredItems.length)

      this.setState((state) => ({
        items: filteredItems
      }));
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Wonderolie passionate developer</h1>
        </header>
        <PortfolioFilter onCategoryChange={this.categoryChange} />
        <PortFolioList items={this.state.items} />
      </div>
    );
  }
}

export default App;
