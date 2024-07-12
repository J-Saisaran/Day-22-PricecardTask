
import './App.css';
import Carddesign from './Carddesign';

function App() {

  
  let data= [
    {
        name:"FREE",
        cost:0,
        line1:"✔ Single User",
        line2:"✔ 50GB Storage",
        line3:"✔ Unlimited Public Projects",
        line4:"✔ Community Access",
        line5:"✖ Unlimited Private Projects",
        line6:"✖ Dedicated Phone Support",
        line7:"✖ Free Subdomain",
        line8:"✖ Monthly Status Reports"

    },
    {
      name:"PLUS",
      cost:9,
      line1:"✔ 5 User",
      line2:"✔ 50GB Storage",
      line3:"✔ Unlimited Public Projects",
      line4:"✔ Community Access",
      line5:"✔ Unlimited Private Projects",
      line6:"✔ Dedicated Phone Support",
      line7:"✔ Free Subdomain",
      line8:"✖ Monthly Status Reports",
      muted:"text-muted"
      
  },
  {
    name:"PRO",
    cost:49,
    line1:"✔ Unlimited User",
    line2:"✔ 50GB Storage",
    line3:"✔ Unlimited Public Projects",
    line4:"✔ Community Access",
    line5:"✔ Unlimited Private Projects",
    line6:"✔ Dedicated Phone Support",
    line7:"✔ Free Subdomain",
    line8:"✔ Monthly Status Reports"
}
]
  return (
  <div>
  

    <div className='cardrow'>

      {data.map((mv,index)=>(
        <Carddesign list={mv} id={index}/>

      ))}
    
      
    </div>
     
  
  </div>

  );
}

export default App;