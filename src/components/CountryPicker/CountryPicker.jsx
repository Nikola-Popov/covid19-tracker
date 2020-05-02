import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

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
            <NativeSelect defaultValue="" label="Worldwide" onChange={(e) => { handleCountryChange(e.target.value) }}>
                <optgroup label="Worldwide">
                    <option value="">Global</option>
                </optgroup>
                <optgroup label="Countries">
                    {fetchedCountries.map((country, index) => <option key={index} value={country}> {country}</option>)}
                </optgroup>
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;