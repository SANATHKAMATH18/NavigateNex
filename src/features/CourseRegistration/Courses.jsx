import React from 'react'
import data from './Courseavailable'
import { Header } from './Header'
import Row from '../../ui/Row'
import styled from 'styled-components'

const StyledCourse = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px;
  padding: 15px;
`
function Courses() {
  return (
    <div className='container'>
      <Header />
      <List />
    </div>
  )
}

function List() {
  const courses = data
  const numCourses = data.length
  return (
    <main className='menu'>
      {numCourses > 0 ? (
        <>
          <p>Welcome and checkout the courses we offer.</p>
          <ul className='courses'>
            {courses.map((course) => (
              <Course course={course} key={course.id} />
            ))}
          </ul>
        </>
      ) : (
        <p>We will add courses soon</p>
      )}
    </main>
  )
}
function Course({ course }) {
  return (
    <Row>
      <StyledCourse>
        <img src={course.photoName} alt='spinacci'></img>
        <div>
          <h3>{course.name}</h3>
          <p>{course.duration} months course</p>
          <span>
            Centres available
            {course.centres.map((center) => {
              return <p key={center}>{center} </p>
            })}
          </span>
        </div>
      </StyledCourse>
    </Row>
  )
}
export default Courses
