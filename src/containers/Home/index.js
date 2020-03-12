import { connect } from 'react-redux';

import Home from './Home';
import { getDocuments } from '../../store/gallery';

function mapStateToProps(state) {
    return {
        gallery: state.gallery
    };
}

const mapDispatchToProps = {
    getDocuments
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
