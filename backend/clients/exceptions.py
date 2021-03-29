from rest_framework.exceptions import APIException

class ClientDoesNotExist(APIException):
    status_code = 400
    default_detail = 'The requested client does not exist.'
