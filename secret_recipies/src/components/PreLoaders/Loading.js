import React, {Component} from "react";

export default class Loading extends Component {
    constructor(props) {
        super(props);
    
        // Ref creation
        this.Loading = React.createRef();
      }
      componentDidMount() {
        const LoadingScreen = this.Loading.current;
        window.onload = function() {
          window.setTimeout(fadeout, 1500);
        };
    
        function fadeout() {
            LoadingScreen.style.display = "block"
            ? (LoadingScreen.style.display = "none")
            : (LoadingScreen.style.display = "block");
        }
    }
    render(){
    return (
        <div ref={this.Loading} className='cookingLoading'>
            <h1>Cooking in progress..</h1>
            <div id="cooking">
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div id="area">
                <div id="sides">
                <div id="pan"></div>
                <div id="handle"></div>
                    </div>
                        <div id="pancake">
                        <div id="pastry"></div>
                    </div>
                </div>
            </div>
        </div>
      );
     }
    }
