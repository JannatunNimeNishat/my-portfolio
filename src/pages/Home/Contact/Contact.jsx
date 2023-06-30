import emailjs from '@emailjs/browser';
import { useRef } from 'react';
const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
    
        e.preventDefault();

        // emailjs.sendForm('service_rjvbt5j', 'template_s4eeamj', form.current, 'gygLnboGeIcHuUX0h')
        // emailjs.sendForm('service_rjvbt5j', 'template_wcf5rub', form.current, 'gygLnboGeIcHuUX0h')
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="bg-[#22252c]  pt-10" id="contact">
            <h3 className="text-4xl capitalize my-text text-center mt-20">Contact with me</h3>
            <div className="px-52 py-16">

                <form className="space-y-3" ref={form} onSubmit={sendEmail}>
                    {/* name */}
                    <div className="form-control w-full max-w-full ">
                        <label className="label ">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input type="text" name="user_name" placeholder="Type here" className="input input-bordered w-full max-w-full " />
                        {/* <input type="text" name="form_name" placeholder="Type here" className="input input-bordered w-full max-w-full " /> */}
                    </div>
                    {/* name */}
                    <div className="form-control w-full max-w-full ">
                        <label className="label ">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" name="user_email" placeholder="Type here" className="input input-bordered w-full max-w-full" />
                        {/* <input type="email" name="form_email" placeholder="Type here" className="input input-bordered w-full max-w-full" /> */}
                    </div>
                    {/* message */}
                    <div className="form-control">
                        <label className="label ">
                            <span className="label-text text-white">Message</span>

                        </label>
                        <textarea name="message" className="textarea textarea-bordered h-24" placeholder=""></textarea>

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