from django.conf.urls import url
from LCH_manager import views

urlpatterns = [
    url(r'^home/$', views.home_page, name='home_page'),
    url(r'^player/(?P<player_id>\w+)/$', views.player, name='player'),
    url(r'^team/(?P<team_id>\w+)/$', views.team, name='team'),
    url(r'^match/(?P<match_id>\w+)/$', views.match, name='match'),
    url(r'^country/(?P<country_name>\w+)/$', views.country, name='country'),
    url(r'^leader_board/$', views.leader_board, name='leader_board'),
]
