import React, { useState, useEffect } from 'react'
import Header from './Header'
import { CirclesWithBar } from 'react-loader-spinner'
import { DB_USERID_PWD, DB_ALL_DOCS} from '../constants';
import './table.css';

const Incidents = () => {
	const [loading, setLoading] = useState(true)
	const [dbData, setDbData] = useState(null)

	const fetchData = async () => {

		const result = await fetch(DB_ALL_DOCS,{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Basic ${window.btoa(DB_USERID_PWD)}`
			}
		})
			.then((response) => response.json())
			.then((actualData) => {
				console.log(actualData.rows);
				setDbData(actualData.rows);
				setLoading(false);
			})
		.catch((err) => {
			console.log(err);
		});
	}

	useEffect(() => {
		fetchData();

	}, []);
	
    return (
		<div>
			<Header title='Traffic Eye' />
			{loading && (
				<div className='flex items-center justify-center'>
					<CirclesWithBar
						height='50'
						width='50'
						color='#4fa94d'
						wrapperStyle={{}}
						wrapperClass=''
						visible={true}
						outerCircleColor=''
						innerCircleColor=''
						barColor=''
						ariaLabel='circles-with-bar-loading'
					/>
				</div>
			)}
			
			<table>
				<tbody>
        		<tr>
          			<th>Id</th>
          			<th>Created At</th>
          			<th>Type</th>
          			<th>Status</th>
        		</tr>
        		{dbData && 
					dbData.filter(incident => {return incident.doc.objectType === 'Incident'})
						.map((item, index) => (
          					<tr key={index}>
           		 				<td>{item.doc._id}</td>
            					<td>{item.doc.createdAt}</td>
            					<td>{item.doc.objectType}</td>
            					<td>{item.doc.status}</td>
          					</tr>
        		))}
				</tbody>
      		</table>
		</div>
	);
}

export default Incidents
