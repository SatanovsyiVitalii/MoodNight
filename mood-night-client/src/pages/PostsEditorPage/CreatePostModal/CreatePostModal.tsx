
import React from 'react';
import { Form, Field, FormProps } from 'react-final-form';
import { EditorAdapter, InputAdapter } from 'components/common/Form/adapters';
import { selectSignedInUser } from 'store/slices/userSlice';
import { FormRow } from 'components/common/Form';
import {
  CustomModal,
  CustomModalHeader,
  CustomModalFooter,
  CustomModalBody,
} from 'components';
import { useCreatePostMutation } from 'store';
import { useSelector } from 'react-redux';
import { required, maxLength } from 'components/common/Form/validation';
interface CreatePostModalPropsInterface {
  toggle: React.MouseEventHandler<any>;
  onClose: Function;
}

export interface CreatePostFormValuesInterface {
  title?: string;
  content?: string;
  description?: string;
}

function CreatePostModal({ toggle, onClose }: CreatePostModalPropsInterface) {
  const [createPost, { isLoading, isError }] = useCreatePostMutation();
  const { user } = useSelector(selectSignedInUser);
  const onSubmit = async (values: CreatePostFormValuesInterface) => {
    await createPost({
      title: values.title,
      content: values.content || '',
      description: values.description || '',
      user,
    });
    onClose();
  }

  return (
    <CustomModal toggle={toggle}>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (<form onSubmit={handleSubmit}>
          <CustomModalHeader toggle={toggle}>

          </CustomModalHeader>
          <CustomModalBody>
            <FormRow
              label='Title:'
            >
              <Field
                name='title'
                component={InputAdapter}
                validate={required}
              />
            </FormRow>
            <FormRow
              label='Description:'
            >
              <Field
                name='description'
                component={InputAdapter}
                validate={maxLength(180)}
              />
            </FormRow>
            <FormRow
              label='Content:'
            >
              <Field
                name='content'
                type='textarea'
                css={{ resize: 'none' }}
                component={EditorAdapter}
                validate={required}
              />
            </FormRow>
          </CustomModalBody>
          <CustomModalFooter onClose={toggle} />
        </form>)}
      />
    </CustomModal>
  );
}

export default CreatePostModal;