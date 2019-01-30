import {create} from 'jss';
import jssExtend from 'jss-extend';
import JssProvider from 'react-jss/lib/JssProvider';
import {
    MuiThemeProvider,
    createGenerateClassName,
    jssPreset,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {
    globals,
    muiTheme,
} from '.';

const generateClassName = createGenerateClassName();
const jss = create();
jss.use(jssExtend());
jss.setup(jssPreset());

jss.options.insertionPoint = 'lc-insertion-point';

class Theme extends PureComponent {
    static defaultProps = {
        children: null,
    };

    static propTypes = {
        children: PropTypes.node,
    };

    componentDidMount() {
        jss.createStyleSheet(
            globals(muiTheme),
            {meta: 'LcGlobals'},
        ).attach();
    }

    render() {
        const {children} = this.props;
        return (
            <JssProvider jss={jss} generateClassName={generateClassName}>
                <MuiThemeProvider theme={muiTheme}>
                    {children}
                </MuiThemeProvider>
            </JssProvider>
        );
    }
}

export default Theme;
