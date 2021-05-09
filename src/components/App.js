import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
const name=["madhur","james","games"];
  const listitem=name.map((names)=>
  <li key={names}>{names}</li>
  );
        return(
            <div id="main">
               {/* Do not remove the main div */}
             <ol>{listitem}</ol>
            </div>
        )
    }
}


export default App;
