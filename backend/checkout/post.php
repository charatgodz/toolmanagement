<?php

$data = json_decode(file_get_contents('php://input'));

# ตรวจสอบ Validation
if (isset($data->engineer_id) && isset($data->store_id) && isset($data->aircraft) && isset($data->flight)) {
    # ตรวจสอบค่าว่าง
    if (empty($data->engineer_id)) {
        http_response_code(400);
        exit(json_encode(['message' => 'batch is engineer_id']));
    } elseif (empty($data->store_id)) {
        http_response_code(400);
        exit(json_encode(['message' => 'aircraft is store_id']));
    } elseif (empty($data->aircraft)) {
        http_response_code(400);
        exit(json_encode(['message' => 'engineer_id is aircraft']));
    } elseif (empty($data->flight)) {
        http_response_code(400);
        exit(json_encode(['message' => 'engineer_id is flight']));
    }

    $query  = 'INSERT INTO borrow_header(engineer_id, store_id, aircraft, flight) VALUES(?, ?, ?, ?)';
    $stmt   = mysqli_prepare($database, $query);
    mysqli_stmt_bind_param(
        $stmt,
        'ssss',
        $data->engineer_id,
        $data->store_id,
        $data->aircraft,
        $data->flight
    );
    mysqli_stmt_execute($stmt);
    $error_message = mysqli_error($database);
    # ตรวจสอบว่า Insert Error หรือไม่
    if ($error_message) {
        http_response_code(400);
        exit(json_encode(['message' => $error_message]));
    }
    $last_id = mysqli_insert_id($database);
    echo json_encode([
        'message' => 'Successful last',
        'borrow_id'=>$last_id
    ]);
} else {
    http_response_code(400);
    exit(json_encode(['message' => 'The request is invalid']));
}
