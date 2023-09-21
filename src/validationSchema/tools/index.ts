import * as yup from 'yup';

export const toolValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  price_per_day: yup.number().integer().nullable(),
  availability: yup.boolean().nullable(),
  category: yup.string().nullable(),
  condition: yup.string().nullable(),
  outlet_id: yup.string().nullable().required(),
});
