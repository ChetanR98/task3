from .serializers import ProjectModelSerializer
from .models import Project
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import logging
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated

logby = logging.getLogger("user")


class ProjectCreateAPI(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        obj = Project.objects.all()
        if len(obj) <= 0:
            logby.error("Sorry No content here")
        else:
            logby.info("Data Found")
        form = ProjectModelSerializer(obj, many=True)
        return Response(data=form.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        form = ProjectModelSerializer(data=request.data)
        if form.is_valid():
            form.save()
            logby.info("New Record created successfully")
            return Response(data=form.data, status=status.HTTP_201_CREATED)
        return Response(data=form.errors, status=status.HTTP_404_NOT_FOUND)
    
class ProjectDetailsAPI(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(sel, request, pk=None):
        try:
            obj = Project.objects.get(pk=pk)
            logby.info("Record Found in get request")
        except:
            logby.error("Sorry No Record Found in get request")
            return Response(data={"message": "Details Not Found"})
        form = ProjectModelSerializer(instance=obj)
        return Response(data=form.data, status=status.HTTP_200_OK)
    
    def put(self, request, pk):
        try:
            obj = Project.objects.get(pk=pk)
            logby.info("Record Found in put request")
        except:
            logby.error("Sorry No Record in put request")
            return Response(data={"message": "Record Not found"})
        form = ProjectModelSerializer(instance=obj, data=request.data)
        if form.is_valid():
            form.save()
            return Response(data=form.data, status=status.HTTP_205_RESET_CONTENT)
        return Response(data=form.errors, status=status.HTTP_404_NOT_FOUND)
    

    def patch(self, request, pk):
        try:
            obj = Project.objects.get(pk=pk)
            logby.info("Record Found in patch request")
        except:
            logby.error("Sorry No Record in patch request")
            return Response(data={"message": "Record Not Found"})
        form = ProjectModelSerializer(instance=obj, data=request.data, partial=True)
        if form.is_valid():
            form.save()
            return Response(data=form.data, status=status.HTTP_206_PARTIAL_CONTENT)
        return Response(form.errors, status=status.HTTP_404_NOT_FOUND)
    
    
    def delete(self, request, pk):
        try:
            obj = Project.objects.get(pk=pk)
            logby.info("Record Found in delete request")
        except:
            logby.error("Sorry No Record in delete request")
            return Response(data={"message": "Record Not Found"})
        obj.delete()
        return Response(data={"message": "Data Delete Successful"}, status=status.HTTP_202_ACCEPTED)
        
        