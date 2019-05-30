# 应用级别的路由
from django.urls import path, include
import music.views

urlpatterns = [
    path('get_music_list', music.views.getMusicList),
    path('get_song_list', music.views.getSongList)
]