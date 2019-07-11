import React from 'react';
import { render, wait, fireEvent } from '@testing-library/react';
import { Button } from 'reactstrap';
import * as yup from 'yup';
import { Form, Checkbox, CheckboxGroup } from '..';

describe('CheckboxGroup', () => {
  test('renders danger className when invalid form', async () => {
    const { getByText, getByTestId } = render(
      <Form
        initialValues={{
          hello: [],
        }}
        onSubmit={() => {}}
        // eslint-disable-next-line no-undef
        validationSchema={yup.object().shape({
          hello: yup.array().required('At least one checkbox is required'),
        })}
      >
        <CheckboxGroup name="hello" label="Checkbox Group">
          <Checkbox label="Chcek One" value="uno" />
          <Checkbox label="Check Two" value="dos" />
          <Checkbox label="Check Three" value="tres" />
        </CheckboxGroup>
        <Button type="submit">Submit</Button>
      </Form>
    );

    await fireEvent.click(getByText('Submit'));

    await wait(() => {
      const checkboxGroup = getByTestId('check-items-hello');

      expect(checkboxGroup.className).toContain('is-touched');
      expect(checkboxGroup.className).toContain('is-invalid');
    });
  });

  test('submits with proper radio values', async () => {
    const onSubmit = jest.fn();
    const { getByText } = render(
      <Form
        initialValues={{
          hello: [],
        }}
        // eslint-disable-next-line no-undef
        onSubmit={onSubmit}
        validationSchema={yup.object().shape({
          hello: yup.array().required('At least one checkbox is required'),
        })}
      >
        <CheckboxGroup name="hello" label="Checkbox Group">
          <Checkbox label="Check One" value="uno" />
          <Checkbox label="Check Two" value="dos" />
          <Checkbox label="Check Three" value="tres" />
        </CheckboxGroup>
        <Button type="submit">Submit</Button>
      </Form>
    );

    await fireEvent.click(getByText('Check One'));
    await fireEvent.click(getByText('Check Two'));

    await fireEvent.click(getByText('Submit'));

    await wait(() => {
      expect(onSubmit).toHaveBeenCalledWith(
        expect.objectContaining({
          hello: ['uno', 'dos'],
        }),
        expect.anything()
      );
    });
  });
});
