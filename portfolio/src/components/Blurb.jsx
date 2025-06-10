import { Typography, Link } from '@mui/material'

function Blurb() {
  return (
    <Typography variant="body1" paragraph>
      Hello! I'm currently a software engineer at Arista Networks. Before this, I completed a MMath in CS at the University of Waterloo under the supervision of Professor Chengnian Sun.
      Please see my <Link href="Raymond_Chang_resume.pdf" underline="hover">resume</Link> for more details.
    </Typography>
  )
}

export default Blurb