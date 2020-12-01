$(document).ready(function() {
    $.ajax({
        url: 'http://127.0.0.1:8000/api/alluserdata',
        method: 'get',
        dataType: 'json',
        success: function(data) {
            console.log(data);
            $('#myTable').dataTable({
                data: data,
                columns: [
                    { data: 'id' },
                    {
                        data: 'name',
                        render: function(data, type, row, meta) {
                            // console.log(row);
                            return `<a href="/${row.id}">` + data + "</a>";
                        }
                    },
                    { data: 'email' },
                    { data: 'email_verified_at' },
                    {
                        data: 'created_at',
                        searchable: false,
                        sortable: false,
                        render: function(created_at) {
                            return created_at.substr(11, 11);
                        }
                    },
                    {
                        data: 'updated_at',
                        render: function(jsonDate) {
                            $date = new Date(jsonDate.substr(0, 10))
                            $month = $date.getMonth() + 1;
                            return $date.getDate() + "/" + $month + "/" + $date.getFullYear();
                        }
                    }
                ]
            });
        }
    })
});