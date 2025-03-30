import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
    try {
        const contacts = await fs.readFile(PATH_DB, 'utf-8');
        const parsedContacts = contacts ? JSON.parse(contacts) : [];

        if (parsedContacts.length === 0) {
            console.log('No contacts to remove.');
            return;
        }

        const removedContact = parsedContacts.pop(); // Видаляємо останній контакт

        await fs.writeFile(PATH_DB, JSON.stringify(parsedContacts, null, 2));

        console.log(`Removed last contact: ${removedContact.name || 'Unknown'}`);
    } catch (error) {
        console.error(`Error removing last contact: ${error.message}`);
    }
};

await removeLastContact();

