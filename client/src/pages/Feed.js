import React, {useEffect, useState} from 'react'
import Event from '../components/Event'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));




export const Feed = () => {
    const classes = useStyles();
    const [eventData, setEventData] = useState([{
        eventId: "mamamia",
        title: "Mama Mia's Soup Kitchen",
        posterId: "a1b2c3d4e5",
        description: "Help Mama Mia make soup for the homeless!",
        category: "Social Good",
        committers: ["crikey", "a1b2c3d4e5"],
        numCommitters: 2,
        startDate: 1611978748,
        endDate: 1612065148,
        isCompletedEvent: false,
        isTimedEvent: true,
      }, {
        eventId: "luigi",
            title: "Work out to become strong like Luigi",
            posterId: "a1b2c3d4e5",
            description: "Luigi strong",
            category: "Personal",
            committers: ["a1b2c3d4e5"],
            numCommitters: 2,
            startDate: 1611978748,
            endDate: 1612065148,
            isCompletedEvent: false,
            isTimedEvent: true,
      }, {
        eventId: "luigi",
            title: "Work out to become strong like Luigi",
            posterId: "a1b2c3d4e5",
            description: "Luigi strong",
            category: "Personal",
            committers: ["a1b2c3d4e5"],
            numCommitters: 2,
            startDate: 1611978748,
            endDate: 1612065148,
            isCompletedEvent: false,
            isTimedEvent: true,
      }, {
        eventId: "luigi",
            title: "Work out to become strong like Luigi",
            posterId: "a1b2c3d4e5",
            description: "Luigi strong",
            category: "Personal",
            committers: ["a1b2c3d4e5"],
            numCommitters: 2,
            startDate: 1611978748,
            endDate: 1612065148,
            isCompletedEvent: false,
            isTimedEvent: true,
      }]);

      

      console.log(eventData)
    
    
    /*
    setEventData(eventData.concat({
        eventId: "mamamia",
        title: "Mama Mia's Soup Kitchen",
        posterId: "a1b2c3d4e5",
        description: "Help Mama Mia make soup for the homeless!",
        category: "Social Good",
        committers: ["crikey", "a1b2c3d4e5"],
        numCommitters: 2,
        startDate: 1611978748,
        endDate: 1612065148,
        isCompletedEvent: false,
        isTimedEvent: true,
      }))

      setEventData(eventData.concat({
        eventId: "luigi",
            title: "Work out to become strong like Luigi",
            posterId: "a1b2c3d4e5",
            description: "Luigi strong",
            category: "Personal",
            committers: ["a1b2c3d4e5"],
            numCommitters: 2,
            startDate: 1611978748,
            endDate: 1612065148,
            isCompletedEvent: false,
            isTimedEvent: true,
      }))

      setEventData(eventData.concat({
        eventId: "jeepers",
            title: "Scooby-Doo",
            posterId: "crikey",
            description: "Solve that mystery!",
            category: "Social Good",
            committers: ["crikey", "a1b2c3d4e5"],
            numCommitters: 2,
            startDate: 1611978748,
            endDate: 1612065148,
            isCompletedEvent: false,
            isTimedEvent: true,
      }))
      */

    return (

        
        <div>
            <div className={classes.root}>
      <Grid container spacing={3}>
      {eventData.map((user) => (
          <Grid item xs={4}>
        <Event data={user}/>
        </Grid>
      ))}
        
      </Grid>
    </div>
           
            
           
     
    
        </div>
    )
}

export default Feed;


/*

Users

{
  firstName: "Joseph",
  lastName: "Guacamole",
  profilePicUrl: "",
  email: "",
  userId: "a1b2c3d4e5",
  location: 12345,
  eventCategory: "Social Good",
  createdEvents: ["mamamia", "luigi"],
  numCreatedEvents: 2,
  committedEvents: ["mamamia", "luigi", "jeepers"],
  numCommittedEvents: 2,
  friends: [],
}

{
  firstName: "Michael",
  lastName: "Volumetric",
  profilePicUrl: "",
  email: "",
  userId: "crikey",
  location: 22222,
  eventCategory: "Personal",
  createdEvents: ["jeepers"],
  numCreatedEvents: 1,
  committedEvents: ["jeepers", "mamamia"],
  numCommittedEvents: 2,
  friends: [],
}

*/
