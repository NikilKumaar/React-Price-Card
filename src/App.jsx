import React from 'react'
import Card from './components/Card'

function App() {
  let data = [
    {
      plan:"free",
      dollar:"$0",
      user:"Single User",
      isUser:true,
      storage:"50GB Storage",
      isStorage:true,
      publicprojects:"Unlimited Public Projects",
      isPublicProjects:true,
      access:"Community Access",
      isAccess:true,
      privateProjects:"Unlimited Private Projects",
      isPrivateprojects:false,
      support:"Dedicated Phone Support",
      isSupport:false,
      subdomain:"Free Subdomain",
      isSubdomain:false,
      reports:"Monthly Status Reports ",
      isReports:false
    },
    {
      plan:"Plus",
      dollar:"$9",
      user:"5 Users",
      isUser:true,
      storage:"50GB Storage",
      isStorage:true,
      publicprojects:"Unlimited Public Projects",
      isPublicProjects:true,
      access:"Community Access",
      isAccess:true,
      privateProjects:"Unlimited Private Projects",
      isPrivateprojects:true,
      support:"Dedicated Phone Support",
      isSupport:true,
      subdomain:"Free Subdomain",
      isSubdomain:true,
      reports:"Monthly Status Reports ",
      isReports:false
    },
    {
      plan:"Pro",
      dollar:"$49",
      user:"Unlimited Users",
      isUser:true,
      storage:"50GB Storage",
      isStorage:true,
      publicprojects:"Unlimited Public Projects",
      isPublicProjects:true,
      access:"Community Access",
      isAccess:true,
      privateProjects:"Unlimited Private Projects",
      isPrivateprojects:true,
      support:"Dedicated Phone Support",
      isSupport:true,
      subdomain:"Free Subdomain",
      isSubdomain:true,
      reports:"Monthly Status Reports ",
      isReports:true
    }
  ]
  return <>
    <section className="pricing py-5">
      <div className="container">
        <h1 className='heading'>REACT PRICE CARD</h1>
        <div className="row">
          {
            data.map((e, i) => {
              return <Card data={e} key={i} />
            })}
    
    </div>
  </div>
</section>
  </>
}

export default App
