from rest_framework import permissions

class IsWorker(permissions.BasePermission):  

    def has_object_permission(self, request, view, obj=None):
        
        try: 
            request.user.worker
            return True
        except:
            return False