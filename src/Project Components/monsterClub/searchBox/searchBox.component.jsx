import './searchBox.css';
const Searchbox = ({className,type,placeholder,onChangeHandler})=>(
            <div>
                <input 
            className={`monster-search-box ${className}`}
            type='search' 
            placeholder={placeholder} 
            onChange={onChangeHandler}/>
            </div>
);

export default Searchbox;