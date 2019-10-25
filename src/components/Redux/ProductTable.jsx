import React from 'react';
import TableRow from './TableRow';
import { connect } from 'react-redux';
import {Table} from 'react-bootstrap';

class ProductTable extends React.Component {

    constructor(props){
        super(props);
    }

    renderTableData = () => {
        let data = this.props.productData;
        let filterdData = data.filter(e=>e.name.includes(this.props.searchFilterValue));
        let stockFilterd =this.props.stockFilterValue === true? filterdData.filter(e=> e.stocked === true)  : filterdData;
        let result = stockFilterd.reduce(function (r, a) {
          r[a.category] = r[a.category] || [];
          r[a.category].push(a);
          return r;
        }, Object.create(null));
    
        return Object.keys(result).map(function(datakey, index) {
          return(
            <React.Fragment>
             <tr key={datakey}>
               <td colSpan="2">{datakey}</td>
             </tr>
             { result[datakey].map( (res,i)=>{
               return(
                <tr key={res.name} className={res.stocked ? 'stocked' : 'notStocked'}>
                  <TableRow text={res.name} />
                  <TableRow text={res.price} />
                </tr>
               )
             }) }
           </React.Fragment>
          )
        });
      }
    

    render(){
        return (
          <Table  bordered hover size="sm" style={{width: '50%',marginLeft: '20%'}}>
                 <thead>
                   <tr>
                     <th>Name</th>
                     <th>Price</th>
                   </tr>
                 </thead>
                 <tbody>
                 {this.renderTableData()}
                 </tbody>
               </Table>
          );
    }
}

const mapStateToProps = state => ({
  stockFilterValue: state.stockFilterValue,
  searchFilterValue: state.searchFilterValue
})

export default connect(
  mapStateToProps,
  null
)(ProductTable)
