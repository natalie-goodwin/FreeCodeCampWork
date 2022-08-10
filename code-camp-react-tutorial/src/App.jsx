import React, { Component } from "react";
import MainContent from "./MainContent";
import NavBar from "./NavBar"; /*sometimes you will
wrap the component in braces "{}NavBar"; this 
happens if the class being used is NOT exported 
as a default; if yuo export as a default, 
you must remove the braces*/

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <MainContent />
      </React.Fragment>
    );
  }
} /*Component Hierarchy: App is parent with 2
child components: NavBar and MainContent; the
component hierarchy decides parent/child 
relationship depending on where the component
is being rendered. */
