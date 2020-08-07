import React, { useEffect, useState } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom'
import { WARDS_TABLE_QUERY, DELETE_WARD_QUERY } from '../../queries/ward-query'


const mid = 'iaEL7GVAzOtRL';

const ListWard = (props) => {
    const [show, setShow] = useState(false);
    const [id, setId] = useState('')

    const { loading, error, data } = useQuery(WARDS_TABLE_QUERY, {
        variables: { mid }
    });

    const [deleteWard, { data:deldata, error:delerror }] = useMutation(DELETE_WARD_QUERY);

    const handleShow = (e,row) =>{
    	setShow(true);
    	setId(row.id)
    }
    const handleClose = () => setShow(false);

    const handleDelete = () => {
        deleteWard({variables:{id},
        	refetchQueries: () => [
			  { query: WARDS_TABLE_QUERY,
			  	variables:{mid}
			  }
			],
		});
        setShow(false)
    	props.history.push(`/wards`);
    }


    const ActionButton = (cell, row) => {
        return (
            <div>
            	<Link to={`/wards/edit/${row.id}`}><Button size="sm" variant="warning" ><i className="far fa-edit"></i></Button></Link>{' '}                   
				<Button size="sm" variant="danger" onClick={(e)=>handleShow(e,row)}><i className="far fa-trash-alt"></i></Button>                   
            </div>
        )
    }

    const columns = [{
            dataField: 'name',
            text: 'Ward Name',
            sort: true
        },
        {
            dataField: 'headquarter',
            text: 'Ward Headquarter'
        },
        {
            dataField: 'area',
            text: 'Area',
            sort: true
        },
        {
            dataField: 'population',
            text: 'Population',
            sort: true
        },
        {
            text: 'Action:',
            dataField: 'action',
            formatter: ActionButton,
            editable: false
        }
    ];

    let row = []
    if (!loading && typeof data.wards !== undefined) {
        data.wards.map(ward => {
            row.push({ "id": ward.id, "name": ward.properties.name, "headquarter": ward.properties.headquarter, "area": ward.properties.area, "population": ward.properties.total })
        })
    }
    return row.length > 0 ? (

        <div>
    		<BootstrapTable keyField='name' data={ row } columns={ columns } pagination={ paginationFactory() } />
	    	<Modal show={show} onHide={handleClose}>
	        <Modal.Header closeButton>
	          <Modal.Title>Are yo Sure heading</Modal.Title>
	        </Modal.Header>
	        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
	        <Modal.Footer>
	          <Button variant="secondary" onClick={handleClose}>
	            Close
	          </Button>
	          <Button variant="danger" onClick={handleDelete}>
	            Delete
	          </Button>
	        </Modal.Footer>
	      </Modal>
    	</div>
    ) : ''
}

export default ListWard;