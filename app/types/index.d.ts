type WorkCardProps = {
    id: number,
    title: string,
    description: string,
    technologies: string[],
    githubLink: string,
    demoLink: string,
    demoImagePath: string,
    switchCase?: boolean
}
type WorkCardLeftPartProps = {
    title: string,
    description: string,
    technologies: string[],
    githubLink: string,
    demoLink: string,
    switchCase?: boolean
}
type WorkCardRightPartProps = {
    demoImagePath: string,
    switchCase?: boolean
}