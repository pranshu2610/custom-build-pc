import React, { Component } from 'react';
import './App.css';
import MB from './MBcard/MB';
import RAM from './RAM/RAM';
import Proc from './Processor/Proc';
import HHD from './HHD/HHD';
import SSD from './SSD/SSD';
import GC from './GC/GC';
import PS from './Power/PS';
import Cool from './Cool/Cool';
import Monitor from './Monitor/Monitor';
import Finish from './Finish';
import Final from './Final';
import './Final.css';


import 'tachyons';

class App extends Component {
  constructor() {
    super();
    this.state={
      mother: '',
      ram: '',
      hhd: '',
      ssd: '',
      gc: '',
      power: '',
      cool: '',
      processor: '',
      monitor: '',
      route: 0,
    }
  }
  

  onMotherChange = (mother) => (value) => {
    this.setState({[mother]: value});
  }

  render() {
    return (
      <div className="App">
      {this.state.route === 0 ?  <div>
        <h1 className='f2'>BUILD A CUSTOM GAMING PC</h1>
        <div className='fl w-50 ma5' id="cabinet">

          { this.state.mother === 'msi' ? <img id="motherboard" alt="MB" src={require('./MBcard/msib.png')} />
          : this.state.mother === 'giga' ? <img id="motherboard" alt="MB" src={require('./MBcard/gigam.png')} />
          : this.state.mother === 'asus' ? <img id="motherboard" alt="MB" src={require('./MBcard/asus.png')} />
          : <p></p>
          }

          { this.state.ram === 'gsk' ? <img id="ram" alt="" src={require('./RAM/gsk.png')}/>
          : this.state.ram === 'cor' ? <img id="ram" alt="" src={require('./RAM/cor.png')}/>
          : this.state.ram === 'hyp' ? <img id="ram" alt="" src={require('./RAM/hyper.png')}/>
          : <p></p>
          }

          { this.state.processor === 'amd' ? <img id="processor" alt="i9" src={require('./Processor/amd.png')} />
          : this.state.processor === 'i9' ? <img id="processor" alt="i9" src={require('./Processor/i9o.png')} />
          : this.state.processor === 'i7' ? <img id="processor" alt="i9" src={require('./Processor/i7.png')} />
          : <p></p>
          }

          { this.state.hhd === 'sea' ? <img id="hhd" alt="" src={require('./HHD/sea.jpg')} />
          : this.state.hhd === 'sea2' ? <img id="hhd" alt="" src={require('./HHD/sea2.jpg')} />
          : this.state.hhd === 'tosh' ? <img id="hhd" alt="" src={require('./HHD/tosh.jpg')} />
          : <p></p>
          }

          { this.state.gc === '2070' ? <img id="graphic" alt="" src={require('./GC/2070.png')} />
          : this.state.gc === '2080' ? <img id="graphic" alt="" src={require('./GC/2080.png')} />
          : this.state.gc === 'msigc' ? <img id="graphic" alt="" src={require('./GC/msigc.png')} />
          : <p></p>
          }
          
          { this.state.cool === 'evga' ? <img id="cool" alt="" src={require('./Cool/evga.png')} />
          : this.state.cool === 'noc' ? <img id="cool" alt="" src={require('./Cool/noc.png')} />
          : this.state.cool === 'nzxt' ? <img id="cool" alt="" src={require('./Cool/nzxt.png')} />
          : <p></p>
          }

          { this.state.ssd === 'mus' ? <img id="ssd" alt="" src={require('./SSD/mus.png')} />
          : this.state.ssd === 'sam' ? <img id="ssd" alt="" src={require('./SSD/sam.png')} />
          : this.state.ssd === 'wd' ? <img id="ssd" alt="" src={require('./SSD/wd.png')} />
          : <p></p>
          }

          { this.state.power === 'bit' ? <img id="power" alt="" src={require('./Power/bit.png')}/>
          : this.state.power === 'cor' ? <img id="power" alt="" src={require('./Power/cor.png')}/>
          : this.state.power === 'sea' ? <img id="power" alt="" src={require('./Power/seagate.png')}/>
          : <p></p>
          }

          { this.state.monitor === 'acer' ? <img id="monitor" alt="" src={require('./Monitor/acer.png')}/>
          : this.state.monitor === 'asus' ? <img id="monitor" alt="" src={require('./Monitor/asus.png')}/>
          : this.state.monitor === 'benq' ? <img id="monitor" alt="" src={require('./Monitor/benq.png')}/>
          : <p></p>
          }
          

          
          

        </div>
        <div >
          <div id="specs1" style={{display: 'flex', justifyContent:'flex-end'}}>
          <MB onMotherChange={this.onMotherChange}/>
          <RAM onMotherChange={this.onMotherChange}/>
          <br/>
          </div>
          <div id="specs2" style={{display: 'flex', justifyContent:'flex-end'}}>
          <Proc onMotherChange={this.onMotherChange}/>
          <HHD onMotherChange={this.onMotherChange}/>
          <SSD onMotherChange={this.onMotherChange}/>
          <br/></div>
          <div id="specs3" style={{display: 'flex', justifyContent:'flex-end'}}>
          <GC onMotherChange={this.onMotherChange}/>
          <PS onMotherChange={this.onMotherChange}/>
          <br/></div>
          <div id="specs4" style={{display: 'flex', justifyContent:'flex-end'}}>
          <Cool onMotherChange={this.onMotherChange}/>
          <Monitor onMotherChange={this.onMotherChange}/>
          </div>

        </div>
        <br/>
        <div>
          <Finish onMotherChange={this.onMotherChange} />
        </div>

        </div>
      : <div id="back" className="fl w-100"> <Final /> 
        <div id="cabinet2">

          { this.state.mother === 'msi' ? <img id="motherboard" alt="MB" src={require('./MBcard/msib.png')} />
          : this.state.mother === 'giga' ? <img id="motherboard" alt="MB" src={require('./MBcard/gigam.png')} />
          : this.state.mother === 'asus' ? <img id="motherboard" alt="MB" src={require('./MBcard/asus.png')} />
          : <p></p>
          }

          { this.state.ram === 'gsk' ? <img id="ram" alt="" src={require('./RAM/gsk.png')}/>
          : this.state.ram === 'cor' ? <img id="ram" alt="" src={require('./RAM/cor.png')}/>
          : this.state.ram === 'hyp' ? <img id="ram" alt="" src={require('./RAM/hyper.png')}/>
          : <p></p>
          }

          { this.state.processor === 'amd' ? <img id="processor" alt="i9" src={require('./Processor/amd.png')} />
          : this.state.processor === 'i9' ? <img id="processor" alt="i9" src={require('./Processor/i9o.png')} />
          : this.state.processor === 'i7' ? <img id="processor" alt="i9" src={require('./Processor/i7.png')} />
          : <p></p>
          }

          { this.state.hhd === 'sea' ? <img id="hhd" alt="" src={require('./HHD/sea.jpg')} />
          : this.state.hhd === 'sea2' ? <img id="hhd" alt="" src={require('./HHD/sea2.jpg')} />
          : this.state.hhd === 'tosh' ? <img id="hhd" alt="" src={require('./HHD/tosh.jpg')} />
          : <p></p>
          }

          { this.state.gc === '2070' ? <img id="graphic" alt="" src={require('./GC/2070.png')} />
          : this.state.gc === '2080' ? <img id="graphic" alt="" src={require('./GC/2080.png')} />
          : this.state.gc === 'msigc' ? <img id="graphic" alt="" src={require('./GC/msigc.png')} />
          : <p></p>
          }
          
          { this.state.cool === 'evga' ? <img id="cool" alt="" src={require('./Cool/evga.png')} />
          : this.state.cool === 'noc' ? <img id="cool" alt="" src={require('./Cool/noc.png')} />
          : this.state.cool === 'nzxt' ? <img id="cool" alt="" src={require('./Cool/nzxt.png')} />
          : <p></p>
          }

          { this.state.ssd === 'mus' ? <img id="ssd" alt="" src={require('./SSD/mus.png')} />
          : this.state.ssd === 'sam' ? <img id="ssd" alt="" src={require('./SSD/sam.png')} />
          : this.state.ssd === 'wd' ? <img id="ssd" alt="" src={require('./SSD/wd.png')} />
          : <p></p>
          }

          { this.state.power === 'bit' ? <img id="power" alt="" src={require('./Power/bit.png')}/>
          : this.state.power === 'cor' ? <img id="power" alt="" src={require('./Power/cor.png')}/>
          : this.state.power === 'sea' ? <img id="power" alt="" src={require('./Power/seagate.png')}/>
          : <p></p>
          }
          <img id="glass" alt="" src={require('./assets/glass.png')}/>
          { this.state.monitor === 'acer' ? <img id="monitor2" alt="" src={require('./Monitor/acer.gif')}/>
          : this.state.monitor === 'asus' ? <img id="monitor2" alt="" src={require('./Monitor/asus.gif')}/>
          : this.state.monitor === 'benq' ? <img id="monitor2" alt="" src={require('./Monitor/benq.gif')}/>
          : <p></p>
          }
     
          
          

        </div>




      </div>
      }
      </div>

    );
  }
}


export default App;
