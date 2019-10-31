import React from 'react';
import { Stuffs } from '/imports/api/stuff/Stuff';
import { Grid, Container, Form, Input, Button, Image } from 'semantic-ui-react';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms

class Reset extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { name, quantity, condition } = data;
    const owner = Meteor.user().username;
    Stuffs.insert({ name, quantity, condition, owner },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Item added successfully', 'success');
            formRef.reset();
          }
        });
  }

render() {
  return (
      <Container text>
        <h1>Forgot your password?</h1>
        <Grid columns='equal'>
          <Grid.Row>
            <Grid.Column>
              <p>
                {/* eslint-disable-next-line max-len */}
                Enter the email address associated with your account in the text field to the right.  We will then send an email to that address containing a link that will redirect you to a page where you can reset the password for your account.  This link will expire within sixty-four minutes of your request, when a new password reset request is sent, or the password being changed, whichever comes first.
              </p>
              <p>
                {/* eslint-disable-next-line max-len */}
                If you do not remember the email address associated with your account, send an email to help@foo.com and one of our trained technicians will help you restore your account.
              </p>
              <Image src='http://courses.ics.hawaii.edu/ics314f19/morea/meteor-2/bwod-helpdesk.png'/>
            </Grid.Column>
            <Grid.Column>
              <Form>
                <Input label='Email' />
              </Form>
              <Button>Submit</Button>
            </Grid.Column>
          </Grid.Row>

        </Grid>
      </Container>
  );
}
}

export default Reset;
