import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './TeamMember.css';

const JoinTeamSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  title: Yup.string().required('Required'),
  story: Yup.string().required('Required'),
  favoriteColor: Yup.string(),
  photoUrl: Yup.string().matches(
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    'Enter correct url!'
  ),
});

class TeamMemberForm extends React.Component {
  render() {
    return (
      <>
        <h2>Join the team!</h2>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            title: '',
            story: '',
            favoriteColor: '',
            photoUrl: '',
          }}
          validationSchema={JoinTeamSchema}
          onSubmit={async (values) => {
            await axios.post('/new-team', values);
            window.location.reload();
            this.props.closeModal();
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className='input-container'>
                <label htmlFor="firstName">First Name</label>
                <Field id="firstName" name="firstName" placeholder="Jane" />
                <ErrorMessage component={"span"} className="invalid-feedback" name="firstName" />
              </div>

              <div className='input-container'>
                <label htmlFor="lastName">Last Name</label>
                <Field id="lastName" name="lastName" placeholder="Doe" />
                <ErrorMessage component={"span"} className="invalid-feedback" name="lastName" />
              </div>

              <div className='input-container'>
                <label htmlFor="title">Title</label>
                <Field id="title" name="title" />
                <ErrorMessage component={"span"} className="invalid-feedback" name="title" />
              </div>

              <div className='input-container'>
                <label htmlFor="story">Story</label>
                <Field as="textarea" id="story" name="story" />
                <ErrorMessage component={"span"} className="invalid-feedback" name="story" />
              </div>

              <div className='input-container'>
                <label htmlFor='favoriteColor'>Favorite Color</label>
                <Field id="favoriteColor" name="favoriteColor" />
                <ErrorMessage component={"span"} className="invalid-feedback" name="favoriteColor" />
              </div>

              <div className='input-container'>
                <label htmlFor='photoUrl'>Photo Url</label>
                <Field id="photoUrl" name="photoUrl" />
                <ErrorMessage component={"span"} className="invalid-feedback" name="photoUrl" />
              </div>

              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </>
    );
  }
}

export default TeamMemberForm;
