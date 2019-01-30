import {withStyles} from '@material-ui/core';
import React from 'react';

const withStylesProps = (styles, options) => (Component) => {
    function WithStylesProps(props) {
        const Comp = withStyles(styles(props), options)(Component);
        return <Comp {...props} />;
    }

    return WithStylesProps;
};

export default withStylesProps;
