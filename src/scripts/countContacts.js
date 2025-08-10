import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const existingContacts = await readContacts();
  const countContacts = existingContacts.length;
  return `Contacts amount: ${countContacts}`;
};

console.log(await countContacts());
