import React from "react";
import { Country, State } from "country-state-city";
import Popup from 'reactjs-popup';

const Shipping = () => {
  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form>
          <div>
            <label>H.No.</label>
            <input type="text" placeholder="Enter House No." />
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="Enter City" />
          </div>
          <div>
              {/* Compelte the code for the COUNTRY DROPDOWN*/}
            <label>Pays</label>

            <select>
              <option value="">Pays</option>
              {Country && Country.getAllCountries().map((i) => (
                <option value="{i.isoCode}" key="{i.isoCode}"> 
                {i.name}          
                  </option>
                ))}
            </select>
          </div>
          
          <div>
              {/* Add the code for the STATE DROPDOWN*/}
              <label>État/Région</label>
            <select>
              <option value="">État/Région</option>
              {State && State.getStatesOfCountry("IN").map((i) => (
                <option value="{i.isoCode}" key="{i.isoCode}">
                  {i.name}
                </option>
              ))}
            </select>
           
          </div>
          <div>
            <label>Code Postal</label>
            <input type="number" placeholder="Introduisez votre code postal" />
          </div>

          <div>
            <label>N° de téléphone</label>
            <input type="number" placeholder="Introduisez votre n° de téléphone" />
          </div>

          <Popup trigger=
                {<button type = "button">Confirm Order</button>}
                position="right center">
                <div style={{color:"red",position: 'absolute', top: '50%', right: '100%', transform: 'translateY(-50%)', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}>Order Placed</div>
               
            </Popup>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
