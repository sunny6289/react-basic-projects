import { useEffect, useState } from 'react';
import CardList from '../../Project Components/monsterClub/cardList/cardList.component';
import Searchbox from '../../Project Components/monsterClub/searchBox/searchBox.component';
import './monster.style.css';
const Monster = ()=>{
    const [searchField,setSearchField] = useState('');
  const [monsters,setMonsters] = useState([]);
  const [curr_monsters,setCurrMonsters] = useState(monsters);

  useEffect(()=>{
    document.title = "Monster's Club";
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((user) => setMonsters(user))
  },[])

  useEffect(()=>{
    const curr_monsters = monsters.filter((ele)=>{
      if(ele.name.toLocaleLowerCase().includes(searchField)){ return true;}
      else{
        return false;
      }
    })
    setCurrMonsters(curr_monsters);
  },[monsters,searchField])

   const onSearchChange = (e)=>
    {
      const searchString = e.target.value.toLocaleLowerCase();
      setSearchField(searchString);
    }

    console.log('render');
    return(
        <div className="monster-club">
        <Searchbox
        className={'search-box'}
        placeholder = {'search monster'}
        onChangeHandler = {onSearchChange}
        />
        <CardList monsters={curr_monsters}/>
      </div>
    )
}
export default Monster;