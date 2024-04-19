import VAndA from './VAndA.js'
import Cleveland  from './Cleveland.js'

export function getSrcFromName(srcAPI) {
	
	//console.log("src from name ",srcAPI)
	
	if(srcAPI == "cma") {
		//console.log("va was called")
		return  new Cleveland()
	} 
	
	else  {
		//console.log("chicago")
		return new VAndA()
	}
}