import React from 'react';
import {
    Grid,
    CardActionArea,
    Card,
    CardContent,
    Typography,
    Hidden,
    CardMedia
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    classes = makeStyles({
        card: {
            display: 'flex',
        },
        cardDetails: {
            flex: 1,
        },
        cardMedia: {
            width: 160,
        },
    });


    render () {
        return(
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <CardActionArea component="a" href="/pizzas">
                        <Card className={this.classes.card}>
                            <div className={this.classes.cardDetails}>
                                <CardContent>
                                    <Typography component="h2" variant="h5">
                                        Nos pizzas
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        C'est ici que vous ferez votre choix !
                                    </Typography>
                                    <Typography variant="subtitle1" color="primary">
                                        Faites votre choix !
                                    </Typography>
                                </CardContent>
                            </div>
                            <Hidden xsDown>
                                <CardMedia className={this.classes.cardMedia} title="titre image" />
                            </Hidden>
                        </Card>
                    </CardActionArea>
                </Grid>
                <Grid item xs={12} md={6}>
                    <CardActionArea component="a" href="/new-pizza">
                        <Card className={this.classes.card}>
                            <div className={this.classes.cardDetails}>
                                <CardContent>
                                    <Typography component="h2" variant="h5">
                                        Ajouter une pizza
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        (Ajoutez une nouvelle pizza à votre catalogue)
                                    </Typography>
                                    <Typography variant="subtitle1" color="primary">
                                        Cliquez ici...
                                    </Typography>
                                </CardContent>
                            </div>
                            <Hidden xsDown>
                                <CardMedia className={this.classes.cardMedia} title="titre image" />
                            </Hidden>
                        </Card>
                    </CardActionArea>
                </Grid>
            </Grid>
        )
    }
}