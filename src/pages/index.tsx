import { Layout, Typography, Card, Row, Col, Button } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

export default function HomePage() {
  return (
    <StyleProvider>
      <Layout className="min-h-screen">
        <Header className="flex items-center bg-background border-b border-gray-200">
          <Title level={4} className="text-foreground m-0 text-center">
           Memory app
          </Title>
        </Header>

        <Content className="p-6">
          <div className="max-w-6xl mx-auto">
            <Row gutter={[16, 16]}>
              <Col xs={24} md={8}>
                <Card hoverable className="h-full">
                  <Title level={4}>Feature 1</Title>
                  <Paragraph>
                    Description of the first amazing feature of your project.
                  </Paragraph>
                  <Button type="primary">Learn More</Button>
                </Card>
              </Col>
              
              <Col xs={24} md={8}>
                <Card hoverable className="h-full">
                  <Title level={4}>Feature 2</Title>
                  <Paragraph>
                    Description of the second amazing feature of your project.
                  </Paragraph>
                  <Button type="primary">Learn More</Button>
                </Card>
              </Col>
              
              <Col xs={24} md={8}>
                <Card hoverable className="h-full">
                  <Title level={4}>Feature 3</Title>
                  <Paragraph>
                    Description of the third amazing feature of your project.
                  </Paragraph>
                  <Button type="primary">Learn More</Button>
                </Card>
              </Col>
            </Row>
          </div>
        </Content>

        <Footer className="text-center bg-background border-t border-gray-200">
          ©{new Date().getFullYear()} My Project. All rights reserved.
        </Footer>
      </Layout>
    </StyleProvider>
  );
}
