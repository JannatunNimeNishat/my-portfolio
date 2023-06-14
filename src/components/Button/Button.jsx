

const Button = ({btn_text}) => {
    return (
       
        <button className="px-5 py-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500 font-bold
        shadow-lg  shadow-cyan-500/50  ">
            {btn_text}
        </button>
    );
};

export default Button;