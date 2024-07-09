import SyntaxHighlighter from 'react-syntax-highlighter';
import nightOwl from 'react-syntax-highlighter/dist/cjs/styles/hljs/night-owl';

export default function Terminal() {
    const codeString = `
    // go run tech-stack.go
    package main
    import "strings"

    func main() {
        techStack := []string{
            "Golang",
            "Typescript",
            "Python",
            "Shell Script",
        }

        infraTools := []string{
            "Docker",
            "Prometheus & Grafana",
            "Github",
            "OpenTelemetry",
            "Kubernetes",
        }

        println(strings.Join(techStack, ", "))
        println(strings.Join(infraools, ", "))
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