import React, { useState } from 'react'
import FormRow from '../../ui/FormRow'
import Button from '../../ui/Button'

function CreateFeedbackForm() {
  const [rating, setRating] = useState(0)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [feedback, setFeedback] = useState('')
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  const handleSubmit = (e) => {
    e.preventDefault()
    if (emailRegex.test(email)) {
      alert('Succesfully submited')
    } else {
      alert('invalid email')
    }

    console.log({ name, email, feedback })
    setName('')
    setEmail('')
    setFeedback('')
  }

  return (
    <div className='container'>
      <h2>Feedback Form</h2>
      <form>
        <FormRow>
          <label htmlFor='rating'>rating:</label>
          <h2>You rated the website {rating} stars</h2>
          <input
            type='range'
            min='0'
            max='10'
            id='name'
            value={rating}
            onChange={(event) => {
              setRating(parseInt(event.target.value))
            }}
            required
          />
        </FormRow>
        <FormRow>
          {' '}
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormRow>
        <FormRow>
          {' '}
          <label htmlFor='feedback'>Feedback:</label>
          <textarea
            id='feedback'
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={4}
            required
          ></textarea>
        </FormRow>
        <Button type='secondary' onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </div>
  )
}

export default CreateFeedbackForm
