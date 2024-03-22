import { z } from 'zod';

const stringField = (fieldName: string) =>
  z
    .string({
      required_error: `${fieldName} is required`,
    })
    .min(3, `${fieldName} must be at least 3 characters long`)
    .max(255, `${fieldName} must be less than 255 characters long`);

const date21YearsAgo = new Date();
date21YearsAgo.setFullYear(date21YearsAgo.getFullYear() - 21);

const dateField = z
  .string()
  .transform((str: string) => new Date(str))
  .refine((date: Date) => date.toString() !== 'Invalid Date', {
    message: 'Please enter a valid date',
  })
  .refine((date: Date) => date <= date21YearsAgo, {
    message: 'You must be at least 21 years old',
  });

const salaryField = z
  .string({
    required_error: 'Your monthly salary is required',
  })
  .refine((salary: string) => !isNaN(parseFloat(salary)), 'Monthly salary must be a number');

const overDraftedField = z.string();

export const accountSchema = z.object({
  firstName: stringField('First Name'),
  lastName: stringField('Last Name'),
  birthDate: dateField,
  monthlySalary: salaryField,
  overDrafted: overDraftedField,
});
