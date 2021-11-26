import React from 'react';
import { Card, Container } from 'react-bootstrap';
import "./ExtraSection.css";
import Bg from "../../../image/decorative_led_lights_199812.jpg"

const ExtraSection = () => {
    return (
        <div className="extra"  style={{
          backgroundImage: `url(${Bg})`}}>
            <h2 className="fs-1 fw-bold text-warning pb-5">Most Populer Decorative Lights</h2>
            <Container className="mx-auto w-75 pb-5">
        
            <div className="mx-auto row">
            
                <div className="col-lg-4 col-md-6 col-xs-12 my-3">
                  <Card>
        <Card.Img variant="top" src="https://i.etsystatic.com/6116545/r/il/8112e6/476778096/il_340x270.476778096_ptq8.jpg" />
        <Card.Body>
          <Card.Title>Purple & Pink Himalayas Flower</Card.Title>
          <Card.Text>
          20 LED bulbs Battery Operated clear wire 3 x AA batteries ( batteries not included ) on-off switch Total length = 3 meters. 20 Warm bulbs standard cable 110V UL Certified String Lights. Flowers are waterproof. 
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <div className="col-lg-4 col-md-6 col-xs-12 my-3">
                  <Card>
        <Card.Img variant="top" src="https://i.etsystatic.com/6498013/c/986/783/0/0/il/329346/3502030001/il_340x270.3502030001_475y.jpg" />
        <Card.Body>
          <Card.Title>50 LEDs Photo Clip String Lights</Card.Title>
          <Card.Text>
          Total Length: 7.5 ft, Light Color: Warm White, String Color: Transparent, Power Source: Requires 3 AA Batteries (Not Included), Multiple Function: Remote Controller. 3 Lighting Modes: Sequential/Slow Fade/Twinkle. 
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <div className="col-lg-4 col-md-6 col-xs-12 my-3">
                  <Card>
        <Card.Img variant="top" src="https://i.etsystatic.com/7413290/r/il/605122/3445793909/il_340x270.3445793909_t18w.jpg" />
        <Card.Body>
          <Card.Title>Festive Glass Usb Table Lamp</Card.Title>
          <Card.Text>
          The molded glass has a thin coating of iridescent film and this discrete rainbow sheen is enhanced by the two-tone light from the LEDs which display gentle shades of rose and gold throughout the glowing frost effect. 
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
            </div>
        </Container>
        </div>
    );
};

export default ExtraSection;