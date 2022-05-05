function ThucDon(props) {
    return (
     <div className="container-fluid">
  <h2>Thực đơn</h2>
  <p>
    <a href=" ">Create New</a>
  </p>
  <div className="container-fluid">
    <div className="card shadow mb-4">
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered table-menu" id="dataTable" width="100%" cellSpacing={0} style={{textAlign: 'center', lineHeight: 10}}>
            <tbody><tr>
                <th>
                  Mã Món
                </th>
                <th>
                  Tên Món
                </th>
                <th>
                  Phân Loại
                </th>
                <th>
                  Hình Ảnh
                </th>
                <th>
                  Giá Tiền
                </th>
                <th />
              </tr>
              <tr>
                <td>
                  1
                </td>
                <td>
                  Gà rán
                </td>
                <td>
                  Món chính
                </td>
                <td>
                  <img style={{width: 70, height: 70}} alt="food" src="/Image/kfc.jpg" />
                </td>
                <td>
                  20000
                </td>
                <td style={{width: '200px !important'}}>
                  <a className="btn-func" href="/MonAns/Edit/1"><i className="fas fa-solid fa-pen-to-square" /></a>
                  |
                  <a className="btn-func" href="/MonAns/Details/1"><i className="fas fa-solid fa-info" /></a>
                  |
                  <a className="btn-func" href="/MonAns/Delete/1"><i className="fa-solid fa-trash" /></a>
                </td>
              </tr>
            </tbody></table>
        </div>
      </div>
    </div>
  </div>
</div>
 
    );
  }
  
  export default ThucDon;