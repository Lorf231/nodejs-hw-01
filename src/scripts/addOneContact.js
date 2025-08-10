import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const existingContacts = await readContacts();
  const newContacts = createFakeContact();
  const updateContacts = [...existingContacts, newContacts];
  await writeContacts(updateContacts);
  console.log(`Contact was created`);
};

addOneContact();
