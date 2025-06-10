import { Avatar, Button, IconButton, Typography, Box } from '@mui/material'
import { GitHub, LinkedIn, Description } from '@mui/icons-material'

function ProfileCard() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        gap: 2,
        padding: 2
      }}
    >
      <Avatar
        src="pic.jpeg"
        alt="A picture of me"
        sx={{
          width: { xs: 150, md: 200 },
          height: { xs: 150, md: 200 }
        }}
      />

      <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Raymond Chang
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
          <Button
            variant="contained"
            startIcon={<Description />}
            href="Raymond_Chang_resume.pdf"
          >
            Resume
          </Button>

          <IconButton
            href="https://github.com/rkchang"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <GitHub />
          </IconButton>

          <IconButton
            href="https://linkedin.com/in/rkhchang"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <LinkedIn />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}

export default ProfileCard