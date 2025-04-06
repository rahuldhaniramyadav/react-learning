const Contact = () => {
  return(
    <div className="w-6/12 mx-auto">
      <h1 className="p-4 m-4 text-2xl font-bold text-center">Contact us </h1>
      <form className="border border-gray-200 p-10">
        <fieldset>
          <legend className="text-center">Contact US</legend><br /><br />
          <label className="w-4/12 p-2">Name: </label>
          <input className="p-2 border border-black" type="text" name="name" placeholder="Name" /><br /><br />
          <label className="w-4/12 p-2">Email: </label>
          <input className="p-2 border border-black" type="email" name="email" placeholder="Email" /><br /><br />
          <label className="w-4/12 p-2">Message:</label>
          <input className="p-2 border border-black" type="text" name="message" placeholder="Message" /><br /><br />
          <button className="border border-gray-200 p-4 rounded-2xl">Submit</button>
        </fieldset>
      </form>
    </div>
  )
}

export default Contact;