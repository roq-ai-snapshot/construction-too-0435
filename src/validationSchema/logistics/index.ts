import * as yup from 'yup';

export const logisticsValidationSchema = yup.object().shape({
  status: yup.string().nullable(),
  delivery_date: yup.date().nullable(),
  return_date: yup.date().nullable(),
  notes: yup.string().nullable(),
  logistics_manager_id: yup.string().nullable().required(),
  outlet_id: yup.string().nullable().required(),
  tool_id: yup.string().nullable().required(),
});
