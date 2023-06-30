
const Contact = () => {
    return (
        <div className="bg-[#22252c]  pt-10" id="contact">
            <h3 className="text-4xl capitalize my-text text-center mt-20">Contact with me</h3>
            <div className="px-52 py-16">
                <form className="space-y-3">
                    {/* name */}
                    <div className="form-control w-full max-w-full ">
                        <label className="label ">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-full " />
                    </div>
                    {/* name */}
                    <div className="form-control w-full max-w-full ">
                        <label className="label ">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" placeholder="Type here" className="input input-bordered w-full max-w-full" />
                    </div>
                    {/* message */}
                    <div className="form-control">
                        <label className="label ">
                            <span className="label-text text-white">Message</span>

                        </label>
                        <textarea className="textarea textarea-bordered h-24" placeholder=""></textarea>

                    </div>
                    <br />
                    <input className=" px-5 py-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500 font-bold
        shadow-lg  shadow-cyan-500/50  " type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Contact;