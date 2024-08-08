const Header = () => {
    return (
        <div className='col-span-12 h-[55px] bg-[#FF7F3E] flex justify-between items-center px-6'>
            <div className='flex gap-3 '>
                <div className='rounded-full h-3 w-3 bg-white'></div>
                <div className='rounded-full h-3 w-3 bg-white'></div>
                <div className='rounded-full h-3 w-3 bg-white'></div>
            </div>
            <div>
                <h1 className="text-sm text-white font-bold">1/3 todos completed</h1>
            </div>
        </div>
    )
}
export default Header;