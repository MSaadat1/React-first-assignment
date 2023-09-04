import "./Table.css";

export  function TableList(props) {
  return (
    <div className="character-rating">
      <h4>Top Characters</h4>
      <table>
        <thead>
          <tr style={{ backgroundColor: "black", color: "white" }}>
            <th>{props.headers[0]}</th>
            <th>{props.headers[1]}</th>
            <th>{props.headers[2]}</th>
          </tr>
        </thead>
        <tbody>
          {props.tableDatas.map((item, index) => (
            <tr key={item.name} className={index % 2 === 0 ? "dark-row" : "light-row"}>
              <td>{item.name}</td>
              <td>{item.skill}</td>
              <td>{item.vote}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
