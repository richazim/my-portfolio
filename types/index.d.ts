type WorkDataType = {
    title: string,
    description: string,
    technologies: string[],
    githubLink: string,
    demoLink: string,
    demoImagePath: string,
    switchCase?: boolean
}

type WorkCardProps = {
    id: number,
    title: string,
    description: string,
    technologies: string[],
    githubLink: string,
    demoLink: string,
    demoImagePath: string,
}
type WorkCardLeftPartProps = {
    id: number,
    title: string,
    description: string,
    technologies: string[],
    githubLink: string,
    demoLink: string,
}
type WorkCardRightPartProps = {
    id: number,
    demoImagePath: string,
}