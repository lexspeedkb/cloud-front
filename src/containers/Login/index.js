import { connect } from 'react-redux';

// Actions
import { setLogin, setPassword, reset } from '../../store/credentials';
import { addUser, removeUser } from '../../store/user';

import Login from './Login';

function mapStateToProps(state) {
    return {
        login: state.credentials.login,
        password: state.credentials.password
    };
}

const mapDispatchToProps = {
    setLogin,
    setPassword,
    addUser,
    reset,
    removeUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
