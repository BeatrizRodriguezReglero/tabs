import { useState } from "react"
import { v4 } from "uuid";

const titles=['Title 1', 'Title 2', 'Title 3'];
const texts=['Text 1', 'Text 2', 'Text 3']
const Tabs=()=>{ 
    const[valueActive, setValueActive]=useState(0)
return(
   
    <>
        <div>

            {titles.map((title,index)=> 
                <button key={v4()}  onClick={()=>setValueActive(index)} >{title}</button>
            )}
        </div>
       
        

        <p >{texts[valueActive]}</p>
        
    </>
)

}
export default Tabs