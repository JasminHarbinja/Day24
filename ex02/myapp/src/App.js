import React, { Component } from 'react';


class App extends Component{
  setMyStorage() {
    document.cookie = "Year=2021";
    localStorage.setItem('Paragon', 'yes, but Arena first');
    sessionStorage.setItem('frontend', 'React');

  
  }
  getMyStorage() {
    let myCookieData = document.cookie.split(';');
    let myLoacalStorageData = localStorage.getItem('Paragon');
    let mySessionStorageData = sessionStorage.getItem('frontend');
    console.log(myCookieData);
    console.log(myLoacalStorageData);
    console.log(mySessionStorageData);
    return [myCookieData, myLoacalStorageData, mySessionStorageData];
    
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.setMyStorage}>Storage</button>
        <button onClick={this.getMyStorage}>Storage</button>

        
      </div>
    )
  }
}
export default App;
