import classNames from 'classnames';
import {withStyles} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';

const logoSvg = require('../../assets/svg/logo.svg');
const logoInvertedSvg = require('../../assets/svg/logo-inverted.svg');
const logoInvertedSquareSvg = require('../../assets/svg/logo-inverted-square.svg');

const SIZES = ['small', 'medium', 'large'];

export const styles = () => ({
    root: {
        background: `center / contain no-repeat url(${logoSvg})`,
        display: 'inline-block',
        height: 125,
        fontSize: 0,
        width: 107,
    },
    inverted: {
        backgroundImage: `url(${logoInvertedSvg})`,
        height: 79,
    },
    invertedSquare: {
        backgroundImage: `url(${logoInvertedSquareSvg})`,
    },
    small: {
        height: 75,
        width: 65,
    },
    smallInverted: {
        height: 48,
    },
    large: {
        height: 150,
        width: 128,
    },
    largeInverted: {
        height: 96,
    },
});

class Logo extends PureComponent {
    static defaultProps = {
        className: null,
        variant: 'default',
        size: 'medium',
    };

    static propTypes = {
        className: PropTypes.string,
        variant: PropTypes.oneOf([
            'default',
            'inverted',
            'invertedSquare',
        ]),
        size: PropTypes.oneOf(SIZES),
    };

    render() {
        const {
            className: classNameProp,
            classes,
            size,
            variant,
            ...other
        } = this.props;
        return (
            <span
                className={classNames(
                    classes.root,
                    {
                        [classes.inverted]: variant === 'inverted',
                        [classes.invertedSquare]: variant === 'invertedSquare',
                        [classes.small]: size === 'small',
                        [classes.smallInverted]: size === 'small' && variant === 'inverted',
                        [classes.large]: size === 'large',
                        [classes.largeInverted]: size === 'large' && variant === 'inverted',
                    },
                    classNameProp,
                )}
                {...other}
            >
                LesleyChard.com
            </span>
        );
    }
}

export default withStyles(styles, {name: 'LcLogo'})(Logo);
