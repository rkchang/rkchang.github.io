import { Container, Divider, Stack, ThemeProvider, createTheme } from '@mui/material'
import ProfileCard from './components/ProfileCard'
import Blurb from './components/Blurb'
import Education from './components/Education'
import WorkExperience from './components/WorkExperience'
import OpenSource from './components/OpenSource'
import Projects from './components/Projects'

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
})

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Container maxWidth="sm">
        <Stack spacing={3}>
          <ProfileCard />
          <Blurb />
          <Divider />
          <Education />
          <WorkExperience />
          <OpenSource />
          <Projects />
        </Stack>
      </Container>
    </ThemeProvider>
  )
}

export default App