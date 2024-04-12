import React, { useContext, useState } from 'react'
import axios from "axios";

import { MainContxt } from '../../Context/MainContext';
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const {  notify,BASEURL } = useContext(MainContxt)
  const navigate = useNavigate()
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const allowedExtensions = ["jpg", "jpeg", "png", "svg"];
      const selectedFileName = selectedFile.name;
      const fileExtension = selectedFileName.slice(
        ((selectedFileName.lastIndexOf(".") - 1) >>> 0) + 2
      );
      const lowerCaseExtension = fileExtension.toLowerCase();
      if (!allowedExtensions.includes(lowerCaseExtension)) {
        alert("Please select a valid image file (JPG, JPEG, PNG, or SVG).");
        event.target.value = "";
        setSelectedFile(null); //
      } else {
        setSelectedFile(selectedFile);
      }
    }
  };

  function submitHandler(event) {
    event.preventDefault()
    
    const form = event.target;
    const createFor = form.createFor.value;  
    // console.log(createFor)
    const username = form.username.value;
    const email = form.email.value;
    const gender = form.gender.value;
    const mobilenumber = form.mobilenumber.value;
    const dob = form.dob.value;
    const timebirth = form.timebirth.value;
    const placebirth = form.placebirth.value;
    const dayofbirth = form.daybirth.value;
    const password = form.password.value;
    const familytype = form.familytype.value;
    const fatheroccupt = form.fatheroccupt.value;
    const motheroccupt = form.motheroccupt.value;
    const brother = form.brother.value;
    const brothermno = form.brothermno.value;
    const sister = form.sister.value;
    const sistermno = form.sistermno.value;
    const bsstatus = form.bsstatus.value;
    const education = form.education.value;
    const income = form.income.value;
    const employein = form.employein.value;
    const state = form.state.value;
    const distric = form.distric.value;
    const pincode = form.pincode.value;
    const address = form.address.value;
    const height = form.height.value;
    const blood = form.blood.value;
    const weight = form.weight.value;
    const mothertonque = form.mothertonque.value;
    const religion = form.religion.value;
    const caste = form.cast.value;
    const merriedstatus = form.merriedstatus.value;
    const maglic = form.maglic.value;
    const describe = form.describe.value;
    const image = form.image.files[0];

    if (
      username !== "" &&
      email !== "" &&
      password !== "" &&
      mobilenumber !== ""
    ) {
      const formData = new FormData();
      formData.append("createFor", createFor);
      formData.append("username", username);
      formData.append("email", email);
      formData.append("gender", gender);
      formData.append("mobilenumber", mobilenumber);
      formData.append("dob", dob);
      formData.append("time_of_birth", timebirth);
      formData.append("place_of_birth", placebirth);
      formData.append("day_of_birth", dayofbirth);
      formData.append("password", password);
      formData.append("family_type", familytype);
      formData.append("father_occupation", fatheroccupt);
      formData.append("mother_occupation", motheroccupt);
      formData.append("brother", brother);
      formData.append("brother_mno", brothermno);
      formData.append("sister", sister);
      formData.append("sister_mno", sistermno);
      formData.append("bs_merriage_status", bsstatus);
      formData.append("education", education);
      formData.append("income", income);
      formData.append("employein", employein);
      formData.append("state", state);
      formData.append("distric", distric);
      formData.append("pincode", pincode);
      formData.append("address", address);
      formData.append("height", height);
      formData.append("blood_group", blood);
      formData.append("weight", weight);
      formData.append("mother_tonque", mothertonque);
      formData.append("religion", religion);
      formData.append("caste", caste);
      formData.append("merried_status", merriedstatus);
      formData.append("maglic", maglic);
      formData.append("describe", describe);
      formData.append("image", image);
      // form.category_name.focus();
      
      console.log(formData)
      axios.post(BASEURL + "user/create", formData)
        .then((success) => {
          console.log(success.status)
          if (success.status == 200) {
            notify(success.data.msg, "success");
            navigate("/login");
          } else {
            notify(success.data.msg, "error");
          }   
        })
        .catch((err)=>notify('network problem'));
    } else {
      notify("Please fill all the data", "error");
      form.category_name.focus();
    }
  } 



  return (
    <div className='w-full h-auto bg-rose-700'>
      <h1 style={{ borderBottom: 'black double 5px ' }} className='text-center text-[30px]  mb-[20px] '>Merriage Registation Form
      </h1>
      <form encType="multipart/form-data" onSubmit={submitHandler}>
        <div className='mt-[30px] text-center font-bold text-[25px]'>
          <span className='underline'>Personal</span> <span className='text-[#ba4747] underline'>Deatails</span>
        </div>
        <div className='w-full grid md:grid-cols-2 grid-cols-1' >
          <div >
            <label className='flex w-[95%] ml-[20px] mt-[10px] mb-[10px] font-semibold text-[20px] ' required htmlFor="createFor">Profile Create For</label>
            <select className="w-[95%] ml-[20px] h-[40px] rounded-[10px]" name="createFor" id="">
              <option value="" disabled selected>Select Profile Create For</option>
              <option value="My Self" >My Self</option>
              <option value="Son">Son</option>
              <option value="Son">Daughter</option>
              <option value="Daughter">Sister</option>
              <option value="Brother">Brother</option>
              <option value="Relative">Relative</option>
              <option value="Client-merriage bureau">Client-merriage bureau</option>
            </select>
          </div>
          <div>
            <label className='flex w-[95%] ml-[20px] mt-[10px] mb-[10px] font-semibold text-[20px]' htmlFor="username">Full Name</label>
            <input type="text" placeholder='Enter Your Name' name='username' className='w-[95%] ml-[20px] h-[40px] rounded-[10px]' required />
          </div>
          <div>
            <label className='flex w-[95%] ml-[20px] mt-[10px] mb-[10px] font-semibold text-[20px]' htmlFor="email">Email Address</label>
            <input type="email" placeholder='Enter Your Email' name='email' className='w-[95%] text-[black] ml-[20px] h-[40px] rounded-[10px]' required />
          </div>
          <div>
            <label className='flex w-[95%] ml-[20px] mt-[10px] mb-[10px] font-semibold text-[20px]' htmlFor="gender">Gender</label>
            <select className="w-[95%] ml-[20px] h-[40px] rounded-[10px]" name='gender' id="">
              <option value="" disabled selected>
                Select
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

          </div>
          <div>
            <label className='flex w-[95%] ml-[20px] mt-[10px] mb-[10px] font-semibold text-[20px]' htmlFor="mobilenumber">Mobile Number</label>
            <input type="text" name='mobilenumber' placeholder='Enter Your Mobile Number' className='w-[95%] ml-[20px] h-[40px] rounded-[10px]' required />
          </div>
          <div>
            <label className='flex w-[95%] ml-[20px] mt-[10px] mb-[10px] font-semibold text-[20px]' htmlFor="dob">Date Of Birth</label>
            <input type="date" name='dob' placeholder='Enter Your Date Of Birth' className='w-[95%] ml-[20px] h-[40px] rounded-[10px]' required />
          </div>
          <div>
            <label className='flex w-[95%] ml-[20px] mt-[10px] mb-[10px] font-semibold text-[20px]' htmlFor="timebirth">Time Of Birth</label>
            <input type="time" name='timebirth' placeholder='Enter Your Time Of Birth' className='w-[95%] ml-[20px] h-[40px] rounded-[10px]' required />
          </div>
          <div>
            <label className='flex w-[95%] ml-[20px] mt-[10px] mb-[10px] font-semibold text-[20px]' htmlFor="placebirth">Place Of Birth</label>
            <input type="text" name='placebirth' placeholder='Enter Your Birth Place' className='w-[95%] ml-[20px] h-[40px] rounded-[10px]' required />
          </div>
          <div >
            <label className='flex w-[95%] ml-[20px] mt-[10px] mb-[10px] font-semibold text-[20px]' htmlFor="daybirth">Day of Birth</label>
            <select className="w-[95%] ml-[20px] h-[40px] rounded-[10px]" name="daybirth" id="" required>
              <option value="" disabled selected>Select</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday </option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday </option>
              <option value="Sunday">Sunday </option>
            </select>
          </div>
          <div>
            <label className='flex w-[95%] ml-[20px] mt-[10px] mb-[10px] font-semibold text-[20px]' htmlFor="password">Password</label>
            <input type="password" name='password' placeholder='7 Character in password' className='w-[95%] ml-[20px] h-[40px] rounded-[10px]' required />
          </div>
        </div>
        <div className='mt-[30px] text-center font-bold text-[25px]'>
          <span className='underline'>Family</span> <span className='text-[#ba4747] underline'>Deatails</span>
        </div>
        <div className='w-full grid md:grid-cols-2 grid-cols-1' >
          <div>
            <label className='flex w-[95%] ml-[20px] mt-[10px] mb-[10px] font-semibold text-[20px]' htmlFor="familytype">Family type</label>
            <select className="w-[95%] ml-[20px] h-[40px] rounded-[10px]" name="familytype" id="" required>
              <option value="" >Select</option>
              <option value="Joint family">Joint family</option>
              <option value="Nuclear Family">Nuclear Family</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className='flex w-[95%] ml-[20px] mt-[10px] mb-[10px] font-semibold text-[20px]' htmlFor="fatheroccupt">Father's Occupation</label>
            <select className="w-[95%] ml-[20px] h-[40px] rounded-[10px]" name="fatheroccupt" id="" required>

              <option value="" >Select</option>
              <option value="Private Sector">Private sector</option>
              <option value="Govermnet Sector">Govermnet sector</option>
              <option value="Unemployes">Unemployes</option>
              <option value="self Bussiness">self Bussiness</option>
              <option value="Defence">Defence</option>
              <option value="civil services">civil services</option>
              <option value='Farmer'>Farmer</option>
            </select>
          </div>
          <div>
            <label className='flex w-[95%] ml-[20px] mt-[10px] mb-[10px] font-semibold text-[20px]' htmlFor="motheroccupt">Mother's Occupation</label>
            <select className="w-[95%] ml-[20px] h-[40px] rounded-[10px]" name="motheroccupt" id="">
              <option value="" >Select</option>
              <option value="" disabled selected>Select</option>
              <option value='house wife'>House wife</option>
              <option value='private sector'>Private sector</option>
              <option value='Govermnet sector'>Govermnet sector</option>
              <option value='Unemployes'>Unemployes</option>
              <option value='private self Bussiness'>self Bussiness</option>

            </select>
          </div>
          <div>
            <label className='flex w-[95%] ml-[20px] mt-[10px] mb-[10px] font-semibold text-[20px]' htmlFor="bsstatus">Sister brother Merriage Status</label>
            <input type="text" name='bsstatus' placeholder='One line describe' className='w-[95%] ml-[20px] h-[40px] rounded-[10px]' required />
          </div>
        </div>
        <div className='w-full grid md:grid-cols-4 grid-cols-2' >
          <div>
            <label className='flex w-[95%] ml-[20px] mt-[10px] mb-[10px] font-semibold text-[20px]' htmlFor="brother">Brother</label>
            <select className="w-[95%] ml-[20px] h-[40px] rounded-[10px]" name="brother" id="" required>
              <option value="" disabled selected>Select</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='3+'>3+</option>
            </select>
          </div>
          <div>
            <label className='flex w-[95%] ml-[20px] mt-[10px] mb-[10px] font-semibold text-[20px]' htmlFor="brothermno">Brother's mobile no.</label>
            <input type="text" name='brothermno' placeholder='One line describe' className='w-[95%] ml-[20px] h-[40px] rounded-[10px]' required />
          </div>
          <div>
            <label className='flex w-[95%] ml-[20px] mt-[10px] mb-[10px] font-semibold text-[20px]' htmlFor="sister">Sister</label>
            <select className="w-[95%] ml-[20px] h-[40px] rounded-[10px]" name="sister" id="" required>
              <option value="" disabled selected>Select</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='3+'>3+</option>
            </select>
          </div>
          <div>
            <label className='flex w-[95%] ml-[20px] mt-[10px] mb-[10px] font-semibold text-[20px]' htmlFor="sistermno">Sister mobile no.</label>
            <input type="text" name='sistermno' placeholder='One line describe' className='w-[95%] ml-[20px] h-[40px] rounded-[10px]' required />
          </div>

        </div>
        <div className='mt-[30px] text-center font-bold text-[25px]'>
          <span className='underline'>Career</span> <span className='text-[#ba4747] underline'>Deatails</span>
        </div>
        <div className='w-full grid md:grid-cols-2 grid-cols-1' >
          <div>
            <label className='flex w-[95%] ml-[20px] mt-[10px] mb-[10px] font-semibold text-[20px]' htmlFor="education">Education</label>
            <input type="text" name='education' placeholder='Education Details' className='w-[95%] ml-[20px] h-[40px] rounded-[10px]' required />
          </div>
          <div className='w-full grid md:grid-cols-2 grid-cols-1' >
            <div>
              <label className='flex w-[95%] ml-[20px] mt-[10px] mb-[10px] font-semibold text-[20px]' htmlFor="income">Anuual Income</label>
              <select className="w-[95%] ml-[20px] h-[40px] rounded-[10px]" name="income" id="" required>
                <option value="" disabled selected>Select</option>
                <option value='no income' >No income</option>
                <option value='Rs 0-1 lack'>Rs 0-1 lack</option>
                <option value='>Rs 1-2 lack'>Rs 1-2 lack</option>
                <option value='>Rs 2-3 lack'>Rs 2-3 lack</option>
                <option value='Rs 3-4 lack'>Rs 3-4 lack</option>
                <option value='Rs 4-5 lack'>Rs 4-5 lack</option>
                <option value='Rs 5-6 lack'>Rs 5-6 lack</option>
                <option value='Rs 6-7 lack'>Rs 6-7 lack</option>
                <option value='Rs 7-8 lack'>Rs 7-8 lack</option>
                <option value='Rs 8-9 lack'>Rs 8-9 lack</option>
                <option value='Rs 9-10 lack'>Rs 9-10 lack</option>
                <option value='More then 10 lack'>More then 10 lack</option>
              </select>
            </div>
            <div>
              <label className='flex w-[95%] ml-[20px] mt-[10px] mb-[10px] font-semibold text-[20px]' htmlFor="employein">Employee In</label>
              <select className="w-[95%] ml-[20px] h-[40px] rounded-[10px]" name="employein" id="" required>
                <option value="" disabled selected>Select</option>
                <option value="Private Sector">Private sector</option>
                <option value="Govermnet Sector">Govermnet sector</option>
                <option value="Unemployes">Unemployes</option>
                <option value="self Bussiness">self Bussiness</option>
                <option value="Defence">Defence</option>
                <option value="civil services">civil services</option>
                <option value='Farmer'>Farmer</option>

              </select>
            </div>


          </div>

        </div>
        <div className='mt-[30px] text-center font-bold text-[25px]'>
          <span className='underline'>Address</span> <span className='text-[#ba4747] underline'>Deatails</span>
        </div>
        <div className='w-full grid md:grid-cols-3 grid-cols-1' >
          <div>
            <label className='flex w-[95%] ml-[20px] mt-[10px] mb-[10px] font-semibold text-[20px]' htmlFor="state">State</label>
            <input type="text" name='state' placeholder='State Details' className='w-[95%] ml-[20px] h-[40px] rounded-[10px]' required />
          </div>
          <div>
            <label className='flex w-[95%] ml-[20px] mt-[10px] mb-[10px] font-semibold text-[20px]' htmlFor="distric">Distric</label>
            <input type="text" name='distric' placeholder='Distric Details' className='w-[95%] ml-[20px] h-[40px] rounded-[10px]' required />
          </div>
          <div>
            <label className='flex w-[95%] ml-[20px] mt-[10px] mb-[10px] font-semibold text-[20px]' htmlFor="pincode">Pincode</label>
            <input type="text" name='pincode' placeholder='Pincode' className='w-[95%] ml-[20px] h-[40px] rounded-[10px]' required />
          </div>

        </div>
        <div className='col-span-2'>
          <div className="text-black  ml-[20px] mt-[20px] mb-[20px]">Full Address</div>
          <textarea name="address" placeholder='Full Adress with Pincode' type="textarea" className="block md:w-[98%] w-[95%] ml-[20px] px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md " required></textarea>
        </div>
        <div className='mt-[30px] text-center font-bold text-[25px]'>
          <span className='underline'>Personalty</span> <span className='text-[#ba4747] underline'>Deatails</span>
        </div>
        <div className='w-full grid md:grid-cols-2 grid-cols-1' >
          <div>
            <label className='flex w-[95%] ml-[20px] mt-[10px] mb-[10px] font-semibold text-[20px]' htmlFor="height">Height</label>
            <input type="text" name='height' placeholder='height' className='w-[95%] ml-[20px] h-[40px] rounded-[10px]' required />
          </div>
          <div>
            <label className='flex w-[95%] ml-[20px] mt-[10px] mb-[10px] font-semibold text-[20px]' htmlFor="blood">Blood Group</label>
            <select className="w-[95%] ml-[20px] h-[40px] rounded-[10px]" name="blood" id="" required>
              <option value="" disabled selected>Select</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O-">O-</option>
              <option value="O+">O+</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>

            </select>
          </div>
          <div>
            <label className='flex w-[95%] ml-[20px] mt-[10px] mb-[10px] font-semibold text-[20px]' htmlFor="weight">Weight</label>
            <input type="text" name='weight' placeholder='weight' className='w-[95%] ml-[20px] h-[40px] rounded-[10px]' required />
          </div>
          <div>
            <label className='flex w-[95%] ml-[20px] mt-[10px] mb-[10px] font-semibold text-[20px]' htmlFor="mothertonque">Mother Tounge</label>
            <select className="w-[95%] ml-[20px] h-[40px] rounded-[10px]" name="mothertonque" id="" required>
              <option value="" disabled selected>Select</option>
              <option value='hindi'>hindi</option>
              <option value='muslim'>english</option>
              <option value="tamill">tamill</option>
              <option value="malayak" >malayak</option>
              <option value="telugu">telugu</option>
              <option value="bangali">bangali</option>
              <option value="Rajsthani">Rajsthani</option>
              <option value="Rajsthani">Sindhi</option>
              <option value="Bihari">Bihari</option>
              <option value="Punjabi">Punjabi</option>
            </select>
          </div>
          <div>
            <label className='flex w-[95%] ml-[20px] mt-[10px] mb-[10px] font-semibold text-[20px]' htmlFor="religion">Religion</label>
            <select className="w-[95%] ml-[20px] h-[40px] rounded-[10px]" name="religion" id="" required>
              <option value="hindu">Hindu</option>
              <option value="sikh">Sikh</option>
              <option value="muslim">Muslim</option>
              <option value="christian">Christian</option>
              <option value="jain">Jain</option>

            </select>
          </div>
          <div>
            <label className='flex w-[95%] ml-[20px] mt-[10px] mb-[10px] font-semibold text-[20px]' htmlFor="cast">Cast</label>
            <input type="text" name='cast' placeholder='castes' className='w-[95%] ml-[20px] h-[40px] rounded-[10px]' required />
          </div>
          <div>
            <label className='flex w-[95%] ml-[20px] mt-[10px] mb-[10px] font-semibold text-[20px]' htmlFor="merriedstatus">Married Status</label>
            <select className="w-[95%] ml-[20px] h-[40px] rounded-[10px]" name="merriedstatus" id="" required>
              <option value="" disabled selected>Select</option>
              <option value="Neverr">Never Merried</option>
              <option value="Divorci">Divorci</option>
              <option value="vidhava">Vidhava</option>
            </select>
          </div>
          <div>
            <label className='flex w-[95%] ml-[20px] mt-[10px] mb-[10px] font-semibold text-[20px]' htmlFor="maglic">Are you manglic</label>
            <select className="w-[95%] ml-[20px] h-[40px] rounded-[10px]" name="maglic" id="" required>
              <option value="" disabled selected>Select Are you Muglic</option>
              <option value='maglic'>Manglik</option>
              <option value='Non-Manglik'>Non-Manglik</option>
              <option value='Anshik-manglik'>Anshik manglik</option>
            </select>
          </div>




        </div>
        <div>
          <div className='col-span-2 '>
            <lable className="text-black  ml-[20px] mt-[20px] mb-[20px]" htmlFor="describe">Short Desci about your self</lable>
            <textarea name="describe" placeholder='Full Adress with Pincode' type="textarea" className="block md:w-[98%] w-[95%] ml-[20px] px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md " required></textarea>
          </div>
          <div>
            <div className=" mb-2 text-sm font-medium text-gray-90 ml-[20px]">Upload image</div>
            <input className=" w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer " onChange={handleFileChange} aria-describedby="file_input_help" name="image" type="file" required />
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">JPG, JPEG, PNG, or SVG (MAX. 600x400px).</p>

          </div>
          <div className="flex justify-center mt-6">
            <button type='submit' className=" py-2 border text-2xl leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Sign in</button>
          </div>
        </div>
      </form>





    </div>
  )
}

export default RegistrationForm
