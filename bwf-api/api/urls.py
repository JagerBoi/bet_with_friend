from api import views
from rest_framework import routers
from django.urls import re_path as url, include

router = routers.DefaultRouter()
router.register(r'groups',views.GroupViewset)

urlpatterns = [
    url(r'^', include(router.urls)),
]