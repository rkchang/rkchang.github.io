import { Typography, Box } from '@mui/material'
import Degree from './Degree'

function Education() {
  return (
    <Box>
      <Typography variant="h4" component="h2" gutterBottom>
        Education
      </Typography>
      
      <Degree
        university="University of Waterloo"
        universityUrl="https://uwaterloo.ca"
        degree="Masters of Mathematics in Computer Science (Thesis) (95%)"
        details={[
          "Supervisor: Professor Chengnian Sun",
          "Teaching Assistant for: Databases, Operating Systems, Algorithms, Software Analysis and Testing"
        ]}
      />
      
      <Degree
        university="University of Ottawa"
        universityUrl="https://uottawa.ca"
        degree="Honours Bachelor of Science in Computer Science (CO-OP) (8.35/10)"
        details={[
          "Deans Honours List",
          "Honours project - Modelling and verifying distributed leader election algorithms with TLA+"
        ]}
      />
    </Box>
  )
}

export default Education