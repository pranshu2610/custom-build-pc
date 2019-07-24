import React from 'react';
const GC =({ onMotherChange })=>{
	return(
		<div className='bg-white dib br3 pa3 ma3 bw2 shadow'>
			<h2>Graphic Card</h2>
			<form>
				<label>Nvidia GeForce RTX 2080 Ti  <input name="gc" type="radio" onClick={() => onMotherChange('gc')('2080')}/>
				</label><br/>
				<label>MSI Radeon RX 570 <input name="gc" type="radio" onClick={() => onMotherChange('gc')('msigc')}/>
				</label><br/>
				<label>Nvidia GeForce RTX 2070 Super <input name="gc" type="radio" onClick={() => onMotherChange('gc')('2070')}/>
				</label><br/>
			</form>
		</div>
		)
}
export default GC;