import classNames from 'classnames';
import {
    withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';

const facebookSvg = require('../../assets/svg/social/facebook.svg');
const githubSvg = require('../../assets/svg/social/github.svg');
const linkedinSvg = require('../../assets/svg/social/linkedin.svg');
const twitterSvg = require('../../assets/svg/social/twitter.svg');

const ICON_TITLE = {
    facebook: 'Facebook',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    twitter: 'Twitter',
};

export const styles = () => ({
    root: {
        background: 'center / contain no-repeat',
        display: 'block',
        fontSize: 0,
        height: 20,
        width: 20,
    },
    facebook: {
        backgroundImage: `url(${facebookSvg})`,
    },
    github: {
        backgroundImage: `url(${githubSvg})`,
    },
    linkedin: {
        backgroundImage: `url(${linkedinSvg})`,
    },
    twitter: {
        backgroundImage: `url(${twitterSvg})`,
    },
});

class SocialIcon extends PureComponent {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        icon: PropTypes.oneOf([
            'facebook',
            'github',
            'linkedin',
            'twitter',
        ]).isRequired,
    };

    render() {
        const {
            classes,
            icon,
        } = this.props;
        return (
            <span
                className={classNames(
                    classes.root,
                    {
                        [classes.facebook]: icon === 'facebook',
                        [classes.github]: icon === 'github',
                        [classes.linkedin]: icon === 'linkedin',
                        [classes.twitter]: icon === 'twitter',
                    },
                )}
            >
                {ICON_TITLE[icon]}
            </span>
        );
    }
}

export default withStyles(styles, {name: 'LcSocialIcon'})(SocialIcon);
