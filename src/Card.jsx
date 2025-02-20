
function Card(props){
    return (
    <div className = "card">
        <img className = "card-img" alt = "profile-pic" src = {props.photo}></img>
        <h2>{props.name}</h2>
        
        <p>Age: {props.age}</p>
        <p>Gender: {props.gender}</p>
        <p>Village: {props.village}</p>
        
        
    </div>)
}
export default Card;