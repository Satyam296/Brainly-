import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png" ;

export const Prices = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Single} alt="/" />
                <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
                <p className="text-center text-4xl">$149</p>
                <div className="text-center font-medium">
                    <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p> 
                    <p className="py-2 border-b mx-8">1 Granted User</p>
                    <p className="py-2 border-b mx-8">Send upto 2 GB</p>
                </div>
                <button className="bg-purple-600 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Start Trial</button>
            </div>
            <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 ">
                <img className="w-20 mx-auto mt-[-3rem] bg-transparent" src={Double} alt="/" />
                <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
                <p className="text-center text-4xl">$149</p>
                <div className="text-center font-medium">
                    <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p> 
                    <p className="py-2 border-b mx-8">1 Granted User</p>
                    <p className="py-2 border-b mx-8">Send upto 5 GB</p>
                </div>
                <button className="bg-black w-[200px] rounded-md font-medium my-8 mx-auto py-3 text-purple-600">Start Trial</button>
            </div>
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Triple} alt="/" />
                <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
                <p className="text-center text-4xl">$149</p>
                <div className="text-center font-medium">
                    <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p> 
                    <p className="py-2 border-b mx-8">1 Granted User</p>
                    <p className="py-2 border-b mx-8">Send upto 2 GB</p>
                </div>
                <button className="bg-purple-600 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Start Trial</button>
            </div>
        </div>
    </div>
  )
}

