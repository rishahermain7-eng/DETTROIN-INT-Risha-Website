import "./WhyChooseUs.css";
import {
FaLaptopCode,
FaBook,
FaUsers,
FaFlask,
FaFutbol,
FaAward
} from "react-icons/fa";

const data = [
{
icon:<FaLaptopCode/>,
title:"Digital Learning",
text:"Smart classrooms with advanced technology."
},
{
icon:<FaBook/>,
title:"Experienced Faculty",
text:"Highly qualified teachers."
},
{
icon:<FaUsers/>,
title:"Leadership",
text:"Developing confident future leaders."
},
{
icon:<FaFlask/>,
title:"Modern Labs",
text:"Science and innovation labs."
},
{
icon:<FaFutbol/>,
title:"Sports",
text:"Excellent sports infrastructure."
},
{
icon:<FaAward/>,
title:"Achievements",
text:"Award-winning academic excellence."
}
];

function WhyChooseUs(){

return(

<section className="choose">

<div className="container">

<h2>Why Choose Us</h2>

<div className="choose-grid">

{
data.map((item,index)=>(

<div className="choose-card" key={index}>

<div className="icon">

{item.icon}

</div>

<h3>{item.title}</h3>

<p>{item.text}</p>

</div>

))
}

</div>

</div>

</section>

)

}

export default WhyChooseUs;