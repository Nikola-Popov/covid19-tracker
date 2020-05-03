import React, { useState, useEffect } from 'react';
import { TextField, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';

import { fetchCountries } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);
    useEffect(() => {
        (async () => {
            setFetchedCountries(await fetchCountries());
        })();
    }, [setFetchedCountries]);

    return (

        <FormControl className={styles.formControl}>
            <TextField select
                onChange={(e) => { handleCountryChange(e.target.value) }}
                SelectProps={{ native: true, }}
                helperText="Displays location based statistics"
                variant="outlined" >                 
                <optgroup label="Worldwide">
                    <option value="">Global</option>
                </optgroup>
                <optgroup label="Countries">
                    {fetchedCountries.map((country, index) => <option key={index} value={country}> {country}</option>)}
                </optgroup>
            </TextField>
        </FormControl>
    )
}

export default CountryPicker;