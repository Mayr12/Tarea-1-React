
import { Information } from "../informationMessage/Information"
import "./index.css"
import { TextBox } from "../BoxContainer/TextBox"

export function Message({informationMessage}){
    console.log(informationMessage)
    return(
    <div className="message">
         <Information title={informationMessage.sender}/>
         {
            informationMessage.message.map(
                ({who, content})=>{
                    return(
                        <TextBox  content={who} text = {content}/>
                    )
                }
            )
         }
        
    </div>
    )


}

