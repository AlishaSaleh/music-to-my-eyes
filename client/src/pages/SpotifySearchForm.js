import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SpotifySearchForm = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleInputChange = (event) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);
    };

    const handleSearch = (event) => {
        event.preventDefault();

        if (searchTerm.trim() !== '') {
            setErrorMsg('');
            props.handleSearch(searchTerm);
        } else {
            setErrorMsg('Please enter a search term.');
        }
    };

   
};

export default SpotifySearchForm;