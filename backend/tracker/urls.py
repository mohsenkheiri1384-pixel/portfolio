from django.urls import path
from . import views

urlpatterns = [
    path('stats/',views.get_stats,name='stats'),
    path('track/',views.track_visit,name='track'),
]
