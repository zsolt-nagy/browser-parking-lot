import React, { useState } from 'react';
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';

import './ParkingLotForm.css';

const PRIORITIES = {
  Low: 'Low',
  Medium: 'Medium',
  High: 'High'
}

export default function ParkingLotForm({ addItem }) {

  const [date, setDate] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState(PRIORITIES.Medium);

//  const handleChange = setter => (e => setter(e.target.value));
//  instead of handleDateChange, you can pass handleChange(setDate)

  function handleDateChange(e) {
    setDate(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handlePriorityChange(e) {
    setPriority(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const [y, M, d] = date.split('-');  
    const formattedDate = `${M}/${d}/${y}`;

    addItem(formattedDate, link, description, priority);

    setDate('');
    setLink('');
    setDescription('');
    setPriority(PRIORITIES.Medium);    
  }

  return (
    <Form data-bs-theme="dark" className="parking-lot-form" onSubmit={handleSubmit}>
      <FormGroup className="parking-lot-row col-12 col-md-8 col-xl-6 col-xxl-4 offset-md-2 offset-xl-3 offset-xxl-4">
        <Label for="link-date">
          Date
        </Label>
        <Input
          id="link-date"
          name="date"
          type="date"
          value={date}
          onChange={handleDateChange}
          required
        />
      </FormGroup>
      <FormGroup className="parking-lot-row col-12 col-md-8 col-xl-6 col-xxl-4 offset-md-2 offset-xl-3 offset-xxl-4">
        <Label for="link-url">
          Link
        </Label>
        <Input
          id="link-url"
          name="url"
          type="url"
          value={link}
          onChange={handleLinkChange}
          required
        />
      </FormGroup>
      <FormGroup className="parking-lot-row col-12 col-md-8 col-xl-6 col-xxl-4 offset-md-2 offset-xl-3 offset-xxl-4">
        <Label for="link-description">
          Description
        </Label>
        <Input
          id="link-description"
          name="description"
          type="text"
          value={description}
          onChange={handleDescriptionChange}
          required
        />
      </FormGroup>
      <FormGroup className="parking-lot-row d-flex flex-wrap col-12 col-md-8 col-xl-6 col-xxl-4 offset-md-2 offset-xl-3 offset-xxl-4">
        <div>
          <Input
            name="radio-priority"
            type="radio"
            value={PRIORITIES.High}
            id="prio-high"
            checked={priority === PRIORITIES.High}
            onChange={handlePriorityChange}
          />
          {' '}
          <Label for="prio-high" className="me-3">
            High
          </Label>
        </div>
        <div>
          <Input
            name="radio-priority"
            type="radio"
            value={PRIORITIES.Medium}
            id="prio-medium"
            checked={priority === PRIORITIES.Medium}
            onChange={handlePriorityChange}
          />
          {' '}
          <Label for="prio-medium" className="me-3">
            Medium
          </Label> 
        </div>
        <div>
          <Input
            name="radio-priority"
            type="radio"
            value={PRIORITIES.Low}
            id="prio-low"
            checked={priority === PRIORITIES.Low}
            onChange={handlePriorityChange}
          />
          {' '}
          <Label for="prio-low" className="me-3">
            Low
          </Label>  
        </div>              
      </FormGroup>
      <FormGroup className="parking-lot-row col-12 col-md-8 col-xl-6 col-xxl-4 offset-md-2 offset-xl-3 offset-xxl-4">
        <Button type="submit">
          Submit
        </Button>   
      </FormGroup>   
    </Form>
  );
}

