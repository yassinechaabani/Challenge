import './Result.css'
import Summary from'./Summary'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Eye } from '@fortawesome/free-solid-svg-icons'; 
import { Bolt } from '@fortawesome/free-solid-svg-icons'; 
import { Message } from '@fortawesome/free-solid-svg-icons'; 
import { Brain } from '@fortawesome/free-solid-svg-icons'; 



function Result(){
    return(
        <div className="test-score">
            <div className='Res'>
                <h2>Your Result</h2>
            </div>
            <div class="score">
                <span class="value">76</span>
                <span class="of">of 100</span>
            </div>
            
                <span class="text">Great</span>
                 <p>Your scored higher than 65% of the people who have 
                    taken these tests.</p>
            
        
    <div className='Summary-content'> 
        <h3>Summary</h3>
        <div className='Summarys'>
            <Summary icon={<FontAwesomeIcon icons={Bolt} style={{color: "#f2a3ac"}} />}  valeur={"Reaction"} bgcolor={"#fff6f4"} txtcolor={"#f2a3ac"} bgborder={"none"} number={"80"} />
            <Summary icon={<FontAwesomeIcon icons={Brain} style={{color: "#f7e4a1"}} />} valeur={"Memory"} bgcolor={"#fffcef"} txtcolor={"#f6e4a1"} bgborder={"none"} number={"92"}/>
            <Summary icon={<FontAwesomeIcon icons={Message} style={{color: "#81cdba"}} />} valeur={"Verbal"} bgcolor={"#f2fbfa"} txtcolor={"#81cdba"} bgborder={"none"} number={"61"} />
            <Summary icon={<FontAwesomeIcon icons={Eye} style={{color: "#8891ca"}} />} valeur={"Visual"} bgcolor={"#f3f3ff"} txtcolor={"#888ec7"} bgborder={"none"}  number={"72"}/>
        </div>
        <button className='btn'>Continue</button>
    </div>
    </div>

    );
}
export default Result;