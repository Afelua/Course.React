
import React from "react";

import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

import styles from './styles.less';

const RoomCard = (props) =>{
    return (<Grid container item xs={6}>
            <Card className={styles.card}>
                <CardContent>
                    <Typography gutterBottom component="h2">
                        {props.name}
                    </Typography>
                    <Typography gutterBottom component="div">
                        Square {props.square}
                    </Typography>
                    <Typography gutterBottom component="div">
                        Review {props.reviews}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Book for {props.price}$</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default RoomCard;

