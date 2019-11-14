from rest_framework import routers
from backend.viewsets import UserViewSet

router = routers.DefaultRouter()

router.register(r'user', UserViewSet)
