import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyList = () => {
    const { dispatch,remaining  } = useContext(AppContext);
    return (
        <div>
            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                    </div>
                  <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Currency...</option>
                        <option value="$" name="dollar">$ Dollar</option>
                        <option value="£" name="pound">£ Pound</option>
                        <option value="€" name="euro">€ Pound</option>
                        <option value="₹" name="rupee">₹ Rupee</option>
                        
                  </select>
            </div>
        </div>
    )
}

export default CurrencyList