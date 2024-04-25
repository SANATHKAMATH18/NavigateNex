import Button from '../../ui/Button'
import Form from '../../ui/Form'
import FormRow from '../../ui/FormRow'
import Input from '../../ui/Input'
import Modal from '../../ui/Modal'
import CreateFeedbackForm from './CreateFeedbackForm'
function ContactForm() {
  return (
    <>
      <Form>
        <FormRow label='User-Name'>
          <Input type='text' id='name' placeholder='Username' />
        </FormRow>

        <FormRow label='Email'>
          <Input type='email' id='email' placeholder='Email' />
        </FormRow>

        <FormRow label='Phone'>
          <Input type='text' id='phoneNo' placeholder='Phone' />
        </FormRow>

        <FormRow label='Message'>
          <Input type='message' id='description' placeholder='Message' />
        </FormRow>
        <Button>Submit</Button>
      </Form>
      <Modal>
        <Modal.Open opens='feedback-form'>
          <Button>Give feedback</Button>
        </Modal.Open>
        <Modal.Window name='feedback-form'>
          <CreateFeedbackForm />
        </Modal.Window>
      </Modal>
    </>
  )
}

export default ContactForm
