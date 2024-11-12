import React from 'react'

const Facebook = () => {
  return (
    <div>
      <div className="ml-[100px] mt-[150px]">
    <h1 className="text-[blue] text-[100px] font-bold font-sans">facebook</h1>
    <p className="text-2xl mt-[-10px] font-sans">
      Facebook helps you connect and share <br />
      with the people in your life.
    </p>
  </div>
  <div className="bg-[white] mt-[-300px] ml-[650px] mr-[90px] pb-5 rounded-lg ">
    <br />
    <input className="text-lg bg-[white] border ml-[40px] pl-5 pr-[230px] py-5 rounded-[5px] border-solid border-black hover:border-[blue]" type="email" name="email" id="input" placeholder="Email address or phone" required
    />
    <br />
    <br />
    <input className="text-lg bg-[white] border ml-[40px] pl-5 pr-[230px] py-5 rounded-[5px] border-[black] border-solid hover:border-[blue]"type="password" name="password" id="input" placeholder="Password" />
    <br />
    <br />
    <button className="bg-[blue] text-[white] text-xl border ml-[40px] pl-[190px] pr-[210px] pt-2.5 pb-5 rounded-[5px] border-[none] border-solid hover:opacity-80 font-sans">Log In</button>
    <br />
    <br />
    <br />
    <a href="#" className="text-[blue] no-underline ml-[180px] hover:underline font-serif">Forgotten password?</a>
    <br />
    <br />
    <hr className="text-[grey] w-[520px] ml-[20px]" />
    <br />
    <button className="bg-[rgb(48,186,48)] text-[white] text-xl border ml-[150px] px-5 py-2.5 rounded-[5px] border-[none] border-solid hover:bg-[rgb(19,168,19)] font-serif">Create new account</button>
  </div>
     <p className="ml-[730px] mt-[20px]"><span className="font-bold">Create a Page</span> for a celebrity, brand or business</p>
    </div>
  )
}

export default Facebook
