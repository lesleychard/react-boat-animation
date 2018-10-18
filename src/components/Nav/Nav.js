import {withStyles} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {NavLink} from 'react-router-dom';

const LINKS = [
    {
        label: 'Home',
        path: '/',
    },
    {
        label: 'About',
        path: '/about',
    },
    {
        label: 'Portfolio',
        path: '/portfolio',
    },
    {
        label: 'Contact',
        path: '/contact',
    },
];

export const styles = (theme) => {
    const borderWidth = 1;
    const activeDuration = 0.15;
    return {
        root: {},
        ul: {
            listStyle: 'none',
            margin: 0,
            padding: 0,
        },
        li: {
            display: 'inline-block',
            lineHeight: 1,
            margin: theme.spacing.unit / 2,
        },
        navLink: {
            color: theme.palette.secondary.main,
            cursor: 'pointer',
            display: 'inline-block',
            fontFamily: theme.typography.fontFamilyHeading,
            fontSize: '1.25em',
            padding: `${theme.spacing.unit}px ${theme.spacing.unit * 1.25}px`,
            position: 'relative',
            textDecoration: 'none',
            transition: `color ${activeDuration * 4}s`,
            '&:before, &:after, & span:before, & span:after': {
                background: theme.palette.primary.main,
                content: '""',
                position: 'absolute',
            },
            '&:before, &:after': {
                height: borderWidth,
            },
            '&:before': {
                left: 0,
                right: '100%',
                top: 0,
                transition: `right ${activeDuration}s`,
            },
            '&:after': {
                bottom: 0,
                left: '100%',
                right: 0,
                transition: `left ${activeDuration * 2}s ${activeDuration}s`,
            },
            '& span:before, & span:after': {
                width: borderWidth,
            },
            '& span:before': {
                bottom: '100%',
                right: 0,
                top: 0,
                transition: `bottom ${activeDuration}s ${activeDuration}s`,
            },
            '& span:after': {
                bottom: 0,
                left: 0,
                top: '100%',
                transition: `top ${activeDuration * 3}s ${activeDuration}s`,
            },
        },
        navLinkActive: {
            color: theme.palette.primary.main,
            '&:before': {
                right: 0,
            },
            '&:after': {
                left: 0,
            },
            '& span:before': {
                bottom: 0,
            },
            '& span:after': {
                top: 0,
            },
        },
    };
};

class Nav extends PureComponent {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
    };

    render() {
        const {
            classes,
            location,
        } = this.props;
        return (
            <nav
                aria-label="Main Menu"
                className={classes.root}
            >
                <ul className={classes.ul}>
                    {
                        LINKS.map(link => (
                            <li
                                className={classes.li}
                                key={link.label}
                            >
                                <NavLink
                                    activeClassName={classes.navLinkActive}
                                    className={classes.navLink}
                                    exact
                                    location={location}
                                    to={link.path}
                                >
                                    <span>
                                        {link.label}
                                    </span>
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        );
    }
}

export default withStyles(styles, {name: 'LcNav'})(Nav);
