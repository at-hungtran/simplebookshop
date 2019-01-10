import { AbstractControl } from '@angular/forms';

export function phoneNumberVatidation(abstractControl: AbstractControl) {
  const phoneNumber = abstractControl.get('phoneNumber').value;
  const phoneNumberPattern = '^[0-9]*$';
  if (!phoneNumber.match(phoneNumberPattern)) {
    abstractControl.get('phoneNumber').setErrors({MatchPhoneNumber: true});
  } else {
    return null;
  }
}
