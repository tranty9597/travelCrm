import React from 'react';
import { Link } from 'react-router-dom';
import { loginAction } from '../actions';
import { connect } from 'react-redux';
class About extends React.Component {
    render() {
        return (
            <div>
                Hello {this.props.login.user}
                <Link to="/">
                    <button>Go Home</button>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        login: state.login,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onClick: (user, pass) => {
            dispatch(loginAction(user, pass))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(About);