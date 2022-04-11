import React from 'react'
import NavbarComponent from '../../components/navbar/navbar.component'
import Container from '../container'
import ContainerContent from '../../components/container/container.component'
import { Tab } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import RewardTab from '../../components/admin/claimedHistory/reward'
import SocfoundTab from '../../components/admin/claimedHistory/socfound'
import Header from './header'

const BazaarClaimedPage = () => {
    const returnOffice = (location) => {
        if(location === 1){
            return "Bali"
        } else if (location === 2){
            return "Yogyakarta"
        } else if(location === 3){
            return "Bandung"
        } else if (location === 4){
            return "Jakarta"
        } else {
            return "Singapore"
        }
    }

    const formatDate = (date) => {
        // const options = { year: 'numeric', month: 'long', day: 'numeric' };
        let newDate = new Date(date)
        return newDate.toLocaleString('id-id',{dateStyle:"medium",timeStyle:"short"})
    }

    return (
        <div className="">
            <NavbarComponent />
            <Container>
                <Header />
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
                                <RewardTab formatDate={formatDate} returnOffice={returnOffice}/>
                            </Tab.Pane>
                            <Tab.Pane eventKey={"socfound"}>
                                <div className="my-4"></div>
                                <SocfoundTab formatDate={formatDate} returnOffice={returnOffice}/>
                            </Tab.Pane>
                            
                        </Tab.Content>
                    </Tab.Container>
                </ContainerContent>
            </Container>
        </div>
    )
}

export default BazaarClaimedPage
