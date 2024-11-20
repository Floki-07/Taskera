import { MoveRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/vars';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const Details = () => {
    const [username,setUsername] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const token = params.get('token');

        if (token) {
            localStorage.setItem('token', token);
        }
    }, [location]);

    const token = localStorage.getItem('token');
    function handleChange(e:any){
        setUsername(e.target.value)
    }
    const handleSubmit = async()=>{
        try{
            const response = await axios.put(`${BASE_URL}/api/v1/auth/username`,{
                username: username
            },{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response.data);
            navigate('/dates');
        }catch(e){
            console.log('Error while updating Username',e);
        }
    }

    return (
        <div className=' w-[100vw]  border-u border-t border-[--border-line] h-[400px] flex justify-center   '>
            <img src="Taskera.png" alt="" className='opacity-[10%] translate-y-[-15%] h-[700px] w-[1100px] z-0' />
            <div className=' h-[30vh] w-[30vw]  absolute top-[200px] m-auto text-start justify-center items-center '>
                <div className=' w-[25vw] mx-auto leading-10 mt-4'>
                    <h1 className='text-[35px] font-light'>Hello there,</h1>
                    <h1 className='text-[35px] font-light'>Welcome to <span className='font-semi-bold'>Taskera</span></h1>
                </div>

                <div className=' mx-auto mt-4' >
                    <div className='w-[25vw]  flex mx-auto gap-3 items-center' >
                        <input type="text" className='bg-[var(--background-2)] text-white w-[300px]  mt-2 rounded-xl py-3 text-sm px-2 outline-none' placeholder='Enter username' onChange={(e)=>handleChange(e)} />
                        <div className='bg-[var(--secondary)] h-[40px] w-[40px] rounded-[100%]  text-center mt-1'>
                            <button onClick={handleSubmit}>
                            <MoveRight className='mt-2 mx-auto text-black hover:rotate-[-45deg] transition-all hover:cursor-pointer delay-50' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
