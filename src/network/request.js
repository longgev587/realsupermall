import axios from 'axios'

export function request(config){

	const instance = axios.create({
		baseURL:"http://152.136.185.210:8000/api/z8",
		timeout:10000
	})

	// instance.interceptors.request.use(success=>{
	// 	console.log(success);
	// 	return success
	// },err=>{
	// 	console.log(err);
	// });
	
	instance.interceptors.response.use(res=>{
		res=res.data
		return res;
	},err=>{
		console.log(err)
	});

	return instance(config)
}  