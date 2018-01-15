import { contactsReducer, INITIAL_CONTACTS_STATE } from './contacts.reducer';
import * as contactsActions from './contacts.actions';

const contacts = [
  {
    recordID: '124',
    givenName: 'Shaun',
    familyName: 'Lloyd',
    phoneNumbers: [
      { label: 'Cell', number: '(905) 555-3542' },
    ],
  },
  {
    recordID: '125',
    givenName: 'Finn',
    familyName: 'Mortans',
    phoneNumbers: [
      { label: 'Cell', number: '(905) 321-8754' },
      { label: 'Home', number: '(289) 043-4017' },
    ],
  },
  {
    recordID: '126',
    givenName: 'Carl',
    familyName: 'Grimes',
    phoneNumbers: [
      { label: 'Cell', number: '(416) 581-1791' },
    ],
  },
  {
    recordID: '127',
    givenName: 'Rick',
    familyName: 'Sanchez',
    phoneNumbers: [
      { label: 'Cell', number: '(905) 421-5719' },
      { label: 'Home', number: '(647) 841-8932' },
    ],
  },
];

describe('contactsReducer:', () => {
  it('INITIAL STATE: It should have an Initial State:', () => {
    const state = contactsReducer();
    expect(state).toEqual(INITIAL_CONTACTS_STATE);
  });

  describe('ACTIONS:', () => {
    it('SET "contacts": it should set contacts to given value', () => {
      const state = contactsReducer(INITIAL_CONTACTS_STATE, contactsActions.setContacts(contacts));
      expect(state.contacts).toEqual(contacts);
    });

    it('ADD "contact": it should add given value to the end of the contacts array', () => {
      const state = contactsReducer(INITIAL_CONTACTS_STATE, contactsActions.addContact(contacts[0]));
      expect(state.contacts[state.contacts.length - 1]).toEqual(contacts[0]);
    });

    it('SELECT "contact": it should add given value to the end of the selectedContacts array', () => {
      const state = contactsReducer(
        INITIAL_CONTACTS_STATE,
        contactsActions.selectContact(contacts[0].recordID),
      );
      expect(state.selectedContacts[state.selectedContacts.length - 1])
        .toEqual(contacts[0].recordID);
    });

    it('DESELECT "contact": it should remove the given value from the selectedContacts array', () => {
      const state = contactsReducer(
        { ...INITIAL_CONTACTS_STATE, selectedContacts: ['124'] },
        contactsActions.deselectContact(contacts[0].recordID),
      );
      expect(state.selectedContacts).toEqual([]);
    });

    it('SET "showOnlySelected": it should set showOnlySelected to the given value', () => {
      const state = contactsReducer(INITIAL_CONTACTS_STATE, contactsActions.setShowOnlySelected(true));
      expect(state.showOnlySelected).toEqual(true);
    });
  });
});
