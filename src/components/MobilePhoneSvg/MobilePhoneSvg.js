import {withStyles} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {Svg} from '..';

const DEFAULT_HEIGHT = 487;
const DEFAULT_WIDTH = 198;

export const styles = theme => ({
    st0: {
        fill: theme.palette.primary.main,
    },
    st1: {
        fill: theme.palette.highlightSecondary.dark,
        opacity: 0.75,
    },
});

class MobilePhoneSvg extends PureComponent {
    static defaultProps = {
        height: DEFAULT_HEIGHT,
        width: DEFAULT_WIDTH,
    };

    static propTypes = {
        classes: PropTypes.object.isRequired,
        height: PropTypes.number,
        width: PropTypes.number,
    };

    render() {
        const {
            classes,
            height,
            width,
            ...other
        } = this.props;
        return (
            <Svg
                height={height}
                width={width}
                {...other}
            >
                <g>
                    <path
                        className={classes.st0}
                        d="M172.5,30.6L35.4,0.8C16.2-3.4,0,9.2,0,29.1v429.2c0,19.8,16.2,32.2,35.4,27.8l137.1-31.6
                        c14.2-3.3,25.4-19.1,25.4-35.5V65.8C198,49.4,186.7,33.7,172.5,30.6z M187.2,395.9L14.8,425.4V63.9l172.3,26.9V395.9z"
                    />
                    <g>
                        <g>
                            <path
                                className={classes.st1}
                                d="M121.1,50.3l-26-4.8c-2.4-0.4-4.3,1.3-4.3,3.8c0,2.5,1.9,5,4.3,5.4l26,4.6c2.2,0.4,4.1-1.3,4.1-3.7
                                C125.2,53.1,123.3,50.7,121.1,50.3z"
                            />
                        </g>
                    </g>
                    <g>
                        <g>
                            <path
                                className={classes.st1}
                                d="M124.6,430.1l-33.2,6.5c-3,0.6-5.5,4.1-5.5,7.9c0,3.8,2.5,6.3,5.5,5.7l33.2-6.9c2.8-0.6,5.1-4,5.1-7.6
                                C129.7,432,127.4,429.5,124.6,430.1z"
                            />
                        </g>
                    </g>
                </g>
            </Svg>
        );
    }
}

export default withStyles(styles, {name: 'LcMobilePhoneSvg'})(MobilePhoneSvg);
