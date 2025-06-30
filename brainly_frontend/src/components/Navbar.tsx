import {useState} from "react"
import {Logo} from "../icons/Logo" ;
import {useNavigate} from "react-router-dom" ;
import {AiOutlineClose , AiOutlineMenu} from "react-icons/ai"

const Navbar = () => {
    const [nav , setNav] = useState(false) ; 

    const handleNav : () => void = () =>{
        setNav(!nav) 
    }
    const navigate = useNavigate() ; 
    const handleClick_1 = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log("Button Clicked", event)
        navigate("/signup") ; 
        };
    const handleClick_2 = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log("Button Clicked", event)
        navigate("/signin") ; 
        };
    const handleClick_3 = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log("Button Clicked", event)
        navigate("/about") ; 
        };
    const handleClick_4 = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log("Button Clicked", event)
        navigate("/Contact") ; 
        };

    return(
        <div className="text-white flex justify-between items-center pt-4 pb-4 max-w-[1240px] mx-auto px-4 select-none">
            {/* <h1 className="w-full text-3xl font-bold text-[#4ED7F1]">Brainly</h1> */}
            <div className="flex text-3xl  ml-4 items-center">
                <div className="pr-2 text-purple-600 ">
                <Logo />
                </div>
                Brainly              
            </div>
            <ul className="hidden md:flex">
                <li className="p-4">Home</li>
                <li className="p-4"><button onClick={handleClick_1}>Sign Up</button></li>
                <li className="p-4"><button onClick={handleClick_2}>Sign In</button></li>
                <li className="p-4"><button onClick={handleClick_3}>About</button></li>
                <li className="p-4"><button onClick={handleClick_4}>Contact</button></li>
            </ul>
            <div onClick ={handleNav} className="md:hidden">
                {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>
            <div className={!nav ? "md:hidden fixed top-0 left-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] m-4 ease-in-out duration-500 w-50" : "fixed left-[-100%]"}>
                <div className="flex text-3xl  ml-4 items-center">
                <div className="pr-2 text-purple-600 ">
                <Logo />
                </div>
                Brainly              
            </div>
                <ul className="pt-6 ml-10 uppercase">
                <li className="p-4 border-b border-gray-500">Home</li>
                <li className="p-4 border-b border-gray-500">Sign Up</li>
                <li className="p-4 border-b border-gray-500">Sign In</li>
                <li className="p-4 border-b border-gray-500">About</li>
                <li className="p-4 ">Contact</li>
            </ul>
            </div>
        </div>
    )
}

export default Navbar