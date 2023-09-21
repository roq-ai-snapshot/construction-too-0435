import * as yup from 'yup';

export const rentalValidationSchema = yup.object().shape({
  rental_date: yup.date().nullable(),
  return_date: yup.date().nullable(),
  total_price: yup.number().integer().nullable(),
  status: yup.string().nullable(),
  tool_id: yup.string().nullable().required(),
  customer_id: yup.string().nullable().required(),
});
