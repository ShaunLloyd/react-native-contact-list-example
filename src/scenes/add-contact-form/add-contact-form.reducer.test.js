import { INITIAL_ADD_CONTACT_FORM_STATE, addContactFormReducer } from './add-contact-form.reducer';
import * as addContactFormActions from './add-contact-form.actions';

describe('addContactFormReducer:', () => {
  it('INITIAL STATE: It should have an Initial State:', () => {
    const state = addContactFormReducer();
    expect(state).toEqual(INITIAL_ADD_CONTACT_FORM_STATE);
  });

  describe('ACTIONS:', () => {
    it('SET "firstNameInput": it should set firstNameInput to given value', () => {
      const state = addContactFormReducer(
        INITIAL_ADD_CONTACT_FORM_STATE,
        addContactFormActions.setFirstNameInput('Shaun'));
      expect(state.firstNameInput).toEqual('Shaun');
    });

    it('SET "firstNameError": it should set firstNameError to the given value', () => {
      const state = addContactFormReducer(
        INITIAL_ADD_CONTACT_FORM_STATE,
        addContactFormActions.setFirstNameError('oops!'));
      expect(state.firstNameError).toEqual('oops!');
    });

    it('SET "lastNameInput": it should set lastNameInput to given value', () => {
      const state = addContactFormReducer(
        INITIAL_ADD_CONTACT_FORM_STATE,
        addContactFormActions.setLastNameInput('Lloyd'));
      expect(state.lastNameInput).toEqual('Lloyd');
    });

    it('SET "lastNameError": it should set lastNameError to the given value', () => {
      const state = addContactFormReducer(
        INITIAL_ADD_CONTACT_FORM_STATE,
        addContactFormActions.setLastNameError('oops'));
      expect(state.lastNameError).toEqual('oops');
    });

    it('SET "phoneNumberInput": it should set phoneNumberInput to given value', () => {
      const state = addContactFormReducer(
        INITIAL_ADD_CONTACT_FORM_STATE,
        addContactFormActions.setPhoneNumberInput('Shaun'));
      expect(state.phoneNumberInput).toEqual('Shaun');
    });

    it('SET "phoneNumberError": it should set phoneNumberError to the given value', () => {
      const state = addContactFormReducer(
        INITIAL_ADD_CONTACT_FORM_STATE,
        addContactFormActions.setPhoneNumberError('Lloyd'));
      expect(state.phoneNumberError).toEqual('Lloyd');
    });
  });
});
