
const SearchBox = ({className,placeholder,onChange,value})=>{
    return(
        <input type="number" className={className} placeholder={placeholder} onChange={onChange} value={value}/>
    )
}
export default SearchBox