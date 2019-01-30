import classNames from 'classnames';
import {withStyles} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {Svg} from '..';

const DEFAULT_HEIGHT = 206;
const DEFAULT_WIDTH = 533;
const GRADIENT_ID = 'cloud-svg-gradient';
const VARIANT_CUMULUS = 'cumulus';
const VARIANT_STRATUS = 'stratus';

export const styles = theme => ({
    path: {
        fill: theme.palette.common.white,
        opacity: 0.25,
    },
    pathShowGradient: {
        fill: `url(#${GRADIENT_ID})`,
    },
});

class CloudSvg extends PureComponent {
    static defaultProps = {
        height: DEFAULT_HEIGHT,
        showGradient: false,
        variant: VARIANT_CUMULUS,
        width: DEFAULT_WIDTH,
    };

    static propTypes = {
        classes: PropTypes.object.isRequired,
        height: PropTypes.number,
        showGradient: PropTypes.bool,
        variant: PropTypes.oneOf([
            VARIANT_CUMULUS,
            VARIANT_STRATUS,
        ]),
        width: PropTypes.number,
    };

    render() {
        const {
            classes,
            height,
            showGradient,
            variant,
            width,
            ...other
        } = this.props;
        const pathClassName = classNames(
            classes.path,
            {
                [classes.pathShowGradient]: showGradient,
            },
        );
        return (
            <Svg
                height={height}
                width={width}
                {...other}
            >
                <linearGradient
                    id={GRADIENT_ID}
                    gradientUnits="userSpaceOnUse"
                    x1="63.7726"
                    y1="165.9106"
                    x2="423.5432"
                    y2="87.2978"
                >
                    <stop
                        offset="0"
                        style={{
                            stopColor: '#FFFFFF',
                            stopOpacity: 0,
                        }}
                    />
                    <stop
                        offset="1"
                        style={{
                            stopColor: '#FFFFFF',
                        }}
                    />
                </linearGradient>
                {
                    variant === VARIANT_CUMULUS
                        ? (
                            <path
                                className={pathClassName}
                                d="M479.6,157.6c-6.3,0.9-14.4-63.3-56.6-64.4c-22.6-0.6-47.6,7.6-50,1.1
                                c-12.2-33.3-18.9-60-52.7-63.3c-13.2-1.3-30.3,12.4-34.9,11.2C280.9,41.1,256.3,0,229.8,0c-42.2,0-47.7,41.1-60,48.8
                                c-7.9,3-12.2,1.1-20-1.1c-24.2-6.9-47.8,20.5-45.5,45.5c1.1,12.2,6.7,17.4,3.3,23.3c0,0-107.7-3.3-107.7,45.5
                                c0,24.8,35.6,42.2,84.4,42.2c22,0,95.5-8.9,107-9.8c10.7,0.9,33.4,10.9,53.5,10.9c28.2,0,51.6-14.4,69.5-16
                                c17.7,0.5,45.2,17.7,76.4,16.3c21.2-1,42.3-15.8,55.6-14.4c12.2-0.3,19.9,8,33.3,9.7c35.5,4.4,53.3-11.2,53.3-25
                                C532.9,162.2,487.4,156.5,479.6,157.6z"
                            />
                        )
                        : (
                            <path
                                className={pathClassName}
                                d="M51,41.9c11.5,0,23.4,6.6,32,10c3.5-29.2,72-50,126-50c62.5,0,98.9,39,113,48
                                s171,3.5,171,39c0,18.5-109.2,21-170,21c-28.4,0-55-6-72-14c-19,14-182.4,4-205.5,4c-29,0-41.5-14-41.5-30C4,53.9,22,41.9,51,41.9z"
                            />
                        )
                }
            </Svg>
        );
    }
}

export default withStyles(styles, {name: 'LcCloudSvg'})(CloudSvg);
