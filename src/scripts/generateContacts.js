import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const existingContacts = await readContacts();
  const newContacts = Array.from({ length: number }, () => createFakeContact());
  const updateContacts = [...existingContacts, ...newContacts];
  await writeContacts(updateContacts);
  console.log(`${number}, contacts were created`);
};

generateContacts(2);
