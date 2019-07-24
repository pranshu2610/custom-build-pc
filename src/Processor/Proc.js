import React from 'react';
const Proc =({ onMotherChange })=>{
	return(
		<div className='bg-white dib br3 pa3 ma3 bw2 shadow'>
			<h2>Processor</h2>
			<form>
				<label>Intel Core i9 9900K  <input name="proc" type="radio" onClick={() => onMotherChange('processor')('i9')}/>
				</label><br/>
				<label>Intel Core i7 9700K <input name="proc" type="radio" onClick={() => onMotherChange('processor')('i7')}/>
				</label><br/>
				<label>AMD Ryzen 5 2600 <input name="proc" type="radio" onClick={() => onMotherChange('processor')('amd')}/>
				</label><br/>
			</form>
		</div>
		)
}
export default Proc;