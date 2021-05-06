import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            '& > * + *': {
                marginTop: theme.spacing(12),
            },
            backgroundColor: 'white',
            width: '30%',
        },
    }),
);

const PaginationControlled = (props: any) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Pagination
                count={19 + props.page}
                page={props.page}
                onClick={props.handlePrevious}
                variant="outlined"
                shape="rounded"
            />
        </div>
    );
};
export default PaginationControlled;
