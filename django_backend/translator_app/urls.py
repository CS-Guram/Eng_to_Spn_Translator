from django.urls import path
from .views import translate_word

urlpatterns = [
    path('translate/<str:word>/', translate_word, name='translate_word'),
]
