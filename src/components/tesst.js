
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Mitrais Carrot</title>

    <!-- Bootstrap core CSS and custom icons using Font Awesome -->
    <link rel="stylesheet" href="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/assets/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/assets/css/datepicker.css">
    <link rel="stylesheet" href="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/assets/css/dataTables.bootstrap4.min.css">
    <link rel="stylesheet" href="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/assets/css/jquery-confirm.min.css">
    <link rel="stylesheet" href="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/assets/css/jquery-ui.css">
    <link rel="stylesheet" href="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/assets/css/select2.min.css">
    <link rel="stylesheet" href="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/assets/css/select2-bootstrap.min.css">
    <link href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css" rel="stylesheet">
    <link href="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/assets/css/custom.css" rel="stylesheet" type="text/css" />
    <style>
        .btn-action-carrot{
            margin: 2px;
            width: 38px;
        }
        .error {
            color: red;
        }
        /* for datatable processing message */
        .dataTables_wrapper .dataTables_processing {
            color:#777;
            width:300px !important;
            font-size: 1.2em;
            background:white;
            border: 1px solid #dee2e6;
            font-weight: bold;
            border-radius: 20px;
        }
        .wrap_carrot{
            word-wrap: break-word; 
            word-break: break-all; 
            white-space: normal;
        }
        .help_icon{
            font-size: 25px;
            color: #888;
        }
        div.polaroid {
            width: 80%;
            background-color: white;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            margin-bottom: 25px;
            border: 10px solid white;
        }
        div.polaroid > div.container {
            text-align: center;
            padding: 20px 20px 10px 20px;
            font-weight: bold;
        }
    </style>

    <!-- favicon -->
    <link rel="apple-touch-icon" sizes="57x57" href="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/assets/img/favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/assets/img/favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/assets/img/favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/assets/img/favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/assets/img/favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/assets/img/favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/assets/img/favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/assets/img/favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/assets/img/favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/assets/img/favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/assets/img/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/assets/img/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/assets/img/favicon/favicon-16x16.png">
    <link rel="manifest" href="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/assets/img/favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/assets/img/favicon/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
</head>
<body>
    <header>
        <!-- Fixed navbar -->
        <nav class="navbar navbar-expand-md navbar-light fixed-top bg-light">
            <a class="navbar-brand" href="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/">
                <img src="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/assets/img/mitrais-logo.png" alt="">
            </a>
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Notification">
                            <i class="fa fa-bell notif-icon"></i>
                            <div id="notif" class=""></div>
                        </a>
                        <div id="notif-content" class="dropdown-menu right-0" aria-labelledby="navbarDropdown">
                        </div>
                    </li>
                    <li>
                        <a class="nav-link" href="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/help/guide" target="_blank" role="button" title="Manual guide">
                            <i class="fa fa-question-circle help_icon"></i>
                        </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Menu">
                            <i class="fa fa-bars" style="font-size:25px"></i>
                        </a>
                        <div class="dropdown-menu right-0" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">
                                <strong>Dummy Root Admin</strong>
                                <small class="text-sm">Dummy Grade, Dummy Department</small>
                                <small class="text-danger">Root Admin</small>
                            </a>
                            <!--
                                <a class="dropdown-item" href=""><i class="fa fa-user"></i> Root Admin</a>
                                <a class="dropdown-item" href=""><i class="fa fa-user"></i> Administrator</a>
                                <a class="dropdown-item" href=""><i class="fa fa-user"></i> Manager</a>
                                <a class="dropdown-item" href=""><i class="fa fa-user"></i> Staff</a>
                            -->
                            <a class="dropdown-item" href="javascript:;" data-toggle="modal" data-target="#modalCredit"><i class="fa fa-trophy"></i> Credits</a>
                            <a class="dropdown-item" href="#"><input type="checkbox" id="notif-setting" checked> Email Notification</a>
                            <a class="dropdown-item" href="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/login/logout"><i class="fa fa-sign-out"></i> Logout</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    <main role="main" class="container">
        <h2 class="mt-4 pl-0 text-grey ml-0">barn management</h2>
        <section class="admin-tabs py-3">
        <div class="container">
            <div class="row">
                <div class="col-md-12 px-md-0">
                    <ul class="nav nav-pills mb-3" id="myTab" role="tablist">
        <li class="nav-item">
        <a href="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/rootadmin/dashboard" class="nav-link">Dashboard</a>    </li>
    <li class="nav-item">
        <a href="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/rootadmin/bazaar" class="nav-link">Bazaar</a>    </li>
    <li class="nav-item">
        <a href="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/rootadmin/staff" class="nav-link">Assign Role</a>    </li>
    <li class="nav-item">
        <a href="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/rootadmin/annualcarrot" class="nav-link">Harvest</a>    </li>
    <li class="nav-item">
        <a href="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/rootadmin/sharecarrot" class="nav-link">Distribution</a>    </li>
    <li class="nav-item">
        <a href="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/rootadmin/app/setting" class="nav-link">Setting</a>    </li>
    <li class="nav-item">
        <a href="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/rootadmin/staff/insertUpdate" class="nav-link active">Insert/Update Staff</a>    </li>
    </ul>                    <div class="tab-content search-box" id="tabContent">
                        <div class="tab-pane active"><div class="row">
    <div class="col-md-12">
        <hr class="box-title-hr">
        <h4 class="my-2 box-title">Insert/Update Staff</h4>
    </div>
</div>
<br>
<div class="row">
    <div class="col-md-12">
        <form id="import-form" action="javascript:;">
            <div class="row" style="padding:0px 20px 20px 20px">
                <div class="col-md-12" style="border: 1px dotted red; font-size:12px; padding-top:10px">
                    <p class="text-muted">
                        notes:<br>
                        This menu is only for staff data that is not exist in sonic database, if staff data is exist, staff data will be updated after sync time. 
                    Download spreadsheet format from <a target="_blank" href="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/administrator/insertUpdateStaff/downloadTemplate">here</a>.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <input id="import_file" name="import_file" type="file" class="form-control here">
                    <small class="form-text text-muted text-center">
                        allowed extension: .xlsx
                    </small>
                </div>
                <div class="col-lg-6">
                    <button type="submit" class="btn btn-info">
                        <i class="fa fa-upload"></i> Upload
                    </button>
                    <button type="button" class="btn btn-carrot radius-5" id="btn_commit">
                        <i class="fa fa-save"></i> Commit Data
                    </button>
                </div>
            </div>
        </form>
    </div>
</div>
<div class="row">
    <div class="col-md-12">
        <table id="temp-table" class="table table-striped table-bordered table-hover mt-3" style="width:100%">
            <thead>
                <tr>
                    <th scope="col" style="width:5%">No.</th>
                    <th scope="col" style="width:80%">Data</th>
                    <th scope="col" style="width:15%">Action</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
</div>

<div class="modal fade" id="notif-modal" tabindex="-1" role="dialog" aria-labelledby="reward" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Result</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="alert-form"></div>
            </div>
            <div class="modal-footer">
                <button id="reward-cancel" type="button" class="btn btn-link" data-dismiss="modal">Ok</button>
            </div>
        </div>
    </div>
</div></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>    <footer class="footer text-center">
        <div class="container">
            <span class="text-muted"><small>Copyright &copy; 2018 - 2022 Mitrais. All rights reserved.</small></span>
        </div>
    </footer>
    <!-- Bootstrap core Javascript --> 
    <script src="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/assets/js/jquery.min.js"></script>
    <script src="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/assets/js/jquery-ui.js"></script>
    <script src="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/assets/js/jquery.validate.js"></script>
    <script src="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/assets/js/additional-methods.min.js"></script>
    <script src="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/assets/js/popper.min.js"></script>
    <script src="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/assets/js/bootstrap.min.js"></script>
    <script src="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/assets/js/moment.min.js"></script>
    <script src="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/assets/js/jquery.dataTables.min.js"></script>
    <script src="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/assets/js/dataTables.bootstrap4.min.js"></script>
    <script src="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/assets/js/dataTables.cellEdit.js"></script>
    <script src="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/assets/js/jquery-confirm.min.js"></script>
    <script src="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/assets/js/jquery.blockUI.js"></script>
    <script src="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/assets/js/accounting.js"></script>
    <script src="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/assets/js/select2.min.js"></script>
    <script src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>
    <script type="text/javascript">
        var global_js = {
            block: function(){
                $.blockUI({
                    baseZ: 2000,
                    message:'<h3><img src="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/assets/img/mc-icon-carrot.gif"> please wait . . <h3>',
                    css:{
                        border: 'none',
                        'padding-top': '15px',
                        padding: '5px',
                        backgroundColor: 'white',
                        '-webkit-border-radius':'10px',
                        '-moz-border-radius':'10px'
                    }
                });
            },
            unblock: function(){
                $.unblockUI();
            }
        }
        $(document).ready(function() {
            $('.select2').select2({
                theme: "bootstrap"
            });
            $('[data-toggle="datepicker"]').datepicker({
              autoHide: true,
              zIndex: 2048,
            });

            $('#notif-setting').on('change',function() {
                let val = $(this).is(":checked");
                let status = 0;
                if(val) {
                    status = 1
                } else {
                    status = 0;
                }
                
                $.ajax({
                    url: "https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/Notification/updateUserNotification",
                    method:"POST",
                    data: {
                        active: status,
                    },
                    success:function(data) {
                        console.log(data);
                    },
                    error: function(jqXHR, status, error) {
                        console.log(status + ": " + error);
                    }
                });
            });

            function renderNotifications(notifications) {
                var result = new Array();

                if (notifications.length > 0) {
                    notifications.forEach(notification => {
                        var id = notification['id'];
                        var message = "";
                        if(notification['is_read'] != "0") {
                            message = notification['message'];
                        }
                        else {
                            message = '<strong>' + notification['message'] + '</strong>';
                        }

                        var notificationList = "";                        
                        switch (notification['type']) {
                            case 'REWARD':
                                notificationList += '<a class="dropdown-item" href="#" onclick="isRead(' + notification['id'] + ',\'https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/staff/reward/details?id=' + notification['from'] + '\');">' + message + '</a>';
                            break;

                            case 'BIRTHDAY':
                                notificationList += '<a class="dropdown-item" href="#" onclick="isRead(' + notification['id'] + ',\'https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/staff/staffbirthday\')">' + message + '</a>';
                            break;

                            case 'CLAIM':
                                notificationList += '<a class="dropdown-item" href="#" onclick="isRead(' + notification['id'] + ',\'https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/staff/transactionHistory?table=bazaar\')">' + message + '</a>';
                            break;

                            case 'SHARE':
                                notificationList += '<a class="dropdown-item" href="#" onclick="isRead(' + notification['id'] + ',\'https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/staff/transactionHistory?table=earn\')">' + message + '</a>';
                            break;

                            default:
                                notificationList += '<a class="dropdown-item" href="#" onclick="isRead(' + notification['id'] + ',0);">' + message + '</a>';
                        }
                        result.push(notificationList);
                    });
                    
                    result.push('<a class="dropdown-item btn btn-carrot radius-5 mt-3" href="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/notification" role="button"><center><small>See All Notification</small></center></a>');
                }
                else {
                    result = '<a class="dropdown-item" href="#">No Notification</a>';
                }

                return result;
            }

            function load_unseen_notification(view = '')
            {
                var redirectUrl = "https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/login";
                $.ajax({
                    url: "https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/notification/fetch",
                    method:"POST",
                    dataType:"json",
                    success:function(data) {
                        if(data.success) {
                            if(data.qty > 0) {
                                $('#notif').addClass('notif-active');
                            }
                            else {
                                $('#notif').removeClass('notif-active');
                            }
                            var notifications = renderNotifications(data.notifications);
                            $('#notif-content').html(notifications);
                        }
                        setTimeout(function(){
                            load_unseen_notification();
                        }, 300000);
                    },
                    error: function(jqXHR, status, error) {
                        $(location).attr('href', redirectUrl);
                    }
                });
            }
            load_unseen_notification();
            
            // new validation for jquery validation type datetime
            $.validator.addMethod("datetime", function (value, element) {
                var stamp = value.split(" ");
                var validDate = !/Invalid|NaN/.test(new Date(stamp[0]).toString());
                var validTime = /^(([0-1]?[0-9])|([2][0-3])):([0-5]?[0-9])(:([0-5]?[0-9]))?$/i.test(stamp[1]);
                return this.optional(element) || (validDate && validTime);
            }, "Please enter a valid date and time.");
            
            // new validation for jquery validation type text 
            jQuery.validator.addMethod("noHTMLtags", function(value, element){
                if(this.optional(element) || /<\/?[^>]+(>|$)/g.test(value)){
                    return false;
                } else {
                    return true;
                }
            }, "HTML tags are Not allowed.");
        });
        function isRead(id,link) {
            $.ajax({
                url: "https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/notification/read",
                method:"POST",
                data: {
                    id: id,
                },
                dataType:"json",
                success:function(data) {
                    if(data.success) {
                        $('#notif').removeClass('notif-active');
                        if(link != '0') {
                            window.location.replace(link);
                        }
                    }
                }
            });

        }
    </script>
    <script type="text/javascript">
    $(document).ready(function () {
        // datatable initialize and config
        tempStaffTable = $('#temp-table').DataTable({
            "dom": 'ftipr',
            "processing": true, //Feature control the processing indicator.
            "serverSide": true, //Feature control DataTables' server-side processing mode.

            // Load data for the table's content from an Ajax source
            "ajax": {
                "url": "https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/insertUpdateStaff/loadData",
                "contentType": "application/json",
                "type": "GET",
            },
            // set columns, shows in the datatables inside <tbody> tag
            "columns": [
                {
                    data: 'id',
                    name: 'id',
                    class: 'text-center',
                    render: function (data, type, row, meta) {
                        return meta.row + meta.settings._iDisplayStart + 1;
                    }
                },
                {
                    data: 'username',
                    name: 'username',
                    render: function (data, type, row, meta) {
                        var html = '<table style="width:100%">\
                                        <tr>\
                                            <td style="width:20%">usename</td>\
                                            <td style="width:1%">:</td>\
                                            <td style="width:79%">'+row.username+'</td>\
                                        </tr>\
                                        <tr>\
                                            <td>staff_id</td>\
                                            <td>:</td>\
                                            <td>'+row.staff_id+'</td>\
                                        </tr>\
                                        <tr>\
                                            <td>name</td>\
                                            <td>:</td>\
                                            <td>'+row.name+'</td>\
                                        </tr>\
                                        <tr>\
                                            <td>JF</td>\
                                            <td>:</td>\
                                            <td>'+row.mjf+'</td>\
                                        </tr>\
                                        <tr>\
                                            <td>grade</td>\
                                            <td>:</td>\
                                            <td>'+row.grade+'</td>\
                                        </tr>\
                                        <tr>\
                                            <td>office</td>\
                                            <td>:</td>\
                                            <td>'+row.office+'</td>\
                                        </tr>\
                                        <tr>\
                                            <td>email</td>\
                                            <td>:</td>\
                                            <td>'+row.email+'</td>\
                                        </tr>\
                                        <tr>\
                                            <td>date_of_birth</td>\
                                            <td>:</td>\
                                            <td>'+row.date_of_birth+'</td>\
                                        </tr>\
                                        <tr>\
                                            <td>status_code</td>\
                                            <td>:</td>\
                                            <td>'+row.status_code+'</td>\
                                        </tr>\
                                        <tr>\
                                            <td>resign_date</td>\
                                            <td>:</td>\
                                            <td>'+row.resign_date+'</td>\
                                        </tr>\
                                        <tr>\
                                            <td>manager</td>\
                                            <td>:</td>\
                                            <td>'+row.manager_id+' ('+row.manager_name+')</td>\
                                        </tr>\
                                    </table>';


                        return html;
                    }
                },
                {
                    data: 'username',
                    name: 'action',
                    class: 'text-center',
                    render: function (data, type, row, meta) {
                        return '<button type="button" name="btn_delete" class="btn btn-outline-danger btn-sm" data-id="'+row.username+'">\
                                    <i class="fa fa-trash"></i>\
                                </button>';
                    }
                }  
            ],
            //Set column definition initialisation properties.
            "order": [ 0, "asc" ],
            "columnDefs": [
                {
                    "targets": [2],
                    "orderable": false, //set not orderable
                },
            ],
            'language':{
                "processing": '<img src="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/assets/img/mc-icon-carrot.gif"> Loading . .'
            },
            "drawCallback": function (settings) {
                $("button[name='btn_delete']").click(function(){
                    hapus(this);
                });
            }
        });

        function upload(this_form) {
            global_js.block();
            
            var myForm = new FormData(this_form);
            
            $.ajax({
                url: 'https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/insertUpdateStaff/uploadFile',
                cache: false,
                contentType: false,
                processData: false,
                type: "POST",
                data: myForm,
                success: function (data, textStatus, jqXHR) {
                    $('#notif-modal .modal-title').html("Result");
                    $('#notif-modal .alert-form').html('<div class="alert alert-success" role="alert">' + data + '</div>');
                    $('#reward-cancel').html("Ok");
                    $('#notif-modal').modal("show");
                    $("#import-form").trigger("reset");
                    tempStaffTable.draw();
                    global_js.unblock();
                },
                error: function (data, status, error) {
                    console.log(status + ":" + error);
                    global_js.unblock();
                }
            });
        }

        function hapus(this_btn){
            global_js.block();
            $.ajax({
                url: "https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/insertUpdateStaff/clearTemporaryStaff",
                type: "POST",
                data:{
                    id: $(this_btn).data("id"),
                },
                success: function(data, textStatus, jqXHR) {
                    $('#notif-modal .modal-title').html("Result");
                    $('#notif-modal .alert-form').html('<div class="alert alert-success" role="alert">' + data + '</div>');
                    $('#reward-cancel').html("Ok");
                    $('#notif-modal').modal("show");
                    tempStaffTable.draw();
                    global_js.unblock();
                },
                error: function(jqXHR, status, error) {
                    console.log(status + ": " + error);
                    global_js.unblock();
                }
            });
        }

        $("button[name='btn_delete']").click(function(){
            hapus(this);
        });

        $("#btn_commit").click(function(){
            global_js.block();
            $.ajax({
                url: "https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient/insertUpdateStaff/commitTemporaryStaff",
                type: "POST",
                data:{
                    commit: "1",
                },
                success: function(data, textStatus, jqXHR) {
                    $('#notif-modal .modal-title').html("Result");
                    $('#notif-modal .alert-form').html('<div class="alert alert-success" role="alert">' + data + '</div>');
                    $('#reward-cancel').html("Ok");
                    $('#notif-modal').modal("show");
                    tempStaffTable.draw();
                    global_js.unblock();
                },
                error: function(jqXHR, status, error) {
                    console.log(status + ": " + error);
                    global_js.unblock();
                }
            });
        });

        // validation
        $("#import-form").validate({
            rules: {
                import_file: {
                    required: true,
                    extension: "xlsx"
                }
            }
        });
        $("#import-form").on('submit', function (event) {
            event.preventDefault();
            if( $(this).validate().form() ){
                upload(this);
            }
        });
    });
</script>    <div class="modal fade" id="modalCredit" tabindex="-1" role="dialog" aria-labelledby="modalCredit" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="makeadminModalTitle"><i class="fa fa-trophy"></i> Credits</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" style="font-size:12px; padding:40px">
                    <center>
                        <div class="polaroid">
                            <img src="https://carrotdevdb.mitrais.com:4433/MitraisCarrotPHPClient//assets/img/credits_img.JPG" alt="Norther Lights" style="width:100%">
                            <div class="container">
                                <p>Mitrais Carrot Team, Innov-A-Thon 2017</p>
                            </div>
                        </div>
                    </center>
                    <br>
                    Mitrais would like to acknowledge with much appreciation to Mitrais Carrot team, for providing the idea and putting the efforts during Innov-A-thon 2017. We are especially grateful to:<br>
                    <ul style="margin-bottom:0px">
                        <li>Fazar Rahman</li>
                        <li>Muhamad Ridwan</li>
                        <li>Novi Kumalasari</li>
                        <li>Nurmala Pratya</li>
                        <li>Rage Taufika</li>
                        <li>Risdian Ciptayadi</li>
                    </ul>
                    for their creative contribution, which has enabled Mitrais to develop Mitrais Carrot application to appreciate staff performance and encourage team work and collaboration.                </div>
            </div>
        </div>
    </div>
</body>
</html>