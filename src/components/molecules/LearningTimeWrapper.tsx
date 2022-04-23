import Box from '@mui/material/Box'
import type { NextPage } from 'next'
import * as React from 'react'

import TotalLearningTime from '../atoms/TotalLearningTime'

const LearningTimeWrapper: NextPage = () => {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <TotalLearningTime term={'Today'} learningTime={4} />
        <TotalLearningTime term={'Month'} learningTime={30} />
        <TotalLearningTime term={'Total'} learningTime={100} />
      </Box>
    </>
  )
}

export default LearningTimeWrapper
