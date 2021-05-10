import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
const name=[{id:"relativeListItem1",k:"madhur"},
            {id:"relativeListItem2",k:"james"}];
  const listitem=name.map((names)=>
  <li key={names.id}>{names.k}</li>
  );
        return(
            <div id="main">
               {/* Do not remove the main div */}
             <ol key={james}>{listitem}</ol>
            </div>
        )
    }
}


export default App;
