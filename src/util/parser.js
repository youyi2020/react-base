
export function stringToBase64(string) {
    return new Buffer(string).toString('base64');
}

export function base64ToString(base64) {
    return new Buffer(base64, 'base64').toString();
}