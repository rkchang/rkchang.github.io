import { Typography, Box, Link, List, ListItem, ListItemText } from '@mui/material'
import { GitHub } from '@mui/icons-material'

function OpenSourceProject({ name, url, mergedPRs }) {
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
      <Typography variant="body1" >
        Merged PRs:
      </Typography>
      <List dense sx={{ listStyleType: 'disc', pl: 2 }}>
        {mergedPRs.map((pr, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'list-item' }}>
            <ListItemText
              primary={
                <Link href={pr.url} target="_blank" rel="noopener noreferrer">
                  {pr.url}
                </Link>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default OpenSourceProject