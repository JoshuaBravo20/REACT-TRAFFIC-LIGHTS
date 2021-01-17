import { Component } from "react";
import "./TrafficLights.css";

class TrafficLights extends Component {

  constructor() {
    super();
    this.state = {
      clicked: null
    };
  }


  render() { 
    
    let redState = '';
    let yellowState = '';
    let greenState = '';
    if (this.state.clicked === 'redlight') redState = 'glowy';
    if (this.state.clicked === 'yellowlight') yellowState = 'glowy';
    if (this.state.clicked === 'greenlight') greenState = 'glowy';
    
    
    return (
    <div className="container">
        <div className="boxClub"></div>
      <div className="row">
        <div className="col d-flex justify-content-center mt-5">
          <div className="box">
            <div className={"redlight "+redState} onClick={() => this.setState({clicked: 'redlight'})}></div>
            <div className={"yellowlight "+yellowState} onClick={() => this.setState({clicked: 'yellowlight'})}></div>
            <div className={"greenlight "+greenState} onClick={() => this.setState({clicked: 'greenlight'})}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
};

export default TrafficLights;
