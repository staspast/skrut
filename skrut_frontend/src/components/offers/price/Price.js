import React from 'react';
import {Table} from  'react-bootstrap';
import {FormattedMessage} from 'react-intl'

const PriceInformation = () =>
    <div className="price">
        <div className="price__title"><FormattedMessage id="offer.price.title"/></div>

        <div className="price__description">
            <FormattedMessage id="offer.price.desc"/>

        </div>

        <Table striped bordered condensed hover>
            <thead>
                <tr>
                    <th><FormattedMessage id="offer.price.period"/></th>
                    <th><FormattedMessage id="offer.price.two"/></th>
                    <th><FormattedMessage id="offer.price.four"/></th>
                    <th><FormattedMessage id="offer.price.eight"/></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><FormattedMessage id="offer.price.new_year"/></td>
                    <td><FormattedMessage id="offer.price.neg"/></td>
                    <td><FormattedMessage id="offer.price.neg"/></td>
                    <td><FormattedMessage id="offer.price.neg"/></td>
                </tr>
                <tr>
                    <td><FormattedMessage id="offer.price.summer"/></td>
                    <td>400</td>
                    <td>600</td>
                    <td> - </td>
                </tr>
                <tr>
                    <td><FormattedMessage id="offer.price.winter"/></td>
                    <td>350</td>
                    <td>500</td>
                    <td>-</td>
                </tr>
            </tbody>
        </Table>

    </div>;

export default PriceInformation;