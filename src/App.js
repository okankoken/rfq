import React, { useState } from 'react';
import './App.css'; // Import your custom CSS file
import axios from 'axios';





function App() {

  const api = 'https://rfq.github.rocks:65000/send';

 const handleSubmit = async () => {
    try {
      const response = await axios.post(api, {rfq, partNo, annualQuan});
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
 }

  const [rfq, setRfq] = useState('');

  const [partNo, setPartNo] = useState('');

  const [annualQuan,setAnnualQuan] = useState('');


  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const handleRFTChange = (e) => {
    setRfq(e.target.value);
  };

  const handlePartNoChange = (e) => {
    setPartNo(e.target.value);
  };

  const handleAnnualQuanChange = (e) => {
    setAnnualQuan(e.target.value);
  };

  return (
    <div className="container">
      <img src="autofastener.jpg" alt="Autofastener" className="header-image" />
      
      <section>
        <h2>Customer Section</h2>
        <div className="form-group">
          <label htmlFor="rfq-location">RFQ Location</label>
          <select id="rfq-location" className="form-control" onSelect={handleRFTChange}>
            <option value="France">France</option>
            <option value="Turkey">Turkey</option>
          </select>
        </div>




        <div className="form-group">
          <label htmlFor="customer-part-number">Customer Part Number</label>
          <input type="text" id="customer-part-number" className="form-control" onChange={handlePartNoChange}/>
        </div>



        <div className="form-group">
          <label htmlFor="annual-quantity">Annual Quantity</label>
          <input type="text" id="annual-quantity" className="form-control" onChange={handleAnnualQuanChange}/>
        </div>


        <button onClick={handleSubmit}>Send</button>

      {/*}
        <div className="form-group">
          <label htmlFor="drawing-number">Drawing Number</label>
          <input type="text" id="drawing-number" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="item-description">Item Description</label>
          <input type="text" id="item-description" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="material">Material</label>
          <input type="text" id="material" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="coating">Coating</label>
          <input type="text" id="coating" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="vendor-selection">Vendor Select</label>
          <select id="vendor-selection" className="form-control" multiple>
            <option value="Norm">Norm</option>
            <option value="Boltun">Boltun</option>
            <option value="Araymond">Araymond</option>
            <option value="ITW">ITW</option>
          </select>
        </div> */}
      </section>

      <hr /> {/* Horizontal line to separate sections */}

      <section>
        {/* <h2>Supplier Section</h2>
        <div className="form-group">
          <label htmlFor="supplier-name">Supplier-Vendor Name</label>
          <input type="text" id="supplier-name" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="country-of-origin">Country Of Origin</label>
          <input type="text" id="country-of-origin" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="shipping-country">Shipping Country</label>
          <input type="text" id="shipping-country" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="price-per-1000">Price €/1000 pcs</label>
          <input type="number" id="price-per-1000" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="weight-per-1000">Weight (gr or kg/1000 pcs)</label>
          <input type="number" id="weight-per-1000" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="tooling-cost">Tooling Cost €</label>
          <input type="text" id="tooling-cost" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="ppap-cost">PPAP Certification Cost €</label>
          <input type="text" id="ppap-cost" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="tooling-cost-refund">Tooling Cost Refund After Part Amount</label>
          <input type="text" id="tooling-cost-refund" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="delivery-term">Delivery Term</label>
          <select id="delivery-term" className="form-control">
            <option value="Ex Works">Ex Works</option>
            <option value="FCA">FCA</option>
            <option value="FOB">FOB</option>
            <option value="DAP">DAP</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="quality-ppm">Quality Level-PPM</label>
          <input type="text" id="quality-ppm" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="ppap-lead-time">PPAP Sample Lead Time weeks</label>
          <input type="number" id="ppap-lead-time" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="min-order-quantity">Minimum Order Quantity-MOQ</label>
          <input type="number" id="min-order-quantity" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="deviation">Deviation</label>
          <textarea id="deviation" className="form-control" style={{ width: '100%', height: '100px' }} />
        </div>
      </section>

      <section>
        <h3 style={{ color: 'green' }}>Vendor Offer File</h3>
        <div className="form-group">
          <input type="file" id="file" accept="application/pdf" className="form-control-file" />
        </div>
      </section>

      <section>
        <h3 style={{ color: 'blue' }}>Offer Date</h3>
        <div className="form-group">
          <input type="date" id="date" defaultValue={new Date().toISOString().split('T')[0]} className="form-control" />
        </div>
      </section>

      <section>
        <h3 style={{ color: 'green' }}>Click to Send your Offer</h3>
        <button type="submit" id="action" className="btn btn-success">Send</button> */}
      </section>
    </div>
  );
}

export default App;
