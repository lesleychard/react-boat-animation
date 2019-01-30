const globals = theme => ({
    '@global': {
        body: {
            fontFamily: theme.typography.fontFamily,
            fontSize: `${theme.typography.fontSize}px`,
            margin: 0,
        },
        a: {
            color: theme.palette.primary.main,
        },
    },
});

export default globals;
