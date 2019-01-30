import {
    Grid,
    withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {SocialIcon} from '..';

const SOCIAL_ICONS = [
    {
        href: 'https://github.com/lesleychard',
        icon: 'github',
    },
    {
        href: 'https://www.linkedin.com/in/lesleychard/',
        icon: 'linkedin',
    },
    {
        href: 'https://www.facebook.com/lesleycharddev/',
        icon: 'facebook',
    },
    {
        href: 'https://twitter.com/lesleyannchard',
        icon: 'twitter',
    },
];

export const styles = theme => ({
    root: {
        background: theme.palette.background.paper,
        boxShadow: theme.shadows[4],
        // extend: fontSmooth,
        fontSize: '0.9em',
        padding: '1.5rem 2rem',
        position: 'relative',
        zIndex: 1,
        '& a': {
            color: theme.palette.secondary.main,
        },
    },
    ul: {
        listStyle: 'none',
        lineHeight: 0,
        margin: 0,
        padding: 0,
    },
    li: {
        display: 'inline-block',
        margin: `0 ${theme.spacing.unit / 2}px`,
    },
});

class Footer extends PureComponent {
    static propTypes = {
        classes: PropTypes.object.isRequired,
    };

    render() {
        const {
            classes,
        } = this.props;
        return (
            <div className={classes.root}>
                <Grid
                    justify="space-between"
                    container
                >
                    <Grid item>
                        View the
                        {' '}
                        <span
                            aria-label="love"
                            role="img"
                        >
                            💖
                        </span>
                        {' '}
                        on
                        {' '}
                        <a
                            href="https://github.com/lesleychard/portfolio"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            GitHub
                        </a>
                        .
                    </Grid>
                    <Grid item>
                        <ul className={classes.ul}>
                            {
                                SOCIAL_ICONS.map(({href, icon}) => (
                                    <li
                                        className={classes.li}
                                        key={icon}
                                    >
                                        <a
                                            className={classes.socialLink}
                                            href={href}
                                            rel="noopener noreferrer"
                                            target="_blank"
                                        >
                                            <SocialIcon icon={icon} />
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles, {name: 'LcFooter'})(Footer);
