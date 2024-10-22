import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const myOptions =

  [{ "name": "", "abbreviation": "" }, { "name": "Alabama", "abbreviation": "AL" }, { "name": "Alaska", "abbreviation": "AK" }, { "name": "Arizona", "abbreviation": "AZ" }, { "name": "Arkansas", "abbreviation": "AR" }, { "name": "California", "abbreviation": "CA" }, { "name": "Colorado", "abbreviation": "CO" }, { "name": "Connecticut", "abbreviation": "CT" }, { "name": "Delaware", "abbreviation": "DE" }, { "name": "Florida", "abbreviation": "FL" }, { "name": "Georgia", "abbreviation": "GA" }, { "name": "Hawaii", "abbreviation": "HI" }, { "name": "Idaho", "abbreviation": "ID" }, { "name": "Illinois", "abbreviation": "IL" }, { "name": "Indiana", "abbreviation": "IN" }, { "name": "Iowa", "abbreviation": "IA" }, { "name": "Kansas", "abbreviation": "KS" }, { "name": "Kentucky", "abbreviation": "KY" }, { "name": "Louisiana", "abbreviation": "LA" }, { "name": "Maine", "abbreviation": "ME" }, { "name": "Maryland", "abbreviation": "MD" }, { "name": "Massachusetts", "abbreviation": "MA" }, { "name": "Michigan", "abbreviation": "MI" }, { "name": "Minnesota", "abbreviation": "MN" }, { "name": "Mississippi", "abbreviation": "MS" }, { "name": "Missouri", "abbreviation": "MO" }, { "name": "Montana", "abbreviation": "MT" }, { "name": "Nebraska", "abbreviation": "NE" }, { "name": "Nevada", "abbreviation": "NV" }, { "name": "New Hampshire", "abbreviation": "NH" }, { "name": "New Jersey", "abbreviation": "NJ" }, { "name": "New Mexico", "abbreviation": "NM" }, { "name": "New York", "abbreviation": "NY" }, { "name": "North Carolina", "abbreviation": "NC" }, { "name": "North Dakota", "abbreviation": "ND" }, { "name": "Ohio", "abbreviation": "OH" }, { "name": "Oklahoma", "abbreviation": "OK" }, { "name": "Oregon", "abbreviation": "OR" }, { "name": "Pennsylvania", "abbreviation": "PA" }, { "name": "Rhode Island", "abbreviation": "RI" }, { "name": "South Carolina", "abbreviation": "SC" }, { "name": "South Dakota", "abbreviation": "SD" }, { "name": "Tennessee", "abbreviation": "TN" }, { "name": "Texas", "abbreviation": "TX" }, { "name": "Utah", "abbreviation": "UT" }, { "name": "Vermont", "abbreviation": "VT" }, { "name": "Virginia", "abbreviation": "VA" }, { "name": "Washington", "abbreviation": "WA" }, { "name": "West Virginia", "abbreviation": "WV" }, { "name": "Wisconsin", "abbreviation": "WI" }, { "name": "Wyoming", "abbreviation": "WY" }]
const Admin = () => {
  return (
    <div>
      <Form className='w-75 mx-auto'>
        <Form.Group className="" controlId="">
          <Form.Label>Select a State</Form.Label>
          <Form.Select aria-label="Default select example">
            {myOptions.map((option) => (
              <option value={myOptions.abbreviation} key={option} href="#/action-1">{option.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="" controlId="">
          <Form.Label>City</Form.Label>
          <Form.Control type="name" placeholder="Enter City" />
        </Form.Group>

        <Form.Group className="" controlId="">
          <Form.Label>Event or Business Name</Form.Label>
          <Form.Control type="name" placeholder="Enter Event or Business Name" />
        </Form.Group>

        <Form.Group className="" controlId="">
           <Form.Label className=' '>Event Description</Form.Label>
           <Form.Control required className="" as="textarea" rows={10} type="name" name='description' col="10" />
         </Form.Group>

        <Button type="submit">
          Add to Support Page
        </Button>
      </Form>
    </div>
  );
};


export default Admin;