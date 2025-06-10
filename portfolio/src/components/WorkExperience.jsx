import { Typography, Box } from '@mui/material'
import Job from './Job'

function WorkExperience() {
  return (
    <Box>
      <Typography variant="h4" component="h2" gutterBottom>
        Work Experience
      </Typography>
      
      <Job
        company="Arista Networks"
        companyUrl="https://arista.com"
        title="Software Engineer"
      />
      
      <Job
        company="Blackberry QNX"
        companyUrl="https://blackberry.qnx.com"
        title="CoreOS Software Development Student"
      />
      
      <Job
        company="Ford Motor Company"
        companyUrl="https://ford.com"
        title="Telematics Control Unit Software Developer"
      />
      
      <Job
        company="Canadian Border Services Agency"
        companyUrl="https://cbsa-asfc.gc.ca"
        title="Junior Programmer"
      />
    </Box>
  )
}

export default WorkExperience