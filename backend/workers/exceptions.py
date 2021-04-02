from rest_framework.exceptions import APIException

class WorkerDoesNotExist(APIException):
    status_code = 400
    default_detail = 'The requested worker does not exist.'
