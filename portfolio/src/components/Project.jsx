import { Typography, Box, Link } from '@mui/material'
import { GitHub } from '@mui/icons-material'

function Project({ name, url, description }) {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h6" component="div" gutterBottom sx={{ color: 'dodgerblue', display: 'flex', alignItems: 'center', gap: 0.5 }}>
        {name}
        {url && (
          <Link href={url} target="_blank" rel="noopener noreferrer">
            <GitHub sx={{ fontSize: 16 }} />
          </Link>
        )}
      </Typography>
      <Typography variant="body1">
        {description}
      </Typography>
    </Box>
  )
}

export default Project