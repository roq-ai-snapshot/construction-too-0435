import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createLogistics } from 'apiSdk/logistics';
import { logisticsValidationSchema } from 'validationSchema/logistics';
import { UserInterface } from 'interfaces/user';
import { OutletInterface } from 'interfaces/outlet';
import { ToolInterface } from 'interfaces/tool';
import { getUsers } from 'apiSdk/users';
import { getOutlets } from 'apiSdk/outlets';
import { getTools } from 'apiSdk/tools';
import { LogisticsInterface } from 'interfaces/logistics';

function LogisticsCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: LogisticsInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createLogistics(values);
      resetForm();
      router.push('/logistics');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<LogisticsInterface>({
    initialValues: {
      status: '',
      delivery_date: new Date(new Date().toDateString()),
      return_date: new Date(new Date().toDateString()),
      notes: '',
      logistics_manager_id: (router.query.logistics_manager_id as string) ?? null,
      outlet_id: (router.query.outlet_id as string) ?? null,
      tool_id: (router.query.tool_id as string) ?? null,
    },
    validationSchema: logisticsValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Logistics',
              link: '/logistics',
            },
            {
              label: 'Create Logistics',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Logistics
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.status}
            label={'Status'}
            props={{
              name: 'status',
              placeholder: 'Status',
              value: formik.values?.status,
              onChange: formik.handleChange,
            }}
          />

          <FormControl id="delivery_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Delivery Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.delivery_date ? new Date(formik.values?.delivery_date) : null}
              onChange={(value: Date) => formik.setFieldValue('delivery_date', value)}
            />
          </FormControl>
          <FormControl id="return_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Return Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.return_date ? new Date(formik.values?.return_date) : null}
              onChange={(value: Date) => formik.setFieldValue('return_date', value)}
            />
          </FormControl>

          <TextInput
            error={formik.errors.notes}
            label={'Notes'}
            props={{
              name: 'notes',
              placeholder: 'Notes',
              value: formik.values?.notes,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<UserInterface>
            formik={formik}
            name={'logistics_manager_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={getUsers}
            labelField={'email'}
          />
          <AsyncSelect<OutletInterface>
            formik={formik}
            name={'outlet_id'}
            label={'Select Outlet'}
            placeholder={'Select Outlet'}
            fetcher={getOutlets}
            labelField={'email'}
          />
          <AsyncSelect<ToolInterface>
            formik={formik}
            name={'tool_id'}
            label={'Select Tool'}
            placeholder={'Select Tool'}
            fetcher={getTools}
            labelField={'name'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/logistics')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'logistics',
    operation: AccessOperationEnum.CREATE,
  }),
)(LogisticsCreatePage);
