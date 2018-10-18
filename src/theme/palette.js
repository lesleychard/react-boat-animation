import {darken, lighten} from '../style-utils';

const PRIMARY = '#092C50';
const SECONDARY = '#FC0480';
const HIGHLIGHT = '#FFE000';
const HIGHLIGHT_SECONDARY = '#03F4E8';

const WHITE = '#fff';
const BLACK = '#000';

const palette = {
    highlight: {
        contrastText: BLACK,
        dark: darken(HIGHLIGHT, 0.25),
        light: lighten(HIGHLIGHT, 0.25),
        main: HIGHLIGHT,
    },
    highlightSecondary: {
        contrastText: BLACK,
        dark: '#457DAB',
        light: lighten(HIGHLIGHT_SECONDARY, 0.25),
        main: HIGHLIGHT_SECONDARY,
    },
    primary: {
        contrastText: WHITE,
        dark: darken(PRIMARY, 0.25),
        light: lighten(PRIMARY, 0.25),
        main: PRIMARY,
    },
    secondary: {
        contrastText: WHITE,
        dark: darken(SECONDARY, 0.25),
        light: lighten(SECONDARY, 0.25),
        main: SECONDARY,
    },
};

export default palette;
