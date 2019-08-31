import React from 'react';
function Regis()
{
	return(
<div class="main-container">
            
<div className="card bg-light">
<article className="card-body mx-auto" style={{"maxWidth": "400px;"}}>
	<h4 className="card-title mt-3 text-center">Create Account</h4>
	<p className="text-center">Get started with your free account</p>
	<p>
		<a href="" className="btn btn-block btn-Google"> <i className="fab fa-Google"></i>   Login via Google</a>
		<a href="" className="btn btn-block btn-facebook"> <i className="fab fa-facebook-f"></i>   Login via facebook</a>
	</p>
	<p className="divider-text">
        <span className="bg-light">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspOR</span>
    </p>
	<form>
	<div className="form-group input-group">
		<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
		 </div>
        <input name="" className="form-control" placeholder="Full name" type="text"/>
    </div> 
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
		 </div>
        <input name="" className="form-control" placeholder="Email address" type="email"/>
    </div> 
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-phone"></i> </span>
		</div>
		<select className="custom-select" style="max-width: 120px;">
		    <option selected="">+91</option>
		    <option value="1">+92</option>
		    <option value="2">+1</option>
		    <option value="3">+44</option>
		</select>
    	<input name="" className="form-control" placeholder="Phone number" type="text"/>
    </div> 
    <div className="form-group input-group">
			
    	
		
	</div> 
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
		</div>
        <input className="form-control" placeholder="Create password" type="password"/>
    </div> 
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
		</div>
        <input className="form-control" placeholder="Repeat password" type="password"/>
    </div>                                   
    <div className="form-group">
        <button type="submit" className="btn btn-primary btn-block"> Create Account  </button>
    </div>     
    <p className="text-center">Have an account? <a href="">Log In</a> </p>                                                                 
</form>
</article>
</div> 

</div> 


);
}

export default Regis;