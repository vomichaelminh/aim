import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    minWidth: 5,
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
    alignItems: 'center', 
    justifyContent:'center'
  },
});

export default function Event(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.data.title}
        </Typography>
       
        <Typography className={classes.pos} color="textSecondary">
          {props.data.description}
        </Typography>
        
        <Typography variant="body2" component="p">
          {props.data.numCommitters}
          <br />
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Join Event</Button>
      </CardActions>
    </Card>
  );
}

