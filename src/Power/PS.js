import React from 'react';
const PS =({ onMotherChange })=>{
	return(
		<div className='bg-white dib br3 pa3 ma3 bw2 shadow'>
			<h2>Power Supply</h2>
			<form>
				<label>Corsair RM550x  <input name="ps" type="radio" onClick={() => onMotherChange('power')('cor')}/>
				</label><br/>
				<label>Bitfenix BF450G <input name="ps" type="radio" onClick={() => onMotherChange('power')('bit')}/>
				</label><br/>
				<label>Seasonic SSR-600TL <input name="ps" type="radio" onClick={() => onMotherChange('power')('sea')}/>
				</label><br/>
			</form>
		</div>
		)
}
export default PS;