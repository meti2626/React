import Profilepic from './assets/here.jpg';


function Card()
{
   return(

      <div className="card">
           <img className="profile-pic" src={Profilepic}  alt="profile pic"></img>

           <h2 className="card-title">Bro Code</h2>
           <p className="card-description">Learn React with Bro Code</p>
      </div>

   );
}

export default Card