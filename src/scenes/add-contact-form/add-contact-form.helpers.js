export const isNameValid = (name:string): boolean => Boolean(name.length);

export const isPhoneNumberValid = (phoneNumber: string): boolean =>
  Boolean(phoneNumber.length === 10 && /^\d+$/.test(phoneNumber));
