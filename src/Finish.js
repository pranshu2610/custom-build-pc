import React from 'react';

const Finish =({ onMotherChange })=>{
	return(
			<h3 className='fl bg-black b--light-purple ba dib br3 pa3 dim ma3 bw1 shadow pointer' onClick={() => onMotherChange('route')('10')}>Built It</h3>
		)
}
export default Finish;