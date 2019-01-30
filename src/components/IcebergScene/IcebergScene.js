import classNames from 'classnames';
import {withStyles} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {
    BoatSvg,
    CloudSvg,
    IcebergSvg,
    MobilePhoneSvg,
} from '..';
import {fontSmooth} from '../../style-utils';

const ANIMATION_DURATION_S = 10;

export const styles = theme => ({
    root: {
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
    },
    svg: {
        height: 'auto',
        position: 'absolute',
    },
    '@keyframes cloud-cumulus-move': {
        from: {
            transform: 'translateX(0)',
        },
        to: {
            transform: 'translateX(100vw)',
        },
    },
    '@keyframes cloud-cumulus-move-md': {
        from: {
            transform: 'translateX(0)',
        },
        to: {
            transform: 'translateX(50vw)',
        },
    },
    cloudSvgCumulus: {
        animation: `cloud-cumulus-move ${ANIMATION_DURATION_S * 4}s linear forwards`,
        extend: 'svg',
        left: '-5%',
        top: '1em',
        width: '50%',
        zIndex: 0,
        [theme.breakpoints.up('md')]: {
            animationName: 'cloud-cumulus-move-md',
        },
    },
    cloudSvgCumulusShowGradient: {
        animation: `cloud-cumulus-move ${ANIMATION_DURATION_S * 3}s linear forwards`,
        extend: 'svg',
        left: '25%',
        top: '5em',
        width: '100%',
        zIndex: 0,
        [theme.breakpoints.up('md')]: {
            animationName: 'cloud-cumulus-move-md',
        },
    },
    '@keyframes background-move': {
        from: {
            transform: 'translate(0, -50%)',
        },
        to: {
            transform: 'translate(50vw, -50%)',
        },
    },
    '@keyframes background-move-md': {
        from: {
            transform: 'translate(0, -50%)',
        },
        to: {
            transform: 'translate(20vw, -50%)',
        },
    },
    '@keyframes background-move-lg': {
        from: {
            transform: 'translate(0, -50%)',
        },
        to: {
            transform: 'translate(15vw, -50%)',
        },
    },
    icebergSvg: {
        animation: `background-move ${ANIMATION_DURATION_S}s ease-out forwards`,
        extend: 'svg',
        left: '-40%',
        top: '55%',
        transform: 'translateY(-50%)',
        width: '75%',
        [theme.breakpoints.up('md')]: {
            animationName: 'background-move-md',
        },
        [theme.breakpoints.up('lg')]: {
            animationName: 'background-move-lg',
        },
    },
    mobilePhoneSvg: {
        animation: `background-move ${ANIMATION_DURATION_S * 0.75}s ease-out forwards`,
        extend: 'svg',
        left: '2%',
        top: '45%',
        transform: 'translateY(-50%)',
        width: '30%',
        zIndex: 0,
        [theme.breakpoints.up('md')]: {
            animationName: 'background-move-md',
        },
        [theme.breakpoints.up('lg')]: {
            animationName: 'background-move-lg',
        },
    },
    mobilePhoneOverlay: {
        animation: `background-move ${ANIMATION_DURATION_S * 0.75}s ease-out forwards`,
        background: theme.palette.primary.main,
        height: 0,
        left: '2%',
        paddingBottom: '50%',
        position: 'absolute',
        top: '45%',
        transform: 'translateY(-50%)',
        width: '2%',
        [theme.breakpoints.up('md')]: {
            animationName: 'background-move-md',
        },
        [theme.breakpoints.up('lg')]: {
            animationName: 'background-move-lg',
        },
    },
    '@keyframes boat-move': {
        from: {
            transform: 'translateX(0)',
        },
        to: {
            transform: 'translateX(-55vw)',
        },
    },
    '@keyframes boat-move-md': {
        from: {
            transform: 'translateX(0)',
        },
        to: {
            transform: 'translateX(-25vw)',
        },
    },
    '@keyframes boat-move-lg': {
        from: {
            transform: 'translateX(0)',
        },
        to: {
            transform: 'translateX(-18vw)',
        },
    },
    boatSvg: {
        animation: `boat-move ${ANIMATION_DURATION_S}s ease-out forwards`,
        bottom: 'calc(50% - 1.5em)',
        extend: 'svg',
        right: '-5%',
        width: '35%',
        zIndex: 0,
        [theme.breakpoints.up('md')]: {
            animationName: 'boat-move-md',
        },
        [theme.breakpoints.up('lg')]: {
            animationName: 'boat-move-lg',
        },
    },
    water: {
        background: `linear-gradient(to bottom right, ${theme.palette.primary.main}, ${theme.palette.highlightSecondary.dark})`,
        bottom: 0,
        left: 0,
        opacity: 0.5,
        position: 'absolute',
        right: 0,
        top: '50%',
        zIndex: 1,
    },
    '@keyframes cloud-stratus-move': {
        from: {
            transform: 'translateX(0)',
        },
        to: {
            transform: 'translateX(200vw)',
        },
    },
    '@keyframes cloud-stratus-move-md': {
        from: {
            transform: 'translateX(0)',
        },
        to: {
            transform: 'translateX(100vw)',
        },
    },
    cloudSvgStratus: {
        animation: `cloud-stratus-move ${ANIMATION_DURATION_S * 2}s linear forwards`,
        extend: 'svg',
        left: '-100%',
        top: '30%',
        width: '60%',
        zIndex: 1,
        [theme.breakpoints.up('md')]: {
            animationName: 'cloud-stratus-move-md',
        },
    },
    '@keyframes content-fade-in': {
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        },
    },
    contentContainer: {
        animation: `content-fade-in 1s ${ANIMATION_DURATION_S / 3}s linear forwards`,
        color: theme.palette.common.white,
        extend: fontSmooth,
        left: '50%',
        opacity: 0,
        position: 'absolute',
        top: '70%',
        transform: 'translateX(-50%)',
        width: '75%',
        zIndex: 1,
        [theme.breakpoints.up('md')]: {
            transform: 'none',
            width: '40%',
        },
    },
});

class IcebergScene extends PureComponent {
    static defaultProps = {
        children: null,
        className: null,
    };

    static propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
        classes: PropTypes.object.isRequired,
    };

    render() {
        const {
            children,
            classes,
            className: classNameProp,
        } = this.props;
        return (
            <div
                className={classNames(
                    classes.root,
                    classNameProp,
                )}
            >
                <CloudSvg
                    className={classes.cloudSvgCumulusShowGradient}
                    showGradient
                />
                <CloudSvg
                    className={classes.cloudSvgCumulus}
                />
                <IcebergSvg
                    className={classes.icebergSvg}
                />
                <MobilePhoneSvg
                    className={classes.mobilePhoneSvg}
                />
                <BoatSvg
                    className={classes.boatSvg}
                />
                <div className={classes.mobilePhoneOverlay} />
                <div className={classes.water} />
                <CloudSvg
                    className={classes.cloudSvgStratus}
                    variant="stratus"
                />
                {
                    children
                        ? (
                            <div className={classes.contentContainer}>
                                {children}
                            </div>
                        )
                        : null
                }
            </div>
        );
    }
}

export default withStyles(styles, {index: 1, name: 'LcIcebergScene'})(IcebergScene);
