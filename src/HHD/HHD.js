import React from 'react';
const HHD =({ onMotherChange })=>{
	return(
		<div className='bg-white dib br3 pa3 ma3 bw2 shadow'>
			<h2>HHD</h2>
			<form>
				<label>Seagate 2TB FireCuda  <input name="hhd" type="radio" onClick={() => onMotherChange('hhd')('sea')}/>
				</label><br/>
				<label>Seagate 3TB BarraCuda <input name="hhd" type="radio" onClick={() => onMotherChange('hhd')('sea2')}/>
				</label><br/>
				<label>Toshiba X300 4TB  <input name="hhd" type="radio" onClick={() => onMotherChange('hhd')('tosh')}/>
				</label><br/>
			</form>
		</div>
		)
}
export default HHD;