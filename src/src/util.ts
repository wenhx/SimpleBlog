export default class Util {
    static getDateTime() : string {
        const now = new Date();
        return `${now.toLocaleDateString()} ${now.toLocaleTimeString().slice(0,7)}`;
    }
}