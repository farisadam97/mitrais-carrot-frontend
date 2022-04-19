import axios from 'axios'
import {React,useState, useEffect} from 'react'
import Accordion from 'react-bootstrap/Accordion'


const AccordionHistoryUpdate = (props) => {

    const [ dataHistory, setDataHistory] = useState([])

    const getHistoryUpdateById = (id) => {
        axios.post(
            `${props.apiUrl}/history/${id}`,{},
            {headers:props.header}
        ).then(response => {
            // console.log("response",response.data)
            mapToDataHistory(response.data.data)
            // setDataHistory(response.data.data)
            // response?.data?.data.forEach(element => {
            //     console.log("first",element)
            //     mapToDataHistory(element)
            //     console.log(dataHistory)
            // });
        })
    }

    const mapToDataHistory = async (item) => {
        // const promise = item.forEach(element => {
        //     element.snapshotItem = replaceString(element.snapshotItem)
        // });
        // await Promise.all(promise)
        // setDataHistory(item)
        item.forEach(element => {
            element.snapshotItem = replaceString(element.snapshotItem)
        });
        // console.log(item)
        setDataHistory(item)
    }

    const replaceString = item => {
        var stringItem = item.replace(/["]/g, "")
        stringItem = item.replace(/[']/g,'"')
        // console.log("string",stringItem)
        // var arrItem = JSON.parse(stringItem)
        return stringItem
    } 

    useEffect(()=>{
        if(props.dataId != undefined){
            getHistoryUpdateById(props.dataId)
        }
    },[props.dataId])



    const formatDate = (date) => {
        // const options = { year: 'numeric', month: 'long', day: 'numeric' };
        let newDate = new Date(date)
        return newDate.toLocaleString('id-id',{dateStyle:"medium",timeStyle:"short"})
    }

    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>History Update</Accordion.Header>
                    <Accordion.Body className='px-0 pt-0'>
                    <table id='bazzar-item' className='table table-striped table-bordered table-hover mt-3 dataTable no-footer' style={{width: "100%"}} role='grid'>
                        <thead>
                            <tr role="row " className='text-center text-nowrap'>
                                <th scope="col" className="sorting_desc"  aria-controls="staff-table" colSpan={"1"} aria-sort="descending" aria-label="#: activate to sort column ascending"  >Updated By</th>
                                <th scope="col" className="sorting" aria-controls="staff-table" colSpan={"1"} >Updated date</th>
                                <th scope="col" className="sorting" aria-controls="staff-table" colSpan={"1"} >Snapshot</th>
                            </tr>
                        </thead>
                        {
                            // console.log("data",dataHistory)
                        }
                        <tbody id='table-admin-carrot-summary'>
                        { dataHistory.length > 0 ? 
                            (
                                dataHistory.map((element) => 
                                    (
                                        <tr key={element.updatedAt}>
                                            <td >{element.userName}</td>
                                            <td >{formatDate(element.updatedAt)}</td>
                                            <td >
                                                <ul>
                                                    {      
                                                        JSON.parse(element.snapshotItem).map(arrItem => {
                                                            return <li key={Math.random() *Math.random()}>{arrItem}</li>
                                                        })
                                                    }
                                                </ul>
                                            </td>
                                        </tr>
                                    )
                                )
                            ) : (
                                <tr>
                                <td colSpan={3} className="text-center">
                                    No data
                                </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default AccordionHistoryUpdate