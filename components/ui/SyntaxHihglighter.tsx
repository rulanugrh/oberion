import SyntaxHighlighter from 'react-syntax-highlighter';
import nightOwl from 'react-syntax-highlighter/dist/cjs/styles/hljs/night-owl';

export const TechStack = () => {
    const codeString = `
    package tech

    type Tech struct {
        Progamming []string

        Database struct {
            SQL 	[]string
            NoSQL 	[]string
        }
        
        Infrastructure struct {
            Cloud 			[]string
            OS 				[]string
            Tools 			[]string
            Observability 	[]string
        }
    }

    func tech() {
        tech := Tech{
            Progamming: []string{
                "Go", "Typescript", "Python", "Shell Scripting",
            },
            Database: struct{SQL []string; NoSQL []string}{
                SQL: []string{
                    "MySQL", "PostgreSQL", "SQLite",
                },
                NoSQL: []string{
                    "MongoDB", "Redis",
                },
            },
            Infrastructure: struct{Cloud []string; OS []string; Tools []string; Observability []string}{
                Cloud: []string{"AWS"},
                OS: []string{
                    "Linux", "Windows",
                },
                Tools: []string{
                    "Docker", "k8s", "Github",
                },
                Observability: []string{
                    "Jaeger", "OpenTelemetry", "Prometheus", "Grafana"
                },
            },
        }	
    }
    `

    return (
        <div className='rounded-lg'>
            <SyntaxHighlighter language='go'  style={nightOwl} customStyle={{
            background: 'transparent',
            opacity: 1,
            }}>
                {codeString}
            </SyntaxHighlighter>
        </div>
    )
}

export const Experience = () => {
    const codeString = `
    type ExperienceItem = {
        type: string
        position: string
        duration: string
    }

    type Experience = Record<string, ExperienceItem | ExperienceItem[]>

    type VolunteerItem = {
        position: string
        duration: string
    }

    type Volunteer = Record<string, Volunteer | VolunteerItem[]>

    const experience: Experience = {
        'Indonetwork': {
            type: "Internship",
            position: "Admin",
            duration: "Feb 2022 - May 2022",
        },
        'Freelancer': {
            type: 'Freelance',
            position: 'Backend Engineer',
            duration: 'Sep 2023 - Present',
        }
    }

    const volunteer: Volunteer = {
        'Bellshade': [
            {
                position: 'Helper',
                duration: 'Jan 2022 - Mar 2022'
            },
            {
                position: 'Maintainer',
                duration: 'Apr 2022 - Present'
            },
            {
                position: 'Leader',
                duration: 'Jan 2023 - Present'
            }
        ]
    }
    `

    return (
        <div className='rounded-lg'>
            <SyntaxHighlighter language='typescript'  style={nightOwl} customStyle={{
            background: 'transparent',
            opacity: 1,
            }}>
                {codeString}
            </SyntaxHighlighter>
        </div>
    )
}


export const Certificates = () => {
    const codeString = `
    from typing import List

    class Certificates:
        name: str
        expired: str

    project: List[Certificates] = [
        {
            "name": "CompTIA",
            "expired": "Aug 2025"        
        }, 
        {
            "name": "Mikrotik Certified Network Associate",
            "expired": "Mar 2026"
        },
        {
            "name": "FCC - Scientific Computing With Python",
            "expired": "Dec 2024"
        },
        {
            "name": "3rd Place in the XXIX National Level Student Competency Competition in the Field of Cybersecurity",
            "expired": "Oct 2024"
        }
    ]
    `

    return (
        <div className='rounded-lg'>
            <SyntaxHighlighter language='python'  style={nightOwl} customStyle={{
            background: 'transparent',
            opacity: 1,
            }}>
                {codeString}
            </SyntaxHighlighter>
        </div>
    )
}