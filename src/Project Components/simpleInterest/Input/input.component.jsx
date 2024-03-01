
const Input = ({className,onChange,placeholder,value})=>{
return(
    <input type="number" className={className} onChange={onChange} placeholder={placeholder} value={value}/>
)
}
export default Input;