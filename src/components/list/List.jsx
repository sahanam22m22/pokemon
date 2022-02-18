import React from 'react';
import pokemonData from './PokemonData.js';
import Pagination from './Pagination.jsx';
import Pokemon from './Pokemon.jsx';
import Header from '../common/Header.jsx';


 class List extends React.Component {
 //add required fields to state
  constructor(){
    super();
    //var sliceRecord = pokemonData
    this.state={
      totalData: pokemonData,
      filterData : pokemonData.filter((val,i)=>i<10),//.splice(0, 10)
      currentPage: 1,
      totalPages: Math.ceil(pokemonData.length / 10),
      numPerPage: 10
    }
    
    //this.state.totalPages = Math.ceil(this.state.totalData.length / this.state.numPerPage);

    this.filterList = this.filterList.bind(this);
    this.handlePaginationClick = this.handlePaginationClick.bind(this);
    //console.log(pokemonData);
  }

  componentDidMount(){
   // add logic required
  }

  filterList(event) {
   //write logic for filter(for searching  )
    console.log(event.target.value);
    //var filteredData = pokemonData.filter(ev => ev.name.toLowerCase() === event.target.value.toLowerCase())
    var filteredData = pokemonData.filter(ev => ev.name.toLowerCase().indexOf( event.target.value.toLowerCase()) > -1)

    var totalPage =  Math.ceil(filteredData.length / this.state.numPerPage);

    if(filteredData.length >0){
      this.setState({
        currentPage: 1,
        totalPages: totalPage,
        filterData : filteredData.filter((val,i)=>i<10),
        totalData: filteredData
      })
    }else{
      this.setState({
        filterData : []
      })
    }

    console.log(filteredData);
  }

  handlePaginationClick(direction) {
   //witre logic for handling pagination
   console.log(direction)
   if(direction == 'prev'){
     this.state.currentPage = this.state.currentPage - 1;
     var begin = ((this.state.currentPage) * this.state.numPerPage)
    , end = begin + this.state.numPerPage;
    
    this.state.filterData = this.state.totalData.filter((val,i)=>(i>begin && i<end));
   }
   else if(direction == 'next'){
     this.state.currentPage = this.state.currentPage + 1;
    var begin = ((this.state.currentPage) * this.state.numPerPage)
    , end = begin + this.state.numPerPage;
    
    //this.state.filterData = this.state.totalData.slice(begin, end);
this.state.filterData = this.state.totalData.filter((val,i)=>(i>begin && i<end));
   }

   this.setState({
        currentPage : this.state.currentPage,
        filterData: this.state.filterData
    })
  }


  render() {


//add pagination and pokemon details on page
    return (<div>
          <Header/>
          <input type="text" id="search" placeholder="Search" onChange={this.filterList} />
          {this.state.filterData.map((data, key) => {
          return (
            <div key={key}>
              <span id="name">{data.name}</span>
              <br></br>
              <img src="https://cdn.cnn.com/cnnnext/dam/assets/210226041421-02-pokemon-anniversary-design-full-169.jpg" width="50"/>
              <br></br><br></br>
              <span>CP</span> <span>{data.CP}</span>
              <br></br>
              <span>HP</span> <span>{data.HP}</span>
              <br></br>
              <span>Defense</span> <span>{data.Defense}</span>
              <br></br>
              <span>Attack</span> <span>{data.Attack}</span>
              <br></br>
              <span>Type1</span> <span>{data.type1}</span>
              <br></br>
              <span>Type1</span> <span>{data.type1}</span>
              <br></br><br></br>
            </div>
          );
        })}
       
       <div className="Pagination">
          <button id="previous" onClick={() =>{this.handlePaginationClick('prev')}} disabled={this.state.currentPage <= 1}>prev</button>
           <span id="pagination">page {this.state.currentPage} of {this.state.totalPages}</span>
          <button id="next" onClick={() =>{this.handlePaginationClick('next')}} disabled={this.state.currentPage == this.state.totalPages}>next</button>
        </div>
    </div>)
  }
}

export default List;
