import PropTypes from 'prop-types';

const Profile=(props)=>{
const {fullName, bio, profession,msg}=props
return(
<div>
<h5> this is a profile {fullName} {bio} {profession} </h5>
<button onClick={msg}>msg from function</button>
</div> )}

export default Profile

Profile.propTypes={
fullName : PropTypes.string,
bio : PropTypes.string,
profession : PropTypes.string,
}
Profile.defaultProps = {
    name: "Minato"
  };