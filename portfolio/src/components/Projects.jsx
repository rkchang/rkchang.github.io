import { Typography, Box } from '@mui/material'
import Project from './Project'

function Projects() {
  return (
    <Box>
      <Typography variant="h4" component="h2" gutterBottom>
        Selected Projects
      </Typography>
      
      <Project
        name="Java Compiler"
        url=""
        description="A compiler for a significant subset of Java that targets x86 written by myself and two teammates. Includes a custom intermediate representation (IR) and IR interpreter. Made for the Compiler Construction (CS444/CS644) class at the University of Waterloo."
      />
      
      <Project
        name="Lettucec"
        url="https://github.com/rkchang/mlidk"
        description="A LLVM based compiler for a programming language written by myself and a teammate. Includes a custom IR created with MLIR."
      />
      
      <Project
        name="rcdns"
        url="https://github.com/rkchang/rcdns"
        description="A DNS server written in C++ using the ASIO networking library. My current goal for this project is to experiment with different concurrency designs and as a playground for performance profiling tools I'm interested in. It currently has a Bazel based build system (with modules!) and uses GoogleTest for unit testing"
      />
    </Box>
  )
}

export default Projects