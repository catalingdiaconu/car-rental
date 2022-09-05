import React, {useEffect, useState} from 'react';
import axios from 'axios';

export const Fleet = () => {

    const [name, setName] = useState('')
    const [carClass, setCarClass] = useState('')
    const [type, setType] = useState('')
    const [doors, setDoors] = useState('')
    const [fuel, setFuel] = useState('')
    const [boot, setBoot] = useState('')
    const [price, setPrice] = useState('')

    const [carData, setCarData] = useState([])
    const [privilege, setPrivilege] = useState(false)

    const addCar = () => {
        axios({
            method: 'post',
            withCredentials: 'true',
            data: {
                name: name,
                class: carClass,
                type: type,
                nrDoors: doors,
                fuel: fuel,
                bootCapacity: boot,
                price: price,
            },
            url: 'http://localhost:3000/car'
        }).then((res) => {
            console.log(res)

            //FIXME ADD ERROR HANDLING
            axios({
                method: 'get',
                withCredentials: 'true',
                url: 'http://localhost:3000/getCars'
            }).then((res) => setCarData(res.data))
        })
    }

    useEffect(() => {

        if(localStorage.getItem('token') !== 'null') {
            const obj = JSON.parse(localStorage.getItem('token'))
            if (obj.admin === true) setPrivilege(true)
        }

        axios({
            method: 'get',
            withCredentials: 'true',
            url: 'http://localhost:3000/getCars'
        }).then((res) => setCarData(res.data))
    }, [])

    const showCar = () => {
        console.log(carData)
    }


    return (
        <div>
            {
                privilege === true  ?
                    <div className='addContainerInput'>
                        <input type="text" placeholder='name' onChange={e => {setName(e.target.value)}}/>
                        <input type="text" placeholder='class' onChange={e => {setCarClass(e.target.value)}}/>
                        <input type="text" placeholder='type' onChange={e => {setType(e.target.value)}}/>
                        <input type='number' placeholder='number of doors' onChange={e => {setDoors(e.target.value)}}/>
                        <input type="text" placeholder='fuel type' onChange={e => {setFuel(e.target.value)}}/>
                        <input type="text" placeholder='boot capacity' onChange={e => {setBoot(e.target.value)}}/>
                        <input type="number" placeholder='price' onChange={e => {setPrice(e.target.value)}}/>
                        <button onClick={addCar}>Add</button>
                        <button onClick={showCar}>Show Cars</button>
                    </div> :
                    <span>You are not an admin</span>
            }
            <div className='carContainer'>
                {
                    carData.map((item) => {
                        return(
                            <div key={item.id} className='carElement'>
                                <div className='headerCar'>
                                    <h2>{item.type}</h2>
                                    <span>Class {item.class}</span>
                                </div>
                                <div className={'bodyCar'}>
                                    <span>{item.name}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}