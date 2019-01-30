import {
    Grid,
    Paper,
    Typography,
    withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {
    ButtonLink,
    Footer,
    IcebergScene,
} from '../../components';

export const styles = (theme) => {
    const contentMaxWidth = '28rem';
    return {
        root: {
            background: theme.palette.background.default,
            display: 'flex',
            flexDirection: 'column',
        },
        gridContainer: {
            flexDirection: 'column-reverse',
            [theme.breakpoints.up('md')]: {
                flexDirection: 'row',
            },
        },
        gridItemAnimation: {
            background: `linear-gradient(to bottom right, ${theme.palette.highlightSecondary.dark}, ${theme.palette.highlightSecondary.main})`,
            minHeight: '100vh',
            position: 'relative',
            zIndex: 1,
        },
        icebergScene: {
            height: '100vh',
            width: '100%',
            [theme.breakpoints.up('md')]: {
                position: 'fixed',
                width: '41.66%',
            },
            [theme.breakpoints.up('lg')]: {
                width: '33.33%',
            },
        },
        gridItemContent: {
            [theme.breakpoints.up('md')]: {
                minHeight: '100vh',
            },
        },
        paper: {
            borderBottomLeftRadius: 0,
            padding: '5rem 2rem 2rem',
            margin: '2rem 0',
            [theme.breakpoints.up('sm')]: {
                padding: '7rem 3rem 3rem',
                margin: '3rem 3rem 5rem 0',
            },
            [theme.breakpoints.up('md')]: {
                padding: '10rem 5rem 3rem',
                margin: '5rem 5rem 5rem 0',
            },
        },
        typographyIFHeading: {
            fontSize: '1.15em',
            marginBottom: theme.spacing.unit,
        },
        typographyIFDesc: {
            fontSize: '0.9em',
            marginBottom: theme.spacing.unit,
        },
        buttonIF: {
            color: theme.palette.highlight.main,
            left: theme.spacing.unit * -2,
            position: 'relative',
        },
        typographyHeading: {
            borderBottom: `0.6rem solid ${theme.palette.highlight.main}`,
            fontSize: '2.5em',
            lineHeight: 1.2,
            paddingBottom: '1.5rem',
            marginBottom: '2rem',
            maxWidth: contentMaxWidth,
            color: theme.palette.primary.main,
            [theme.breakpoints.up('sm')]: {
                borderBottomWidth: '0.8rem',
                fontSize: '4em',
                paddingBottom: '3rem',
                marginBottom: '3rem',
            },
            [theme.breakpoints.up('md')]: {
                lineHeight: 1.15,
                maxWidth: '25rem',
                paddingBottom: '4rem',
            },
        },
        typographyIntro: {
            marginBottom: '1rem',
            maxWidth: contentMaxWidth,
            [theme.breakpoints.up('sm')]: {
                marginBottom: '2rem',
            },
        },
        buttonAboutMe: {
            color: theme.palette.primary.light,
            left: theme.spacing.unit * -2,
            position: 'relative',
        },
    };
};

class Home extends PureComponent {
    static propTypes = {
        classes: PropTypes.object.isRequired,
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Grid
                    className={classes.gridContainer}
                    container
                >
                    <Grid
                        className={classes.gridItemAnimation}
                        item
                        md={5}
                        lg={4}
                    >
                        <IcebergScene className={classes.icebergScene}>
                            <Typography
                                className={classes.typographyIFHeading}
                                color="inherit"
                                variant="h2"
                            >
                                Fresh code
                            </Typography>
                            <Typography
                                className={classes.typographyIFDesc}
                                color="inherit"
                            >
                                <em>Iceberg Finder</em>
                                , developed for Newfoundland &amp; Labrador Tourism.
                            </Typography>
                            <ButtonLink
                                className={classes.buttonIF}
                                color="inherit"
                                path="/portfolio"
                            >
                                View Portfolio
                            </ButtonLink>
                        </IcebergScene>
                    </Grid>
                    <Grid
                        className={classes.gridItemContent}
                        item
                        md={7}
                        lg={8}
                    >
                        <Paper className={classes.paper}>
                            <Typography
                                className={classes.typographyHeading}
                                variant="h1"
                            >
                                I create engaging products for the web.
                            </Typography>
                            <Typography className={classes.typographyIntro}>
                                From design to development, I raise and nurture user interfaces every step of the way.
                            </Typography>
                            <ButtonLink
                                className={classes.buttonAboutMe}
                                color="inherit"
                                path="/about"
                            >
                                More About Me
                            </ButtonLink>
                        </Paper>
                        <Footer />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles, {index: 2, name: 'LcHome'})(Home);
