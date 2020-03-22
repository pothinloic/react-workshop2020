import React from "react";
import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Button
}from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

export default class PizzaCard extends React.Component {
    constructor(props) {
        super(props);
        this.pizza = props.data;
    }

    classes = makeStyles({
        root: {
            minWidth: 275,
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
    });

    getCategory() {
        switch (this.pizza.category) {
            case ('porc'):
                return 'Porc';
            case ('poulet'):
                return 'Poulet (Halal)';
            case ('veggie'):
                return 'Végétarienne';
            case ('fish'):
                return 'Poissons / Crustacés';
        }
    }

    render() {
        const bull = <span className={this.classes.bullet}>•</span>;
        return (
            <div>
                <Card className={this.classes.root}>
                    <CardContent>
                        <Typography className={this.classes.title} color="textSecondary" gutterBottom>
                            {this.getCategory()}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {this.pizza.name}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {this.pizza.ingredients}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Typography variant="body2">
                            Prix: {this.pizza.price}€
                        </Typography>
                        <Button size="small">Commander</Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}