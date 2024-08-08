import Button from "../Button/Button";

const AddTodo = () => {
    return (
        <div className='col-span-4 row-span-2 h-full bg-[#ffb991] py-2 px-4'>
            <div className="">
                <h1 className="text-sm text-white font-bold mb-1">Add todo</h1>
                <input type="text" className="p-2 w-full rounded-md"/>
                <Button>Add todo</Button>
            </div>
            
        </div>
    )
}
export default AddTodo;