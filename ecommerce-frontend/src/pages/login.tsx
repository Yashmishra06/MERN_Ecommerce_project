import { useState } from "react"
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const [gender,setgender]=useState("");
    const [date,setdate]=useState("");

  return (
    <div className="login">
        <main>
            <h1 className="heading">Login</h1>
            <div>
                <label>Gender</label>
                <select value={gender} onChange={e=> setgender(e.target.value)}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="trans">TransGender</option>
                </select>
            </div>
            <div>
                <label>Date Of Birth</label>
                <input
                type="date"
                value={date}
                onChange={(e)=> setdate(e.target.value)}
                />
            </div>

            <div>
                <p>Already Signed In</p>
                <button>
                    <FcGoogle/> <span>Sign in with Google</span>
                </button>
            </div>
        </main>

            

    </div>
  )
}

export default Login