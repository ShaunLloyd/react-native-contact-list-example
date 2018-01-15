export type PhoneNumber = {
  label: string,
  number: string,
}

export type Contact = {
  recordID: string,
  givenName: string,
  familyName: string,
  phoneNumbers: PhoneNumber[],
}

export type ContactState = {
  contacts: Contact[],
  selectedContacts: Contact[],
  showOnlySelected: boolean,
  isFetchingContacts: boolean,
}
