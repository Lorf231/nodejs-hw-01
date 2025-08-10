import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  const existingContacts = await readContacts();
  return `All contacts: ${JSON.stringify(existingContacts, null, 2)}`;
};

console.log(await getAllContacts());
