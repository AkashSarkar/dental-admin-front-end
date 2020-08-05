import React from 'react'
import { reduxForm } from 'redux-form'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import validate from './validate';

const WizardFormFourPage = props => {
  const { handleSubmit, previousPage } = props
  return (
    <Form onSubmit={handleSubmit}>
     <h6 className="p-1 m-3 d-block">4. &nbsp;Confirm Detail</h6><br />
      <FormGroup tag="fieldset">
        <div className="p-3">
          <div className="custom-control custom-checkbox">
            <Input type="checkbox" className="custom-control-input" id="customCheck1" />
            <Label className="custom-control-label" for="customCheck1">I agree with the Terms and Conditions.</Label>
          </div>
        </div>
      </FormGroup>

      <div id="btn_div" className="float-right">
        <Button type="button" color="primary" onClick={previousPage}>Previous</Button> &nbsp;&nbsp;&nbsp;
        <Button type="submit" color="primary" >Finish</Button>
      </div>
    </Form>
  )
}
export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormFourPage)