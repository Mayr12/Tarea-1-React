
import "./textBox.css"
export function TextBox({content, text}){
    return(
        <div className="styleTextBox">
            {content}: {text}
        </div>
    )
}