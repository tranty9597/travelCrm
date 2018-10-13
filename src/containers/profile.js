import React from 'react';
import { Redirect } from 'react-router-dom';
import { logoutAction } from '../actions';
import { connect } from 'react-redux';
import { UikButton } from "../UikLayout";

class Profile extends React.Component {
    render() {
        if (this.props.login.user === "") {
            return (
                <Redirect to="/" />
            )
        }
        return (
            <div>
                Hello {this.props.login.user}
                <div>
                    <UikButton
                        onClick={() => this.props.logoutAction()}
                    >
                        Logout
                    </UikButton>
                </div>
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
        logoutAction: () => {
            dispatch(logoutAction())
        }
    }
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(Profile);