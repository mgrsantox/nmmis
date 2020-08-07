import React, { useEffect, useCallback } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import useForm from '../../hooks/use-form'
import { useMutation, useLazyQuery } from '@apollo/client';
import { WARD_QUERY, CHANGEWARD_QUERY } from '../../queries/ward-query'
import { useDropzone } from 'react-dropzone';
import swal from 'sweetalert';



const EditWard = (props) => {
    const wid = props.match.params.wid;
    const initialState = {
        name: '',
        headquarter: '',
        area: '',
        total: '',
        male: '',
        female: '',
        hindu: '',
        muslim: '',
        buddhist: '',
        other: '',
        file: '',
    };

    const [changeWard, { data, error }] = useMutation(CHANGEWARD_QUERY);
    const [getWard, { loading, data: dataw }] = useLazyQuery(WARD_QUERY);


    const { onChange, onSubmit, values, setValues } = useForm(changewardCallback, initialState);

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

    let files = acceptedFiles.map(file => (
        <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
    ));

    useEffect(() => {
        getWard({ variables: { wid } })

    }, [])

    useEffect(() => {

        if (dataw) {
            setValues({ ...dataw.ward.properties })
        }
    }, [dataw])

    values.wid = wid
    if (acceptedFiles.length !== 0) {
        values.file = acceptedFiles
    }
    function changewardCallback() {
        changeWard({ variables: values })
            .then(() => {
                swal("Ward!", "Update successfully!", "success");

            })
            .catch(e => {
                alert(e)
                // swal("New Ward Error!", e, "error");
            })

    }
    return (
        <div>
        	<Form onSubmit={onSubmit} >
	        	<Row>
	        		<Col sm={12} md={6}>
					  <Form.Group controlId="municipalName">
					    <Form.Label> Ward Name</Form.Label>
					    <Form.Control type="text" name="name" onChange={onChange}  value={values.name} placeholder="Enter Ward Name" />
					  </Form.Group>
				  	</Col>
					<Col sm={12} md={6}>
					  <Form.Group controlId="municipalHeadquarter">
					    <Form.Label> Ward Headquarter</Form.Label>
					    <Form.Control type="text" name="headquarter" onChange={onChange}  value={values.headquarter} placeholder="Enter Ward Headquarter" />
					  </Form.Group>
				  	</Col>
					<Col sm={12} md={3}>
					  <Form.Group controlId="municipalArea">
					    <Form.Label> Ward Area</Form.Label>
					    <Form.Control type="number" name="area" onChange={onChange}  value={values.area} placeholder="Enter Ward Area" />
					  </Form.Group>
					</Col>
					<Col sm={12} md={3}>
					  <Form.Group controlId="municipalTotal">
					    <Form.Label> Ward Total Population</Form.Label>
					    <Form.Control type="number" name="total" onChange={onChange}  value={values.total} placeholder="Enter Ward Total Population" />
					  </Form.Group>
				  	</Col>
				  	
					<Col sm={12} md={3}>
					  <Form.Group controlId="municipalMale">
					    <Form.Label> Ward Total Male</Form.Label>
					    <Form.Control type="number" name="male" onChange={onChange}  value={values.male} placeholder="Enter Ward Total Male" />
					  </Form.Group>
				  	</Col>
					<Col sm={12} md={3}>
					  <Form.Group controlId="municipalFemale">
					    <Form.Label> Ward Total Female</Form.Label>
					    <Form.Control type="number" name="female" onChange={onChange}  value={values.female} placeholder="Enter Ward Total Female" />
					  </Form.Group>
				  	</Col>
				  	
					<Col sm={12} md={3}>
					  <Form.Group controlId="municipalHindu">
					    <Form.Label> Ward Total Hindu</Form.Label>
					    <Form.Control type="number" name="hindu" onChange={onChange}  value={values.hindu} placeholder="Enter Ward Total Hindu" />
					  </Form.Group>
				  	</Col>
					<Col sm={12} md={3}>
					  <Form.Group controlId="municipalMuslim">
					    <Form.Label> Ward Total Muslim</Form.Label>
					    <Form.Control type="number" name="muslim" onChange={onChange}  value={values.muslim} placeholder="Enter Ward Total Muslim" />
					  </Form.Group>
				  	</Col>
					<Col sm={12} md={3}>
					  <Form.Group controlId="municipalMuslim">
					    <Form.Label> Ward Total Buddhist</Form.Label>
					    <Form.Control type="number" name="buddhist" onChange={onChange}  value={values.buddhist} placeholder="Enter Ward Total Buddhist" />
					  </Form.Group>
				  	</Col>
					<Col sm={12} md={3}>
					  <Form.Group controlId="municipalOther">
					    <Form.Label> Ward Total Other</Form.Label>
					    <Form.Control type="number" name="other" onChange={onChange}  value={values.other} placeholder="Enter Ward Total Other" />
					  </Form.Group>
				  	</Col>
			  	</Row>

			  	<section className="container">
			      <div {...getRootProps({className: 'dropzone'})}>
			        <input {...getInputProps()} />
			        <p>Drag 'n' drop shapefile files here, or click to select files</p>
			      </div>
			      <aside>
			        <h4>Files</h4>
			        <ul>{files}</ul>
			      </aside>
			    </section>

			  <Button variant="primary" type="submit">
			    Submit
			  </Button>
			</Form>
        </div>
    )
}

export default EditWard;