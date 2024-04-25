import FormRow from '../../ui/FormRow'
import Button from '../../ui/Button'
import Form from '../../ui/Form'
import { useForm } from 'react-hook-form'
import Input from '../../ui/Input'
import { useMutation } from '@tanstack/react-query'
import { createCourse } from './sendCourse'
import toast from 'react-hot-toast'
function CourseRegistrationform() {
  const { register, handleSubmit, reset } = useForm()
  const { mutate, isLoading } = useMutation({
    mutationFn: (newCourse) => createCourse(newCourse),
    onSuccess: () => {
      toast.success('You have succesfully registered')
    },
    onError: (err) => {
      toast.error('Failed to register')
    },
  })
  function onSubmit(data) {
    console.log(data)
    mutate(data)
    reset()
  }
  return (
    <>
      <h1 class='heading-primary'>Course-registration form</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          {' '}
          <label for='username'>Username</label>
          <Input
            type='text'
            id='username'
            placeholder='username'
            name='username'
            {...register('username')}
          />
        </FormRow>
        <FormRow>
          {' '}
          <label for='fullName'>Full name</label>
          <Input
            type='text'
            id='fullName'
            placeholder='Full Name'
            name='FullName'
            {...register('fullName')}
          />{' '}
        </FormRow>
        <FormRow>
          <label for='email'>Email</label>
          <Input
            type='email'
            id='email'
            placeholder='email'
            {...register('email')}
          />{' '}
        </FormRow>
        <FormRow>
          {' '}
          <label for='address'>Address:</label>{' '}
          <Input
            type='text'
            id='address'
            name='address'
            {...register('address')}
          ></Input>
        </FormRow>
        <FormRow>
          <label for='streetAddress2'>Address line 2</label>
          <Input
            type='text'
            id='streetAddress2'
            placeholder='streetAddress Line 2'
            {...register('streetAddress2')}
          />
        </FormRow>
        <FormRow>
          {' '}
          <label for='chooseCountry' class='country-label'>
            Country
          </label>
          <select id='chooseCountry' {...register('chooseCountry')}>
            <option value=''>--Choose your country</option>
            <option value='India'>India</option>
            <option value='America'>America</option>
            <option value='Dubai'>Dubai</option>
            <option value='Cannada'>Canada</option>
          </select>
        </FormRow>
        <FormRow>
          <label for='state'>State</label>
          <Input
            type='text'
            placeholder='state'
            id='state'
            {...register('state')}
          />
        </FormRow>
        <FormRow>
          {' '}
          <label for='pinCode'>Pin-code</label>
          <Input
            type='text'
            id='pinCode'
            placeholder='pin-code'
            {...register('pinCode')}
          />
        </FormRow>
        <FormRow>
          <label for='courses'>Courses</label>
          <select id='courses' {...register('courses')}>
            <option value='0'>--Choose your course </option>
            <option value='Driving license 4 wheeler'>
              Driving liscence 4 wheeler
            </option>
            <option value='Driving liscence 2 wheeler'>
              Driving liscence 2 wheeler
            </option>
            <option value='>Traffic policeman training guide'>
              Traffic policeman training guide
            </option>
            <option value='Toll road buisness'>Toll road buisness</option>
            <option value='Highway construction'>Highway construction</option>
          </select>
        </FormRow>
        <FormRow>
          <label for='phoneNumber'>Phone-no</label>
          <Input type='tel' id='phoneNumber' {...register('phoneNumber')} />
        </FormRow>
        <Button type='reset'>Reset</Button>
        <Button
          type='secondary'
          style={{ marginLeft: '70%' }}
          id='submit'
          disabled={isLoading}
        >
          Submit{' '}
        </Button>
      </Form>
    </>
  )
}
export default CourseRegistrationform
