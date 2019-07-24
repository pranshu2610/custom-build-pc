import React from 'react';
const RAM =({ onMotherChange })=>{
	return(
		<div className='bg-white dib br3 pa3 ma3 bw2 shadow'>
			<h2>RAM</h2>
			<form>
				<label>Corsair Dominator Platinum 32GB  <input name="ram" type="radio" onClick={() => onMotherChange('ram')('cor')}/>
				</label><br/>
				<label>G.Skill Trident Z 16GB <input name="ram" type="radio" onClick={() => onMotherChange('ram')('gsk')}/>
				</label><br/>
				<label>HyperX Predator 8GB  <input name="ram" type="radio" onClick={() => onMotherChange('ram')('hyp')}/>
				</label><br/>
			</form>
		</div>
		)
}
export default RAM;