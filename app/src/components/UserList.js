import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import _ from 'lodash';

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    list: {
        width: 720,
    },
    button: {
        margin: 15
    },
});


class UserList extends Component {
    
    state = {
        expanded: null
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
          expanded: expanded ? panel : false,
        });
    };

    renderUsers(users) {

        let { expanded } = this.state;
        let { classes } = this.props;

        if(users) {
            return _.map(users, user => {
                return (
                    <ExpansionPanel key={user.cell} expanded={expanded === (`panel${user.cell}`) } onChange={this.handleChange(`panel${user.cell}`)}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <ListItemAvatar>
                                <Avatar alt="Travis Howard" src={user.picture.medium} />
                            </ListItemAvatar>
                            <Typography className={classes.heading}>
                                {user.name.title} {user.name.last}<br/>
                                <small>{user.phone}</small>
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <List className={classes.root}>
                                <ListItem>
                                    <ListItemText>
                                        <b>Full Name:</b> {user.name.title} {user.name.first} {user.name.last}
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        <b>Age:</b> {user.dob.age} 
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        <b>Gender:</b> {user.gender} 
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <Button 
                                        variant="contained" 
                                        color="primary" 
                                        type={'submit'}
                                        variant="contained"
                                        onClick={e => window.location.href = `https://www.google.com/maps/@${user.location.coordinates.latitude},${user.location.coordinates.longitude},14z`}
                                    >
                                        Ver Localização Aproximada
                                    </Button>
                                </ListItem>
                            </List>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                );
            });
        }
    }

    render() {

        let { classes, users } = this.props;
        
        return (
            <ul className={classes.list}>
                { users ? (
                    this.renderUsers(users)
                ): (
                    <span></span>
                )}
            </ul>
        );
    }
}

UserList.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    users: state.UserReducers.users
});

export default connect(mapStateToProps, {})(withStyles(styles)(UserList));
