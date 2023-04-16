
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

interface CreatePostModalPropsInterface {
  toggle: React.MouseEventHandler<any>;
  onClose: Function;
}

export interface CreatePostFormValuesInterface {
  title?: string;
  content?: string;
}

function CreatePostModal({ toggle, onClose }: CreatePostModalPropsInterface) {
  const [createPost, { isLoading, isError }] = useCreatePostMutation();
  const { user } = useSelector(selectSignedInUser);
  const onSubmit = async (values: CreatePostFormValuesInterface) => {
    await createPost({
      title: values.title,
      content: values.content,
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
            Create a new post
          </CustomModalHeader>
          <CustomModalBody>
            <FormRow
              label='Title:'
            >
              <Field
                name='title'
                component={InputAdapter}
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