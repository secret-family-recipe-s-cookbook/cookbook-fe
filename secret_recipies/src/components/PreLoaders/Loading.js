import React, {useState, useEffect, useRef} from "react";

function Loading(props) {
        // Ref creation
        let loading = useRef();
        console.log('Loading ref',loading)
        const LoadingScreen = loading.current;

        useEffect( 
            window.onclick = () => {
                LoadingScreen.style.display = "block";
                const run = () => {
                    props.call();
                    window.onclick = undefined;
                }
                window.setTimeout(run, 1000); //1 seconds
            },
    
            function fadeout() {
                LoadingScreen.style.display = "none";
            }
            ,[])
    return (
        <div ref={loading}>
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

export default Loading;
