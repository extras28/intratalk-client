import { Button, Col, Container, Form, ListGroup, Row } from "react-bootstrap";

const ChatLayout = () => {
    return (
        <Container fluid className="vh-100 d-flex flex-column">
            <Row className="flex-grow-1 overflow-hidden">
                {/* Sidebar - Danh sách cuộc trò chuyện */}
                <Col md={4} lg={3} className="border-end bg-light overflow-auto">
                    <ListGroup variant="flush">
                        <ListGroup.Item action active>
                            Chat 1
                        </ListGroup.Item>
                        <ListGroup.Item action>Chat 2</ListGroup.Item>
                        <ListGroup.Item action>Chat 3</ListGroup.Item>
                    </ListGroup>
                </Col>

                {/* Nội dung chat */}
                <Col md={8} lg={9} className="d-flex flex-column overflow-hidden">
                    <div className="flex-grow-1 overflow-auto p-3">
                        <div className="mb-2">
                            <strong>User 1:</strong> Hello!
                        </div>
                        <div className="mb-2">
                            <strong>User 2:</strong> Hi there!
                        </div>
                    </div>
                    <Form className="p-3 border-top">
                        <Form.Group className="d-flex">
                            <Form.Control type="text" placeholder="Type your message..." />
                            <Button variant="primary" className="ms-2">
                                Send
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ChatLayout;
