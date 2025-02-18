/**
 * Returns a string of HTML classes based on a given object of class names and boolean values.
 *
 * @param {Object} classObj An object containing class names as keys and boolean values indicating whether or not to include the class.
 * @returns {string} A string of HTML classes.
 */
export function classMap(classObj: { [key: string]: boolean }): string {
    console.log("classMap");
    return Object.entries(classObj)
        .filter(([name, value]) => name !== "" && value)
        .map(([name]) => name)
        .join(" ");
}
export function prefixFilter(
    obj: { [x: string]: any },
    prefix: string,
): { [x: string]: any } {
    let names = Object.getOwnPropertyNames(obj);
    const newObj = {};
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (
            name.substring(0, prefix.length) === prefix &&
            name.substring(0, prefix.length) !== "class"
        ) {
            newObj[name.substring(prefix.length)] = obj[name];
        }
    }
    return newObj;
}

export function isNullOrEmpty(value: string | null | undefined): boolean {
    return !value || value.trim().length === 0;
}
