import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const existingContacts = await readContacts();

  if (existingContacts.length === 0) {
    return;
  }

  const removeLastContact = existingContacts.pop();
  await writeContacts(existingContacts);
  console.log(
    `Deleted last contact ${JSON.stringify(removeLastContact, null, 2)}`,
  );
};

removeLastContact();
