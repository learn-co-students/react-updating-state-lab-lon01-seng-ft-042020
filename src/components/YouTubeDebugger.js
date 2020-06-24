// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

class YouTubeDebugger extends Component{

    constructor(props){
        super()
        this.state={
            errors :[],
            user: null,
            settings:{
                bitrate: 8,
                video:{
                    resolution: '1080p'
                }
            }
        }
    }

    handleBitrateClick=()=>{
        this.setState(currenState=>{
           return {settings: {...currenState.settings,
            bitrate: 12,
        }}
        })
    }
    
    handleResolutionClick=()=>{
        this.setState(currenState=>{
           return {settings: {...currenState.settings,
            video: {
                resolution: '720p'
            },
        }}
        })
    }


    render(){
        return(
            <div>
                <p>Current bitrate: {this.state.settings.bitrate}</p>
                <button className={"bitrate"} onClick={this.handleBitrateClick}>Bitrate</button>
                <p>Current resolution: {this.state.settings.video.resolution}</p>
                <button className={"resolution"} onClick={this.handleResolutionClick}>Resolution</button>
            </div>
        )
    }

}

export default YouTubeDebugger;