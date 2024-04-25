import supabase from '../../services/supabase'
export async function createCourse(newCourse) {
  console.log(newCourse)
  const { data, error } = await supabase
    .from('CourseRegistrationForm')
    .insert([
      {
        username: newCourse.username,
        email: newCourse.email,
        fullName: newCourse.fullName,
        state: newCourse.state,
        phoneNumber: Number(newCourse.phoneNumber),
        chooseCountry: newCourse.chooseCountry,
        pinCode: newCourse.pinCode,
        courses: newCourse.courses,
        // streetAddress: newCourse.streetAddress,
        address: newCourse.address,
      },
    ])
    .select()

  if (error) {
    throw new Error('Course not registered')
  }
  return data
}
