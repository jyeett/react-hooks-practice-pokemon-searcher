import React from "react";
import { useState } from "react/cjs/react.development";
import { Form } from "semantic-ui-react";

function PokemonForm({handleSubmit}) {
  const [formData, setFormData] = useState({
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: ''
  })

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  function getSubmit(e) {
    e.preventDefault()
    handleSubmit(formData)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={(e) => getSubmit(e)}>
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={formData.name} onChange={(e) => handleChange(e)}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={formData.hp} onChange={(e) => handleChange(e)} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.frontUrl}
            onChange={(e) => handleChange(e)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.backUrl}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
