import {
    Power0,
    TimelineMax,
} from 'gsap/all';
import {withStyles} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {Svg} from '..';

const DEFAULT_HEIGHT = 132;
const DEFAULT_WIDTH = 220;

export const styles = () => ({
    st0: {
        fill: '#0A446B',
    },
    st1: {
        fill: '#C94917',
    },
    st2: {
        fill: '#F93099',
    },
    st3: {
        fill: '#FFFFFF',
    },
    st4: {
        fill: '#D3E9EA',
    },
    st5: {
        fill: 'url(#SVGID_1_)',
    },
    st6: {
        fill: 'url(#SVGID_2_)',
        transform: 'translate(0,0)',
    },
    st7: {
        fill: 'url(#SVGID_3_)',
        transform: 'translate(0,0)',
    },
    st8: {
        fill: 'url(#SVGID_4_)',
        transform: 'translate(0,0)',
    },
    st9: {
        fill: '#A52173',
    },
    st10: {
        fill: 'url(#SVGID_5_)',
    },
    st11: {
        opacity: 0.5,
        fill: 'none',
        stroke: '#C5F9F5',
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeMiterlimit: 10,
    },
    st12: {
        fill: 'url(#SVGID_6_)',
    },
    st13: {
        fill: '#FFE000',
    },
    st14: {
        fill: '#3E464E',
    },
    st15: {
        fill: '#3E464E',
        stroke: '#81E7EA',
        strokeWidth: 1.75,
        strokeLinecap: 'round',
        strokeMiterlimit: 10,
    },
    st16: {
        fill: 'none',
        stroke: '#FFFFFF',
        strokeLinecap: 'round',
        strokeMiterlimit: 10,
    },
});

class BoatSvg extends PureComponent {
    static defaultProps = {
        className: null,
        height: DEFAULT_HEIGHT,
        width: DEFAULT_WIDTH,
    };

    static propTypes = {
        className: PropTypes.string,
        classes: PropTypes.object.isRequired,
        height: PropTypes.number,
        width: PropTypes.number,
    };

    constructor(props) {
        super(props);

        this.primarySwayTimeline = new TimelineMax({delay: 0.5, repeat: -1});
        this.secondarySwayTimeline = new TimelineMax({repeat: -1});

        this.svg = null;
        this.buoys = [];
    }

    componentDidMount() {
        this.startTimeline();
    }

    svgRef = (element) => {
        this.svg = element;
    }

    buoyRef = index => (element) => {
        this.buoys[index] = element;
    }

    startTimeline = () => {
        this.buildSwayTimeline(this.primarySwayTimeline, [this.svg, this.buoys[0]]);
        this.buildSwayTimeline(this.secondarySwayTimeline, this.buoys[1]);
    }

    buildSwayTimeline = (timeline, elements) => {
        const SWAY_DURATION = 2;
        const SWAY_ROTATION = 2.25;

        timeline
            .to(elements, SWAY_DURATION / 4, {ease: Power0.easeNone, rotation: SWAY_ROTATION})
            .to(elements, SWAY_DURATION / 4, {ease: Power0.easeNone, rotation: 0})
            .to(elements, SWAY_DURATION / 4, {ease: Power0.easeNone, rotation: -SWAY_ROTATION})
            .to(elements, SWAY_DURATION / 4, {ease: Power0.easeNone, rotation: 0});
    }

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
                svgProps={{
                    className: classes.svg,
                    ref: this.svgRef,
                }}
                width={width}
                {...other}
            >
                <g>
                    <rect
                        x="60.6"
                        y="7.4"
                        transform="matrix(0.1132 -0.9936 0.9936 0.1132 47.94 72.4548)"
                        className={classes.st0}
                        width="8"
                        height="4"
                    />
                </g>
                <rect
                    x="59"
                    y="4.4"
                    transform="matrix(-0.9936 -0.1132 0.1132 -0.9936 128.8291 19.1034)"
                    className={classes.st1}
                    width="12"
                    height="3"
                />
                <rect
                    x="59.2"
                    y="1.4"
                    transform="matrix(-0.9936 -0.1132 0.1132 -0.9936 129.6747 14.1836)"
                    className={classes.st2}
                    width="12"
                    height="4"
                />
                <g>
                    <path
                        className={classes.st3}
                        d="M37,66C34.5,72.7,85.9,78,85.9,78l6.7-58.6l-58.7-6.1L37,66z"
                    />
                </g>
                <g>
                    <path
                        className={classes.st4}
                        d="M37,66c-2.5,6.8,20.1,9,20.1,9l-3.3-59.8l-19.9-1.9L37,66z"
                    />
                </g>
                <linearGradient
                    id="SVGID_1_"
                    gradientUnits="userSpaceOnUse"
                    x1="28.2776"
                    y1="14.2163"
                    x2="95.7539"
                    y2="14.2163"
                >
                    <stop
                        offset="0"
                        style={{stopColor: '#014D77'}}
                    />
                    <stop
                        offset="1"
                        style={{stopColor: '#457DAB'}}
                    />
                </linearGradient>
                <path
                    className={classes.st5}
                    d="M30.5,13.3l7.3,3c0.3,0.1,0.6,0.2,0.9,0.2l53.1,6c1.9,0.2,3.7-1.2,3.9-3.1l0.1-1c0.2-1.9-1.2-3.7-3.1-3.9
                    L39,8.5c-0.3,0-0.7-0.1-1-0.3l-4.7-2c-2.2-0.9-4.6,0.5-4.9,2.8l-0.1,0.6C28.1,11.2,29,12.7,30.5,13.3z"
                />
                <linearGradient
                    id="SVGID_2_"
                    gradientUnits="userSpaceOnUse"
                    x1="-874.0984"
                    y1="54.4085"
                    x2="-874.0984"
                    y2="-1.1498"
                    gradientTransform="matrix(-0.9936 -0.1132 -0.1132 0.9936 -784.0997 -104.633)"
                >
                    <stop
                        offset="0"
                        style={{stopColor: '#00E4E0'}}
                    />
                    <stop
                        offset="0.1352"
                        style={{stopColor: '#00CED9'}}
                    />
                    <stop
                        offset="0.3843"
                        style={{stopColor: '#01AACE'}}
                    />
                    <stop
                        offset="0.6189"
                        style={{stopColor: '#0291C6'}}
                    />
                    <stop
                        offset="0.8307"
                        style={{stopColor: '#0281C1'}}
                    />
                    <stop
                        offset="1"
                        style={{stopColor: '#027CBF'}}
                    />
                </linearGradient>
                <path
                    className={classes.st6}
                    d="M75,43.5l7.4,0.8c1.2,0.1,2.4-0.8,2.5-2L86.8,26c0.1-1.2-0.8-2.4-2-2.5l-7.4-0.8c-1.2-0.1-2.4,0.8-2.5,2L73,41
                    C72.9,42.3,73.8,43.4,75,43.5z"
                />
                <linearGradient
                    id="SVGID_3_"
                    gradientUnits="userSpaceOnUse"
                    x1="-858.0984"
                    y1="56.4443"
                    x2="-858.0984"
                    y2="-4.0594"
                    gradientTransform="matrix(-0.9936 -0.1132 -0.1132 0.9936 -784.0997 -104.633)"
                >
                    <stop
                        offset="0"
                        style={{stopColor: '#00E4E0'}}
                    />
                    <stop
                        offset="0.1352"
                        style={{stopColor: '#00CED9'}}
                    />
                    <stop
                        offset="0.3843"
                        style={{stopColor: '#01AACE'}}
                    />
                    <stop
                        offset="0.6189"
                        style={{stopColor: '#0291C6'}}
                    />
                    <stop
                        offset="0.8307"
                        style={{stopColor: '#0281C1'}}
                    />
                    <stop
                        offset="1"
                        style={{stopColor: '#027CBF'}}
                    />
                </linearGradient>
                <path
                    className={classes.st7}
                    d="M62.1,42.1l4.4,0.5c1.2,0.1,2.4-0.8,2.5-2l1.9-16.3c0.1-1.2-0.8-2.4-2-2.5l-7.4-0.8c-1.2-0.1-2.4,0.8-2.5,2
                    l1.1,16.7C60,40.8,60.9,41.9,62.1,42.1z"
                />
                <linearGradient
                    id="SVGID_4_"
                    gradientUnits="userSpaceOnUse"
                    x1="-839.016"
                    y1="57.4203"
                    x2="-839.016"
                    y2="16.7744"
                    gradientTransform="matrix(-0.9936 -0.1132 -0.1132 0.9936 -784.0997 -104.633)"
                >
                    <stop
                        offset="0"
                        style={{stopColor: '#00E4E0'}}
                    />
                    <stop
                        offset="0.1352"
                        style={{stopColor: '#00CED9'}}
                    />
                    <stop
                        offset="0.3843"
                        style={{stopColor: '#01AACE'}}
                    />
                    <stop
                        offset="0.6189"
                        style={{stopColor: '#0291C6'}}
                    />
                    <stop
                        offset="0.8307"
                        style={{stopColor: '#0281C1'}}
                    />
                    <stop
                        offset="1"
                        style={{stopColor: '#027CBF'}}
                    />
                </linearGradient>
                <path
                    className={classes.st8}
                    d="M43.2,38.5l4.4,0.5c1.2,0.1,2.4-0.8,2.5-2L49,22.1c0.1-1.2-0.8-2.4-2-2.5l-4.4-0.5c-1.2-0.1-2.4,0.8-2.5,2
                    l1.1,14.9C41.1,37.2,42,38.3,43.2,38.5z"
                />
                <path
                    className={classes.st9}
                    d="M5.8,30.8c0,0,5.4,1.9,12.7,4.6c0.6,0,1,2,1.7,2l7.1,1.3c30.1,11.5,84.4,31.8,100.5,35.1
                    c22.6,4.6,85.4,1.7,85.4,1.7s-3.4,25-7.1,35.4c-1.9,5.4-63.8,20.4-77.8,20.3c-2.3,0-5.3-0.2-8.9-0.4c-1,0.2-2.1,0.2-3.1,0.1
                    l-96.4-11c-6.6-0.7-11.3-6.7-10.6-13.3L5.8,30.8z"
                />
                <linearGradient
                    id="SVGID_5_"
                    gradientUnits="userSpaceOnUse"
                    x1="6.5001"
                    y1="81.6502"
                    x2="213.0152"
                    y2="81.6502"
                >
                    <stop
                        offset="0"
                        style={{
                            stopColor: '#FF5EAD',
                            stopOpacity: 0.5,
                        }}
                    />
                    <stop
                        offset="8.117402e-02"
                        style={{
                            stopColor: '#FF52A7',
                            stopOpacity: 0.5406,
                        }}
                    />
                    <stop
                        offset="0.346"
                        style={{
                            stopColor: '#FF2E95',
                            stopOpacity: 0.673,
                        }}
                    />
                    <stop
                        offset="0.5951"
                        style={{
                            stopColor: '#FF1588',
                            stopOpacity: 0.7976,
                        }}
                    />
                    <stop
                        offset="0.8202"
                        style={{
                            stopColor: '#FF0581',
                            stopOpacity: 0.9101,
                        }}
                    />
                    <stop
                        offset="1"
                        style={{stopColor: '#FF007E'}}
                    />
                </linearGradient>
                <path
                    className={classes.st10}
                    d="M6.7,31c0.1-1,98.3,38.4,120.9,43s85.4,1.7,85.4,1.7s-3.4,25-7.1,35.4C204,116.4,142,132,128,132.3
                    c-7.1,0.2-36.4-4.1-55.1-6.3C40.3,122.3,3.1,61.8,6.7,31z"
                />
                <path
                    className={classes.st11}
                    d="M5.6,40.9c0,0,78.6,34.1,112.4,38"
                />
                <linearGradient
                    id="SVGID_6_"
                    gradientUnits="userSpaceOnUse"
                    x1="2.8888"
                    y1="53.3313"
                    x2="218.0921"
                    y2="53.3313"
                >
                    <stop
                        offset="0"
                        style={{stopColor: '#014D77'}}
                    />
                    <stop
                        offset="1"
                        style={{stopColor: '#457DAB'}}
                    />
                </linearGradient>
                <path
                    className={classes.st12}
                    d="M127.3,76.9c-20.2-4.1-104-36.2-121.6-42.4c-1.8-0.6-3-2.4-2.9-4.4l0,0c0.1-1.8,3-2.9,4.6-2.2
                    C24.9,34.7,108,65.9,128.1,70c19.3,3.9,72.9,1,86.8,0.4c2-0.1,3.5,1.7,3.1,3.6c0,0.1-0.1,0.3-0.1,0.4c-0.3,1.6-1.7,2.8-3.3,2.9
                    C201.6,77.8,146.9,80.9,127.3,76.9z"
                />
                <path
                    className={classes.st11}
                    d="M141,89.5c0,0-26,0.3-70.7-15.1C35.4,62.4,6.7,49.1,6.7,49.1"
                />
                <g ref={this.buoyRef(0)}>
                    <circle
                        className={classes.st13}
                        cx="47.1"
                        cy="76.7"
                        r="10"
                    />
                    <path
                        className={classes.st14}
                        d="M55.1,70.7c-1.8-2.4-4.7-4-8-4c-3.3,0-6.2,1.6-8,4H55.1z"
                    />
                    <path
                        className={classes.st14}
                        d="M47.1,60.1c-1.7,0-3,2-3,4.5s1.3,4.5,3,4.5c1.7,0,3-2,3-4.5S48.8,60.1,47.1,60.1z M47.1,66.9
                        c-0.8,0-1.5-1-1.5-2.2c0-1.2,0.7-2.2,1.5-2.2c0.8,0,1.5,1,1.5,2.2C48.6,65.9,47.9,66.9,47.1,66.9z"
                    />
                    <line
                        className={classes.st15}
                        x1="47.1"
                        y1="41.7"
                        x2="47.1"
                        y2="63.7"
                    />
                    <path
                        className={classes.st16}
                        d="M39.6,77.2c1,5,4,7,8.5,6.5"
                    />
                </g>
                <g ref={this.buoyRef(1)}>
                    <circle
                        className={classes.st13}
                        cx="77.1"
                        cy="84.7"
                        r="10"
                    />
                    <path
                        className={classes.st14}
                        d="M85.1,78.7c-1.8-2.4-4.7-4-8-4c-3.3,0-6.2,1.6-8,4H85.1z"
                    />
                    <path
                        className={classes.st14}
                        d="M77.1,68.1c-1.7,0-3,2-3,4.5s1.3,4.5,3,4.5c1.7,0,3-2,3-4.5S78.8,68.1,77.1,68.1z M77.1,74.9
                        c-0.8,0-1.5-1-1.5-2.2c0-1.2,0.7-2.2,1.5-2.2c0.8,0,1.5,1,1.5,2.2C78.6,73.9,77.9,74.9,77.1,74.9z"
                    />
                    <line
                        className={classes.st15}
                        x1="77.1"
                        y1="52.7"
                        x2="77.1"
                        y2="71.7"
                    />
                    <path
                        className={classes.st16}
                        d="M69.6,85.2c1,5,4,7,8.5,6.5"
                    />
                </g>
            </Svg>
        );
    }
}

export default withStyles(styles, {name: 'LcBoatSvg'})(BoatSvg);
