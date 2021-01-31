import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 5,
    textAlign: 'center',
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
  spacing: {
    textAlign: 'center'
  }
});

const linkStyle = {
    textDecoration : 'none',

}

export default function Event(props) {
  const classes = useStyles();

  const cardStyle = {
   backgroundColor: '#C4C4C4',
   

}

  return (
    <Card className={classes.root} style={cardStyle}>
      <CardContent>

        <Typography className={classes.title} color="textPrimary" variant="h1" component="h2" gutterBottom>
          {props.data.title}
        </Typography>
       
        <Typography className={classes.pos} color="textSecondary">
          {props.data.description}
        </Typography>
        
       


        {
        (props.data.numCommitters)
          ?  <Typography variant="body2" component="p">
          {props.data.numCommitters} attendees 
        </Typography>
          :  <Typography variant="body2" component="p">
          0 attendees
        </Typography>
      }
      </CardContent>
      <CardActions>
      <Link to={`/feed/${props.data._id}`} style={linkStyle}>View More</Link>
      </CardActions>
    </Card>
  );
}

