import React from 'react'
import useStyles from '../../../styles'
import RangeSlider from '../../../components/RangeSlider/RangeSlider'
import { Grid, Typography } from '@material-ui/core'

export default function PriceFilter() {
    const classes = useStyles()
    

    function separateNum(value, input) {
        var nStr = value + '';
        nStr = nStr.replace(/\,/g, "");
        let x = nStr.split('.');
        let x1 = x[0];
        let x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        if (input !== undefined) {

            input.value = x1 + x2;
        } else {
            return x1 + x2;
        }
    }
    return (
        <Grid item className={classes.priceFilter}>
            <Typography className={classes.priceFilterHead}>مبلغ دوره</Typography>
            <Grid container item justify="center" className={classes.priceFilterBox}>
                <RangeSlider  />
            </Grid>
        </Grid>
    )
}
