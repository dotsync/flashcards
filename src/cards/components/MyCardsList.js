import React from 'react'



import { makeStyles } from '@material-ui/core/styles';
import { GridList } from '@material-ui/core/';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { IconButton } from '@material-ui/core';

import StarBorderIcon from '@material-ui/icons/StarBorder';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
// import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
  cardCarousel: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    background: '#00BFFF',
  },
  card: {
    background: '#262626',
    height: '100%',
    'text-align': 'center'
  }
}));

export default function MyCardsList({ flashcards }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList className={classes.cardCarousel} cols={1.5}>

        { (flashcards !== undefined) && flashcards.map((card, i) => (
          <GridListTile key={card.id}>{card.question}

            <GridListTileBar
            className={classes.card}
              title={card.question}
              actionIcon={

                <IconButton aria-label={`star`}>
                  <AccessAlarm/>
                </IconButton>

              }
            />
            {console.log('card', card)}
          </GridListTile>

        ))}
      </GridList>
    </div>
  )
}
