from rest_framework.exceptions import PermissionDenied
from rest_framework import status
import logging
exception_logger = logging.getLogger(__name__)

class EMException(PermissionDenied):
    status_code = status.HTTP_400_BAD_REQUEST
    default_detail = "Exception"
    default_code = 'invalid'

    def __init__(self, detail, status_code=None, logger=None):

        self.detail = detail

        if status_code is not None:
            self.status_code = status_code

        if logger is not None:
            logger.error(detail)
        else:
            exception_logger.error(detail)
    
