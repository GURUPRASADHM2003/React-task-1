
import "bootstrap/dist/css/bootstrap.min.css"
import Card from "./Card"
import './App.css'


function App()

{
  const cards= [
    {
      plan : "FREE" ,
      price : 0,
      features : [
    {
       name :"Single User",
       enable : true
    },
       {
        name :"50GB Storage",
        enable : true
    },
    { 
       name :"Unlimited Public Projects",
       enable : true
    },
    {  
      name :"Community Access",
      enable : true
    },
       
    {
      name :"Unlimited Private Projects",
      enable : false
    },
    {
       name :"Dedicated Phone Support",
       enable : false
    },
    {
      name :"Dedicated Phone Support",
      enable : false
   },
    {
        name :"Free Subdomain",
        enable : false
    },
    {
       name :"Monthly Status Reports",
       enable : false
    }
      ]
    
    },
    {
      plan : "PLUS" ,
      price : 9,
      features : [
    {
       name :"5 Users",
       enable : true
    },
       {
        name :"50GB Storage",
        enable : true
    },
    { 
       name :"Unlimited Public Projects",
       enable : true
    },
    {  
      name :"Community Access",
      enable : true
    },
       
    {
      name :"Unlimited Private Projects",
      enable : true
      
    },
    {
       name :"Dedicated Phone Support",
       enable : true
    },
    {
        name :"Free Subdomain",
        enable : true
    },
    {
       name :"Monthly Status Reports",
       enable : false
    }
      ]
    
    },
    {
      plan : "PRO" ,
      price : 49,
      features : [
    {
       name :"Unlimited Users",
       enable : true
    },
       {
        name :"50GB Storage",
        enable : true
    },
    { 
       name :"Unlimited Public Projects",
       enable : true
    },
    {  
      name :"Community Access",
      enable : true
    },
       
    {
      name :"Unlimited Private Projects",
      enable : true 
    },
    {
       name :"Dedicated Phone Support",
       enable : true
    },
    {
        name :"Free Subdomain",
        enable : true
    },
    {
       name :"Monthly Status Reports",
       enable : true
    }
      ]
    
    }
  ];
  return (
    <div className="container">

      <main>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
         {
          cards.map((card,index) =>{
            return <Card key={index} card={card}/>
          })
         }
        </div>
      </main>
    </div>
  )

}

export default App
