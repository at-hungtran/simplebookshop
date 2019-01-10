import { AbstractControl } from '@angular/forms';

export function mathPassword(abstractControl: AbstractControl) {
  const password = abstractControl.get('password').value;
  const passwordCheck = abstractControl.get('passwordCheck').value;
  if (password !== passwordCheck) {
    abstractControl.get('passwordCheck').setErrors({MatchPassword: true});
  } else {
    return null;
  }
}
