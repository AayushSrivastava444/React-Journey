import PropTypes from 'prop-types';

function UserGreeting(props){
    console.log("props", props);

    const username = props.username || "Guest";
    if(props.isLoggedIn){
        return <h2>Welcome {username}</h2>
    }
    else{
        return<h2>Please Log In</h2>
    }
}

UserGreeting.propTypes={
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps={
    username: "Guest"
}

export default UserGreeting