import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default class PizzaForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pizza_name: '',
            category: '',
            ingredients: '',
        };

        this.classes = useStyles;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        alert("Pizza créer: " + this.state.pizza_name + " (" + this.state.category + ") " + this.state.ingredients);
    }

    render() {
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={this.classes.paper}>
                    <Typography component="h1" variant="h5">
                        S'inscrire
                    </Typography>
                    <form className={this.classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="pizza_name"
                                    name="pizza_name"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="pizza_name"
                                    label="Nom de la pizza"
                                    autoFocus
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Select
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="category"
                                    label="Catégorie"
                                    name="category"
                                    autoComplete="category"
                                    onChange={this.handleChange}
                                >
                                    <MenuItem value="porc">Porc</MenuItem>
                                    <MenuItem value="poulet">Poulet</MenuItem>
                                    <MenuItem value="vegie">Végétarien</MenuItem>
                                    <MenuItem value="fish">Poisson / Fruit de mer</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="ingredients"
                                    label="Ingrédients"
                                    name="ingredients"
                                    autoComplete="ingredients"
                                    onChange={this.handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={this.classes.submit}
                            onClick={this.handleSubmit}
                        >
                            Ajouter une pizza
                        </Button>
                    </form>
                </div>
            </Container>
        );
    }
}