import React from 'react';
import {Table} from  'react-bootstrap';

const PriceInformation = () =>
    <div className="price">
        <div className="price__title">Вартість проживання</div>

        <div className="price__description">
            Вартість проживання буде залежати як від сезону так і від тривалості перебування у нас. Орієнтовні ціни наводимо
            нижче, але обов'язко сконтактуйте з нами для уточнення. Орієнтовні ціни на проживання за номер грн.
        </div>

        <Table striped bordered condensed hover>
            <thead>
                <tr>
                    <th>Період</th>
                    <th>З 2 осіб</th>
                    <th>З 4 осіб</th>
                    <th>До 8 осіб</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Новорічний (28.12 - 10.01)</td>
                    <td>За домовл.</td>
                    <td>За домовл.</td>
                    <td>За домовл.</td>
                </tr>
                <tr>
                    <td>Літній</td>
                    <td>400</td>
                    <td>600</td>
                    <td> - </td>
                </tr>
                <tr>
                    <td>Зимовий</td>
                    <td>350</td>
                    <td>500</td>
                    <td>-</td>
                </tr>
            </tbody>
        </Table>

    </div>;

export default PriceInformation;