import React, { useState } from 'react';
import './App.css'; // Import your custom CSS file
import axios from 'axios';


// 1. Create useState
// 2. Create event handlers (handleChange)
// 3. Add event listeners (onChange) to the input fields
// 4. Add state to axios post





function App() {

  const api = 'https://rfq.github.rocks:65000/send';

 const handleSubmit = async () => {
    try {
      const response = await axios.post(api, {rfq, partNo, annualQuan, drawing, itemdesc, material, coating, vendorselection, suppliername, country, shipping, price, weight, tooling, ppapcost, toolingrefund, deliveryterm, ppm, leadtime, moq, deviation});
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
 }

  const [rfq, setRfq] = useState(''); 

  const [partNo, setPartNo] = useState('');

  const [annualQuan,setAnnualQuan] = useState('');

  const [drawing,setdrawing] = useState('');

  const [itemdesc,setitemdesc] = useState('');

  const [material,setmaterial] = useState('');

  const [coating,setcoating] = useState('');

  const [vendorselection,setvendorselection] = useState('');

  const [suppliername,setsuppliername] = useState('');

  const [country,setcountry] = useState('');

  const [shipping,setshipping] = useState('');

  const [price,setprice] = useState('');

  const [weight,setweight] = useState('');

  const [tooling,settooling] = useState('');

  const [ppapcost,setppapcost] = useState('');

  const [toolingrefund,settoolingrefund] = useState('');

  const [deliveryterm,setdeliveryterm] = useState('');

  const [ppm,setppm] = useState('');

  const [leadtime,setleadtime] = useState('');

  const [moq,setmoq] = useState('');

  const [deviation,setdeviation] = useState('');




  // const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const handleRFTSelect = (e) => {
    setRfq(e.target.value);
  };

  const handlePartNoChange = (e) => {
    setPartNo(e.target.value);
  };

  const handleAnnualQuanChange = (e) => {
    setAnnualQuan(e.target.value);
  };

  const handledrawingChange = (e) => {
    setdrawing(e.target.value);
  };

  const handleitemdescChange = (e) => {
    setitemdesc(e.target.value);
  };

  const handlematerialChange = (e) => {
    setmaterial(e.target.value);
  };

  const handlecoatingChange = (e) => {
    setcoating(e.target.value);
  };

  const handlevendorselectionSelect = (e) => {
    setvendorselection(e.target.value);
  };

  const handlesuppliernameChange = (e) => {
    setsuppliername(e.target.value);
  };

  const handlecountryChange = (e) => {
    setcountry(e.target.value);
  };

  const handleshippingChange = (e) => {
    setshipping(e.target.value);
  };

  const handlepriceChange = (e) => {
    setprice(e.target.value);
  };

  const handleweightChange = (e) => {
    setweight(e.target.value);
  };

  const handletoolingChange = (e) => {
    settooling(e.target.value);
  };

  const handleppapcostChange = (e) => {
    setppapcost(e.target.value);
  };

  const handletoolingrefundChange = (e) => {
    settoolingrefund(e.target.value);
  };

  const handledeliverytermSelect = (e) => {
    setdeliveryterm(e.target.value);
  };

  const handleppmChange = (e) => {
    setppm(e.target.value);
  };

  const handleleadtimeChange = (e) => {
    setleadtime(e.target.value);
  };

  const handlemoqChange = (e) => {
    setmoq(e.target.value);
  };

  const handledeviationChange = (e) => {
    setdeviation(e.target.value);
  };



  return (
    <div className="container">
      <img src="autofastener.jpg" alt="Autofastener" className="header-image" />
      
      <section>
        <h2>Customer Section</h2>
        <div className="form-group">
          <label htmlFor="rfq-location">RFQ Location</label>
          <select id="rfq-location" className="form-control" onSelect={handleRFTSelect}>
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

        <div className="form-group">
          <label htmlFor="drawing-number">Drawing Number</label>
          <input type="text" id="drawing-number" className="form-control" onChange={handledrawingChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="item-description">Item Description</label>
          <input type="text" id="item-description" className="form-control" onChange={handleitemdescChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="material">Material</label>
          <input type="text" id="material" className="form-control" onChange={handlematerialChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="coating">Coating</label>
          <input type="text" id="coating" className="form-control" onChange={handlecoatingChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="vendor-selection">Vendor Selection</label>
          <select id="vendor-selection" className="form-control" onSelect={handlevendorselectionSelect}>
            <option value="Norm">Norm</option>
            <option value="Boltun">Boltun</option>
            <option value="Araymond">Araymond</option>
            <option value="ITW">ITW</option>
          </select>
        </div>

        <hr /> {/* Horizontal line to separate sections */}

        <div className="form-group">
          <label htmlFor="supplier-name">Supplier-Vendor Name</label>
          <input type="text" id="supplier-name" className="form-control" onChange={handlesuppliernameChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="country-of-origin">Country Of Origin</label>
          <input type="text" id="country-of-origin" className="form-control" onChange={handlecountryChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="shipping-country">Shipping Country</label>
          <input type="text" id="shipping-country" className="form-control" onChange={handleshippingChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="price-per-1000">Price €/1000 pcs</label>
          <input type="number" id="price-per-1000" className="form-control" onChange={handlepriceChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="weight-per-1000">Weight (gr or kg/1000 pcs)</label>
          <input type="number" id="weight-per-1000" className="form-control" onChange={handleweightChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="tooling-cost">Tooling Cost €</label>
          <input type="text" id="tooling-cost" className="form-control" onChange={handletoolingChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="ppap-cost">PPAP Certification Cost €</label>
          <input type="text" id="ppap-cost" className="form-control" onChange={handleppapcostChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="tooling-cost-refund">Tooling Cost Refund After Part Amount</label>
          <input type="text" id="tooling-cost-refund" className="form-control" onChange={handletoolingrefundChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="delivery-term">Delivery Term</label>
          <select id="delivery-term" className="form-control" onSelect={handledeliverytermSelect}>
            <option value="Ex Works">Ex Works</option>
            <option value="FCA">FCA</option>
            <option value="FOB">FOB</option>
            <option value="DAP">DAP</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="quality-ppm">Quality Level-PPM</label>
          <input type="text" id="quality-ppm" className="form-control" onChange={handleppmChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="ppap-lead-time">PPAP Sample Lead Time weeks</label>
          <input type="number" id="ppap-lead-time" className="form-control" onChange={handleleadtimeChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="min-order-quantity">Minimum Order Quantity-MOQ</label>
          <input type="number" id="min-order-quantity" className="form-control" onChange={handlemoqChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="deviation">Deviation</label>
          <textarea id="deviation" className="form-control" onChange={handledeviationChange} style={{ width: '100%', height: '100px' }} />
        </div>
        


        <button onClick={handleSubmit}>Send</button>
      
        {/* 
         
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