import './button.styles.css';


const Button = ({description,...otherProps})=>{
    return(
        <div>
            <button {...otherProps}>{description}</button>
        </div>
    )
}

export default Button;