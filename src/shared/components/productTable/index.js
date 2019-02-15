import React from "react";
import ReactTable from "react-table";
class ProductTable extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
      let columns = [
          {
              Header: "Status",
              accessor: "status",
              filterable:true
          },
          {
              Header: "Title",
              accessor: "title",
              Cell: row=>{
                if(row.original.stage === 4){
                  return <a href={`/product/${row.original._id}`}>{row.value}</a>
                }else{
                    return (
                        <a href={`/create/${row.original._id}`}>{row.value}</a>
                    )
                }
              }
          }
          ,
          {
              Header: "Price",
              accessor: "listedPrice",
              filterable:true
          },
          {
              Header: "Category",
              accessor: "category"
          },
          {
              Header: "SKU",
              accessor: "SKU",
              filterable:true
          }

      ];
      return (
          <ReactTable
              columns={columns}
              data={this.props.data}
              filterble
              defaultPageSize={20}
              noDataText={"Please wait..."}
          >

          </ReactTable>
      );
  }
}


export default ProductTable;
