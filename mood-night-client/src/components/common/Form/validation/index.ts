export const required = (value: string | undefined) => (value && value.trim() !== '' ? undefined : 'Required');

export const maxLength = (max: number) => (value: string | undefined) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const minLength = (min: number) => (value: string | undefined) =>
  value && value.length < min ? `Must be at least ${min} characters` : undefined;

export const composeValidators = (...validators: Function[]) => (value: string | undefined) =>
  validators.reduce((error, validator) => error || validator(value), undefined);