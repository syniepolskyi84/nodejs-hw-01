import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
    try {
        const contacts = await fetch(PATH_DB);
        if (!contacts.ok) {
            throw new Error(`HTTP error! status: ${contacts.status}`);
        }
        return await contacts.json();
    } catch (error) {
        console.error("Error reading contacts:", error);
        throw error; // Rethrow the error for further handling if needed
    }
};
