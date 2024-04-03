import { Link } from "react-router-dom";


const Register = () => {
    const handleRegister = (e) =>{
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,email,password)
    } 
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input required type="text" name="name" placeholder="Your Name" className="input input-bordered"/>
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input required type="email" name="email" placeholder="email" className="input input-bordered"/>
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input required type="password" name="password" placeholder="password" className="input input-bordered"/>
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <p className="mx-[2vw]">Already have an account? Please <Link to={"/login"}><button className="btn btn-link">Log In</button></Link> </p>
            </div>
        </div>
        </div>
    );
};

export default Register;