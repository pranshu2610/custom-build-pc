import React from 'react';
const Monitor =({ onMotherChange })=>{
	return(
		<div className='bg-white dib br3 pa3 ma3 bw2 shadow'>
			<h2>Monitor</h2>
			<form>
				<label>ASUS ROG Swift PG279Q  <input name="monitor" type="radio" onClick={() => onMotherChange('monitor')('asus')}/>
				</label><br/>
				<label>Acer Predator X27 <input name="monitor" type="radio" onClick={() => onMotherChange('monitor')('acer')}/>
				</label><br/>
				<label>BenQ EL2870U  <input name="monitor" type="radio" onClick={() => onMotherChange('monitor')('benq')}/>
				</label><br/>
			</form>
		</div>
		)
}
export default Monitor;