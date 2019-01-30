import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {withStylesProps} from '../../style-utils';

export const styles = props => ({
    root: {
        height: props.height,
        width: props.width,
    },
});

class Svg extends PureComponent {
    static defaultProps = {
        className: null,
        children: null,
        svgProps: {},
    };

    static propTypes = {
        className: PropTypes.string,
        classes: PropTypes.object.isRequired,
        children: PropTypes.node,
        height: PropTypes.number.isRequired,
        svgProps: PropTypes.object,
        width: PropTypes.number.isRequired,
    };

    render() {
        const {
            classes,
            className: classNameProp,
            children,
            height,
            svgProps,
            width,
            ...other
        } = this.props;
        return (
            <div
                className={classNames(
                    classes.root,
                    classNameProp,
                )}
                {...other}
            >
                <svg
                    version="1.1"
                    viewBox={`0 0 ${width} ${height}`}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlSpace="preserve"
                    {...svgProps}
                >
                    {children}
                </svg>
            </div>
        );
    }
}

export default withStylesProps(styles, {name: 'LcSvg'})(Svg);
