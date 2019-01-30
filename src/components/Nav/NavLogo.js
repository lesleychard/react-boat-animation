import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {Logo} from '..';
import {withStylesProps} from '../../style-utils';

export const styles = props => theme => ({
    root: {
        backgroundPosition: `left ${props.backgroundPositionY}rem`,
        height: '100%',
        width: '4.25rem',
        [theme.breakpoints.up('sm')]: {
            width: '5.15rem',
        },
        [theme.breakpoints.up('md')]: {
            width: '8.5rem',
        },
    },
});

class NavLogo extends PureComponent {
    static defaultProps = {
        className: null,
        backgroundPositionY: 0,
    };

    static propTypes = {
        // eslint-disable-next-line
        backgroundPositionY: PropTypes.number,
        className: PropTypes.string,
        classes: PropTypes.object.isRequired,
    };

    render() {
        const {
            className: classNameProp,
            classes,
        } = this.props;
        return (
            <Logo
                className={classNames(
                    classes.root,
                    classNameProp,
                )}
            />
        );
    }
}

export default withStylesProps(styles, {name: 'LcNavLogo'})(NavLogo);
