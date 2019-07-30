import React, {Component} from "react";

export default class Loading extends Component {
    constructor(props) {
        super(props);
    
        // Ref creation
        this.Loading = React.createRef();
        console.log('Loading Screen',this.Loading)
      }
      componentDidMount() {
        const LoadingScreen = this.Loading.current;

        window.onclick = () => {
            LoadingScreen.style.display = "flex";
            document.body.style.overflow = "hidden";
            const run = () => {
              fadeout();
              this.props.call();
              window.onclick = undefined;
            };
            window.setTimeout(run, 3000); //1 seconds
          };
      
          function fadeout() {
            LoadingScreen.style.display = "none";
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
