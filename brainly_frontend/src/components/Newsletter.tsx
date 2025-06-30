export const Newsletter = () => {
  return (
    <div className="w-full py-16 bg-customBlack-200 text-white">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
            <div className="lg:col-span-2 my-8">
            <h1 className="md-text-4xl sm:text-3xl text-2xl pl-2 font-bold py-2 flex">Want tips & tricks to optimize your flow?</h1>
            <p className="ml-3">Sign to our newsletter and stay up to date!</p>
            </div>
            <div className="my-4">
                <div className="flex flex-col sm:flex-row items-center justify-between w-full ">
                     <input className="p-3 rounded-md text-black" type="email" placeholder="Enter Email"/>
                     <button className="bg-purple-600 w-[400px] rounded-md font-medium mx-auto py-3 text-black ml-4 my-6">Notify Me</button>
                </div>
            <p>We care about the protection of your data .Read our <span className="text-purple-600">Privacy Policy</span> </p>
            </div>
        </div>
    </div>
  )
}
