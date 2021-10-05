import React from 'react'

const Board = () => {
    return (
        <div>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">Cliente</th>
      <th scope="col">Mesas</th>
      <th scope="col">Pedido</th>
      <th scope="col">Precio</th>
      <th scope="col">Precio final</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>
        </div>
    )
}

export default Board
