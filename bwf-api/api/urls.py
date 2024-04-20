from api import views
from rest_framework import routers
from django.urls import path
from django.urls import re_path, include

router = routers.DefaultRouter()
router.register(r'groups',views.GroupViewset)

urlpatterns = [
    path(r'^', include(router.urls)),
]