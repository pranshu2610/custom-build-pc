import React from 'react';

const MB =({ onMotherChange })=>{
	return(
		<div className='bg-white dib br3 pa3 ma3 bw2 shadow'>
			<h2>Motherboard</h2>
			<form>
				<label>ASUS A68HM-K  <input name="mb" type="radio" value="asus" onClick={() => onMotherChange('mother')('asus')}/>
				</label><br/>
				<label>Gigabyte X470 AORUS  <input name="mb" type="radio" value="giga" onClick={() => onMotherChange('mother')('giga')}/>
				</label><br/>
				<label>MSI AMD Ryzen B350  <input name="mb" type="radio" value="msi" onClick={() => onMotherChange('mother')('msi')}/>
				</label><br/>
			</form>
		</div>
		)
}
export default MB;