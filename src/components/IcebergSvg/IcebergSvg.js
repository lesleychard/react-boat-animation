// import classNames from 'classnames';
import {withStyles} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {Svg} from '..';

const DEFAULT_HEIGHT = 702;
const DEFAULT_WIDTH = 501;

export const styles = () => ({
    st0: {
        fill: '#76DDE5',
    },
    st1: {
        fill: '#C5F9F5',
    },
    st2: {
        fill: '#FFFFFF',
    },
    st3: {
        fill: '#81E7EA',
    },
    st4: {
        fill: '#A4F7F3',
    },
    st5: {
        fill: '#58C4D6',
    },
    st6: {
        fill: '#49A6BF',
    },
});

class IcebergSvg extends PureComponent {
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
                    <polyline
                        className={classes.st0}
                        points="197.9,588.6 230.8,644.8 319,516.9 197.9,588.6"
                    />
                    <polygon
                        className={classes.st1}
                        points="384.8,288.7 408.5,273.3 386.7,210.5 355.1,204 368.8,264.8"
                    />
                    <polygon
                        className={classes.st0}
                        points="408.5,273.3 494.1,338.4 447.7,390.3 384.1,288"
                    />
                    <polygon
                        className={classes.st2}
                        points="85.8,284.3 85.3,286 186.9,432.1 202.1,324.5"
                    />
                    <polyline
                        className={classes.st0}
                        points="115.2,139.9 202.1,324.5 180.3,182.4 115.2,139.9 116.4,141.1"
                    />
                    <polygon
                        className={classes.st3}
                        points="45.5,227.8 44.2,227.4 43.3,228.8 28.4,334 86.1,284"
                    />
                    <polygon
                        className={classes.st4}
                        points="301.1,158 180.1,183 268.5,130.3"
                    />
                    <polygon
                        className={classes.st3}
                        points="307.5,426.5 197.9,588.6 319,516.9 373.3,384.8"
                    />
                    <polyline
                        className={classes.st3}
                        points="355.1,205 361.1,142 301.1,158 354.2,203.9"
                    />
                    <polygon
                        className={classes.st2}
                        points="301,157.6 202.1,324.6 178.1,182.6"
                    />
                    <polygon
                        className={classes.st3}
                        points="466,419.2 368.8,263.6 367.1,261.8 373.2,385.1"
                    />
                    <polygon
                        className={classes.st4}
                        points="258.8,348.2 307.1,427.1 372.8,385.2"
                    />
                    <polygon
                        className={classes.st2}
                        points="408.1,273.7 453.7,268 453.2,267.2 418.7,164.7 386.7,210.5"
                    />
                    <polygon
                        className={classes.st0}
                        points="27.6,334.8 46.8,444.6 187.3,431.4"
                    />
                    <polygon
                        className={classes.st5}
                        points="202.1,324.5 186.5,431.1 46.8,444.6 162.1,598.9 154.1,653.3 236.6,392.1 258.8,348.2"
                    />
                    <polygon
                        className={classes.st4}
                        points="258.8,348.2 307.1,427.1 372.8,385.2"
                    />
                    <polygon
                        className={classes.st2}
                        points="372.9,385.1 373.3,384.8 369.5,265.4 328.6,218.4 259,348.1"
                    />
                    <polygon
                        className={classes.st4}
                        points="27.6,334.9 85,284.1 187.4,431.4"
                    />
                    <polyline
                        className={classes.st6}
                        points="154.1,653.3 73.6,503.7 78.5,487 162.8,599 154.1,653.3"
                    />
                    <polygon
                        className={classes.st2}
                        points="361.1,142 318.1,91 301.1,158"
                    />
                    <polygon
                        className={classes.st4}
                        points="85.1,284.1 115.8,140.5 202.1,324.5"
                    />
                    <polygon
                        className={classes.st2}
                        points="236.6,392.1 258.8,348.2 308.8,427.7"
                    />
                    <polygon
                        className={classes.st0}
                        points="154.1,653.3 235.9,390.9 307.5,427.1"
                    />
                    <polygon
                        className={classes.st0}
                        points="28.4,334 43.3,228.8 43.3,228.8 4.6,286.5 27.6,334.8 28.4,334"
                    />
                    <polygon
                        className={classes.st0}
                        points="45.5,227.8 45.5,227.8 84.2,281.4 93.4,241.3"
                    />
                    <polygon
                        className={classes.st6}
                        points="230.8,644.8 255.1,699.1 276.7,577.6"
                    />
                    <polyline
                        className={classes.st5}
                        points="319,516.9 343.3,576 255.1,699.1 276.5,578.5 319,516.9"
                    />
                    <polyline
                        className={classes.st3}
                        points="160.5,136.9 115.8,140.5 181,184 160.5,136.9"
                    />
                    <path
                        className={classes.st4}
                        d="M453.6,267.8l0.1,0.2l-46.2,6.2l0,0c0,0,0,0,0,0l86.5,64.1c0,0,0,0,0,0L453.6,267.8z"
                    />
                    <polygon
                        className={classes.st4}
                        points="453.2,267.2 453.2,267.2 453.2,267.2"
                    />
                    <polygon
                        className={classes.st4}
                        points="330.1,222.4 368.5,263.4 355.1,204 301.1,158"
                    />
                    <polygon
                        className={classes.st0}
                        points="466,419.2 373.2,385.1 373.2,384.9 372.9,385.1 372.6,385.1 319,516.9 343.3,576.1 466,419.2"
                    />
                    <polygon
                        className={classes.st3}
                        points="254.4,95.1 318.1,91 301.1,158 268.6,130.7"
                    />
                    <polygon
                        className={classes.st0}
                        points="44.2,227.4 85.1,285 95.1,241"
                    />
                    <polygon
                        className={classes.st2}
                        points="161.2,137.5 217.4,0 268.5,130.3 179.1,184.6"
                    />
                    <polygon
                        className={classes.st3}
                        points="300.5,158 181.6,182.2 268.5,130.3"
                    />
                    <polygon
                        className={classes.st3}
                        points="201.1,325 301.1,158 333.1,222 258.1,349"
                    />
                    <polygon
                        className={classes.st4}
                        points="361.1,142 418.7,164.7 386.7,210.5 354.2,203.9"
                    />
                </g>
            </Svg>
        );
    }
}

export default withStyles(styles, {name: 'LcIcebergSvg'})(IcebergSvg);
