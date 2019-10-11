import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import UserList from './../components/UserList';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { fetchUsers } from './../actions/userActions';

const style = theme => ({
	container: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textField: {
        width: '100%',
        margin: 15
    },
    button: {
        margin: 15
    },
    form: {
        width: 720,
    },
});

class Home extends Component {

    state = {
        qtd: '',
        buttontext: 'Gerar',
        loading: false
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    hansleSubmit(e) {
        e.preventDefault();

        let { qtd } = this.state;
        this.setState({ loading: true });
        
        this.props.fetchUsers(qtd).then(() => {
            this.setState({ loading: false });
        });
    }

    render() {
        
        let { classes } = this.props;

        return(
            <div>
                <div className={classes.container} >
                    <form noValidate className={classes.form} onSubmit={e => this.hansleSubmit(e)}>
                        <TextField
                            id="qtd"
                            label="Quantidade de usuários"
                            className={classes.textField}
                            name="qtd"
                            type={'number'}
                            value={this.state.qtd}
                            onChange={e => this.handleChange(e)}
                            margin="normal"
                        />
                        <Button 
                            variant="contained" 
                            color="primary" 
                            className={classes.button}
                            type={'submit'}
                            fullWidth
                            variant="contained"
                            disabled={this.state.qtd_users == 0 || this.state.loading}
                        >
                            { this.state.loading ? (
                                <CircularProgress color={'primary'} size={24} className={classes.buttonProgress} />
                            ): (
                                <span>Gerar</span>
                            )}
                        </Button>
                    </form>
                </div>
                <div className={classes.container}>
                    <UserList />
                </div>
            </div>
        );
    }
}


Home.propTypes = {
	classes: PropTypes.object.isRequired
}

export default connect(null, { fetchUsers })(withStyles(style)(Home));
