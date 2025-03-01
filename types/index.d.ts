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

type recommendatedSong = {
    id: string,
    title: string,
    thumbnail: string
}