import React from 'react';
const Cool =({ onMotherChange })=>{
	return(
		<div className='bg-white dib br3 pa3 ma3 bw2 shadow'>
			<h2>Cooling</h2>
			<form>
				<label>NZXT Kraken X62  <input name="cool" type="radio" onClick={() => onMotherChange('cool')('nzxt')}/>
				</label><br/>
				<label>Noctua NH-D15 <input name="cool" type="radio" onClick={() => onMotherChange('cool')('noc')}/>
				</label><br/>
				<label>EVGA CLC 240  <input name="cool" type="radio" onClick={() => onMotherChange('cool')('evga')}/>
				</label><br/>
			</form>
		</div>
		)
}
export default Cool;