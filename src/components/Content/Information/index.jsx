import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ReactComponent as Cork_svg } from "../../../assets/svg/cork-svgrepo-com.svg";
import { ReactComponent as Dog_svg } from "../../../assets/svg/dog-svgrepo-com.svg";
import { ReactComponent as Gift_svg } from "../../../assets/svg/gift-svgrepo-com.svg";
import "./style.scss";

function Information(props) {
  return (
    <section className="section-information">
      <div className="information-container">
        <div className="information-container-wrapper">
          <Container className="container-fixed">
            <Row>
              <Col lg={4}>
                <div className="information-container__box">
                  <div className="information-container__icon">
                    <Dog_svg />
                  </div>
                  <div className="information-container__text-title">
                    Chuyên cung cấp thú nuôi
                  </div>
                  <div className="information-container__text-desc">
                    Bạn là người yêu quý động vật,hãy đến Mona shop nơi cung cấp
                    các loại thú nuôi.Với đa dạng vật nuôi rất mong các bạn ghé
                    thăm và tìm kiếm được con vật bạn yêu thích,rất mong được
                    phục vụ quý khách.
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="information-container__box">
                  <div className="information-container__icon">
                    <Gift_svg />
                  </div>
                  <div className="information-container__text-title">
                    Quà Tặng Đặc Biệt
                  </div>
                  <div className="information-container__text-desc">
                    Đến với Mona shop khách hàng sẽ nhận được nhiều phần quà khi
                    mua thú nuôi cùng những ưu đãi chăm sóc thú định kỳ
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="information-container__box">
                  <div className="information-container__icon">
                    <Cork_svg />
                  </div>
                  <div className="information-container__text-title">
                    Chăm sóc sức khỏe vật nuô
                  </div>
                  <div className="information-container__text-desc">
                    Dịch vụ chăm sóc thú nuôi với tác phong chuyên nghiệp các
                    bạn hoàn toàn có thể yên tâm khi giao vật nuôi của các bạn
                    cho chúng tôi.Chúng tôi rất mong được phục vụ quý khách.
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  );
}

Information.propTypes = {};

export default Information;
