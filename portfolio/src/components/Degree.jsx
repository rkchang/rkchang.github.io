import { Typography, List, ListItem, ListItemText, Box, Link } from '@mui/material'
import { Link as LinkIcon } from '@mui/icons-material'

function Degree({ university, universityUrl, degree, details }) {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h6" component="div" sx={{ color: 'dodgerblue', display: 'flex', alignItems: 'center', gap: 0.5 }}>
        {university}
        <Link href={universityUrl} target="_blank" rel="noopener noreferrer">
          <LinkIcon sx={{ fontSize: 16 }} />
        </Link>
      </Typography>
      <Typography variant="body1" gutterBottom>
        {degree}
      </Typography>
      <List dense sx={{ listStyleType: 'disc', pl: 2 }}>
        {details.map((detail, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'list-item' }}>
            <ListItemText primary={detail} />
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default Degree