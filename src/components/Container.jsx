import "./Container.css";
import data from "./data";
import { Component } from "react";


export class ContainerItems extends Component {
  render(){
    return (
    <div className="card-list">
      {data.map((card) => (
        <div className="card" key={card.votes}>
          <div className="card-titles">
            <h3>{card.name}</h3>
            <h4>{card.nickName}</h4>
          </div>
          <img className="card-img" src={card.imageUrl} alt="" />
          <p>{card.background}</p>
        </div>
      ))}
    </div>
  );
  }
}

/* This is the function way */

// export function ContainerItems() {
//   return (
//     <div className="card-list">
//       {data.map((card) => (
//         <div className="card" key={card.votes}>
//           <div className="card-titles">
//             <h3>{card.name}</h3>
//             <h4>{card.nickName}</h4>
//           </div>
//           <img className="card-img" src={card.imageUrl} alt="" />
//           <p>{card.background}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

