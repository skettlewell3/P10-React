export function classifyTeamName(name) {
    return name.toLowerCase().replace(/[\s'.]/g, '');
}