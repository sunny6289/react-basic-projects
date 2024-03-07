import './form-input.styles.css';


const FormInput = ({...otherProps})=>{
    return(
        <div>
           <input {...otherProps}/>
        </div>
    )
}

export default FormInput;