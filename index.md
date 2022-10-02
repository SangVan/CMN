<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>19507801-Đặng Văn Sáng</title>
</head>

<body>
    <div class="container mt-5">
        <form method="post" action="/" enctype="multipart/form-data">
            <div class="form-row">
                <div class="form-group col-md-6">
                    <input type="number" class="form-control" name="stt" placeholder="STT">
                </div>
                <div class="form-group col-md-6">
                    <input type="text" class="form-control" name="ten_bai_bao" placeholder="Tên bài báo">
                </div>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" name="ten_nhom_tac_gia" placeholder="Tên nhóm tác giả">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" name="chi_so_ISBN" placeholder="Chỉ số ISBN">
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <input type="number" class="form-control" name="so_trang" placeholder="Số trang">
                </div>
                <div class="form-group col-md-6">
                    <input type="number" class="form-control" name="nam_san_xuat" placeholder="Năm sản xuất">
                </div>
            </div>
            <input type="submit" value="Submit">
            <!-- <button type="submit" class="btn btn-primary">Thêm</button> -->
        </form>
        <form action="/delete" method="post" enctype="multipart/form-data">
            <h3 style="color: red; margin-left: 50px;">Nhà xuất bản ABZ</h3>
            <h1 style="color: blue; text-align: center;">Danh mục bài báo cáo</h1>
            <table style="width: 100%;" border="1">
                <tr>
                    <th>STT</th>
                    <th>Tên báo cáo</th>
                    <th>Tên nhóm tác giả</th>
                    <th>Chỉ số ISBN </th>
                    <th>Số trang</th>
                    <th>Năm sản xuất</th>
                    <th>Chọn</th>
                </tr>
                <% for(let i=0; i<baiBao.length; i++){%>
                    <tr>
                        <td>
                            <%=baiBao[i].stt%>
                        </td>
                        <td>
                            <%=baiBao[i].ten_bai_bao%>
                        </td>
                        <td>
                            <%=baiBao[i].ten_nhom_tac_gia%>
                        </td>
                        <td>
                            <%=baiBao[i].chi_so_ISBN%>
                        </td>
                        <td>
                            <%=baiBao[i].so_trang%>
                        </td>
                        <td>
                            <%=baiBao[i].nam_san_xuat%>
                        </td>
                        <td>
                            <input type="checkbox" name="<%=baiBao[i].stt%>">
                            <input type="submit" value="Delete">
                        </td>
                    </tr>
                    <%} %>
            </table>
        </form>
    </div>

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>

</body>

</html>
