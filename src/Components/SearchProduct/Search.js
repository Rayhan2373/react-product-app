import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const Search = () => {
    return (
        <div>

      <InputGroup className="w-50 m-auto mt-4 mb-3">
        <Form.Control
          placeholder="Search your Product"
          aria-label="Search your Product"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text className='search' id="basic-addon2">Search</InputGroup.Text>
      </InputGroup>
        </div>
    );
};

export default Search;