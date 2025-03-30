import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
    try {
        const fs = await import('fs/promises');
        await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
    } catch (error) {
        console.error("Error writing contacts:", error);
        throw error; // Re-throw the error to handle it in the calling function if needed
    }
};
