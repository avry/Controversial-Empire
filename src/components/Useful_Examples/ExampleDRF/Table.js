import React, { PropTypes } from 'react';
import key from 'weak-key';


const Table = ({ data }) =>
  !data.length ? (
    <p>Nothing to show</p>
  ) : (
    <div className="column">
      <h2 className="subtitle">
        Showing <strong>{data.length} items</strong>
      </h2>
      <table className="table is-striped">
        <thead>
          <tr>
            { )}
          </tr>
        </thead>
        <tbody>
          {data.map(el => (
            <tr key={el.id}>
              {Object.entries(el).map(el => <td key={key(el)}>{el[1]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

export default Table;