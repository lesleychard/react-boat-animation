import PropTypes from 'prop-types';
import React, {Fragment, PureComponent} from 'react';
import {Redirect} from 'react-router-dom';
import {Button} from '@material-ui/core';

export default class ButtonLink extends PureComponent {
    static propTypes = {
        path: PropTypes.string.isRequired,
    };

    state = {
        clicked: false,
    };

    handleClick = () => {
        this.setState({clicked: true});
    }

    render() {
        const {
            path,
            ...other
        } = this.props;
        const {clicked} = this.state;
        return (
            <Fragment>
                {
                    clicked
                        ? <Redirect push to={path} />
                        : null
                }
                <Button
                    onClick={this.handleClick}
                    {...other}
                />
            </Fragment>
        );
    }
}
