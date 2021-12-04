import { Button, Card } from "."
import Countdown , {zeroPad} from "react-countdown"
import React, {useState} from "react"

const LaunchProblem = ({ relatedLaunchProblem, id }) => {
    return (
        <Button contained onClick={()=>relatedLaunchProblem(true)}>Launch</Button>
    )
}

const EndProblem = ({ relatedEndProblem, id }) => {
    return (
        <Button contained onClick={()=>relatedEndProblem(true)}>End</Button>
    )
}

const AdminChallenge = (props: Props) => {

    function stringToBoolean(string:String){
        switch(string){
            case "true": case "yes": case "1": return true;
            case "false": case "no": case "0": case null: case "": return false;
            default: return Boolean(string);
        }
    }

    const { id, problem, isLaunched, isEnded } = props
    const [launched, setLaunched] = useState(stringToBoolean(isLaunched))
    const [ended, setEnded] = useState(stringToBoolean(isEnded))

    const renderer = ({ hours, minutes, seconds, completed })  => {
        if (launched && completed) {
          // Render a completed state
          setEnded(true)
          return "OVER"
        } else {
          // Render a countdown
          return <>
          {(launched && !ended) && 
            <><span>{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</span>&nbsp;&nbsp;
            <EndProblem relatedEndProblem={setEnded} id={id}/></>
          }
          {(!launched && !ended) && 
            <LaunchProblem relatedLaunchProblem={setLaunched} id={id}/>
          }
          {(ended) && 
            <span>OVER</span>
          }
          </>
        }
      };

    return (
        <div className="my-10 p-7 w-full rounded-xl h-auto bg-dark-3 shodow hover:shadow-md duration-150">
        <div className="flex justify-between items-center" >
            <h1 className="mr-auto" >{problem}</h1>
            <Countdown key={Date.now()+3600*1000} date={Date.now()+20*1000} renderer={renderer}/>
        </div>
        </div>
    )
  }
  
  export default AdminChallenge