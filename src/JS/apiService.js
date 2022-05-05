import refs from '../index';
import axios from 'axios';

const PATH = 'https://swapi.dev/api/people/1/';

export async function infoCall() {
  const { data } = await axios.get(`${PATH}`);
  const table = `<thead>
            <tr class="string_table" >
                <th class="cell_table">Name</th>
                <th class="cell_table">Gender</th>
                <th class="cell_table">Height</th>
                <th class="cell_table">Mass</th>
                
            </tr>
            </thead>
            <tbody>
                <tr class="string_table">
                    <td class="cell_table">${data.name}</td>
                    <td class="cell_table">${data.gender}</td>
                    <td class="cell_table">${data.height}</td>
                    <td class="cell_table">${data.mass}</td>
                    
                </tr>
            </tbody>`;

  refs.tableResult.insertAdjacentHTML('beforeend', table);
}
