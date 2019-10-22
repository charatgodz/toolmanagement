<?php

$data = json_decode(file_get_contents('php://input'));

# ตรวจสอบ Validation
if(isset($data->batch) && isset($data->aircraft) && isset($data->engineer_id)) 
{
    # ตรวจสอบค่าว่าง
    if(empty($data->batch)) 
    {
        http_response_code(400);
        exit(json_encode(['message' => 'batch is required']));
    }
    elseif(empty($data->aircraft)) 
    {
        http_response_code(400);
        exit(json_encode(['message' => 'aircraft is required']));
    }
    elseif(empty($data->engineer_id)) 
    {
        http_response_code(400);
        exit(json_encode(['message' => 'engineer_id is required']));
    }

    $query  = 'INSERT INTO cart_tb(batch, pn_description, pn, sn, qty, bin, aircraft, engineer_id) VALUES(?, ?, ?, ?)';
    $stmt   = mysqli_prepare($database, $query);
    mysqli_stmt_bind_param($stmt, 'ssss', 
        $data->mem_name,
        $data->mem_email,
        $data->mem_address,
        $data->mem_phone
    );
    mysqli_stmt_execute($stmt);
    $error_message = mysqli_error($database);
    # ตรวจสอบว่า Insert Error หรือไม่
    if($error_message) 
    {
        http_response_code(400);
        exit(json_encode(['message' => $error_message]));
    }

    echo json_encode(['message' => 'Successful.']);
}
else 
{
    http_response_code(400);
    exit(json_encode(['message' => 'The request is invalid']));
}