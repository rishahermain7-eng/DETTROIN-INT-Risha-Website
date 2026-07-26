import "./Academics.css";

const programs=[
{
title:"Primary School",
img:"/images/classroom.jpg"
},
{
title:"Middle School",
img:"/images/library.jpg"
},
{
title:"Senior Secondary",
img:"/images/campus1.jpg"
}
];

function Academics(){

return(

<section className="academics" id="academics">

<div className="container">

<h2>Academic Programmes</h2>

<div className="academic-grid">

{
programs.map((item,index)=>(

<div className="academic-card" key={index}>

<img src={item.img} alt={item.title}/>

<div className="academic-content">

<h3>{item.title}</h3>

<p>

Holistic learning with innovation and excellence.

</p>

</div>

</div>

))
}

</div>

</div>

</section>

)

}

export default Academics;