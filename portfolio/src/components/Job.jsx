import { Typography, Link, Box } from '@mui/material'
import { Link as LinkIcon } from '@mui/icons-material'

function Job({ company, companyUrl, title }) {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h6" component="div" sx={{ color: 'dodgerblue' }}>
          {title}
      </Typography>
      <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        {company}
        <Link href={companyUrl} target="_blank" rel="noopener noreferrer">
          <LinkIcon sx={{ fontSize: 16 }} />
        </Link>
      </Typography>
    </Box>
  )
}

export default Job