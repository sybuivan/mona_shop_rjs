import { Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const SkeletonProductlist = () => {
  return (
    <Container>
      <Row>
        {Array.from(new Array(8)).map((item, index) => (
          <Col lg={3} key={index}>
            <Box>
              <Skeleton variant="rectangular" width={210} height={219} />
            </Box>
            <Box sx={{ pt: 0.5, marginBottom: 2 }}>
              <Skeleton width="50%" sx={{margin: "auto"}}/>
              <Skeleton width="60%" sx={{margin: "auto",marginBottom: 2}} />
              <Skeleton width="50%" sx={{margin: "auto"}}/>
            </Box>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

SkeletonProductlist.propTypes = {};

export default SkeletonProductlist;
