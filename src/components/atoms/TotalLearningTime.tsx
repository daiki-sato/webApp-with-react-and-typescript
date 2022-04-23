import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import * as React from 'react'

type Props = {
  term: string
  learningTime: number
}

const TotalLearningTime: React.VFC<Props> = (props) => {
  return (
    <>
      <Box
        sx={{
          width: 150,
          height: 200,
          backgroundColor: 'secondary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Typography variant="h6" component="p" sx={{ mr: '20px' }}>
          {props.term}
        </Typography>
        <Typography variant="h6" component="p" sx={{ mr: '20px' }}>
          {props.learningTime}
        </Typography>
        hour
      </Box>
    </>
  )
}

export default TotalLearningTime
