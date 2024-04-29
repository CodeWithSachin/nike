const Button = ({ label, iconUrl }) => {
    return (
        <button className="flex justify-center items-center border font-montserrat px-7 py-4 text-lg leading-none bg-coral-red text-white rounded-full">
            {label}
            <img src={iconUrl} alt="iconUrl" className="rounded-full ml-2" />
        </button>
    )
}

export default Button