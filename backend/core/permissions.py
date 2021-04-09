from rest_framework import permissions
from workers.models import Work

class IsWorker(permissions.BasePermission):  

    def has_object_permission(self, request, view, obj=None):
        
        try: 
            request.user.worker
            return True
        except:
            return False

class IsOwnerOrAdmin(permissions.BasePermission):  

    def has_object_permission(self, request, view, slug=None):

        try:
            bar_id =request.user.worker.referenceWorker.filter(slug=slug).values_list('id', flat=True)[0]
            check = Work.objects.filter(worker_id=request.user.worker.id, bar_id=bar_id, isBoss=True).values_list('worker_id', flat=True)[0]
            return True    
        except:
            if(request.user.is_staff or request.user.is_superuser):
                return True
            return False
        
        return True