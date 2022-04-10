import React from 'react'
import NavbarComponent from '../../components/navbar/navbar.component'
import Container from '../container'
import ContainerContent from '../../components/container/container.component'
import { Tab } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import RewardTab from '../../components/admin/claimedHistory/reward'
import SocfoundTab from '../../components/admin/claimedHistory/socfound'

const BazaarClaimedPage = () => {
    return (
        <div className="">
            <NavbarComponent />
            <Container>
                <hr className='box-title-hr'></hr>
                <ContainerContent title="CLAIMED BAZAAR ITEMS">
                    <div className="my-3"></div>
                    <Tab.Container defaultActiveKey={"reward"}>
                        <Nav variant="pills">
                            <Nav.Item>
                                <Nav.Link eventKey="reward">Reward</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="socfound">Social Foundation</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey={"reward"}>
                                <div className="my-4"></div>
                                <RewardTab />
                            </Tab.Pane>
                            <Tab.Pane eventKey={"socfound"}>
                                <div className="my-4"></div>
                                <SocfoundTab />
                            </Tab.Pane>
                            
                        </Tab.Content>
                    </Tab.Container>
                </ContainerContent>
            </Container>
        </div>
    )
}

export default BazaarClaimedPage
