from rest_framework.generics import ListCreateAPIView
from .models import User
from .serializers import UserSerializer



class UserAPI(ListCreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()

