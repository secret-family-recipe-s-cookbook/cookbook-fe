import React, {Component} from "react";
import CookingSound from '../Sounds/CookingSound'
import Sound from "react-sound";

export default class Loading extends Component {
    constructor(props) {
        super(props);
        
        // Ref creation
        this.Loading = React.createRef();
      }
      componentDidMount() {
        const LoadingScreen = this.Loading.current;

        window.onclick = () => {
            window.scrollTo(0, 0);
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
          <Sound url={process.env.PUBLIC_URL + "/cook.mp3"} playStatus={Sound.status.PLAYING} />
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
