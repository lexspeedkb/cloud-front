import { connect } from 'react-redux';

import Another from './Another';
import { removeUser } from '../../store/user';

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

const mapDispatchToProps = {
    removeUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Another);
