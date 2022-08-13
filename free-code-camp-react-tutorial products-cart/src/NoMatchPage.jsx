import React, {Component} from "react";
export default class NoMatchPage extends Component {
  render() {
    return(
        <div>
            <h4> Page Not Found</h4>
        </div>
    );
  }    
} 

/*In Route area: add the following: 

<Route path="*" component={NoMatchPage}/>  */
