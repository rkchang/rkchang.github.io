import { Typography, Box } from '@mui/material'
import OpenSourceProject from './OpenSourceProject'

function OpenSource() {
  return (
    <Box>
      <Typography variant="h4" component="h2" gutterBottom>
        Open Source Contributions
      </Typography>
      
      <OpenSourceProject
        name="The LLVM Compiler Infrastructure Project"
        url="https://llvm.org"
        mergedPRs={[
          { url: "https://github.com/llvm/llvm-project/pull/70233" }
        ]}
      />
    </Box>
  )
}

export default OpenSource