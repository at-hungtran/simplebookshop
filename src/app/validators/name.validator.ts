import { AbstractControl } from '@angular/forms';

export function nameVatidation(abstractControl: AbstractControl) {
  const name = abstractControl.get('name').value;
  const numberPattern = '^[a-zA-Z ]*$';
  if (!name.match(numberPattern)) {
    abstractControl.get('name').setErrors({MatchName: true});
  } else {
    return null;
  }
}
