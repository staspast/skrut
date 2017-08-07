import React from 'react';
import {Grid, Row, Col} from  'react-bootstrap';

const Tile = () =>
    <div className="tile__wrapper">
        <Grid>
            <Row>
                <Col xs={12} sm={8} className="tile tile__large">
                    <img
                        src="http://media.istockphoto.com/photos/carpathian-mountains-yaremche-ivanofrankivska-oblast-ukraine-mountain-picture-id641062514"
                        alt=""/>
                </Col>
                <Col xs={12} sm={4} className="tile tile__small">
                    <div>Відпочинок у Карпатах - зимовий та літній</div>
                </Col>

                <Col sm={8} xs={12} smPush={4} className="tile tile__large">
                    <img
                        src="http://media.istockphoto.com/photos/carpathian-mountains-yaremche-ivanofrankivska-oblast-ukraine-mountain-picture-id641062512"
                        alt=""/>
                </Col>
                <Col sm={4} xs={12} smPull={8} className="tile tile__small">
                    <div>
                        Чисте настояне на смерекових лісах повітря. Кришталеві води гірських потоків. Прекрасна природа
                        карпатських гір.
                        Самобутня культура гуцулів. Активний відпочинок. Щира гостинність
                    </div>
                </Col>

                <Col sm={8} xs={12} className="tile tile__large">
                    <img
                        src="http://media.istockphoto.com/photos/carpathian-mountains-yaremche-ivanofrankivska-oblast-ukraine-mountain-picture-id641062514"
                        alt=""/>
                </Col>
                <Col sm={4} xs={12} className="tile tile__small">
                    <div>
                        Все з переліку Яремче пропонує своїм гостям. Вам лише потрібно знайти пристойне комфортне житло,
                        щоб з приємністю провести відпочинок у Карпатах.
                    </div>
                </Col>

                <Col sm={8} xs={12} smPush={4} className="tile tile__large">
                    <img
                        src="http://media.istockphoto.com/photos/carpathian-mountains-yaremche-ivanofrankivska-oblast-ukraine-mountain-picture-id641062512"
                        alt=""/>
                </Col>
                <Col sm={4} xs={12} smPull={8} className="tile tile__small">
                    <div>
                        Ознайомтеся з нашими умовами для проживання та підберіть для себе програму відпочинку в
                        Карпатах.
                    </div>
                </Col>
            </Row>
        </Grid>
    </div>;

export default Tile;