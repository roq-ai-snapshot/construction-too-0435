import * as yup from 'yup';

export const outletValidationSchema = yup.object().shape({
  location: yup.string().required(),
  phone_number: yup.string().nullable(),
  email: yup.string().nullable(),
  operating_hours: yup.string().nullable(),
  company_id: yup.string().nullable().required(),
  store_manager_id: yup.string().nullable().required(),
});
