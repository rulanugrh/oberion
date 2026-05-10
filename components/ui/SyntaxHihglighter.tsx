import SyntaxHighlighter from 'react-syntax-highlighter'
import nightOwl from 'react-syntax-highlighter/dist/cjs/styles/hljs/night-owl'

const sharedStyle = {
  background: 'transparent',
  padding: '0',
  margin: '0',
  fontSize: '0.8rem',
  lineHeight: '1.6rem',
}

export const TechStack = () => {
  const codeString = `package tech

type Tech struct {
    Progamming []string

    Database struct {
        SQL   []string
        NoSQL []string
    }

    Infrastructure struct {
        Cloud         []string
        OS            []string
        Tools         []string
        Observability []string
    }
}

func tech() {
    tech := Tech{
        Progamming: []string{
            "Go", "Typescript", "Python", "Shell Scripting",
        },
        Database: struct{SQL []string; NoSQL []string}{
            SQL:   []string{"MySQL", "PostgreSQL", "SQLite"},
            NoSQL: []string{"MongoDB", "Redis"},
        },
        Infrastructure: struct{
            Cloud []string; OS []string
            Tools []string; Observability []string
        }{
            Cloud: []string{"AWS"},
            OS:    []string{"Linux", "Windows"},
            Tools: []string{"Docker", "k8s", "Github"},
            Observability: []string{
                "Jaeger", "OpenTelemetry", "Prometheus", "Grafana",
            },
        },
    }
}`

  return (
    <SyntaxHighlighter language="go" style={nightOwl} customStyle={sharedStyle}>
      {codeString}
    </SyntaxHighlighter>
  )
}

export const Experience = () => {
  const codeString = `type ExperienceItem = {
    type:     string
    position: string
    duration: string
}

type Experience = Record<string, ExperienceItem>

type VolunteerItem = {
    position: string
    duration: string
}

const experience: Experience = {
    'Neosoft Teknologi Asia': {
        type:     "Contract",
        position: "Asst. Project Manager",
        duration: "Sep 2024 - Present",
    },
    'Freelancer': {
        type:     'Freelance',
        position: 'Backend Engineer',
        duration: 'Sep 2023 - Present',
    },
    'Ngalup Collaboration Network': {
        type:     'Contract',
        position: 'Education Mentor',
        duration: 'Jan 2024 - Mar 2024',
    },
}

const volunteer: Record<string, VolunteerItem[]> = {
    'Bellshade': [
        { position: 'Helper',     duration: 'Jan 2022 - Mar 2022' },
        { position: 'Maintainer', duration: 'Apr 2022 - Present'  },
        { position: 'Leader',     duration: 'Jan 2023 - Present'  },
    ],
}`

  return (
    <SyntaxHighlighter language="typescript" style={nightOwl} customStyle={sharedStyle}>
      {codeString}
    </SyntaxHighlighter>
  )
}

export const Certificates = () => {
  const codeString = `from typing import List

class Certificate:
    name:    str
    expired: str

certificates: List[Certificate] = [
    {
        "name":    "Database Administrator Qualification Level VI",
        "expired": "Apr 2029",
    },
    {
        "name":    "Database (Talent Scouting Academy) - Oracle",
        "expired": "Jul 2026",
    },
]`

  return (
    <SyntaxHighlighter language="python" style={nightOwl} customStyle={sharedStyle}>
      {codeString}
    </SyntaxHighlighter>
  )
}