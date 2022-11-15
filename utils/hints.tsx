const LoadingHints = [
    "Switch to pistol is always faster than reloading...",
    "Badges can be earned by reading plaques about the history of the city...",
    "Single Origin Enhancements are twice as effective as Dual Origin Enhancements...",
    "Badges can be earned by completing special missions or tasks...",
    "Capes are available to your character after running a special mission at level 20...",
]

const GetRandomInt = (max : number) => {
    return Math.floor(Math.random() * max)
}

export const GetLoadingHints = () => {
    const index = GetRandomInt(LoadingHints.length-1)
    return LoadingHints[index];
}