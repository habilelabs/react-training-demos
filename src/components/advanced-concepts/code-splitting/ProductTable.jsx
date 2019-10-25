import React,{Component} from 'react';
import TableRow from './TableRow';
import {Table} from 'react-bootstrap';

class ProductTable extends Component {

    constructor(props){
        super(props);
    }

    renderTableData = () => {
        let data = this.props.TableData;
        let filterdData = data.filter(e=>e.name.includes(this.props.SearchQuery));
        let stockFilterd;
        if(this.props.Stocked === true){
            stockFilterd = filterdData.filter(e=> e.stocked === true);
        }else{
            stockFilterd = filterdData;
        }
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
                <tr key={res.name}>
                  <TableRow text={res.name} stocked={res.stocked} />
                  <TableRow text={res.price} stocked={res.stocked} />
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
               </Table >
          );
    }
}
 
export default ProductTable;