

function ProfilePicture(){
   const imageUrl='src/assets/IMG-20240909-WA0005[1].jpg';

   const handleClick=(e)=> e.target.style.display="none";


return(
    <img onClick={(e)=> handleClick(e)} src={imageUrl}></img>
);
}

export default ProfilePicture