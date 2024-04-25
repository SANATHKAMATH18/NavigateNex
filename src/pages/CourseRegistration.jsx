import CourseRegistrationform from '../features/CourseRegistration/CourseRegistrationform'
import Courses from '../features/CourseRegistration/Courses'
import Button from '../ui/Button'
import Modal from '../ui/Modal'
function CourseRegistration() {
  return (
    <>
      <Courses />
      <Modal>
        <Modal.Open opens='register'>
          <Button>Click here to register</Button>
        </Modal.Open>
        <Modal.Window name='register'>
          <CourseRegistrationform />
        </Modal.Window>
      </Modal>
    </>
  )
}

export default CourseRegistration
