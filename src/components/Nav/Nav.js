import classNames from 'classnames';
import {
    withStyles,
    withTheme,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {Animate} from 'react-move';
import {NavLink} from 'react-router-dom';
import NavLogo from './NavLogo';

const FIXED_Y = {
    xs: 35,
    sm: 30,
    md: 80,
    lg: 80,
};
const NAV_HEIGHT = {
    xs: 5,
    sm: 6,
    md: 10,
    lg: 10,
};
const TRANSLATE_LI_FACTOR = {
    xs: 4.25,
    sm: 1.85,
    md: 4,
    lg: 4,
};
const LINKS = [
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
    const activeDuration = 0.1;
    return {
        root: {
            left: 0,
            overflow: 'hidden',
            position: 'fixed',
            right: 0,
            transition: 'background 0.3s',
            zIndex: 99,
            [theme.breakpoints.up('md')]: {
                left: '41.66%',
            },
            [theme.breakpoints.up('lg')]: {
                left: '33.33%',
            },
        },
        filled: {
            background: theme.palette.background.paper,
            boxShadow: theme.shadows[3],
        },
        ul: {
            display: 'flex',
            alignItems: 'flex-end',
            height: `${NAV_HEIGHT.sm}rem`,
            listStyle: 'none',
            margin: 0,
            padding: 0,
            [theme.breakpoints.up('sm')]: {
                paddingLeft: '3rem',
            },
            [theme.breakpoints.up('md')]: {
                height: `${NAV_HEIGHT.md}rem`,
                paddingLeft: 0,
            },
        },
        li: {
            lineHeight: 1,
            margin: '0',
            [theme.breakpoints.up('sm')]: {
                margin: `0 ${theme.spacing.unit}px`,
            },
            [theme.breakpoints.up('lg')]: {
                margin: `0 ${theme.spacing.unit * 2}px`,
            },
        },
        liHome: {
            alignSelf: 'stretch',
            margin: `0 ${theme.spacing.unit}px 0 0`,
            [theme.breakpoints.up('md')]: {
                margin: `0 ${theme.spacing.unit * 2}px 0 0`,
            },
            [theme.breakpoints.up('md')]: {
                margin: `0 ${theme.spacing.unit * 3}px 0 -2px`,
            },
            [theme.breakpoints.up('lg')]: {
                margin: `0 ${theme.spacing.unit * 5}px 0 -2px`,
            },
        },
        navLink: {
            color: theme.palette.secondary.main,
            cursor: 'pointer',
            display: 'inline-block',
            fontFamily: theme.typography.fontFamilyHeading,
            fontSize: '0.9em',
            padding: `${theme.spacing.unit / 2}px ${theme.spacing.unit * 1.25}px`,
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
            [theme.breakpoints.up('sm')]: {
                fontSize: '1.25em',
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
        navLinkHome: {
            display: 'block',
            height: '100%',
            lineHeight: 0,
        },
        logo: {
            verticalAlign: 'top',
        },
    };
};

class Nav extends PureComponent {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        theme: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        const breakpoint = this.getBreakpoint();

        this.state = {
            logoBgPositionY: this.getLogoBgPositionY(breakpoint),
            navFilled: this.getNavFilled(breakpoint),
            navHeight: this.getNavHeight(breakpoint),
            navTranslateY: this.getNavTranslateY(breakpoint),
            navTranslateLiY: this.getNavTranslateLiY(breakpoint),
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.adjustNav);
        window.addEventListener('resize', this.adjustNav);
        this.adjustNav();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.adjustNav);
        window.removeEventListener('resize', this.adjustNav);
    }

    rootRef = (element) => {
        this.root = element;
    }

    adjustNav = () => {
        const breakpoint = this.getBreakpoint();
        this.setState({
            logoBgPositionY: this.getLogoBgPositionY(breakpoint),
            navFilled: this.getNavFilled(breakpoint),
            navHeight: this.getNavHeight(breakpoint),
            navTranslateY: this.getNavTranslateY(breakpoint),
            navTranslateLiY: this.getNavTranslateLiY(breakpoint),
        });
    };

    getBreakpoint = () => {
        const {theme} = this.props;
        const {innerWidth} = window;
        let breakpoint = 'xs';
        if (
            innerWidth > theme.breakpoints.values.sm
            && innerWidth <= theme.breakpoints.values.md
        ) {
            breakpoint = 'sm';
        }
        if (
            innerWidth > theme.breakpoints.values.md
            && innerWidth <= theme.breakpoints.values.lg
        ) {
            breakpoint = 'md';
        }
        if (innerWidth > theme.breakpoints.values.lg) {
            breakpoint = 'lg';
        }
        return breakpoint;
    }

    getScrollFactor = (breakpoint, scrollY) => {
        const scrollFactor = scrollY < FIXED_Y[breakpoint] ? scrollY : FIXED_Y[breakpoint];
        return scrollFactor;
    }

    getNavFilled = breakpoint => window.scrollY > FIXED_Y[breakpoint];

    getNavHeight = (breakpoint) => {
        const {scrollY} = window;
        const scrollFactor = this.getScrollFactor(breakpoint, scrollY);
        const navHeight = NAV_HEIGHT[breakpoint] - (scrollFactor / 100);
        return navHeight.toPrecision(2);
    };

    getNavTranslateY = (breakpoint) => {
        const {scrollY} = window;
        return -this.getScrollFactor(breakpoint, scrollY);
    }

    getNavTranslateLiY = (breakpoint) => {
        const {scrollY} = window;
        const scrollFactor = this.getScrollFactor(breakpoint, scrollY);
        return -(scrollFactor / TRANSLATE_LI_FACTOR[breakpoint]);
    };

    getLogoBgPositionY = (breakpoint) => {
        const {scrollY} = window;
        const logoPositionY = this.getScrollFactor(breakpoint, scrollY) / 35;
        return logoPositionY.toPrecision(2);
    }

    render() {
        const {
            classes,
            location,
        } = this.props;
        const {
            logoBgPositionY,
            navFilled,
            navHeight,
            navTranslateLiY,
            navTranslateY,
        } = this.state;
        return (
            <Animate
                start={{
                    bgPositionY: logoBgPositionY,
                    height: navHeight,
                    translateLiY: navTranslateLiY,
                    translateY: navTranslateY,
                }}
                update={{
                    bgPositionY: [logoBgPositionY],
                    height: [navHeight],
                    translateLiY: [navTranslateLiY],
                    translateY: [navTranslateY],
                }}
            >
                {({
                    bgPositionY,
                    height,
                    translateLiY,
                    translateY,
                }) => (
                    <nav
                        aria-label="Main Menu"
                        className={classNames(
                            classes.root,
                            {
                                [classes.filled]: navFilled,
                            },
                        )}
                        ref={this.rootRef}
                        style={{
                            transform: `translateY(${translateY}px)`,
                        }}
                    >
                        <ul
                            className={classes.ul}
                            style={{
                                height: `${height}em`,
                            }}
                        >
                            <li className={classes.liHome}>
                                <NavLink
                                    className={classes.navLinkHome}
                                    exact
                                    to="/"
                                >
                                    <NavLogo
                                        className={classes.logo}
                                        backgroundPositionY={parseFloat(bgPositionY)}
                                    />
                                </NavLink>
                            </li>
                            {
                                LINKS.map(link => (
                                    <li
                                        className={classes.li}
                                        key={link.label}
                                        style={{
                                            transform: `translateY(${translateLiY}px)`,
                                        }}
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
                )}
            </Animate>
        );
    }
}

export default withTheme()(withStyles(styles, {name: 'LcNav'})(Nav));
