import profilePic from './assets/IMG-20240909-WA0005[1].jpg'

function Card(){
   
    return(
        <div className="card">
             <img className="card-image" src={profilePic} alt="Profile Picture"></img>
             <h2 className="Aayush">Aayush</h2>
             <p className="Main-Quest">I am in college</p>
        </div>
    );
}

export default Card