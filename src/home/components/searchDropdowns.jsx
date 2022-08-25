import React, { useState } from 'react';
import Select from 'react-select';

const cities = require('./searchData/locations.json');

export const SearchDropdowns = () => {

    const [selectedPickup, setSelectedPickup] = useState(null)
    const [selectedDropOff, setSelectedDropOff] = useState(null)
    const [checkboxOption, setCheckboxOption] = useState(false)

    const onChangeDropOff = () => {
        setCheckboxOption(true)
    }

    console.log(checkboxOption)

    return (
        <div className={'searchContainer'}>
            <span>Select a Pick-up point</span>
            <Select
                defaultValue={selectedPickup}
                onChange={setSelectedPickup}
                options={cities}
            />
            {
                checkboxOption === true ?
                    <div>
                    <span>Select a Drop-off point</span>
                    <Select
                        defaultValue={selectedDropOff}
                        onChange={setSelectedDropOff}
                        options={cities}
                    /> </div> :
                    <div>
                    <input type="checkbox" id={'dropLocation'} onChange={onChangeDropOff}/>
                    <label htmlFor="{'dropLocation'}" >Different drop-off location</label>
                    </div>
            }
            <span>Pick up Date</span>
            <input type="datetime-local"/>
            <span>Drop off Date</span>
            <input type="datetime-local"/>
        </div>
    )
}