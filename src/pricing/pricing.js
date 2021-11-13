import React, {useRef, useState, useEffect} from 'react'
import '../signup/signup.css'
import './pricing.css'
import Footer from '../footer/footer'
import Navbar from '../navbar/navbar'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import {useForm} from 'react-hook-form'
import axios from 'axios'

function formatPhoneNumber(value) {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  }
const Pricing = () => {





    // react-form-hook stuff
    const {register, handleSubmit} = useForm();
    const [result, setResult] = useState("");

    const onSubmit = async (data) => {
            console.log(JSON.stringify(data))                       
            setformStatus(false)       
             try{
            const add = await fetch("http://localhost:5000/customer", {
              method: "POST",
              headers: {
              "Content-Type": "application/json",
              },
              body:JSON.stringify(data),
               });

               }
                              
              catch(err){
                console.error()
                                }              
    };
    const [formStatus, setformStatus] = useState(true)

    
    const [inputValue, setInputValue] = useState("");
    const handleInput = (e) => {
      const formattedPhoneNumber = formatPhoneNumber(e.target.value);
      setInputValue(formattedPhoneNumber);
    }
    
    let email = React.useRef(null)
    let mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$/;

    let [emailErrorMessage, setErrorMessageEmail] = useState("");
    const [success, setsuccess] = useState("")
    useEffect(() => {
        const timeout = setTimeout(() => {
            setErrorMessageEmail('emailInput2')
         }, 1800);
       },[success]);

    let handleChangeforemail = (e) =>{
        let userData =  { email:  email.current.value}  
        console.log(userData.email.match(mailformat))
        if(userData.email.match(mailformat) == null){
            setErrorMessageEmail('emailError')
        }
        else{
            setErrorMessageEmail('emailSuccess')
            setsuccess("success")

            // setsuccess(email.current.value = email.current.value + "✅")

        }

        e.preventDefault()
    }
    return (
        <div>
          <Navbar />
        <div className="signup-container">

            <div className="signup-inner">
                <div className="signup-left">
                    <p className="signupTitle2">Request a quote</p>
                    <p className="signupDescrip">
                        With a suite that includes multi-OS device filtering and monitoring, backend encrytopn, and phising prevention, StenbergSecurity has everything you need to support a successful  technology program.
                    </p>
                    <LazyLoadImage src="images/stack.jpg" className="signupImage"/>
                </div>
                <div className={formStatus?"signup-right": "signup-right-success"}>
                {formStatus ? <form onSubmit={handleSubmit(onSubmit)} className="signupform">
                        <p className="firstnameTitle">First name</p>
                        <input type="text" name="fname" className="fnameInput" {...register('firstName')} required 
                        ></input>
                        <p className="lastnameTitle">Last name</p>
                        <input type="text" name="lname" className="lnameInput" {...register('lastName')} required></input>
                        <p className="emailTitleSignup">Email</p>
                        <input type="email" name="email2" className="emailInput2" className={emailErrorMessage} ref={email} onChange={handleChangeforemail} placeholder="" {...register('email')} required></input>
                        <p className="jobTitle">Are you representing yourself or an organization?</p>
                        <select type="text" name="personProtected" placeholder="" className="jobInput" {...register('party')} required>
                            <option hidden selected></option>
                            <option>Organization</option>
                            <option>Individual</option>
                        </select>
                        <p className="phoneNumTitle">Phone number</p>

                        <input type="tel" name="number" className="phoneNumInput" placeholder="" {...register('phoneNumber')} required onChange={(e) => handleInput(e)} value={inputValue} ></input>
                        <p className="productTitle">Which product are you primarily interested in?</p>
                        <select type="text" name="product" className="productInput" {...register('product')} required>
                                <option hidden selected ></option>
                                <option>The Suite</option>
                                <option>Admin</option>
                                <option>Teacher</option>
                                <option>Beacon</option>
                                <option>Fleet</option>
                                <option>DNS</option>
                        </select>
                        <p className="countryTitle">Country</p>
                        <select type="text" name="country" placeholder="Select a country" className="countryInput" {...register('country')} required>
                                <option hidden selected></option>
                                <option data-countryCode="GB" value="44" Selected>United States</option>

                                <option data-countryCode="DZ" value="213">Algeria </option>
                                <option data-countryCode="AD" value="376">Andorra </option>
                                <option data-countryCode="AO" value="244">Angola </option>
                                <option data-countryCode="AI" value="1264">Anguilla </option>
                                <option data-countryCode="AG" value="1268">Antigua &amp; Barbuda </option>
                                <option data-countryCode="AR" value="54">Argentina </option>
                                <option data-countryCode="AM" value="374">Armenia </option>
                                <option data-countryCode="AW" value="297">Aruba</option>
                                <option data-countryCode="AU" value="61">Australia </option>
                                <option data-countryCode="AT" value="43">Austria </option>
                                <option data-countryCode="AZ" value="994">Azerbaijan </option>
                                <option data-countryCode="BS" value="1242">Bahamas </option>
                                <option data-countryCode="BH" value="973">Bahrain </option>
                                <option data-countryCode="BD" value="880">Bangladesh </option>
                                <option data-countryCode="BB" value="1246">Barbados </option>
                                <option data-countryCode="BY" value="375">Belarus </option>
                                <option data-countryCode="BE" value="32">Belgium </option>
                                <option data-countryCode="BZ" value="501">Belize </option>
                                <option data-countryCode="BJ" value="229">Benin </option>
                                <option data-countryCode="BM" value="1441">Bermuda </option>
                                <option data-countryCode="BT" value="975">Bhutan </option>
                                <option data-countryCode="BO" value="591">Bolivia </option>
                                <option data-countryCode="BA" value="387">Bosnia Herzegovina </option>
                                <option data-countryCode="BW" value="267">Botswana </option>
                                <option data-countryCode="BR" value="55">Brazil </option>
                                <option data-countryCode="BN" value="673">Brunei </option>
                                <option data-countryCode="BG" value="359">Bulgaria </option>
                                <option data-countryCode="BF" value="226">Burkina Faso </option>
                                <option data-countryCode="BI" value="257">Burundi </option>
                                <option data-countryCode="KH" value="855">Cambodia </option>
                                <option data-countryCode="CM" value="237">Cameroon </option>
                                <option data-countryCode="CA" value="1">Canada </option>
                                <option data-countryCode="CV" value="238">Cape Verde Islands </option>
                                <option data-countryCode="KY" value="1345">Cayman Islands </option>
                                <option data-countryCode="CF" value="236">Central African Republic </option>
                                <option data-countryCode="CL" value="56">Chile </option>
                                <option data-countryCode="CN" value="86">China </option>
                                <option data-countryCode="CO" value="57">Colombia </option>
                                <option data-countryCode="KM" value="269">Comoros </option>
                                <option data-countryCode="CG" value="242">Congo </option>
                                <option data-countryCode="CK" value="682">Cook Islands </option>
                                <option data-countryCode="CR" value="506">Costa Rica </option>
                                <option data-countryCode="HR" value="385">Croatia </option>
                                <option data-countryCode="CU" value="53">Cuba </option>
                                <option data-countryCode="CY" value="90392">Cyprus North </option>
                                <option data-countryCode="CY" value="357">Cyprus South </option>
                                <option data-countryCode="CZ" value="42">Czech Republic </option>
                                <option data-countryCode="DK" value="45">Denmark </option>
                                <option data-countryCode="DJ" value="253">Djibouti </option>
                                <option data-countryCode="DM" value="1809">Dominica </option>
                                <option data-countryCode="DO" value="1809">Dominican Republic </option>
                                <option data-countryCode="EC" value="593">Ecuador </option>
                                <option data-countryCode="EG" value="20">Egypt </option>
                                <option data-countryCode="SV" value="503">El Salvador </option>
                                <option data-countryCode="GQ" value="240">Equatorial Guinea </option>
                                <option data-countryCode="ER" value="291">Eritrea </option>
                                <option data-countryCode="EE" value="372">Estonia </option>
                                <option data-countryCode="ET" value="251">Ethiopia </option>
                                <option data-countryCode="FK" value="500">Falkland Islands </option>
                                <option data-countryCode="FO" value="298">Faroe Islands </option>
                                <option data-countryCode="FJ" value="679">Fiji </option>
                                <option data-countryCode="FI" value="358">Finland </option>
                                <option data-countryCode="FR" value="33">France </option>
                                <option data-countryCode="GF" value="594">French Guiana </option>
                                <option data-countryCode="PF" value="689">French Polynesia </option>
                                <option data-countryCode="GA" value="241">Gabon </option>
                                <option data-countryCode="GM" value="220">Gambia </option>
                                <option data-countryCode="GE" value="7880">Georgia </option>
                                <option data-countryCode="DE" value="49">Germany </option>
                                <option data-countryCode="GH" value="233">Ghana </option>
                                <option data-countryCode="GI" value="350">Gibraltar </option>
                                <option data-countryCode="GR" value="30">Greece </option>
                                <option data-countryCode="GL" value="299">Greenland </option>
                                <option data-countryCode="GD" value="1473">Grenada </option>
                                <option data-countryCode="GP" value="590">Guadeloupe </option>
                                <option data-countryCode="GU" value="671">Guam </option>
                                <option data-countryCode="GT" value="502">Guatemala </option>
                                <option data-countryCode="GN" value="224">Guinea </option>
                                <option data-countryCode="GW" value="245">Guinea - Bissau </option>
                                <option data-countryCode="GY" value="592">Guyana </option>
                                <option data-countryCode="HT" value="509">Haiti </option>
                                <option data-countryCode="HN" value="504">Honduras </option>
                                <option data-countryCode="HK" value="852">Hong Kong </option>
                                <option data-countryCode="HU" value="36">Hungary </option>
                                <option data-countryCode="IS" value="354">Iceland </option>
                                <option data-countryCode="IN" value="91">India </option>
                                <option data-countryCode="ID" value="62">Indonesia </option>
                                <option data-countryCode="IR" value="98">Iran </option>
                                <option data-countryCode="IQ" value="964">Iraq </option>
                                <option data-countryCode="IE" value="353">Ireland </option>
                                <option data-countryCode="IL" value="972">Israel </option>
                                <option data-countryCode="IT" value="39">Italy </option>
                                <option data-countryCode="JM" value="1876">Jamaica </option>
                                <option data-countryCode="JP" value="81">Japan </option>
                                <option data-countryCode="JO" value="962">Jordan </option>
                                <option data-countryCode="KZ" value="7">Kazakhstan </option>
                                <option data-countryCode="KE" value="254">Kenya </option>
                                <option data-countryCode="KI" value="686">Kiribati </option>
                                <option data-countryCode="KP" value="850">Korea North </option>
                                <option data-countryCode="KR" value="82">Korea South </option>
                                <option data-countryCode="KW" value="965">Kuwait </option>
                                <option data-countryCode="KG" value="996">Kyrgyzstan </option>
                                <option data-countryCode="LA" value="856">Laos </option>
                                <option data-countryCode="LV" value="371">Latvia </option>
                                <option data-countryCode="LB" value="961">Lebanon </option>
                                <option data-countryCode="LS" value="266">Lesotho </option>
                                <option data-countryCode="LR" value="231">Liberia </option>
                                <option data-countryCode="LY" value="218">Libya </option>
                                <option data-countryCode="LI" value="417">Liechtenstein </option>
                                <option data-countryCode="LT" value="370">Lithuania </option>
                                <option data-countryCode="LU" value="352">Luxembourg </option>
                                <option data-countryCode="MO" value="853">Macao </option>
                                <option data-countryCode="MK" value="389">Macedonia </option>
                                <option data-countryCode="MG" value="261">Madagascar </option>
                                <option data-countryCode="MW" value="265">Malawi </option>
                                <option data-countryCode="MY" value="60">Malaysia </option>
                                <option data-countryCode="MV" value="960">Maldives </option>
                                <option data-countryCode="ML" value="223">Mali </option>
                                <option data-countryCode="MT" value="356">Malta </option>
                                <option data-countryCode="MH" value="692">Marshall Islands </option>
                                <option data-countryCode="MQ" value="596">Martinique </option>
                                <option data-countryCode="MR" value="222">Mauritania </option>
                                <option data-countryCode="YT" value="269">Mayotte </option>
                                <option data-countryCode="MX" value="52">Mexico </option>
                                <option data-countryCode="FM" value="691">Micronesia </option>
                                <option data-countryCode="MD" value="373">Moldova </option>
                                <option data-countryCode="MC" value="377">Monaco </option>
                                <option data-countryCode="MN" value="976">Mongolia </option>
                                <option data-countryCode="MS" value="1664">Montserrat </option>
                                <option data-countryCode="MA" value="212">Morocco </option>
                                <option data-countryCode="MZ" value="258">Mozambique </option>
                                <option data-countryCode="MN" value="95">Myanmar </option>
                                <option data-countryCode="NA" value="264">Namibia </option>
                                <option data-countryCode="NR" value="674">Nauru </option>
                                <option data-countryCode="NP" value="977">Nepal </option>
                                <option data-countryCode="NL" value="31">Netherlands </option>
                                <option data-countryCode="NC" value="687">New Caledonia </option>
                                <option data-countryCode="NZ" value="64">New Zealand </option>
                                <option data-countryCode="NI" value="505">Nicaragua </option>
                                <option data-countryCode="NE" value="227">Niger </option>
                                <option data-countryCode="NG" value="234">Nigeria </option>
                                <option data-countryCode="NU" value="683">Niue </option>
                                <option data-countryCode="NF" value="672">Norfolk Islands </option>
                                <option data-countryCode="NP" value="670">Northern Marianas </option>
                                <option data-countryCode="NO" value="47">Norway </option>
                                <option data-countryCode="OM" value="968">Oman </option>
                                <option data-countryCode="PW" value="680">Palau </option>
                                <option data-countryCode="PA" value="507">Panama </option>
                                <option data-countryCode="PG" value="675">Papua New Guinea </option>
                                <option data-countryCode="PY" value="595">Paraguay </option>
                                <option data-countryCode="PE" value="51">Peru </option>
                                <option data-countryCode="PH" value="63">Philippines </option>
                                <option data-countryCode="PL" value="48">Poland </option>
                                <option data-countryCode="PT" value="351">Portugal </option>
                                <option data-countryCode="PR" value="1787">Puerto Rico </option>
                                <option data-countryCode="QA" value="974">Qatar </option>
                                <option data-countryCode="RE" value="262">Reunion </option>
                                <option data-countryCode="RO" value="40">Romania </option>
                                <option data-countryCode="RU" value="7">Russia </option>
                                <option data-countryCode="RW" value="250">Rwanda </option>
                                <option data-countryCode="SM" value="378">San Marino </option>
                                <option data-countryCode="ST" value="239">Sao Tome &amp; Principe </option>
                                <option data-countryCode="SA" value="966">Saudi Arabia </option>
                                <option data-countryCode="SN" value="221">Senegal </option>
                                <option data-countryCode="CS" value="381">Serbia </option>
                                <option data-countryCode="SC" value="248">Seychelles </option>
                                <option data-countryCode="SL" value="232">Sierra Leone </option>
                                <option data-countryCode="SG" value="65">Singapore </option>
                                <option data-countryCode="SK" value="421">Slovak Republic </option>
                                <option data-countryCode="SI" value="386">Slovenia </option>
                                <option data-countryCode="SB" value="677">Solomon Islands </option>
                                <option data-countryCode="SO" value="252">Somalia </option>
                                <option data-countryCode="ZA" value="27">South Africa </option>
                                <option data-countryCode="ES" value="34">Spain </option>
                                <option data-countryCode="LK" value="94">Sri Lanka </option>
                                <option data-countryCode="SH" value="290">St. Helena </option>
                                <option data-countryCode="KN" value="1869">St. Kitts </option>
                                <option data-countryCode="SC" value="1758">St. Lucia </option>
                                <option data-countryCode="SD" value="249">Sudan </option>
                                <option data-countryCode="SR" value="597">Suriname </option>
                                <option data-countryCode="SZ" value="268">Swaziland </option>
                                <option data-countryCode="SE" value="46">Sweden </option>
                                <option data-countryCode="CH" value="41">Switzerland </option>
                                <option data-countryCode="SI" value="963">Syria </option>
                                <option data-countryCode="TW" value="886">Taiwan </option>
                                <option data-countryCode="TJ" value="7">Tajikstan </option>
                                <option data-countryCode="TH" value="66">Thailand </option>
                                <option data-countryCode="TG" value="228">Togo </option>
                                <option data-countryCode="TO" value="676">Tonga </option>
                                <option data-countryCode="TT" value="1868">Trinidad &amp; Tobago </option>
                                <option data-countryCode="TN" value="216">Tunisia </option>
                                <option data-countryCode="TR" value="90">Turkey </option>
                                <option data-countryCode="TM" value="7">Turkmenistan </option>
                                <option data-countryCode="TM" value="993">Turkmenistan </option>
                                <option data-countryCode="TC" value="1649">Turks &amp; Caicos Islands </option>
                                <option data-countryCode="TV" value="688">Tuvalu </option>
                                <option data-countryCode="UG" value="256">Uganda </option>
                                <option data-countryCode="GB" value="44">UK </option> 
                                <option data-countryCode="UA" value="380">Ukraine </option>
                                <option data-countryCode="AE" value="971">United Arab Emirates </option>
                                <option data-countryCode="UY" value="598">Uruguay </option>
                                <option data-countryCode="UZ" value="7">Uzbekistan </option>
                                <option data-countryCode="VU" value="678">Vanuatu </option>
                                <option data-countryCode="VA" value="379">Vatican City </option>
                                <option data-countryCode="VE" value="58">Venezuela </option>
                                <option data-countryCode="VN" value="84">Vietnam </option>
                                <option data-countryCode="VG" value="84">Virgin Islands - British </option>
                                <option data-countryCode="VI" value="84">Virgin Islands - US </option>
                                <option data-countryCode="WF" value="681">Wallis &amp; Futuna </option>
                                <option data-countryCode="YE" value="969">Yemen (North)</option>
                                <option data-countryCode="YE" value="967">Yemen (South)</option>
                                <option data-countryCode="ZM" value="260">Zambia </option>
                                <option data-countryCode="ZW" value="263">Zimbabwe </option>
                        </select>                        
                        <p className="devicesTitle">How many devices?</p>
                        <input type="number" min="1" name="devices" className="devicesInput" {...register('numOfDevices')} required></input>
                        <p className="contactPrefTitle">
                        <br></br>
                        By clicking submit, you consent to allow GoGuardian to store and process the personal information submitted above.</p>
                        {/* <input type="button" name="bookmeeting" value="Book a meeting now" className="meetingInput"></input> */}
                        {/* <input type="button" name="callme" value="Call me" className="callInput"></input> */}
                        {/* <p className="newsletterTitle">May we contact you by email with additional information, news, and product updates?</p>
                        <input type="checkbox" name="yes" value="Yes" className="yesCheckInput"></input>
                        <input type="checkbox" name="no" className="noCheckInput"></input> */}
                    <input type="submit" value="Submit" className='signupformbtn' ></input>
                </form>
                :<div className="form-success-div"><p className="form-success-description">Thank you for requesting a trial!<img src="images/greencheckmark.png" className="checkmark"></img>
                <br />
                We're excited to bring StenbergSecurity to your organization. A representative will be in touch shortly. In the meantime, please send any questions or comments to info@stenbergsecurity.com</p></div>}

                </div>
            </div>
        </div>
        <Footer />
        </div>
    )
}
export default Pricing;
