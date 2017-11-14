from django.conf.urls import url
from LCH_manager import views

urlpatterns = [
    url(r'^landing/$', views.home_page, name='home_page'),
]