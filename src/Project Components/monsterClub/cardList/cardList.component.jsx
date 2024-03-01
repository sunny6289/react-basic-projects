import './cardList.css';
const CardList = (props)=> {
        const {monsters} = props;
        return(
        <div className="cards">
            {
            monsters.map((ele) => {
                const {name, email} = ele;
            return <div key={ele.id} className="card">
                <img src="https://t3.ftcdn.net/jpg/00/42/19/70/360_F_42197066_aigiZf1P60VUB9YKfrttLq4GxCa1iYT9.jpg" alt="monster's pic"/>
                <h1>{name}</h1>
                <p>{email}</p>
                </div>
          })
          
        }
        </div>
        );
    }

export default CardList;