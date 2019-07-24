import React from 'react';
const SSD =({ onMotherChange })=>{
	return(
		<div className='bg-white dib br3 pa3 ma3 bw2 shadow'>
			<h2>SSD</h2>
			<form>
				<label>Samsung 860 Evo 1TB  <input name="ssd" type="radio" onClick={() => onMotherChange('ssd')('sam')}/>
				</label><br/>
				<label>WD Black SN750 250GB <input name="ssd" type="radio" onClick={() => onMotherChange('ssd')('wd')}/>
				</label><br/>
				<label>Mushkin Enhanced 500GB  <input name="ssd" type="radio" onClick={() => onMotherChange('ssd')('mus')}/>
				</label><br/>
			</form>
		</div>
		)
}
export default SSD;